import { Link } from 'react-router-dom'
import {
    Button,
    Header,
    HeaderContainer,
    Logo,
    Page,
    Section1,
    Section2,
    SectionTitle,
    Subtitle,
    Title,
} from './styles'

export default function Home() {
    return (
        <Page>
            <HeaderContainer>
                <Header>
                    <Logo />
                    <Title>EagleTech</Title>
                    <Subtitle>Robotics</Subtitle>
                </Header>
            </HeaderContainer>

            <Section1>
                <SectionTitle>Nous sommes une équipe française</SectionTitle>
                <Link to="/about">
                    <Button>Découvrir Plus!</Button>
                </Link>
            </Section1>
            <Section2>Second Section</Section2>
        </Page>
    )
}
