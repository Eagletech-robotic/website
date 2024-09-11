# EagleTech Website (en cours de création)

<a href="https://github.com/Eagletech-robotic">
    <img src="./logo.png" alt="Logo" width="150" height="150">
</a>

[Lien vers le site](https://eagletech-robotics.netlify.app)

## Table des matières <!-- omit in toc -->

<!-- prettier-ignore-start -->

- [Comment faire des modifications locales](#comment-faire-des-modifications-locales)
  - [Prérequis :](#prérequis-)
  - [Installation](#installation)
  - [Modifier le code](#modifier-le-code)
- [Guide pour écrire un article de blog](#guide-pour-écrire-un-article-de-blog)
  - [Description](#description)
  - [Démarrage](#démarrage)
  - [Création d'un nouveau post](#création-dun-nouveau-post)
  - [Ajouter des images](#ajouter-des-images)
  - [Publier un post](#publier-un-post)
  - [Liste des fonctionnalités](#liste-des-fonctionnalités)
  
<!-- prettier-ignore-end -->

## Comment faire des modifications locales

### Prérequis :

-   Git
-   Node.js
-   Yarn (recommandé, mais vous pouvez aussi utiliser NPM)

### Installation

Clonez le projet et installez les dépendences :

```sh
git clone https://github.com/Eagletech-robotic/website.git
cd website
yarn install
```

### Modifier le code

Démarrez le serveur de développement:

```sh
yarn start
```

Le serveur devrait s'ouvrir automatiquement dans votre navigateur. Sinon, allez à l'adresse http://localhost:3000 (ou comme spécifié dans votre terminal).

Vous pouvez faire vos modifications. Le serveur se relancera automatiquement dès que vous ferez un changement (sinon, il suffit de recharger la page).

## Guide pour écrire un article de blog

### Description

Ici, vous trouverez toutes les connaissances qu'il vous faudra pour écrire un article de blog.
Pensez aussi à vous référer à la démo pour voir comment les fonctionnalités de markdown sont rendues sur le site (il faut lancer le site en local pour pouvoir voir la démo).

### Démarrage

Pour commencer le développement, se référer à la section [modifier le code](#modifier-le-code). Une fois le serveur lancé, vous pourrez faire vos modifications.

### Création d'un nouveau post

Crééz un fichier markdown au chemin `/src/assets/blog-posts`. Nommez le au format `[AAAAMMJJ]-[nom].md`, où `AAAAMMJJ` est la date de création. Ceci est un exemple de nom :

```
20240830-demo-blog.md
```

Ensuite, insérez ce texte au début de votre fichier :

```
---
title: [Le titre]
date: [La date, format AAAA-MM-JJ]
author: [Votre nom]
summary: [Résumé]
draft: true
---
```

Ceci est un exemple complet :

_/src/assets/blog-posts/20240801-demo.md_

```
---
title: Post de Demo
date: 2024-08-01
author: Thibault
summary: Ceci est un post de démo, pour tester et montrer les fonctionnalités de markdown.
draft: true
---
```

> N'hésitez pas à faire des commits réguliers ! Tant qu'il y aura
> écrit `draft: true`, votre post n'apparaîtra pas sur le site qui
> publié, mais seulement sur votre version locale.
>
> > C'est d'ailleurs comme ça qu'est faite la démo.
>
> Pour mettre le post en ligne, se référer à la section [Publier un post](publier-un-post).

### Ajouter des images

Pour ajouter des images, crééz un répertoire au chemin `/public/blog-images/` avec le nom de exact du post sur lequel vous travaillez. Vous pourrez ensuite ajoutez des images, svgs, et autres contenus statiques. Pour y référer dans votre post, il vous suffira d'utiliser le chemin relatif par rapport à `public`.

Par exemple, si votre post s'appelle `20240830-post-de-blog.md`, vous pourrez trouver l'image `image-de-test.png` avec le lien `/blog-images/20240830-post-de-blog/image-de-test.png`.

### Publier un post

Une fois que votre post est prêt à être mis en ligne, il vous suffira de changer la ligne `draft: true` à `draft: false` en haut du fichier. Un fois ce changement commité, le post apparaîtra automatiquement sur le site en ligne.
Si vous avez pris plusieurs jours à écrire le post, pensez aussi à mettre à jour `date: [date]`. Sinon, votre post risque de ne pas s'afficher tout en haut !

### Liste des fonctionnalités

-   Texte Normal
-   # # H1
-   ## ## H2
-   ### ### H3 (à éviter sauf si strictement nécéssaire; diffère du texte en gras uniquement par sa marge)
-   *​_Texte en italique*​\_
-   **\*\*Texte en gras\***\*\
-   ~\~Texte barré\~~
-   \[Lien]\(https:/​/github.com) qui donne [Lien](https://github.com), ou directement https://github.com
-   \![Alt]\(https:/​/picsum.photos/200/300) donne une image

> \> Blockquote

-   \- Liste non-ordonnée

*   \* Suite de la liste

1. 1\. Liste ordonnée
2. 2\. Suite de la liste ordonnée

\``Code inline`\`

\```ts title="Code Block" {2-4,6} /function/ /customWord/

```ts
const texte = `
Ceci est un bloc de code. Sur le site, ils ne ressemblent pas vraiment à ça. N'hésitez pas à regarder la démo.
Il y a 4 fonctionnalités principales.
'ts' permet de colorer le code selon les habitudes typescript. Pensez toujours inclure un langage un (sauf si c'est du pur texte).
'title="Code Block"' fera apparaître 'Code Block' au dessus du bloc. C'est fortement recommandé d'inclure un titre.
'{2-4,6}' surlignera toutes les lignes 2 à 4, et la ligne 6 (la première ligne étant 1)
'/function/' surlignera chaque instance du mot 'function' dans le code
`
```

\```

Vous pouvez également écrire des formules mathématiques en $\LaTeX$. Ce projet utilise la librarie open-source Katex; vous pouvez voir la liste des fonctions supportées et autres informations pratiques sur https://katex.org/docs/supported.

$$\int_{-\infty}^\infty e^{-x^2} \, dx = \sqrt{\pi}$$

Les tables sont supportés également.

```
| Alignement à gauche | Alignement au milieu |
| :------------------ | :------------------: |
| L1                  |          A           |
| L2                  |          B           |
| L3                  |          C           |
```

donne

| Alignement à gauche | Alignement au milieu |
| :------------------ | :------------------: |
| L1                  |          A           |
| L2                  |          B           |
| L3                  |          C           |

Dernièrement, il est aussi possible de faire des listes de tâches

-   [x] Fait
-   [ ] Non fait
