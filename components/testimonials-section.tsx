"use client";

import { Star, Quote, CheckCircle } from "lucide-react";
import { contentData } from "@/src/data/content";
import { useLanguage } from "./language-provider";

export function TestimonialsSection() {
  const { t } = useLanguage();
  const { testimonials } = contentData;

  return (
    <section
      id="avis"
      className="py-20 sm:py-28 bg-white dark:bg-[#0B0F10] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-700 dark:text-lime-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Témoignages & Confiance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            {t("sectionTestimonialsTitle")}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            {t("sectionTestimonialsSubtitle")}
          </p>
        </div>

        {/* 6 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-neutral-50 dark:bg-[#12181B] border border-neutral-200/80 dark:border-neutral-800/80 hover:border-lime-500/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-500 dark:text-lime-400">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-300 dark:text-neutral-700 group-hover:text-lime-500 transition-colors" />
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  « {testi.content} »
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-neutral-200/70 dark:border-neutral-800/70 flex items-center gap-3.5">
                {/* Initials Avatar */}
                <div className="w-11 h-11 rounded-full bg-neutral-900 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center font-bold text-sm text-lime-400 shrink-0">
                  {testi.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-sm sm:text-base text-neutral-950 dark:text-white">
                    {testi.name}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {testi.role} · <strong className="text-neutral-700 dark:text-neutral-300 font-semibold">{testi.company}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
