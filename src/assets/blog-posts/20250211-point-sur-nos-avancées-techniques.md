---
title: Point sur nos avancées techniques !
date: 2025-02-01
author: Louis Monnier
summary: Il est temps de faire le point sur nos avancées techniques. Très motivés, on avance à notre rythme, lentement mais sûrement, jusqu'à la Coupe de France de Robotique.
draft: false
---

Plus que quelques mois avant la coupe de France de Robotique. Il est donc grand temps de faire le point sur nos avancées techniques. 

Avant de continuer, si vous n'êtes pas au fait des règles, rendez-vous sur notre article de blog [En quoi consiste la Coupe de France de Robotique ?](https://eagletech-robotics.netlify.app/blog/posts/00xi1m3l) qui les détaille d’une manière rapide et compréhensible.

On préfère vous éviter toute déception en vous prévenant tout de suite : nous n’avons pas énormément avancé. On progresse lentement, et nous continuerons ainsi jusqu'à la dernière semaine... une semaine décisive, pendant laquelle, comme chaque année, près de la moitié du travail est fait dans la plupart des équipes de robotique.

Nous avons déjà commencé certains projets, et même fini d’autres. Ensemble, nous allons voir :
1. Les avancées sur le Robot Principal (La mécanique, l’algorithme de pilotage et la banderole).
2. Le PAMI star Bot MARLEY sur scène, presque terminé.
3. Le terrain, sur lequel on travaille encore.
4. La RER que nous organisons en Région sud.


## Le robot principal

Notre équipe de robotique est composée de deux familles : Les Monnier et les Boulay. 

### La partie mécanique

Les Boulay ont dans leurs rangs deux vétérans des coupes de robotique, la partie mécanique et physique leur a naturellement été attribuée. Ils s’occupent donc de la conception et de la construction du robot. Ayant déjà participé à La Coupe de France de Robotique dans les années 2000, ils avaient un ancien châssis de robot dont on a pu récupérer la structure et ses moteurs. D’autres éléments devenus obsolètes, comme l’ordinateur de bord dix fois plus grand et beaucoup moins puissant que les puces utilisées aujourd’hui, ont dû être jetés. On a ajouté des roues et un bouton d'arrêt d'urgence.

![Le robot principal de Eagle Tech](/blog-images/20250211-point-sur-nos-avancées-techniques/robot.png)


À ces progrès, on peut ajouter la pince pour déplacer les matières premières qui serviront à construire les estrades. Les boîtes de conserve étant en métal, on a décidé d'utiliser cette spécificité pour concevoir une pince magnétique. Tout fonctionnait à merveille, mais malheureusement, le papier collé autour des boîtes de conserve a réduit leur attraction magnétique. Nous devons donc changer les aimants de la pince et en mettre des plus puissants en néodyme. Mais allons-nous en trouver ? Affaire à suivre.


### L’algorithme de pilotage

Les Monnier, en revanche, s’occupent de l'algorithme de pilotage du Robot. Le robot doit être en totale autonomie pendant 100 secondes. La moindre erreur peut faire planter le robot et donc faire perdre la partie (sauf si les deux robots plantent, ce qui arrive parfois).

Pour l'algorithme de pilotage, on a utilisé une technique, appelée la descente de gradients. Cette technique, basée sur une carte nommée champ de potentiel, est très visuelle donc plutôt facile à expliquer.

![L’algorithme de pilotage de Eagle Tech](/blog-images/20250211-point-sur-nos-avancées-techniques/algorithme-de-pilotage.png)

Dans un algorithme de descente de gradients, le terrain est représenté comme une carte topographique constamment rafraîchie en tenant compte de la position du robot adverse, des stocks de matière première (qui servent à construire des estrades pour gagner des points) et des zones de construction. 

Les obstacles sont représentés comme des montagnes (points, ou symboles @) et les cibles comme des creux (les parties les plus sombres). Le robot se dirige comme une bille. Son ordinateur de bord n’a qu’un seul objectif : descendre continuellement.

