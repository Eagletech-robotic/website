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

Vous pouvez faire vos modifications. Le serveur se relancera automatiquement dès que vous ferez un changement (pour les fichiers markdown et le code, pour les autres tels que les images par exemple, vous devrez simplement recharger la page).

<br/>

## Guide pour écrire un article de blog


Put any other **static** file (images, videos, svgs, etc...) in the `src/assets/images/<any-subfolder>` folder. If you need to add any dynamic files (such as code or other), please refer to [this](#How-to-make-changes-to-the-source-code) section.

## How to make changes to the source code
