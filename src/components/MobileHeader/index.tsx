import {
    ExternalLinkButton,
    GitHubLogo,
    LogoLink,
    LogoImage,
    NavLinkButton,
    StyledHeader,
    Menu,
    StyledBurgerIcon,
} from './styles'
import githubLogo from '/images/github-mark.svg'
import logo from '/logo.png'
import * as React from 'react'

export function MobileHeader(): JSX.Element {
    const [menuVisible, setMenuVisible] = React.useState(true)

    return (
        <>
            <StyledHeader>
                <LogoLink to="/">
                    <LogoImage src={logo} />
                </LogoLink>

                <StyledBurgerIcon open={menuVisible} onClick={() => setMenuVisible(!menuVisible)} />
            </StyledHeader>

            {menuVisible && (
                <Menu>
                    <NavLinkButton to="about">🔎 About</NavLinkButton>
                    <NavLinkButton to="blog">📝 Blog</NavLinkButton>
                    <ExternalLinkButton href="https://github.com/Eagletech-robotic">
                        <GitHubLogo src={githubLogo} />
                        Github
                    </ExternalLinkButton>
                </Menu>
            )}
        </>
    )
}
