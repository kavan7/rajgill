"use client";

import React, { useEffect, useState } from "react";
import {
  IconBriefcase,
  IconMan,
  IconPhone,
  IconClipboardCopy,
} from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Link from "next/link";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

export default function Page() {
  const [articles, setArticles] = useState<
    { slug: string; title: string; description: string; image: string }[]
  >([]);

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
    async function fetchArticles() {
      try {
        const response = await fetch("/articles/articles.json"); // Fetch metadata JSON
        if (!response.ok) {
          throw new Error("Failed to load articles metadata");
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }

    fetchArticles();
  }, []);

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl mt-44 w-full">
        <FloatingNav navItems={navItems} />
        <h1 className="text-4xl md:text-6xl mb-10 font-extrabold text-center leading-tight text-white drop-shadow-lg">
          <span className="hidden">raj gill law blog</span>
          <TextGenerateEffect words="Insights & Updates" />
        </h1>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {articles.map((item, i) => (
            <Link href={`/blog/posts/${item.slug}`} key={i}>
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-2xl"
                  />
                }
            
                icon={<IconClipboardCopy className="h-4 w-4 text-neutral-500" />}
              />
            </Link>
          ))}
        </BentoGrid>
      </div>
    </main>
  );
}

