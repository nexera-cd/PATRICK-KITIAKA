"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Download,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Target,
  BarChart,
  Layers,
  Sparkles,
} from "lucide-react";
import { contentData } from "@/src/data/content";
import { useLanguage } from "./language-provider";

export function AboutSection() {
  const { t } = useLanguage();
  const { profile, aboutGallery } = contentData;

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [fullscreenPhoto, setFullscreenPhoto] = useState<string | null>(null);

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % aboutGallery.length);
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + aboutGallery.length) % aboutGallery.length);
  };

  const currentPhoto = aboutGallery[activePhotoIndex];

  return (
    <section
      id="a-propos"
      className="py-20 sm:py-28 bg-neutral-50 dark:bg-[#0E1315] border-y border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-700 dark:text-lime-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("navAbout")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            {t("sectionAboutTitle")}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            {t("sectionAboutSubtitle")}
          </p>
        </div>

        {/* Top Split: Bio & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo on left */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-900 group">
              <Image
                src={profile.aboutPhotoUrl}
                alt="Patrick Kitiaka - En session de travail"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 95vw, 480px"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs font-semibold tracking-wider uppercase text-lime-400">
                  Précision Opérationnelle
                </div>
                <div className="text-sm font-medium text-neutral-200">
                  Stratège de Croissance · Kinshasa, RDC
                </div>
              </div>
            </div>
          </div>

          {/* Bio text on right */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white tracking-tight">
              « Le marketing moderne ne repose pas sur l’intuition, mais sur la précision des données. »
            </h3>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p>{profile.aboutBio}</p>
            </div>

            {/* Methodology pills */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs">
                <Target className="w-5 h-5 text-lime-600 dark:text-lime-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  Ciblage publicitaire chirurgical Meta & TikTok
                </span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs">
                <BarChart className="w-5 h-5 text-lime-600 dark:text-lime-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  Optimisation continue du CAC et du ROAS
                </span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs">
                <Layers className="w-5 h-5 text-lime-600 dark:text-lime-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  Funnels mobiles & Tunnels conversationnels WhatsApp
                </span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-lime-600 dark:text-lime-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  Ancrage profond dans le marché congolais et africain
                </span>
              </div>
            </div>

            {/* Download CV button */}
            <div className="mt-8">
              <a
                href={profile.cvUrl}
                download="CV_Patrick_Kitiaka.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-lime-500 dark:hover:bg-lime-400 dark:text-neutral-950 transition-all shadow-md hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>{t("btnDownloadCV")}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Carousel / Gallery Section: 5 Photos with touch swiping */}
        <div className="mt-24 pt-16 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400">
                Immersion & Coulisses
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white mt-1">
                En immersion sur le terrain
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                Ateliers, tournages, sessions stratégiques et bilans de performance.
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevPhoto}
                aria-label="Photo précédente"
                className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-lime-500 text-neutral-700 dark:text-neutral-200 transition-colors shadow-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-semibold text-neutral-500 px-2">
                {activePhotoIndex + 1} / {aboutGallery.length}
              </span>
              <button
                type="button"
                onClick={nextPhoto}
                aria-label="Photo suivante"
                className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-lime-500 text-neutral-700 dark:text-neutral-200 transition-colors shadow-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main active photo display */}
          <div className="relative w-full h-[340px] sm:h-[460px] md:h-[520px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl group">
            <Image
              src={currentPhoto.url}
              alt={currentPhoto.title}
              fill
              className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
              sizes="(max-width: 1200px) 100vw, 1200px"
              referrerPolicy="no-referrer"
            />
            
            {/* Top right fullscreen button */}
            <button
              type="button"
              onClick={() => setFullscreenPhoto(currentPhoto.url)}
              aria-label="Agrandir en plein écran"
              className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Bottom info banner */}
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
              <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">
                {currentPhoto.location}
              </span>
              <h4 className="text-lg sm:text-2xl font-bold mt-1 text-white">
                {currentPhoto.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl">
                {currentPhoto.description}
              </p>
            </div>
          </div>

          {/* Thumbnail preview list */}
          <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
            {aboutGallery.map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActivePhotoIndex(idx)}
                className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                  idx === activePhotoIndex
                    ? "border-lime-500 scale-102 shadow-md ring-2 ring-lime-400/40"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  className="object-cover"
                  sizes="200px"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Fullscreen Photo Modal */}
      <AnimatePresence>
        {fullscreenPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-xl"
            onClick={() => setFullscreenPhoto(null)}
          >
            <button
              type="button"
              onClick={() => setFullscreenPhoto(null)}
              aria-label="Fermer"
              className="absolute top-6 right-6 p-3 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden">
              <Image
                src={fullscreenPhoto}
                alt="Vue agrandie"
                fill
                className="object-contain"
                sizes="95vw"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
