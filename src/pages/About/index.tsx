import { PageStructure } from 'src/styles/sharedStyledComponents'

import photoAntoine from '/images/portraits/Antoine.png'
import photoJanaina from '/images/portraits/Janaina.png'
import photoLouis from '/images/portraits/Louis.png'
import photoMarion from '/images/portraits/Marion.png'
import photoNicolas from '/images/portraits/Nicolas.png'
import photoOrion from '/images/portraits/Orion.png'
import photoRobin from '/images/portraits/Robin.png'
import photoThibault from '/images/portraits/Thibault.png'
import MemberPresentation from 'src/components/MemberPresentation'
import React from 'react'

export default function About() {
    const [openMember, setOpenMember] = React.useState<number | undefined>()

    const handleOpenMember = (index: number) => {
        if (openMember === index) {
            setOpenMember(undefined)
        } else {
            setOpenMember(index)
        }
    }

    return (
        <PageStructure>
            {MemberPresentations.map((member, index) => (
                <MemberPresentation
                    onClick={() => handleOpenMember(index)}
                    key={index}
                    title={member.title}
                    photo={member.photo}
                    description={member.description}
                    isOpen={openMember === index}
                />
            ))}
        </PageStructure>
    )
}

const MemberPresentations = [
    {
        photo: photoAntoine,
        title: 'Antoine Monnier - Rédaction technique, Développement, Mécanique',
        description: `Je suis ingénieur de formation et entrepreneur en informatique.
        Passionné de robotique depuis toujours, je n’avais jamais eu l’occasion de faire partie d’une équipe.
        Après avoir accompagné Thibault à la compétition de robotique FIRST en 2024,
        mes amis Nicolas et Marion m’ont parlé de la Coupe de France de Robotique à laquelle ils venaient d’assister.
        Ils nous ont donné l’envie de monter une équipe avec nos enfants, tous très enthousiastes à cette idée.
        Je vais contribuer aux articles techniques du blog et participer à l’écriture des algorithmes de pilotage
        et de vision. Je m’impliquerai également dans la construction de prototypes,
        comme la pelle du robot et d’autres accessoires. J’ai surtout à cœur de partager notre expérience
        et nos apprentissages, avec nos enfants mais aussi avec le public que nous allons rencontrer
        dans les événements scientifiques auxquels nous allons participer.
        `,
    },
    {
        photo: photoJanaina,
        title: 'Janaina Wittner - Logistique',
        description: `Responsable des partenariats dans ma vie professionnelle et mère de Louis et de Thibault,
        je m’efforce avant tout de motiver les équipes et de les accompagner dans la logistique : 
        organisation des rencontres nécessaires à la réalisation des projets, mise à disposition d'espaces de travail,
        transport des personnes et des robots, ainsi que l'hébergement sur place.
        `,
    },
    {
        photo: photoLouis,
        title: 'Louis Monnier – Communication et rédaction',
        description: `Je suis étudiant en première au CIV (Centre International de Valbonne) dans les Alpes-Maritimes.
        Passionné d’histoire, je souhaite faire des études en sciences politiques.
        J’ai rejoint le club de journalisme de mon lycée ou je développe mes compétences de rédaction d’articles
        et de partage d’information. J’ai donc naturellement rejoint ce projet de robotique en tant que
        responsable communication et je m’engage à partager nos expériences, nos défis, nos découvertes,
        ainsi que les connaissances acquises tout au long de cette aventure sur notre blog.
        En étant moi-même en pleine découverte de ce domaine, je m’efforcerai de rédiger des articles accessible
        et d’expliquer les concepts de manière compréhensible pour tous.
        Mes activités iront de l’écriture de contenu pour notre site,
        notamment des articles pour le blog à la présentation de notre projet au CIV et des associations locales
        ainsi que la décoration et l’animation du stand le jour de la compétition. 
        `,
    },
    {
        photo: photoMarion,
        title: 'Marion Boulay – Mécanique-Électronique',
        description: `Je m’appelle Marion, j’ai participé en 2003 et 2004 à la coupe de France de Robotique
        avec mon école (Projet&Tech). En 2004 j’ai rencontré mon mari à la coupe.
        Nous avons décidé de participer en indépendant en 2005 et 2007 sous l’équipe Astromech.
        L’année dernière pour fêter nos 20 ans de rencontre, nous sommes montés à la coupe
        afin de la présenter à nos enfants. Ils ont beaucoup aimé et ont souhaité participer,
        c’est la raison pour laquelle nous en avons parlé à des amis et choisi de retenter l’aventure cette année.
        Dans le cadre de ce projet de robotique, je vais réaliser la mécanique
        et l’électronique du robot principal. Je m’engage à partager mon expérience,
        notre défi côté mécanique : réaliser la mécanique avec un seul moteur/servo-moteur.
        J’ai aussi le projet de partager ma passion pour que mes enfants et tout autre personne
        de leur âge soient passionnés par ce domaine et qu’ils puissent voir et comprendre
        qu’à tout âge on peut faire de la robotique, et apprendre en s’amusant.
        `,
    },
    {
        photo: photoNicolas,
        title: 'Nicolas Boulay - Informatique-Electronique',
        description: `Ingénieur passionné de robotique, j’ai été arbitre
        puis chef arbitre Eurobot après avoir  participé en 2003 et 2004
        à la coupe de France de Robotique avec mon école (Projet&Tech).
        J’ai refait une équipe avec Marion et des amis en 2005 et 2007.
        L’an passé, la conjonction des jours fériés a permis de faire le trajet depuis Nice
        jusqu’en Vendée pour montrer la coupe à nos adolescents. Cela m’a donné envie de recommencer,
        intéressé surtout par l'évolution des technologies disponibles. Dans ce projet,
        je vais réaliser surtout l’électronique et l’informatique bas niveau du robot.
        `,
    },
    {
        photo: photoOrion,
        title: 'Orion Boulay – Mécanique-Électronique',
        description: `Je suis étudiant en troisième au collège Fersen situé à Antibes.
        Mes parents m'ont présenté la coupe de France de Robotique. L'année dernière,
        après avoir pu échanger avec des équipes et avoir vudes matchs,
        j'ai été convaincu de participer au projet Eagletech cette année.
        Malheureusement, je suis en sport étude et je n'aurais pas autant de temps que voulu à consacrer au projet.
        Dans le cadre de ce projet de robotique, je vais réaliser l'électronique
        et la mécanique avec ma mère Marion, échanger sur les stratégies possibles
        et aider mon frère Oron sur la construction de la "super star". Tout comme mon frère,
        je présenterai notre robot au club de robotique de mon collège.
        `,
    },
    {
        photo: photoRobin,
        title: 'Robin Boulay – Responsable de la "super star"',
        description: `Je suis au collège Fersen situé à Antibes. Mes parents m'ont présenté
        la coupe de France de Robotique. L'année dernière, j’ai pu parler avec des équipes,
        et voir des matchs. Cela m'a donné envie d’y participer.
        Dans le cadre de ce projet de robotique, je vais réaliser la "super star"
        (allez voir l’article du blog sur les règles de la compétition cette année),
        la construire en légo, et développer le code en utilisant la programmation graphique lego.
        Cela me permettra d'apprendre les bases des algorithmes, de pouvoir être sûr que
        le robot bouge comme prévu, et résoudre les blocages. Je présenterai au club
        de robotique de mon collège nos robots.
        `,
    },
    {
        photo: photoThibault,
        title: 'Thibault Monnier - Développeur et mécanicien',
        description: '...',
    },
]
