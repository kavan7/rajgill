"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { IconBriefcase, IconMan, IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type ArticleMetadata = {
  slug: string;
  title: string;
  image: string;
  date: string;
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<ArticleMetadata | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const navItems = [
    {
      name: "Services",
      id: "services",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Team",
      id: "about",
      icon: <IconMan className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      id: "touch",
      icon: <IconPhone className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  useEffect(() => {
    async function fetchArticle() {
      try {
        const metadataResponse = await fetch("/articles/articles.json");
        const metadata: ArticleMetadata[] = await metadataResponse.json();
        const matchedArticle = metadata.find((item) => item.slug === slug);

        if (matchedArticle) {
          const contentResponse = await fetch(`/articles/${slug}.html`);
          if (!contentResponse.ok) throw new Error("HTML content not found");
          const contentText = await contentResponse.text();

          setArticle(matchedArticle);
          setContent(contentText);
        } else {
          throw new Error("Article not found");
        }
      } catch (error) {
        console.error("Error loading article:", error);
        setArticle(null);
        setContent(null);
      } finally {
        setIsLoading(false);
      }
    }

    if (slug) fetchArticle();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (!article || !content) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500">404 - Article Not Found</h1>
          <p className="text-gray-500 mt-4">
            Sorry, the article you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen  font-mono bg-cover bg-center bg-no-repeat" >
      <FloatingNav navItems={navItems} />

      <div className="mt-24 mx-auto px-6 rounded-2xl py-12 text-gray-900 dark:text-white">
      <TracingBeam>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl dark:bg-gray-800 shadow-lg opacity-90 overflow-hidden animate-fade-in">
      
          <Image
            src={article.image}
            alt={article.title}
            className="w-full h-80 sm:h-96 rounded-2xl object-cover"
            width={1000}
            height={1000}
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Published on: {new Date(article.date).toLocaleDateString()}
            </p>
            <div
              className="prose prose-lg font-mono dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
  
        </div>
        </TracingBeam>
      
      </div>
     
    </main>
  );
}
