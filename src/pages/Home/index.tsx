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
    StyledLink,
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
                        année 2024-2025. Découvrez-en davantage sur notre équipe !
                    </Paragraph>
                </Content>
                <StyledLink to="/about">
                    <Button>Découvrir Plus !</Button>
                </StyledLink>
            </Section>
            <Section>
                <Content>
                    <SectionTitle>Nous Partageons notre Travail</SectionTitle>
                    <Paragraph>
                        Nous postons régulièrement sur notre Blog pour faire part de nos avancés sur
                        le robot, et de notre club en général. Vous pourrez ainsi suivre l'évolution
                        de celui-ci au cours de l'année !
                    </Paragraph>
                </Content>
                <StyledLink to="/blog">
                    <Button>Visiter !</Button>
                </StyledLink>
            </Section>
            <Section>
                <Content>
                    <SectionTitle>Du Code Open-Source</SectionTitle>
                    <Paragraph>
                        L'entièreté de notre code est open-source sur GitHub. Vous pouvez y accéder
                        si cela vous intéresse.
                    </Paragraph>
                </Content>
                <StyledLink to="https://github.com/Eagletech-robotic">
                    <Button>Allons-y !</Button>
                </StyledLink>
            </Section>
        </Page>
    )
}
