"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * TestimonialsMarquee (equal-height cards + modal)
 * - All cards are the same height with line‑clamped quotes.
 * - "See more" opens a polished modal to read the full testimonial.
 * - Works with reduced‑motion and the duplicating marquee.
 */

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export function TestimonialsMarquee() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Clear, pragmatic advice. They explained every step and kept my case moving.",
      name: "Aman S.",
      title: "Family Law Client, Surrey",
    },
    {
      quote:
        "Professional, responsive, and genuinely invested in the outcome.",
      name: "Ritu M.",
      title: "Civil Litigation Client",
    },
    {
      quote:
        "They navigated a complex immigration file with confidence and care.",
      name: "S. Patel",
      title: "Immigration Client",
    },
    {
      quote:
        "Strong courtroom presence. I felt protected and well‑represented.",
      name: "D. Chen",
      title: "Criminal Defence Client, Surrey",
    },
    {
      quote:
        "Seamless experience from consult to resolution. Highly recommend.",
      name: "Emily R.",
      title: "Abbotsford Client",
    },
  ];

  return (
    <section aria-labelledby="testimonials-heading" className="relative">
      <h2 id="testimonials-heading" className="sr-only">
        What clients say
      </h2>
      <div className="mx-auto max-w-7xl px-4">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
          pauseOnHover
          className="py-2"
        />
      </div>
    </section>
  );
}

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = React.useState(false);
  const [open, setOpen] = React.useState<null | { quote: string; name: string; title: string }>(null);

  React.useEffect(() => {
    // Avoid duplicating on Fast Refresh or prop changes
    if (!containerRef.current || !scrollerRef.current) return;
    if ((scrollerRef.current as any).__duplicated) return;

    const scroller = scrollerRef.current;
    const scrollerContent = Array.from(scroller.children);

    scrollerContent.forEach((node) => {
      const duplicated = node.cloneNode(true);
      scroller.appendChild(duplicated);
    });
    (scroller as any).__duplicated = true;

    // Direction
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    // Speed
    const duration = speed === "fast" ? 45 : speed === "slow" ? 120 : 75; // seconds
    containerRef.current.style.setProperty(
      "--animation-duration",
      String(duration) + "s"
    );

    setStart(true);
  }, [direction, speed]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
          "motion-reduce:[animation-duration:0s] motion-reduce:[animation:none]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 w-max flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              key={item.name + "-" + String(idx)}
              className="relative h-full w-[340px] max-w-full flex-shrink-0 md:w-[420px]"
            >
              <article
                className="group relative h-[220px] rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/5 transition-colors hover:ring-white/10"
              >
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-4">
                  <p className={cn(
                    "text-sm md:text-base text-neutral-200 leading-relaxed",
                    // robust 3-line clamp (works even if @tailwind/line-clamp not installed)
                    "overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]"
                  )}>
                    {item.quote}
                  </p>
                  <footer className="mt-auto text-sm text-neutral-400">
                    <div className="font-medium mb-6 text-neutral-300">{item.name}</div>
                    <div>{item.title}</div>
                  </footer>
                </blockquote>

                {/* Fade to indicate more text */}
                <div className="pointer-events-none absolute inset-x-0 bottom-12 h-10 bg-gradient-to-t from-neutral-900/80 to-transparent" />

                <button
                  type="button"
                  onClick={() => setOpen({ quote: item.quote, name: item.name, title: item.title })}
                  className="absolute bottom-2 right-4 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-100 underline-offset-4 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
                >
                  See more
                </button>
              </article>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-white/10 bg-neutral-900/95 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-sm text-neutral-400">{open.title}</div>
            <h3 className="text-lg font-semibold text-neutral-100">{open.name}</h3>
            <p className="mt-3 whitespace-pre-line text-neutral-200">
              {open.quote}
            </p>
            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
                onClick={() => setOpen(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/*
Add to your global CSS (e.g., globals.css):

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50%)); }
}

.animate-scroll {
  animation: scroll var(--animation-duration,75s) linear infinite;
  animation-direction: var(--animation-direction,forwards);
}

*/
