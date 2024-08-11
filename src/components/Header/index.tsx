import { ExternalLinkButton, Links, Logo, NavLinkButton, StyledHeader } from './styles'
import githubLogo from '/images/github-mark.svg'
import logo from '/logo.png'

export function Header(): JSX.Element {
    return (
        <StyledHeader>
            <Logo to="/">
                <img src={logo} />
            </Logo>

            <Links>
                <NavLinkButton to="about">🔎 About</NavLinkButton>
                <NavLinkButton to="blog">📝 Blog</NavLinkButton>
                <ExternalLinkButton href="https://github.com/Eagletech-robotic">
                    <img src={githubLogo} />
                    Github
                </ExternalLinkButton>
            </Links>
        </StyledHeader>
    )
}
