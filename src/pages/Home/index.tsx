import {
    Button,
    Content,
    Header,
    HeaderContainer,
    InlineLink,
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
                        Nous sommes un équipe de robotique française, formée de huit personnes, qui
                        participe à la compétition «{' '}
                        <InlineLink to="https://www.coupederobotique.fr/" target="_blank">
                            Coupe de France de Robotique
                        </InlineLink>{' '}
                        » sur cette année 2024-2025. Découvrez-en davantage sur notre équipe !
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
                        Nous postons régulièrement sur notre blog pour faire part de nos avancés sur
                        le robot. Vous pourrez ainsi suivre l'évolution de celui-ci au cours de
                        l'année ! Nous écrivons également des articles sur diverses informations
                        pratiques pouvant servir à d'autres équipes ou curieux telles que{' '}
                        <InlineLink to="/blog/posts/00xi1m3l">
                            le règlement de la coupe de cette année
                        </InlineLink>
                        .
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
                        si cela vous intéresse. Vous y trouverez aussi bien le code de notre robot
                        et algorithme de vision que celui de ce site web, ou encore d'autres projets
                        tels que notre simulateur.
                    </Paragraph>
                </Content>
                <StyledLink to="https://github.com/Eagletech-robotic" target="_blank">
                    <Button>Allons-y !</Button>
                </StyledLink>
            </Section>
        </Page>
    )
}
