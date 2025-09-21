# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

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


