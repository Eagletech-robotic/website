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
import robot from '/images/CDR-logo.jpg'

export default function Home() {
    return (
        <Page>
            <HeaderContainer>
                <Header>
                    <Title>EagleTech</Title>
                    <Subtitle>Robotics</Subtitle>
                </Header>
                <Logo />
            </HeaderContainer>

            <Section>
                <Content>
                    <SectionTitle>Une Equipe Française de Robotique</SectionTitle>
                    <Paragraph>
                        Nous somme un équipe de robotique française, qui participe à la compétition
                        Coupe de France de Robotique.
                    </Paragraph>
                </Content>
                <Link to="/about">
                    <Button>Découvrir Plus!</Button>
                </Link>
            </Section>
            <Section>Second Section</Section>
        </Page>
    )
}
