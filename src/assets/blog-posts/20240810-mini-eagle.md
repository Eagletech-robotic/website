---
title: Mini Eagle - Un robot d'expérimentation pour la Coupe de France de Robotique
date: 2024-08-10
tags: []
draft: false
author: Antoine Monnier
summary: Présentation de Mini Eagle, un robot expérimental conçu pour tester des concepts en vue de la Coupe de France de Robotique 2025.
---

# Présentation de Mini Eagle

Le règlement de la prochaine [Coupe de France de Robotique 2025](https://www.coupederobotique.fr/) n'ayant pas encore été publié, nous ne pouvons pas encore démarrer la conception de notre robot principal. Alors, comment essayer d'avancer pendant ces vacances d'été ? Nous avons décidé de nous lancer dans la conception d'un robot miniature, Mini Eagle, qui nous permettra de tester des idées et des concepts pour la future compétition.

![Vue arrière du robot Mini-Eagle](/public/blog-images/20240810-mini-eagle/vue-arriere.jpg)

![Vue de profil du robot Mini-Eagle](/public/blog-images/20240810-mini-eagle/vue-profil.jpg)

## Objectifs

Les objectifs de Mini Eagle sont les suivants :

-   Tester des idées et des concepts pour la Coupe de France de Robotique 2025.
-   Apprendre à utiliser de nouveaux outils et technologies.
-   S'amuser et gagner en expérience pratique !

## Conception

Mini Eagle est un robot conçu avec les composants suivants :

-   Base Lego Technic
-   Deux moteurs Lego Mindstorms EV3 Large
-   Une carte [Nucleo STM32F401RE](https://www.st.com/en/evaluation-tools/nucleo-f401re.html)
-   Un capteur TOF (Time of Flight) monté sur la [carte de démonstration 53L4A2](https://www.st.com/en/ecosystems/x-nucleo-53l4a2.html)

La carte Nucleo STM32 est une plateforme de développement basée sur un microcontrôleur STM32. Elle contient un microcontrôleur ARM Cortex-M, et elle est munie de nombreuses broches d'entrée/sortie permettant de raccorder nos moteurs et nos capteurs. La carte se programme en language C, depuis l'environnement de développement intégré STM32IDE téléchargeable gratuitement.

Un capteur TOF mesure la distance en calculant le temps que met la lumière pour faire l'aller-retour entre le capteur et l'objet. Celui dont est équipé notre carte de démonstration permet de détecter jusqu'à 4 cibles simultanément, à condition qu'elles soient situées dans le cône de détection (environ 10°) et à des distances différentes du capteur.

## Programmation

Les microcontrôleurs STM32 se programment avec un fichier objet au format ELF. Celui-ci peut être généré depuis une variété de languages, mais STM32 fournit uniquement les librairies en language C. Il est donc plus simple de commencer avec ce language, même s'il semble aujourd'hui un peu dépassé.

Des utilisateurs de STM32 ont lancé un [projet de traduction des librairies STM32 en Rust](https://github.com/stm32-rs), mais celui-ci n'est pas officiellement supporté par le fabricant STMicroElectronics. Il nous a donc semblé prématuré de les utiliser, étant donné le faible niveau d'expérience en programmation embarquée de certains membres de notre équipe.

Nous avons commencé par écrire le code de Mini-Eagle dans l'environnement de développement STM32IDE, qui a l'avantage de regrouper un éditeur de code C, un accès en un clic au compilateur et au déboggueur, et un outil de configuration à la souris (le "clicodrome", comment l'appelle Nicolas).

Personnellement, j'ai trouvé cet environnement - basé sur le vieillissant [projet Eclipse](https://eclipseide.org/) - contraignant à utiliser, et je suis rapidement revenu à Visual Studio Code, plus moderne et qui intègre l'indispensable outil de complétion CoPilot. J'utilise encore STM32IDE pour la configuration de la carte, pour lancer le compilateur, et pour charger le programme sur le robot.

## Premiers tests

La première expérimentation est un programme utilisant le TOF, disposé latéralement, pour guider le MiniEagle le long d'un mur.

Le projet est en cours, et le code est disponible sur https://github.com/Eagletech-robotic/mini-eagle-lateral-tof

### Leçons tirées

**Le matériel...** Venant du monde du logiciel non embarqué, j'ai découvert que le premier ennemi n'est pas soi-même (les bugs informatiques), mais le matériel. Un code qui tourne à un instant t peut ne plus marcher à l'itération suivante : câble débranché, pile déchargée, circuit encodeur endommagé... Voici quelques-uns des problèmes que j'ai rencontrés après seulement quelques dizaines d'heures d'expérimentation.

**Importance des tests automatisés**. Pour limiter l'impact des bugs matériels, j'ai inclus dans le code du robot un auto-test qui s'exécute systématiquement au démarrage. Ce code effectue un test de rotation des roues à différentes vitesses, pour vérifier le fonctionnement des moteurs et des encodeurs. Puis il passe en mode test pour le TOF, avec une LED clignotant à une fréquence proportionnelle à la distance détectée. Une fois les tests validés, un appui sur le bouton-poussoir du board Nucleo lance le programme principal.

**Gestion des versions**. STM32IDE utilise un générateur de code qui peut modifier plusieurs fichiers lors du changement d'un seul paramètre. La mise en place du gestionnaire de version Git s'est rapidement avérée indispensable pour identifier les changements et pouvoir facilement revenir en arrière en cas de besoin.

Ces expériences avec Mini Eagle nous permettent d'acquérir des compétences précieuses en programmation embarquée, qui seront utiles pour notre futur robot de la Coupe de France de Robotique 2025.
