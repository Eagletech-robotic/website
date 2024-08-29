## Comment faire des modifications locales

### Prérequis :

-   Git
-   Node.js
-   Yarn (recommandé)

### Installation

1. Ouvrez votre terminal de commandes. Naviguez à l'endroit ou vous souhaitez héberger le répertoire : `cd [chemin/vers/le/répertoire/désiré]`.
2. Clonez ce projet en entrant `git clone https://github.com/Eagletech-robotic/website.git` dans votre terminal.
3. Intallez toutes les dépendences avec `yarn install`. Cela va créér un répertoire `node-modules` qu'il ne faut pas modifier à la main.

### Faites vos modifications

1. Ouvrez votre terminal. Naviguez vers le répertoire où se votre le code `cd [chemin/vers/le/répertoire]`.
2. Exécutez `yarn start` pour démarrer le serveur de développement. Le serveur devrait s'ouvrir automatiquement dans votre navigateur. Sinon, allez à l'adresse http://localhost:3000 (ou comme spécifié dans votre terminal).
3. Faites vos modifications. Le serveur se relancera automatiquement dès que vous ferez un changement (pour les fichiers markdown et le code, pour les autres tels que les images par exemple, vous devrez simplement recharger la page).

### Commitez vos changement

Une fois satisfait de vos modifications, vous pouvez commiter vos changements, grâce à l'interface graphique de votre éditeur, ou directement depuis votre terminal.

<br/>

## Guide pour écrire un article de blog

> Note: the following recommandations and rules are not all required for the program to run but are imposed for your commits to be preserved. This means some things may work without following the rules below but that does not mean you should do them.

Once your development server is launched, you can freely edit any file in the `src/assets` directory. However, make sure to follow the following rules.

Put any and **only** markdown files in the `src/assets/blog-posts/<any-subfolder>` (you are free to create any subfolder you like, but try to stay organized).

Put any other **static** file (images, videos, svgs, etc...) in the `src/assets/images/<any-subfolder>` folder. If you need to add any dynamic files (such as code or other), please refer to [this](#How-to-make-changes-to-the-source-code) section.

## How to make changes to the source code
