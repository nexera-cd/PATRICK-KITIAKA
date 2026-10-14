import Link from "next/link";
import { Logo } from "./logo";
import { contentData } from "@/src/data/content";
import { Linkedin, Instagram, Youtube, ArrowUp } from "lucide-react";

export function Footer() {
  const { profile } = contentData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed mt-4">
              Agent marketeur et stratège de croissance à Kinshasa. Conception de campagnes publicitaires à fort ROI, optimisation des tunnels de conversion et ancrage de marque en Afrique centrale.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-lime-400 hover:border-lime-500/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-lime-400 hover:border-lime-500/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-lime-400 hover:border-lime-500/40 transition-colors text-xs font-bold"
              >
                𝕏
              </a>
              <a
                href={profile.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-lime-400 hover:border-lime-500/40 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#accueil" className="hover:text-lime-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#a-propos" className="hover:text-lime-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/#expertises" className="hover:text-lime-400 transition-colors">
                  Expertises & Services
                </Link>
              </li>
              <li>
                <Link href="/#projets" className="hover:text-lime-400 transition-colors">
                  Accomplissements & Projets
                </Link>
              </li>
              <li>
                <Link href="/#avis" className="hover:text-lime-400 transition-colors">
                  Avis clients
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-lime-400 transition-colors">
                  Me contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Dedicated Case Studies links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Études de Cas Phares
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/projets/kintendance-ecommerce-mode"
                  className="hover:text-lime-400 transition-colors block"
                >
                  Kintendance · E-commerce mode (+195%)
                </Link>
              </li>
              <li>
                <Link
                  href="/projets/programme-immobilier-gombe"
                  className="hover:text-lime-400 transition-colors block"
                >
                  Immo Congo Prestige · Gombe (340+ Leads)
                </Link>
              </li>
              <li>
                <Link
                  href="/projets/acquisition-b2b-logistique"
                  className="hover:text-lime-400 transition-colors block"
                >
                  Logistique & Transport · B2B (+250% Trafic)
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href="/cv.pdf"
                  download="CV_Patrick_Kitiaka.pdf"
                  className="text-xs text-lime-400 hover:underline font-semibold"
                >
                  → Télécharger le Curriculum Vitae (PDF)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Mandatory Nexera Signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {currentYear} Patrick Kitiaka. Tous droits réservés.
          </div>

          {/* Mandatory Nexera Signature */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
            <span>Site réalisé par</span>
            <span className="font-bold text-lime-400 tracking-wide">Nexera</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
