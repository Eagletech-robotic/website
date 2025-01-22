---
title: Drone, robot et radiocommande
date: 2025-01-22
author: Nicolas Boulay
summary: L’open source dans l’informatique embarquée se limitait historiquement aux systèmes d’exploitation et aux compilateurs. On connaît bien GCC, BusyBox et FreeRTOS. Puis, Arduino a fait son entrée dans le monde du semi-professionnel. Mais cela évolue rapidement. Trois domaines se développent avec des logiciels, et parfois des produits open source, qui commencent à se croiser.
draft: true
---

## Le domaine des drones

Le domaine des drones, principalement les quadcopters mais aussi les avions, rovers et même sous-marins (AUV), a vu naître des projets comme [PX4](https://px4.io/) et [ArduPilot](https://ardupilot.org/). Ces firmwares d’autopilotes permettent un asservissement entre ce que l’on demande au drone et la réalité grâce à des centrales inertielles. Ils gèrent des tâches comme le quadrillage d’un secteur ou le retour automatique au point de départ, à l’aide de GPS ou de caméras de “flow” utilisant une technologie similaire à celle des souris optiques. Les développements actuels se concentrent sur l’évitement automatique d’obstacles, comme les arbres.

[PX4](https://px4.io/) repose sur le système d’exploitation temps réel [NuttX](https://nuttx.apache.org/), soutenu par la Fondation Apache. Ce système m’était encore inconnu jusqu’à récemment.

[QGroundControl](https://qgroundcontrol.com/) est un logiciel pour préparer des missions (points GPS, prises d’images, largages…), lire des journaux transmis par radio et configurer les drones sous [PX4](https://px4.io/) ou [ArduPilot](https://ardupilot.org/), ainsi que pour mettre à jour leur firmware.

Le projet [Pixhawk](https://pixhawk.org/) définit une plateforme matérielle supportée par ces deux firmwares. On en est à plus de six versions de FMU (“Flight management unit”), utilisant des processeurs STM32 avec des gyroscopes, accéléromètres, magnétomètres et baromètres, souvent avec des redondances. Les cartes comportent de nombreux connecteurs pour brancher les radiocommandes (plusieurs protocoles), les servos, les contrôleurs moteurs (ESC), les GPS, ainsi que des bus CAN utilisant des protocoles open source comme DroneCAN ou [Cyphal](https://opencyphal.org/).

Les ESC (Electronic Speed Controllers) transforment une commande de vitesse en une gestion complexe de trois signaux pour contrôler des moteurs synchrones. Le [VESC Project](https://vesc-project.com/) propose un firmware open source, offrant des réglages avancés, comme la limitation du courant ou l’asservissement via des capteurs à effet Hall. Un programme Android permet de gérer des moteurs pour trottinettes ou voiturettes.

## Le domaine des radiocommandes

Dans le domaine des radiocommandes, le projet OpenTX, forké en [EdgeTX](https://edgetx.org/), remplace le firmware des radiocommandes. [RadioMaster](https://www.radiomasterrc.com/), un outsider, utilise directement ces logiciels, contrairement aux fabricants haut de gamme plus conservateurs (Futaba, Spektrum, JR, Flysky, etc.). Ces firmwares permettent une personnalisation via des scripts Lua.

Pour les protocoles radio, plusieurs solutions propriétaires existent avec des portées annoncées de plus de 2 km. Cependant, un protocole ouvert, [ExpressLRS](https://www.expresslrs.org/), reposant sur [LoRaWAN,](https://fr.m.wikipedia.org/wiki/LoRaWAN) permet des portées jusqu’à 5 km (en 2.4 GHz) ou 15 km (à 900 MHz). Les émetteurs et récepteurs bi-bandes commencent à apparaître.

## Le domaine de la robotique

Dans le domaine de la robotique, [Gazebo](https://gazebosim.org/) est en train de devenir un simulateur et visualisateur polyvalent. Il repose sur le moteur de rendu [OGRE](https://www.ogre3d.org/) et le moteur physique [ODE](https://www.ode.org/). Il est intégré aux outils de développement de [PX4](https://px4.io/) et même utilisé dans des concours de drones virtuels.

[ROS2](https://www.ros.org/) est un middleware généraliste basé sur un protocole Pub/Sub à faible latence, permettant à plusieurs ordinateurs de communiquer. Il tend à remplacer [MAVLink](https://mavlink.io/), un protocole de commande plus léger, encore majoritaire dans le domaine des drones.

Les trois domaines (drones, robotique et radiocommandes) se croisent de plus en plus. Les autopilotes permettent de gérer tous types de véhicules, tandis que des outils comme [QGroundControl](https://qgroundcontrol.com/) et [ROS2](https://www.ros.org/) facilitent le développement de missions automatiques de plus en plus complexes.
