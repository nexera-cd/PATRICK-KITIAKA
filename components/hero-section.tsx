"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Download, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles, MapPin } from "lucide-react";
import { contentData } from "@/src/data/content";
import { useLanguage } from "./language-provider";

export function HeroSection() {
  const { t } = useLanguage();
  const { profile } = contentData;

  return (
    <section
      id="accueil"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-white dark:bg-[#0B0F10] transition-colors"
    >
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-lime-400/10 dark:bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-neutral-200/40 dark:bg-neutral-800/40 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-neutral-900 dark:text-lime-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
              </span>
              <span>{t("badgeHero")}</span>
            </div>

            {/* Main Title & Role */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.12]">
              {profile.name}
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-600 dark:text-neutral-400 mt-2">
                {profile.title}
              </span>
            </h1>

            {/* Slogan */}
            <p className="mt-5 text-lg sm:text-xl font-medium text-lime-700 dark:text-lime-400 leading-relaxed max-w-2xl border-l-3 border-lime-500 pl-4">
              « {profile.slogan} »
            </p>

            {/* Introduction description */}
            <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
              {profile.heroIntro}
            </p>

            {/* Location tag */}
            <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              <MapPin className="w-4 h-4 text-lime-600 dark:text-lime-400" />
              <span>{profile.location}</span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-2xl bg-lime-500 hover:bg-lime-400 text-neutral-950 transition-all shadow-md hover:shadow-[0_0_25px_rgba(163,230,53,0.45)] hover:-translate-y-0.5"
              >
                <span>{t("btnContactMe")}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={profile.cvUrl}
                download="CV_Patrick_Kitiaka.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold rounded-2xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-300/80 dark:border-neutral-800 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-neutral-600 dark:text-lime-400" />
                <span>{t("btnDownloadCV")}</span>
              </a>

              <a
                href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
              >
                <span>WhatsApp direct</span>
                <span className="text-xs bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  En ligne
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait Image & Stat Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[430px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 group">
              <Image
                src={profile.avatarUrl}
                alt="Patrick Kitiaka - Portrait Agent Marketeur"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 90vw, 450px"
                referrerPolicy="no-referrer"
              />

              {/* Gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60" />

              {/* Floating conversion badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-[#12181B]/90 backdrop-blur-md p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-700/80 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-lime-500/20 text-lime-600 dark:text-lime-400 flex items-center justify-center font-bold">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-neutral-950 dark:text-white">
                        +195%
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                        Volume moyen de conversion client
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-lime-600 dark:text-lime-400 bg-lime-500/10 px-2 py-1 rounded-md border border-lime-500/30">
                    ROAS Focus
                  </span>
                </div>
              </div>
            </div>

            {/* Corner decorative accent */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-lime-400/20 rounded-full blur-xl pointer-events-none" />
          </motion.div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-neutral-200 dark:border-neutral-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {profile.stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start p-4 sm:p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
                  <span className="text-lime-600 dark:text-lime-400">{stat.number}</span>
                </div>
                <div className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
