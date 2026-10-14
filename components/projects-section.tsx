"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Sparkles, Building2, ShoppingBag, Truck, Smartphone, Newspaper } from "lucide-react";
import { contentData } from "@/src/data/content";
import { useLanguage } from "./language-provider";

export function ProjectsSection() {
  const { t } = useLanguage();
  const { projects, additionalShowcases } = contentData;

  const getSectorIcon = (sector: string) => {
    if (sector.includes("Mode") || sector.includes("Retail")) return <ShoppingBag className="w-4 h-4" />;
    if (sector.includes("Immobilier")) return <Building2 className="w-4 h-4" />;
    return <Truck className="w-4 h-4" />;
  };

  return (
    <section
      id="projets"
      className="py-20 sm:py-28 bg-neutral-50 dark:bg-[#0E1315] border-y border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-700 dark:text-lime-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Études de Cas & Performances</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              {t("sectionProjectsTitle")}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              {t("sectionProjectsSubtitle")}
            </p>
          </div>

          <div className="hidden md:block">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              3 Études Dédiées + Vitrine
            </span>
          </div>
        </div>

        {/* 3 Featured Detailed Case Studies */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-white dark:bg-[#12181B] border border-neutral-200 dark:border-neutral-800 hover:border-lime-500/40 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
                
                {/* Visual Cover on Left (or alternating) */}
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <Link href={`/projets/${project.slug}`} className="block relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 shadow-md">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 600px"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1.5 border border-white/10">
                      {getSectorIcon(project.sector)}
                      <span>{project.sector}</span>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-lime-500 text-neutral-950 p-2.5 rounded-xl shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <ArrowUpRight className="w-5 h-5 font-bold" />
                    </div>
                  </Link>
                </div>

                {/* Content on Right */}
                <div className={`lg:col-span-6 flex flex-col justify-between ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div>
                    {/* Meta tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400">
                        {project.client}
                      </span>
                      <span className="text-neutral-300 dark:text-neutral-700">•</span>
                      <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        {project.period}
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/projets/${project.slug}`}>
                      <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                    </Link>

                    {/* Summary */}
                    <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Stats Grid */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {project.results.slice(0, 2).map((res, rIdx) => (
                        <div
                          key={rIdx}
                          className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800"
                        >
                          <div className="text-2xl font-black text-lime-600 dark:text-lime-400">
                            {res.stat}
                          </div>
                          <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mt-0.5">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-8 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projets/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-900 dark:text-white hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                    >
                      <span>{t("btnExploreCaseStudy")}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* 2 Additional Showcases to fulfill the 5 photos grid requirement */}
        <div className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-6">
            Autres Réalisations & Campagnes Notables
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalShowcases.map((showcase) => (
              <div
                key={showcase.id}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#12181B] border border-neutral-200 dark:border-neutral-800 hover:border-lime-500/40 p-5 flex flex-col sm:flex-row gap-5 items-center transition-all shadow-xs hover:shadow-md"
              >
                <div className="relative w-full sm:w-44 h-36 rounded-xl overflow-hidden shrink-0 bg-neutral-900">
                  <Image
                    src={showcase.imageUrl}
                    alt={showcase.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="200px"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-neutral-950/80 text-lime-400 text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {showcase.tag}
                  </div>
                </div>

                <div className="flex-1">
                  <span className="text-xs font-semibold text-lime-600 dark:text-lime-400 uppercase tracking-wider">
                    {showcase.category}
                  </span>
                  <h4 className="text-base font-bold text-neutral-950 dark:text-white mt-1 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                    {showcase.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {showcase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
