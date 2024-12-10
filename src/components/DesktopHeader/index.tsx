import {
    ExternalLinkButton,
    GitHubLogo,
    Links,
    LogoLink,
    LogoImage,
    NavLinkButton,
    StyledHeader,
    Logo,
    HeaderContainer,
} from './styles'
import githubLogo from '/images/github-mark.svg'
import logo from '/images/logo.png'

export function DesktopHeader(): JSX.Element {
    return (
        <StyledHeader>
            <HeaderContainer>
                <Logo>
                    <LogoLink to="/">
                        <LogoImage src={logo} />
                    </LogoLink>
                </Logo>

                <Links>
                    <NavLinkButton to="about">🔎 A propos</NavLinkButton>
                    <NavLinkButton to="blog">📝 Blog</NavLinkButton>
                    <ExternalLinkButton href="https://github.com/Eagletech-robotic">
                        <GitHubLogo src={githubLogo} />
                        Github
                    </ExternalLinkButton>
                </Links>
            </HeaderContainer>
        </StyledHeader>
    )
}
