"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconClipboardCopy, IconAlertCircle } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  date?: string; // ISO
  author?: string;
  tags?: string[];
};

export default function Page() {
  const [articles, setArticles] = React.useState<ArticleMeta[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const navItems = [{ name: "", id: "services", icon: <></> }];

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/articles/articles.json", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load articles metadata");
        const data: ArticleMeta[] = await res.json();
        if (mounted) setArticles(data);
      } catch (e: any) {
        if (mounted) setError(e?.message ?? "Failed to load articles");
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="relative mx-auto flex max-w-7xl flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
      <div className="mt-40 w-full">
        <FloatingNav navItems={navItems} />

        <header className="mb-10 text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight text-neutral-100 md:text-6xl">
            <TextGenerateEffect words="Insights & Updates" />
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-300 md:text-base">
            Practical guidance, case notes, and firm updates—curated by our team.
          </p>
        </header>

        {!articles && !error && (
          <BentoGrid className="md:auto-rows-[20rem]">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </BentoGrid>
        )}

        {error && (
          <div className="mx-auto max-w-xl rounded-lg border border-red-500/20 bg-red-500/5 p-4 text-red-200">
            <div className="flex items-start gap-2">
              <IconAlertCircle className="mt-0.5 h-5 w-5" />
              <div>
                <h2 className="font-semibold">We couldn&apos;t load the blog right now.</h2>
                <p className="text-sm opacity-90">{error}</p>
              </div>
            </div>
          </div>
        )}

        {articles && !error && (
          <BentoGrid className="md:auto-rows-[20rem]">
            {articles.map((item) => (
              <Link key={item.slug} href={`/blog/posts/${item.slug}`} prefetch className="group focus:outline-none">
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  author={item.author}
                  tags={item.tags}
                  header={<CardImage src={item.image} alt={item.title} />}
                  icon={<IconClipboardCopy className="h-4 w-4 text-neutral-500" />}
                />
              </Link>
            ))}
          </BentoGrid>
        )}
      </div>
    </main>
  );
}

/* ---------- components kept local to the page (not exported) ---------- */

function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-5 md:auto-rows-[18rem] md:grid-cols-3", className)}>
      {children}
    </div>
  );
}

function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  date,
  author,
  tags,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  date?: string;
  author?: string;
  tags?: string[];
}) {
  const formatted = formatDate(date);
  const read = calcReadTime(String(description ?? ""));

  return (
    <article
      className={cn(
        "group/bento flex h-full flex-col justify-between space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/5 transition-colors hover:ring-white/10",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-1">
        {icon}
        <h3 className="mb-2 mt-2 font-serif text-lg font-semibold text-neutral-100 md:text-xl line-clamp-2">
          {title}
        </h3>
        {(author || formatted) && (
          <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
            {author && <span className="font-medium text-neutral-300">{author}</span>}
            {author && formatted && <span aria-hidden>•</span>}
            {formatted && <time dateTime={date ?? undefined}>{formatted}</time>}
            <span aria-hidden>•</span>
            <span>{read} min read</span>
          </div>
        )}
        <p className="text-xs text-neutral-300 md:text-sm line-clamp-3">{description}</p>
        {tags?.length ? (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((t) => (
              <li key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-neutral-300">
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-200 underline-offset-4 group-hover/bento:underline">
          Read article
        </span>
        <span aria-hidden className="inline-flex size-6 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <span className="block h-3 w-3 rotate-45 border-b border-r border-neutral-300" />
        </span>
      </div>
    </article>
  );
}

function CardImage({ src, alt }: { src?: string; alt: string }) {
  const has = Boolean(src);
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="relative h-40 w-full md:h-44">
        {has ? (
          <Image
            src={src as string}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority={false}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-white/[0.02]">
            <span className="text-xs text-neutral-500">No image</span>
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover/bento:opacity-100" />
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="flex h-full flex-col justify-between space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="h-40 w-full animate-pulse rounded-xl bg-white/[0.06] md:h-44" />
      <div className="space-y-2">
        <div className="h-4 w-5/6 animate-pulse rounded bg-white/[0.08]" />
        <div className="h-3 w-4/6 animate-pulse rounded bg-white/[0.06]" />
        <div className="h-3 w-3/6 animate-pulse rounded bg-white/[0.06]" />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="h-3 w-24 animate-pulse rounded bg-white/[0.06]" />
        <div className="h-6 w-6 animate-pulse rounded-full bg-white/[0.06]" />
      </div>
    </div>
  );
}

function formatDate(input?: string) {
  if (!input) return "";
  const d = new Date(input);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function calcReadTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}
