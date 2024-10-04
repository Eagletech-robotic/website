import { Link } from 'react-router-dom'
import {
    Button,
    Content,
    Header,
    HeaderContainer,
    Logo,
    Page,
    Paragraph,
    Section,
    SectionTitle,
    Subtitle,
    Title,
} from './styles'

export default function Home() {
    return (
        <Page>
            <HeaderContainer>
                <Header>
                    <Title>EagleTech</Title>
                    <Subtitle>Robotics</Subtitle>
                </Header>
                <Logo src="/images/logo.png" />
            </HeaderContainer>

            <Section>
                <Content>
                    <SectionTitle>Une Equipe Française de Robotique</SectionTitle>
                    <Paragraph>
                        Nous sommes un équipe de robotique française, formée de six personnes, qui
                        participe à la compétition « <i>Coupe de France de Robotique</i> » de cette
                        année 2024-2025.
                    </Paragraph>
                </Content>
                <Link to="/about">
                    <Button>Découvrir Plus !</Button>
                </Link>
            </Section>
            <Section>
                <Content>
                    <SectionTitle>Nous Partageons nos Progrès</SectionTitle>
                    <Paragraph>
                        Nous postons régulièrement sur notre Blog pour faire part de nos avancés sur
                        le robot, et de notre club en général.
                    </Paragraph>
                </Content>
                <Link to="/blog">
                    <Button>Visiter !</Button>
                </Link>
            </Section>
            <Section>
                <Content>
                    <SectionTitle>Code Open-Source</SectionTitle>
                    <Paragraph>
                        L'entièreté de notre code est open-source sur GitHub. Vous pouvez y accéder
                        si cela vous intéresse.
                    </Paragraph>
                </Content>
                <Link to="https://github.com/Eagletech-robotic">
                    <Button>Allons-y !</Button>
                </Link>
            </Section>
        </Page>
    )
}
