"use client";

import { Compass, Target, Video, BarChart3, Lightbulb, Check } from "lucide-react";
import { contentData } from "@/src/data/content";
import { useLanguage } from "./language-provider";

export function ServicesSection() {
  const { t } = useLanguage();
  const { services } = contentData;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-6 h-6" />;
      case "Target":
        return <Target className="w-6 h-6" />;
      case "Video":
        return <Video className="w-6 h-6" />;
      case "BarChart3":
        return <BarChart3 className="w-6 h-6" />;
      case "Lightbulb":
        return <Lightbulb className="w-6 h-6" />;
      default:
        return <Compass className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="expertises"
      className="py-20 sm:py-28 bg-white dark:bg-[#0B0F10] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-700 dark:text-lime-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Expertises & Piliers d&apos;intervention</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            {t("sectionServicesTitle")}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            {t("sectionServicesSubtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative flex flex-col justify-between p-8 rounded-3xl bg-neutral-50 dark:bg-[#12181B] border border-neutral-200/80 dark:border-neutral-800/80 hover:border-lime-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${
                index === 0 ? "lg:col-span-1" : ""
              }`}
            >
              {/* Top Accent Icon & Counter */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white group-hover:bg-lime-500 group-hover:text-neutral-950 group-hover:border-lime-500 transition-colors shadow-xs">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-xs font-bold text-neutral-400 dark:text-neutral-600">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white tracking-tight group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Deliverables tags */}
              <div className="mt-6 pt-6 border-t border-neutral-200/70 dark:border-neutral-800/70">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2.5">
                  Livrables & Actions
                </div>
                <div className="flex flex-col space-y-1.5">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Callout Card for bespoke consultation */}
          <div className="relative flex flex-col justify-between p-8 rounded-3xl bg-neutral-900 dark:bg-neutral-950 text-white border border-neutral-800 overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/20 text-lime-400 text-xs font-bold mb-4">
                Sur-Mesure
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Besoin d&apos;un audit de votre dispositif marketing ?
              </h3>
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                Chaque entreprise à Kinshasa et en Afrique a des contraintes uniques : canaux WhatsApp, logistique, habitudes de paiement. Discutons de vos enjeux pour concevoir une feuille de route adaptée.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-lime-500 hover:bg-lime-400 text-neutral-950 font-bold text-sm transition-colors shadow-md"
              >
                <span>{t("btnContactMe")}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
