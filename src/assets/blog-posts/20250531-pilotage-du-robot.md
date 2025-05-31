---
title: Pilotage du robot
date: 2025-05-31
tags: []
draft: false
author: Louis Monnier
summary: xxxx

---

Comment code-t-on un robot pour qu’il effectue les tâches complexes demandées par le règlement du jeu ? J’ai posé la question à l’un de nos programmeurs, Antoine.

Le programme du robot se divise en trois grandes parties :
- L’algorithme de vision et de positionnement du robot
- Le code du robot (les actions, les déplacements, les stratégies à adopter)
- Le simulateur pour tester et valider le code du robot avant la compétition

----

1. L’algorithme de vision et de positionnement du robot

   La règle du jeu nous autorise à utiliser deux caméras d’observation placées à 1,60 mètre au-dessus de la scène, ce qui permet de voir l’ensemble du terrain. Quatre QR codes disposés sur le terrain servent à positionner précisément les caméras et à déterminer notre couleur d’équipe (jaune ou bleu). Les QR codes placés sur notre robot et sur celui de l’adversaire nous permettent ensuite de connaître l’emplacement exact des deux robots sur le terrain, en fonction de leurs tags respectifs.
   Au départ, nous avions aussi envisagé de repérer la position des gradins et des matières premières grâce à leurs propres tags, mais ceux-ci se sont révélés trop petits pour être détectés par nos caméras, qui — il faut bien l’avouer — ne sont pas d’une qualité exceptionnelle. Toutes ces informations sont ensuite transmises au robot par liaison Bluetooth.

![Simulateur du robot](/blog-images/20250531-pilotage-du-robot/vision.jpg)

2. Le code du robot
   Grâce aux informations sur l’environnement transmises par l’algorithme de vision, notre robot peut alors calculer ses mouvements à l’aide de sa carte STM32. Les différentes étapes de ce calcul sont représentées dans l’algorigramme ci-dessous.

   **Trois remarques**
   Si, lorsqu’il n’y a pas de ressources dans la pince, le robot “va vers la zone de matières premières la plus proche en utilisant la descente de gradient”, c’est parce qu’il nous est impossible de savoir quelles matières premières ont déjà été prises par les autres robots. Comme expliqué précédemment, nous ne pouvons pas localiser précisément les gradins et les matières premières. La solution trouvée : le robot se rend simplement là où les matières premières sont censées être et, s’il n’en détecte pas, il essaie un autre emplacement. 
   
   Avec la descente de gradient, le robot voit le terrain comme une carte topographique : les points d’intérêt sont représentés par des dépressions, et les obstacles par des collines. Il se comporte alors comme une bille : poussé par la gravité, il atteint naturellement le point le plus bas. À chaque étape, il analyse son environnement et avance dans la direction la plus “descendante”.

   Notre robot n’est pas capable de monter des structures : il se contente de pousser les matières premières vers les zones de construction, ce qui permet de réaliser un gradin de niveau 1.

![Algorigramme du robot](/blog-images/20250531-pilotage-du-robot/algorigramme-du-robot.png)

3. Le Simulateur pour tester le code du robot
   Écrit en React / Javascript, notre simulateur permet de rejouer une partie complète directement dans un navigateur. Cela nous offre la possibilité de tester les modifications apportées au code du robot sans devoir tout installer physiquement. On peut même y faire s’affronter notre robot contre lui-même, ce qui est idéal pour tester et améliorer nos stratégies d’évitement.

![Simulateur du robot](/blog-images/20250531-pilotage-du-robot/simulateur.png)
