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

export default function About() {
    console.log(photoAntoine)
    return (
        <PageStructure>
            <MemberPresentation
                photo={photoAntoine}
                title="Antoine Monnier - Rédaction technique, Développement, Mécanique"
                description="..."
            />
            <MemberPresentation
                photo={photoJanaina}
                title="Janaina Wittner - Logistique"
                description="..."
            />
            <MemberPresentation
                photo={photoLouis}
                title="Louis Monnier – Communication et rédaction"
                description="..."
            />
            <MemberPresentation
                photo={photoMarion}
                title="Marion Boulay – Mécanique-Électronique"
                description="..."
            />
            <MemberPresentation
                photo={photoNicolas}
                title="Nicolas Boulay - Informatique-Electronique"
                description="..."
            />
            <MemberPresentation
                photo={photoOrion}
                title="Orion Boulay – Mécanique-Électronique"
                description="..."
            />
            <MemberPresentation
                photo={photoRobin}
                title='Robin Boulay – Responsable de la "super star"'
                description="..."
            />
            <MemberPresentation
                photo={photoThibault}
                title="Thibault Monnier - Développeur et mécanicien"
                description="..."
            />
        </PageStructure>
    )
}
