# Portfolio Professionnel — Patrick Kitiaka (Agent Marketeur)

Site portfolio officiel et vitrine créative de **Patrick Kitiaka**, Agent marketeur & Stratège de croissance à Kinshasa (RDC).  
Formule vendue : **Pack B · Showcase / Créatif** — Réalisé par **Nexera**.

---

## 🚀 Fonctionnalités Clés

- **Stack Moderne** : Next.js 15 (App Router), TypeScript, Tailwind CSS, Motion.
- **Identité & Monogramme PK** : Logo vectoriel sur mesure et favicon dynamique SVG.
- **Thème Sombre / Clair Haute Définition** : Bascule fluide mémorisée dans le navigateur (`localStorage`) et calquée par défaut sur le thème du système utilisateur.
- **Bilingue (FR / EN)** : Sélecteur de langue dans l'en-tête et routes dédiées `/fr` et `/en`.
- **Fichier de Contenu Unique** : Tout le contenu (textes, métriques, liens, numéro WhatsApp, études de cas) est centralisé dans `src/data/content.ts`.
- **Études de Cas Dédiées (`/projets/[slug]`)** : 3 fiches complètes avec contexte, solution stratégique, résultats chiffrés et galerie visuelle haute résolution (5 visuels).
- **Galerie Immersive & Carrousel Tactile** : 5 photographies professionnelles illustrant les interventions de terrain, avec support du défilement tactile sur mobile et agrandissement en plein écran.
- **Bouton WhatsApp Flottant** : Bouton d'échange direct sur toutes les pages avec message pré-rempli pour amorcer la discussion d'affaires.
- **Téléchargement du CV** : Bouton direct pointant vers `/public/cv.pdf`.
- **Formulaire de Contact Connecté** : Validation en temps réel, états chargement/succès/erreur et route API `/api/contact` compatible avec Resend / SMTP.
- **Carte Google Maps Intégrée** : Iframe responsive centrée sur l'Avenue de l'Oua, Gombe, Kinshasa.
- **SEO & Performances** : Metadata complètes, balises Open Graph, cartes Twitter, `sitemap.ts`, `robots.ts` et données structurées JSON-LD (`Person` & `ProfessionalService`).
- **Signature obligatoire** : Mentions légales et signature « Site réalisé par Nexera » au bas de chaque page.

---

## 🛠️ Commandes de Lancement

### 1. Installation des dépendances
```bash
npm install
```

### 2. Démarrage en mode développement (Port 3000)
```bash
npm run dev
```
Rendez-vous sur [http://localhost:3000](http://localhost:3000).

### 3. Compilation pour la production
```bash
npm run build
```

### 4. Lancement en production
```bash
npm run start
```

---

## ⚙️ Variables d'Environnement

Créez un fichier `.env.local` à la racine (ou configurez vos variables sur Vercel) :

```env
# URL principale du site (utilisée pour les balises OpenGraph, Sitemap et redirections)
NEXT_PUBLIC_SITE_URL="https://patrickkitiaka.com"

# Clé API optionnelle pour l'envoi d'emails via Resend
RESEND_API_KEY=""

# Email récepteur des soumissions du formulaire de contact
CONTACT_RECEIVER_EMAIL="contact@patrickkitiaka.com"
```

---

## 🌐 Déploiement sur Vercel & Domaine Personnalisé

### Étape 1 : Importer le dépôt sur Vercel
1. Rendez-vous sur votre tableau de bord [Vercel](https://vercel.com).
2. Cliquez sur **Add New...** > **Project**.
3. Sélectionnez le dépôt GitHub du portfolio et cliquez sur **Import**.
4. Dans **Environment Variables**, ajoutez :
   - `NEXT_PUBLIC_SITE_URL` : l'URL de votre nom de domaine final (ex. `https://patrickkitiaka.com`).
   - `RESEND_API_KEY` (optionnel) : votre clé API Resend si vous souhaitez router les emails directement.
   - `CONTACT_RECEIVER_EMAIL` : `contact@patrickkitiaka.com`.
5. Cliquez sur **Deploy**.

### Étape 2 : Connecter votre Domaine Personnalisé
1. Sur Vercel, allez dans **Settings** > **Domains**.
2. Entrez votre nom de domaine (ex: `patrickkitiaka.com`).
3. Vercel vous indiquera les enregistrements DNS à renseigner chez votre registrar (GoDaddy, Namecheap, OVH, etc.) :
   - **Type A** : `@` pointant vers `76.76.21.21`
   - **Type CNAME** : `www` pointant vers `cname.vercel-dns.com`
4. Une fois la propagation DNS validée, Vercel provisionnera automatiquement un certificat SSL/HTTPS gratuit.

---

## ✏️ Modifier les Contenus du Site

Pour mettre à jour un texte, un numéro de téléphone, une photo ou ajouter une étude de cas, éditez simplement :
```
src/data/content.ts
```
Toutes les sections du site (accueil, projets, carrousel, traductions) sont directement alimentées par ce fichier.

Pour remplacer le CV téléchargeable, déposez simplement votre nouveau fichier dans :
```
public/cv.pdf
```

---

*Site réalisé par Nexera.*
