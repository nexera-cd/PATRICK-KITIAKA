export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  sector: string;
  period: string;
  role: string;
  featured: boolean;
  coverImage: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    stat: string;
    label: string;
  }[];
  gallery: ProjectImage[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
  rating: number;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  location: string;
  description: string;
}

export interface ContentData {
  profile: {
    name: string;
    title: string;
    slogan: string;
    heroIntro: string;
    aboutBio: string;
    avatarUrl: string;
    aboutPhotoUrl: string;
    cvUrl: string;
    location: string;
    address: string;
    mapQuery: string;
    phone: string;
    whatsappNumber: string;
    whatsappMessage: string;
    email: string;
    socials: {
      linkedin: string;
      instagram: string;
      x: string;
      youtube: string;
    };
    stats: {
      number: string;
      label: string;
    }[];
  };
  services: Service[];
  projects: Project[];
  additionalShowcases: {
    id: string;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    tag: string;
  }[];
  aboutGallery: GalleryPhoto[];
  testimonials: Testimonial[];
  translations: {
    fr: Record<string, string>;
    en: Record<string, string>;
  };
}

export const contentData: ContentData = {
  profile: {
    name: "Patrick Kitiaka",
    title: "Agent Marketeur & Stratège de Croissance",
    slogan: "Transformer l’attention en acquisition, propulser vos marques au cœur du marché congolais et africain.",
    heroIntro:
      "Spécialiste en stratégie d'acquisition et en marketing digital à Kinshasa, j'accompagne les entreprises ambitieuses dans leur croissance, l'optimisation de leur visibilité et la conversion de leur audience. Grâce à des approches data-driven et des campagnes publicitaires ciblées, je conçois des parcours clients performants qui maximisent votre retour sur investissement.",
    aboutBio:
      "Issu d'une formation en commerce et passionné par les dynamiques comportementales des consommateurs en Afrique centrale, mon parcours est guidé par une conviction simple : le marketing moderne ne repose pas sur l'intuition, mais sur la précision des données et la pertinence du message. Ma méthode combine l'analyse fine des tunnels de conversion, la créativité visuelle et la maîtrise des leviers publicitaires digitaux (Meta Ads, TikTok Ads, Google Ads). Mon objectif est de doter chaque partenaire d'un avantage compétitif durable, en transformant chaque franc investi en un levier de chiffre d'affaires mesurable.",
    avatarUrl:
      "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/marketing%20agent/t%C3%A9l%C3%A9charger%20%281%29.jpe",
    aboutPhotoUrl:
      "https://4ydwi7yoayrluee7.public.blob.vercel-storage.com/marketing%20agent/User%20Profile_%20I%20am%20simon%20and%20i%20share%20pratical%20ways%20to%20make%20money%2C%20build%20smart%20hustle%20and%20improve%20everyday%20life.jpe",
    cvUrl: "/cv.pdf",
    location: "Kinshasa, République Démocratique du Congo",
    address: "Avenue de l'Oua, Commune de la Gombe, Kinshasa, RDC",
    mapQuery: "Avenue+de+l+Oua+Gombe+Kinshasa+Democratic+Republic+of+the+Congo",
    phone: "+243 81 000 0000",
    whatsappNumber: "243810000000",
    whatsappMessage: "Bonjour Patrick, je souhaite discuter d'un projet marketing pour mon entreprise.",
    email: "contact@patrickkitiaka.com",
    socials: {
      linkedin: "https://linkedin.com/in/patrick-kitiaka-growth",
      instagram: "https://instagram.com/patrick_kitiaka_growth",
      x: "https://x.com/patrick_kitiaka",
      youtube: "https://youtube.com/@PatrickKitiakaGrowth",
    },
    stats: [
      { number: "+195%", label: "Croissance des commandes e-commerce" },
      { number: "340+", label: "Leads qualifiés en 60 jours" },
      { number: "-32%", label: "Coût par acquisition moyen" },
      { number: "5+", label: "Années d'impact en Afrique centrale" },
    ],
  },
  services: [
    {
      id: "strategie-marque",
      title: "Stratégie de marque & Positionnement",
      description:
        "Définition de votre proposition unique de valeur (PUV), architecture de marque et positionnement concurrentiel pour vous démarquer durablement sur votre marché.",
      deliverables: ["Proposition unique de valeur (PUV)", "Étude concurrentielle locale", "Plateforme et ton de marque"],
      icon: "Compass",
    },
    {
      id: "acquisition-ads",
      title: "Acquisition & Campagnes Ads (Social & Search)",
      description:
        "Conception, ciblage avancé et pilotage de campagnes publicitaires à fort ROI sur Meta (Facebook/Instagram), TikTok et Google Ads.",
      deliverables: ["Campagnes Meta & TikTok Ads", "Ciblage et retargeting data-driven", "Optimisation du ROAS & CPA"],
      icon: "Target",
    },
    {
      id: "content-marketing",
      title: "Content Marketing & Création de contenu",
      description:
        "Élaboration de lignes éditoriales percutantes, scripts publicitaires vidéo et production de contenus engageants pour nourrir et fidéliser votre audience.",
      deliverables: ["Scripts publicitaires & UGC", "Stratégie éditoriale omnicanale", "Storytelling de conversion"],
      icon: "Video",
    },
    {
      id: "growth-data",
      title: "Growth & Analyse de données (Data-Driven)",
      description:
        "Audit des tunnels de conversion, mise en place de tableaux de bord de performance (KPIs) et optimisation continue pour réduire le coût d'acquisition client (CAC).",
      deliverables: ["Audit complet des funnels", "Tableaux de bord KPIs en temps réel", "Optimisation continue du CAC"],
      icon: "BarChart3",
    },
    {
      id: "conseil-mentorat",
      title: "Conseil & Accompagnement sur-mesure",
      description:
        "Mentorat stratégique pour les équipes internes, audits de maturité digitale et recommandations opérationnelles pour accélérer votre croissance.",
      deliverables: ["Ateliers stratégiques pour dirigeants", "Audit de maturité digitale", "Roadmap opérationnelle 90 jours"],
      icon: "Lightbulb",
    },
  ],
  projects: [
    {
      id: "kintendance-ecommerce-mode",
      slug: "kintendance-ecommerce-mode",
      title: "Propulsion d'une marque e-commerce de mode et lifestyle",
      client: "Kintendance / Marque partenaire locale",
      sector: "Mode & Retail",
      period: "6 mois",
      role: "Directeur de Campagne & Stratège Growth",
      featured: true,
      coverImage:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      summary:
        "Refonte intégrale de la stratégie d'acquisition digitale pour une marque de prêt-à-porter urbain à Kinshasa, intégrant des campagnes publicitaires vidéo captivantes et un tunnel de commande WhatsApp automatisé.",
      challenge:
        "La marque disposait d'une forte communauté organique sur les réseaux sociaux mais peinait à convertir cette attention en ventes directes. Le taux de conversion du site était inférieur à 1% et le coût d'acquisition par commande dépassait les standards acceptables pour le marché kinois.",
      solution:
        "Nous avons orchestré une transformation en 3 volets : d'abord, une simplification radicale du parcours d'achat mobile avec un bouton direct d'achat rapide. Ensuite, le déploiement d'une matrice de créatives vidéo courtes (UGC) mettant en valeur la coupe et la livraison à Kinshasa. Enfin, un système automatisé de relance et confirmation sur WhatsApp qui a réduit de moitié l'abandon de panier.",
      results: [
        { stat: "+195%", label: "Volume de commandes mensuelles" },
        { stat: "-32%", label: "Coût par acquisition (CPA)" },
        { stat: "3.8%", label: "Taux de conversion global du site" },
        { stat: "92%", label: "Taux d'engagement sur le bot WhatsApp" },
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
          alt: "Boutique en ligne et univers lifestyle urbain",
          caption: "Boutique optimisée mobile et univers visuel de la collection",
        },
        {
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
          alt: "Tableau de bord de performance publicitaire Meta Ads",
          caption: "Suivi des métriques clés et du ROAS journalier sur le gestionnaire de publicités",
        },
        {
          url: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80",
          alt: "Tunnel de commande et d'échange conversationnel WhatsApp",
          caption: "Confirmation instantanée et suivi de livraison via WhatsApp Business",
        },
        {
          url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
          alt: "Créatives vidéo et photographies de la collection de mode",
          caption: "Visuels publicitaires gagnants testés avec succès sur Instagram et TikTok",
        },
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
          alt: "Rapport de croissance des ventes e-commerce",
          caption: "Courbe d'accélération des ventes sur les 6 mois d'accompagnement",
        },
      ],
      tags: ["E-commerce", "Meta Ads", "WhatsApp Funnel", "Mode & Retail", "Kinshasa"],
    },
    {
      id: "programme-immobilier-gombe",
      slug: "programme-immobilier-gombe",
      title: "Lancement digital d'un programme immobilier haut de gamme",
      client: "Immo Congo Prestige",
      sector: "Immobilier de prestige",
      period: "3 mois",
      role: "Consultant Acquisition & Lead Generation",
      featured: true,
      coverImage:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      summary:
        "Campagne d'acquisition ultra-ciblée destinée aux cadres dirigeants locaux et à la diaspora congolaise pour la commercialisation exclusive de résidences d'exception à Gombe.",
      challenge:
        "Le promoteur devait pré-commercialiser au moins 35% des appartements de luxe avant la fin de la phase de gros œuvre. Le canal traditionnel d'affichage urbain s'essoufflait et ne permettait pas de toucher efficacement la diaspora investisseuse en Europe et en Amérique du Nord.",
      solution:
        "Conception d'une page de capture immersive axée sur la rentabilité locative et le prestige de l'adresse à Gombe. Campagnes de génération de leads hautement segmentées sur LinkedIn Ads (ciblant les C-Levels et directeurs) et Meta Ads (ciblant les membres de la diaspora intéressés par l'investissement au pays). Intégration d'un tunnel de qualification VIP par WhatsApp et calendrier de rendez-vous en visio.",
      results: [
        { stat: "340+", label: "Leads ultra-qualifiés collectés en 60 jours" },
        { stat: "28%", label: "Taux de prise de rendez-vous de visite" },
        { stat: "40%", label: "Unités pré-commercialisées dans les délais" },
        { stat: "14x", label: "Retour sur dépenses publicitaires (ROAS estimé)" },
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
          alt: "Rendu architectural de la résidence de prestige à Gombe",
          caption: "Perspective extérieure du complexe résidentiel haut standing",
        },
        {
          url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
          alt: "Interface de qualification et CRM des prospects investisseurs",
          caption: "Système de scoring des leads pour l'équipe commerciale",
        },
        {
          url: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
          alt: "Intérieur de luxe et finitions contemporaines",
          caption: "Visuels immersifs utilisés dans les publicités à fort taux de clic",
        },
        {
          url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
          alt: "Session de présentation aux investisseurs de la diaspora",
          caption: "Webinaire et présentations privées pour les acquéreurs internationaux",
        },
        {
          url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
          alt: "Immeuble moderne au cœur du quartier des affaires",
          caption: "Positionnement stratégique au centre de la Gombe à Kinshasa",
        },
      ],
      tags: ["Immobilier", "Lead Generation", "LinkedIn Ads", "Diaspora", "High-Ticket"],
    },
    {
      id: "acquisition-b2b-logistique",
      slug: "acquisition-b2b-logistique",
      title: "Stratégie de visibilité et d'acquisition pour une enseigne B2B",
      client: "Logistique & Transport Express",
      sector: "Services aux entreprises & Logistique",
      period: "4 mois",
      role: "Stratège Growth B2B",
      featured: true,
      coverImage:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      summary:
        "Mise en place d'un moteur de prospection digitale B2B et d'autorité de marque pour capter les contrats logistiques auprès des grands comptes industriels et importateurs congolais.",
      challenge:
        "L'entreprise reposait presque exclusivement sur le bouche-à-oreille et les réseaux personnels des fondateurs. Face à l'arrivée de concurrents internationaux, elle manquait d'une présence digitale structurée pour asseoir sa crédibilité et générer des consultations d'appels d'offres de manière récurrente.",
      solution:
        "Positionnement de l'entreprise en tant qu'expert incontournable de la chaîne logistique en RDC. Publication d'un livre blanc sectoriel sur les défis du fret et du dédouanement à Kinshasa et Matadi. Déploiement d'une stratégie de content marketing ciblant les directeurs des achats et directeurs généraux, accompagnée d'un flux automatisé de demande de devis en ligne.",
      results: [
        { stat: "+250%", label: "Trafic qualifié sur le site d'entreprise" },
        { stat: "x3", label: "Demandes de devis entrantes chaque mois" },
        { stat: "5", label: "Contrats grands comptes majeurs signés" },
        { stat: "1,200+", label: "Téléchargements du livre blanc sectoriel" },
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
          alt: "Flotte de transport et centre logistique moderne",
          caption: "Infrastructures logistiques et gestion de la chaîne d'approvisionnement",
        },
        {
          url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
          alt: "Livre blanc stratégique et documents de prospection",
          caption: "Ressource de référence téléchargée par plus de 1200 décideurs",
        },
        {
          url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
          alt: "Consultation et signature de partenariats d'entreprise",
          caption: "Conversion des demandes entrantes en contrats pluriannuels",
        },
        {
          url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
          alt: "Plateforme digitale de suivi et de demande de cotation",
          caption: "Portail client simplifié pour l'estimation immédiate des coûts de fret",
        },
        {
          url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
          alt: "Équipe opérationnelle et gouvernance de projet",
          caption: "Alignement stratégique entre les forces commerciales et le marketing",
        },
      ],
      tags: ["B2B Growth", "Logistique", "Lead Nurturing", "Livres Blancs", "Grands Comptes"],
    },
  ],
  additionalShowcases: [
    {
      id: "mobile-payment-rdc",
      title: "Campagne d'engagement pour une application de paiement mobile",
      category: "Fintech & Mobile Money",
      description:
        "Création d'une série de formats vidéo publicitaires courts pour vulgariser l'utilisation du paiement sans contact et stimuler l'activation des nouveaux comptes utilisateurs à Kinshasa.",
      imageUrl:
        "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1000&q=80",
      tag: "Fintech RDC",
    },
    {
      id: "media-lifestyle-kinshasa",
      title: "Refonte d'identité et grille éditoriale d'un média lifestyle",
      category: "Médias & Culture urbaine",
      description:
        "Repositionnement visuel complet, optimisation de la présence sur les réseaux et structuration des offres de sponsoring de marque pour un média de référence de la jeunesse kinois.",
      imageUrl:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
      tag: "Branding Média",
    },
  ],
  aboutGallery: [
    {
      id: "gal-1",
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
      title: "Atelier pratique à Kinshasa",
      location: "Kinshasa, RDC",
      description: "Intervention lors d’un atelier pratique sur le marketing digital et l'e-commerce à Kinshasa.",
    },
    {
      id: "gal-2",
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
      title: "Session de travail stratégique",
      location: "Hub Créatif",
      description: "Session de travail stratégique avec une équipe de créatifs et de développeurs.",
    },
    {
      id: "gal-3",
      url: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=1000&q=80",
      title: "Coulisses de tournage vidéo",
      location: "Studio de production",
      description: "Coulisses d’un tournage de contenu vidéo publicitaire (UGC) pour une marque partenaire.",
    },
    {
      id: "gal-4",
      url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
      title: "Présentation des bilans trimestriels",
      location: "Salle du conseil",
      description: "Présentation de bilans de performance trimestriels devant des chefs d’entreprise.",
    },
    {
      id: "gal-5",
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      title: "Espace de travail opérationnel",
      location: "Bureau de conseil",
      description: "Espace de travail épuré et connecté, illustrant la rigueur opérationnelle du consultant.",
    },
  ],
  testimonials: [
    {
      id: "t-1",
      name: "Jonathan Mbayo",
      role: "Directeur Général",
      company: "Kongo Digital Solutions",
      content:
        "Patrick a complètement transformé notre approche de l'acquisition client. Son sens de la stratégie et sa maîtrise des campagnes publicitaires nous ont permis d'atteindre nos objectifs de croissance en un temps record. Un profil rare et redoutablement efficace.",
      rating: 5,
    },
    {
      id: "t-2",
      name: "Sarah Nsimba",
      role: "Fondatrice",
      company: "Maison Sika Mode",
      content:
        "Travailler avec Patrick a été un tournant pour notre marque. Nos ventes en ligne ont explosé grâce à ses tunnels de conversion sur-mesure et ses conseils publicitaires précis. Je le recommande les yeux fermés.",
      rating: 5,
    },
    {
      id: "t-3",
      name: "Christian Ilunga",
      role: "Directeur Commercial",
      company: "Immo Congo Prestige",
      content:
        "La campagne de génération de leads menée par Patrick pour notre programme immobilier a dépassé toutes nos attentes. Non seulement les prospects étaient qualifiés, mais le retour sur investissement a été immédiat.",
      rating: 5,
    },
    {
      id: "t-4",
      name: "Patricia Tshimanga",
      role: "Responsable Marketing",
      company: "Kivu Tech Hub",
      content:
        "Rigueur, écoute et vision stratégique. Patrick sait exactement quels leviers actionner pour faire passer une entreprise au palier supérieur. Son accompagnement est d’une valeur inestimable.",
      rating: 5,
    },
    {
      id: "t-5",
      name: "Hervé Malu",
      role: "CEO",
      company: "Logistique & Transport Express",
      content:
        "Grâce aux conseils en Growth Marketing de Patrick, nous avons structuré notre prospection digitale B2B. Nos équipes récoltent désormais des leads tous les jours. Un vrai stratège de croissance.",
      rating: 5,
    },
    {
      id: "t-6",
      name: "Bénédicte Kazadi",
      role: "Consultante en Communication",
      company: "Indépendante",
      content:
        "J'ai eu l'occasion de collaborer avec Patrick sur plusieurs projets complexes. Sa capacité à analyser les données pour optimiser les performances créatives est remarquable. Un vrai professionnel du digital.",
      rating: 5,
    },
  ],
  translations: {
    fr: {
      navHome: "Accueil",
      navAbout: "À propos",
      navServices: "Expertises",
      navProjects: "Réalisations",
      navTestimonials: "Témoignages",
      navContact: "Contact",
      btnDownloadCV: "Télécharger mon CV",
      btnContactMe: "Discuter d'un projet",
      btnExploreCaseStudy: "Explorer l'étude de cas",
      btnBackToHome: "Retour à l'accueil",
      btnSendMessage: "Envoyer le message",
      btnSending: "Envoi en cours...",
      badgeHero: "Disponible pour nouveaux projets & consultations",
      badgeMethod: "Méthodologie Data-Driven & ROAS",
      badgeResults: "Résultats chiffrés réels",
      sectionServicesTitle: "Ce que je sais faire",
      sectionServicesSubtitle: "Une approche globale alliant créativité publicitaire, analyse comportementale et performance chiffrée.",
      sectionProjectsTitle: "Accomplissements & Études de cas",
      sectionProjectsSubtitle: "Découvrez comment des stratégies marketing rigoureuses créent des leviers de chiffre d'affaires mesurables.",
      sectionAboutTitle: "À propos de Patrick Kitiaka",
      sectionAboutSubtitle: "Une vision moderne du marketing où chaque décision est adossée aux données réelles du marché africain.",
      sectionTestimonialsTitle: "Avis & Recommandations",
      sectionTestimonialsSubtitle: "Ce que disent les dirigeants et partenaires qui m'accordent leur confiance.",
      sectionContactTitle: "Démarrons une collaboration",
      sectionContactSubtitle: "Vous avez une marque à faire décoller ou une campagne à optimiser ? Échangeons dès aujourd'hui.",
      contactFormName: "Votre nom complet",
      contactFormEmail: "Votre adresse e-mail professionnelle",
      contactFormSubject: "Sujet ou service ciblé",
      contactFormMessage: "Parlez-moi de vos objectifs et de votre calendrier...",
      contactSuccess: "Merci ! Votre message a bien été transmis. Patrick Kitiaka vous répondra dans les 24h.",
      contactError: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou utiliser WhatsApp directement.",
      whatsappFloatingText: "Discuter avec Patrick",
      footerCredits: "Site réalisé par Nexera",
      footerAllRights: "Tous droits réservés.",
      studyContext: "Contexte & Défi initial",
      studySolution: "Solution & Stratégie déployée",
      studyResults: "Résultats & Impact mesuré",
      studyGallery: "Galerie visuelle & Livrables",
      studyNextStep: "Prêt à obtenir des résultats similaires ?",
      studyNextStepBtn: "Lancer un projet similaire sur WhatsApp",
    },
    en: {
      navHome: "Home",
      navAbout: "About",
      navServices: "Services",
      navProjects: "Case Studies",
      navTestimonials: "Testimonials",
      navContact: "Contact",
      btnDownloadCV: "Download Resume (CV)",
      btnContactMe: "Discuss a Project",
      btnExploreCaseStudy: "Explore Case Study",
      btnBackToHome: "Back to Home",
      btnSendMessage: "Send Message",
      btnSending: "Sending...",
      badgeHero: "Available for new projects & consultations",
      badgeMethod: "Data-Driven & ROAS Methodology",
      badgeResults: "Verified Measurable Results",
      sectionServicesTitle: "What I Do Best",
      sectionServicesSubtitle: "A comprehensive approach blending advertising creativity, behavioral analysis, and verified performance.",
      sectionProjectsTitle: "Featured Case Studies & Work",
      sectionProjectsSubtitle: "Discover how rigorous marketing frameworks generate measurable revenue acceleration.",
      sectionAboutTitle: "About Patrick Kitiaka",
      sectionAboutSubtitle: "A modern marketing philosophy grounded in consumer data and African market realities.",
      sectionTestimonialsTitle: "Client Endorsements & Reviews",
      sectionTestimonialsSubtitle: "What business leaders, founders, and partners say about our collaboration.",
      sectionContactTitle: "Let's Build Something Great",
      sectionContactSubtitle: "Looking to scale your brand or maximize ad conversion in Central Africa? Let's talk today.",
      contactFormName: "Your Full Name",
      contactFormEmail: "Professional Email Address",
      contactFormSubject: "Target Service or Subject",
      contactFormMessage: "Tell me about your business goals, timeline, and challenges...",
      contactSuccess: "Thank you! Your inquiry was sent successfully. Patrick Kitiaka will respond within 24 hours.",
      contactError: "An error occurred while sending your message. Please try again or reach out on WhatsApp.",
      whatsappFloatingText: "Chat with Patrick",
      footerCredits: "Site réalisé par Nexera",
      footerAllRights: "All rights reserved.",
      studyContext: "Context & Initial Challenge",
      studySolution: "Deployed Strategy & Execution",
      studyResults: "Results & Measurable Impact",
      studyGallery: "Visual Deliverables & Media Assets",
      studyNextStep: "Ready to achieve similar high-impact results?",
      studyNextStepBtn: "Discuss a Similar Campaign on WhatsApp",
    },
  },
};
