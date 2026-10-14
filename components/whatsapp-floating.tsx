"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { contentData } from "@/src/data/content";
import { useLanguage } from "./language-provider";

export function WhatsAppFloating() {
  const { t } = useLanguage();
  const { profile } = contentData;
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
    profile.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl text-xs font-medium text-neutral-800 dark:text-neutral-200 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{t("whatsappFloatingText")}</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            aria-label="Fermer l'infobulle"
            className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter directement sur WhatsApp avec Patrick Kitiaka"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-neutral-950" />
        </span>
        <MessageCircle className="w-7 h-7 fill-white/20 text-white" />
      </a>
    </div>
  );
}