L’idée peut sembler simple, mais le calcul du champ de potentiel est complexe et doit prendre en compte un grand nombre de facteurs. En plus de cela, obtenir la position des matières premières ou des robots n’est pas non plus évident. Le règlement nous autorise à avoir une caméra qui surplombe le terrain. La nôtre est capable de détecter les QR codes mis sur les robots, sur le vinyle et sur les matières premières. l’ordinateur principal, à l'extérieur du robot, repère grâce à des calculs, la position des objets à suivre et génère des champs de potentiel (idéalement un par seconde) et l’envoie à l’ordinateur de bord. Pour ceux qui s’intéressent aux algorithmes de pilotage, un article de blog plus détaillé, écrit par l’un de nos programmeurs, sortira sans doute dans les mois à venir.

### La Banderole
La banderole doit être déployée sur le bord du terrain pour faire gagner 20 points ! Et on les a déjà plus ou moins assurés.
Grâce à un système ingénieux de ressorts, la banderole, au départ rattachée et pliée à l’intérieur du robot principal, se déploie et nous assure 20 points. Il ne reste plus qu’à la rigidifier un peu une fois ouverte et à peindre la banderole dans le thème de Bot Marley, nom que nous avons donné à notre PAMI star.

![La banderole de Eagle Tech](/blog-images/20250211-point-sur-nos-avancées-techniques/banderole.jpeg)


## Le PAMI star Bot Marley sur scène
On ne s'attardera pas trop sur Bot Marley, notre PAMI star, car il y a déjà un article sur notre blog qui s’y intéresse, voir [Robin, 12 ans, nous a concocté une star](https://eagletech-robotics.netlify.app/blog/posts/00gpqfx5) !

Robin nous a construit une star mignonne comme tout : Bot Marley. 
Les dreads, en élastique, sont encore très rudimentaires, mais on va faire mieux. Ce robot a pour objectif de monter sur la scène et de s'approcher au maximum du bord pour gagner le plus de points possible.

Le programme n’est pas encore perfectionné : le robot est tombé quelques fois de la scène ou de la rampe qui y mène, mais on y est presque. À nous les 15 points !

![Bot Marley, le PAMI star de Eagle Tech](/blog-images/20250211-point-sur-nos-avancées-techniques/pami-bot-marley.jpg)

Robin nous a promis un deuxième PAMI, une ‘Groupie’. Il attend de recevoir des pièces de lego et un Mindstorm pour se mettre au travail. 


## Le Terrain

Le terrain n’est pas du tout évident à monter, mais on avance.

Nous avons acheté le vinyle et avons construit, avec les dimensions données dans le règlement, la scène en bois. Nous avons ensuite collé une partie du vinyle dessus.

Il ne reste plus qu’à acheter une planche en bois de 2*3m pour coller le reste du vinyle, ainsi que du bois pour faire un mur de 7cm. Ce rebord est indispensable pour empêcher les robots de tomber, s’ils ne s’arrêtent pas dans leur lancée! 

![Le terrain de Eagle Tech](/blog-images/20250211-point-sur-nos-avancées-techniques/terrain.jpeg)

## La RER de Sophia Antipolis, en Région Sud

Ne vous inquiétez pas, ce ne sont pas des hiéroglyphes. Une RER est simplement une **R**encontre inter**É**quipes de **R**obotique.. Ces rencontres permettent d'échanger et d'organiser des matchs amicaux pour s'entraîner et tester nos robots. Eagle Tech s'est porté volontaire et en a organisé une en Région Sud, en partenariat avec [Terra Numerica](https://terra-numerica.org/), une association de transmission des savoirs scientifiques pour les jeunes. Ils mettent à disposition leurs locaux incroyables !

Si vous voulez en savoir plus sur l’organisation de la RER, un article de blog sera publié prochainement.

![RER un partenariat Terra Numerica et Eagle Tech](/blog-images/20250211-point-sur-nos-avancées-techniques/rer-a-terra-numerica.jpeg)
