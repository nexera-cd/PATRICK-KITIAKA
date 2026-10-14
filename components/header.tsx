"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";
import { Sun, Moon, Download, Menu, X, Globe, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { contentData } from "@/src/data/content";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/fr" || pathname === "/en";

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: isHomePage ? "#accueil" : "/#accueil", label: t("navHome") },
    { href: isHomePage ? "#a-propos" : "/#a-propos", label: t("navAbout") },
    { href: isHomePage ? "#expertises" : "/#expertises", label: t("navServices") },
    { href: isHomePage ? "#projets" : "/#projets", label: t("navProjects") },
    { href: isHomePage ? "#avis" : "/#avis", label: t("navTestimonials") },
    { href: isHomePage ? "#contact" : "/#contact", label: t("navContact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-[#0B0F10]/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo PK */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-neutral-100/80 dark:bg-neutral-900/80 backdrop-blur-sm p-1.5 rounded-full border border-neutral-200/60 dark:border-neutral-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white rounded-full transition-colors hover:bg-white dark:hover:bg-neutral-800"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Lang switcher, Dark mode, CV & CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switcher */}
            <div className="flex items-center bg-neutral-100 dark:bg-neutral-900 p-1 rounded-xl border border-neutral-200 dark:border-neutral-800 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang("fr")}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  lang === "fr"
                    ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-lime-400 shadow-xs"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
                }`}
                title="Passer en Français"
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  lang === "en"
                    ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-lime-400 shadow-xs"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Dark / Light Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Changer le thème"
              className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 hover:border-lime-500/50 hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-lime-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-700 transition-transform duration-300 -rotate-12 hover:rotate-0" />
              )}
            </button>

            {/* Download CV button */}
            <a
              href={contentData.profile.cvUrl}
              download="CV_Patrick_Kitiaka.pdf"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 hover:border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            {/* Primary Action Button */}
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-lime-500 hover:bg-lime-400 text-neutral-950 font-medium transition-all shadow-sm hover:shadow-[0_0_18px_rgba(163,230,53,0.4)] active:scale-95"
            >
              <span>{t("btnContactMe")}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Dark toggle + Burger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Changer le thème"
              className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-lime-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu de navigation"
              className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#0B0F10]/95 backdrop-blur-xl px-4 pt-4 pb-6 mt-2 overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-500">Langue :</span>
                  <div className="flex items-center bg-neutral-100 dark:bg-neutral-900 p-1 rounded-lg text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setLang("fr")}
                      className={`px-2.5 py-1 rounded-md ${
                        lang === "fr" ? "bg-white dark:bg-neutral-800 text-lime-600 dark:text-lime-400" : "text-neutral-500"
                      }`}
                    >
                      FR
                    </button>
                    <button
                      type="button"
                      onClick={() => setLang("en")}
                      className={`px-2.5 py-1 rounded-md ${
                        lang === "en" ? "bg-white dark:bg-neutral-800 text-lime-600 dark:text-lime-400" : "text-neutral-500"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>

                <a
                  href={contentData.profile.cvUrl}
                  download="CV_Patrick_Kitiaka.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>CV (PDF)</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={isHomePage ? "#contact" : "/#contact"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-lime-500 hover:bg-lime-400 text-neutral-950 transition-colors"
                >
                  <span>{t("btnContactMe")}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
