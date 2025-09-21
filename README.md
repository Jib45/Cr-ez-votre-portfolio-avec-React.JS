
# 🌐 Portfolio React – John Doe

## 🎯 Mission
Ce projet consiste à créer le site web d’un futur développeur web, **John Doe**, afin de lui permettre
de se présenter sur le marché de l’emploi et de valoriser ses compétences.  
Le site est réalisé avec **React**, **Bootstrap 5** et un minimum de CSS personnalisé, en respectant
les standards **W3C** et les bonnes pratiques **SEO**.

---

## 👤 Le client
- **Nom** : John Doe  
- **Objectif** : Terminer sa formation de développeur web au CEF et se présenter à de futurs employeurs ou pour une alternance.  
- **Besoin** : Un site moderne, responsive, optimisé pour le référencement.

---

## 🖌️ Identité graphique

### Polices
- **Nunito Sans** (Google Fonts)
  - `400` pour le corps de texte
  - `600` pour les titres et balises `<strong>`

### Icônes
- **Bootstrap Icons** : [https://icons.getbootstrap.com/](https://icons.getbootstrap.com/)

### Images
- Images libres de droits issues de **Pixabay** (remplaçables par vos propres visuels).
- **Logo** : logo textuel dans la navbar.
- **Favicon** : disponible sur [Flaticon](https://www.flaticon.com/de/kostenloseicons/john-doe).

### Couleurs
- Palette **Bootstrap** par défaut : [Bootstrap Colors](https://getbootstrap.com/docs/5.2/customize/color/).

---

## 📄 Contenu du site

### Pages
- **Accueil**
  - Image de fond pleine page (Hero)
  - Titres `<h1>` et `<h2>` centrés
  - Bouton **« En savoir plus »** déclenchant une **modale**
  - Section présentation + liste de compétences (progress bar Bootstrap)

- **Services**
  - Présentation des services sous forme de **Cards** Bootstrap
  - Changement de fond `#efefef` + légère ombre au survol
  - Mise en page responsive conforme aux maquettes

- **Réalisations (Portfolio)**
  - Minimum **6 projets** sous forme de Cards
  - Changement de fond `#efefef` + légère ombre au survol
  - Bouton avec effet d’éclaircissement au hover

- **Contact**
  - Formulaire avec champs obligatoires : nom, email, téléphone, sujet, message
  - Coordonnées complètes + intégration **Google Map**

- **Mentions légales**
  - Informations éditeur / hébergeur
  - Crédits (Pixabay, Flaticon)
  - Mise en page avec composant **Accordion** de Bootstrap
  - **Non indexée** par les moteurs de recherche

### Éléments communs
- **Header**
  - Logo + navigation (NavLink React Router)
  - Menu burger sur mobile/tablette
  - Lien actif affiché dans une couleur différente
  - Texte des liens en **MAJUSCULE**

- **Footer**
  - 3 colonnes :
    1. Développeur (nom, adresse, téléphone, réseaux sociaux)
       - Icônes cliquables (GitHub, Twitter, LinkedIn)
       - Ouverture dans une nouvelle fenêtre + `rel="nofollow"`
    2. Liens vers les pages
    3. Liens vers les dernières réalisations (ou vers Portfolio en attendant)

- **Modale**
  - Ouverte au clic sur le bouton « En savoir plus » du Hero
  - Présente les informations GitHub de John Doe
  - Données récupérées **une seule fois** via `useEffect`  
    API : [https://api.github.com/users/github-johndoe](https://api.github.com/users/github-johndoe)

---

## ⚙️ Technologies utilisées
- **React 18+** (Create React App)
- **Bootstrap 5.2**
- **React Router** pour la navigation
- CSS personnalisé pour les effets graphiques


