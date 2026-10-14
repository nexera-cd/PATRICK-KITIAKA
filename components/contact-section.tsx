"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Linkedin, Instagram, Youtube } from "lucide-react";
import { contentData } from "@/src/data/content";
import { useLanguage } from "./language-provider";

export function ContactSection() {
  const { t } = useLanguage();
  const { profile } = contentData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || t("contactError"));
      }
    } catch {
      setStatus("error");
      setErrorMessage(t("contactError"));
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-neutral-50 dark:bg-[#0E1315] border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-700 dark:text-lime-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Démarrer un Projet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            {t("sectionContactTitle")}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            {t("sectionContactSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Google Maps */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#12181B] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                Coordonnées Directes
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 hover:border-lime-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-lime-500/10 text-lime-600 dark:text-lime-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">Email professionnel</div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                      {profile.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp Phone */}
                <a
                  href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 hover:border-lime-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">WhatsApp / Téléphone</div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {profile.phone}
                    </div>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800">
                  <div className="w-10 h-10 rounded-xl bg-lime-500/10 text-lime-600 dark:text-lime-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">Localisation principale</div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {profile.address}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80">
                <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-3">
                  Réseaux Professionnels
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Patrick Kitiaka"
                    className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-lime-600 dark:hover:text-lime-400 hover:bg-white dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={profile.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Patrick Kitiaka"
                    className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-lime-600 dark:hover:text-lime-400 hover:bg-white dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={profile.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X Twitter Patrick Kitiaka"
                    className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-lime-600 dark:hover:text-lime-400 hover:bg-white dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 transition-all font-bold text-sm flex items-center justify-center w-11 h-11"
                  >
                    𝕏
                  </a>
                  <a
                    href={profile.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube Patrick Kitiaka"
                    className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-lime-600 dark:hover:text-lime-400 hover:bg-white dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 transition-all"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps iframe */}
            <div className="rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm bg-neutral-200 dark:bg-neutral-900 h-64 relative">
              <iframe
                title="Localisation Patrick Kitiaka - Kinshasa Gombe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Avenue+de+l+Oua,+Gombe,+Kinshasa,+Democratic+Republic+of+the+Congo&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="filter contrast-95 opacity-90 dark:contrast-100 dark:opacity-85"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#12181B] border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mb-2">
                Envoyez un message direct
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
                Remplissez ce formulaire pour recevoir un diagnostic ou un retour personnalisé sous 24h ouvrées.
              </p>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{t("contactSuccess")}</p>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 text-red-800 dark:text-red-300 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                      {t("contactFormName")} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex : Joseph Kabange"
                      className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-950 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                      {t("contactFormEmail")} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre-nom@entreprise.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-950 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                    {t("contactFormSubject")}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all text-sm"
                  >
                    <option value="">Sélectionnez un sujet ou service</option>
                    <option value="Campagnes Meta & TikTok Ads">Campagnes Meta & TikTok Ads (Acquisition)</option>
                    <option value="Stratégie de marque & Positionnement">Stratégie de marque & Positionnement</option>
                    <option value="Tunnels WhatsApp & E-commerce">Tunnels WhatsApp & E-commerce</option>
                    <option value="Growth B2B & Lead Generation">Growth B2B & Lead Generation</option>
                    <option value="Conseil & Mentorat d'équipe">Conseil & Mentorat d&apos;équipe</option>
                    <option value="Autre demande">Autre demande de collaboration</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
                    Message détaillé *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("contactFormMessage")}
                    className="w-full px-4 py-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-950 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all text-sm resize-y"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold rounded-2xl bg-lime-500 hover:bg-lime-400 text-neutral-950 transition-all shadow-md hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{t("btnSending")}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t("btnSendMessage")}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
