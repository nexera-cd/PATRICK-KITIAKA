import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { contentData } from "@/src/data/content";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloating } from "@/components/whatsapp-floating";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Building2,
  User,
  Tag,
  Share2,
  Sparkles,
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return contentData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = contentData.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projet non trouvé | Patrick Kitiaka",
    };
  }

  return {
    title: `${project.title} | Patrick Kitiaka - Agent Marketeur`,
    description: project.summary,
    openGraph: {
      title: `${project.title} - Étude de cas | Patrick Kitiaka`,
      description: project.summary,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = contentData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { profile } = contentData;
  const whatsappCaseStudyUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
    `Bonjour Patrick, j'ai vu votre étude de cas "${project.title}" et j'aimerais discuter d'une stratégie similaire pour mon entreprise.`
  )}`;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F10] text-neutral-900 dark:text-neutral-100 transition-colors">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/#projets"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-lime-600 dark:hover:text-lime-400 border border-neutral-200 dark:border-neutral-800 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour aux réalisations</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400 bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/20">
                {project.sector}
              </span>
              <span className="text-neutral-400 dark:text-neutral-600">•</span>
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                Client : {project.client}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl leading-relaxed">
              {project.summary}
            </p>

            {/* Quick Meta Cards */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Client & Secteur
                </span>
                <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                  {project.client}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Rôle assumé
                </span>
                <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                  {project.role}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Durée de mission
                </span>
                <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                  {project.period}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Localisation
                </span>
                <span className="text-xs sm:text-sm font-bold text-lime-600 dark:text-lime-400">
                  Kinshasa, RDC
                </span>
              </div>
            </div>
          </div>

          {/* Main Hero Cover */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl border border-neutral-200 dark:border-neutral-800 mb-16">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Key Metrics Grid */}
          <div className="mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
              Résultats Clés & Impact Mesuré
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.results.map((res, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#12181B] border border-neutral-200 dark:border-neutral-800/80"
                >
                  <div className="text-3xl sm:text-4xl font-black text-lime-600 dark:text-lime-400">
                    {res.stat}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-1">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Content: Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Challenge */}
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#12181B] border border-neutral-200 dark:border-neutral-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-2">
                01. Contexte & Problématique
              </span>
              <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mb-4">
                Le Défi Initial
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-[#12181B] border border-neutral-200 dark:border-neutral-800">
              <span className="text-xs font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400 block mb-2">
                02. Approche & Exécution
              </span>
              <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mb-4">
                La Solution Stratégique
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Dedicated Visual Gallery: 5 Images */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400">
                  Livrables & Visuels
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white mt-1">
                  Galerie de l&apos;Étude de Cas (5 Visuels)
                </h3>
              </div>
              <span className="text-xs text-neutral-500 font-medium">
                {project.gallery.length} supports intégrés
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className={`group rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm ${
                    idx === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[16/10]"
                  } relative`}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 800px"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs sm:text-sm font-semibold text-neutral-100">
                      {img.caption || img.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner to discuss similar project on WhatsApp */}
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white border border-neutral-800 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Vous visez des résultats similaires pour votre marque ?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
              Discutons de vos objectifs à Kinshasa ou sur le marché africain. Nous pouvons transposer cette même rigueur méthodologique à votre secteur.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappCaseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-lime-500 hover:bg-lime-400 text-neutral-950 font-bold text-sm transition-all shadow-md hover:scale-105"
              >
                <span>Échanger directement sur WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm border border-neutral-700 transition-colors"
              >
                <span>Demander un devis par email</span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <WhatsAppFloating />
      <Footer />
    </div>
  );
}
