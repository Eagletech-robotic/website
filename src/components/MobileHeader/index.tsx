import {
    ExternalLinkButton,
    GitHubLogo,
    LogoLink,
    LogoImage,
    NavLinkButton,
    StyledHeader,
    Menu,
    StyledBurgerIcon,
    ButtonsContainer,
    OpaqueBackground,
    ButtonsSeparator,
} from './styles'
import githubLogo from '/images/github-mark.svg'
import logo from '/logo.png'
import * as React from 'react'

export function MobileHeader(): JSX.Element {
    const [menuVisible, setMenuVisible] = React.useState(false)

    const refMenu = React.useRef<HTMLDivElement>(null)
    const refIcon = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        window.addEventListener('click', (event) => {
            if (
                !refMenu.current?.contains(event.target as Node) &&
                !refIcon.current?.contains(event.target as Node)
            ) {
                setMenuVisible(false)
            }
        })
    }, [menuVisible])

    return (
        <StyledHeader>
            <LogoLink to="/">
                <LogoImage src={logo} />
            </LogoLink>

            <StyledBurgerIcon
                ref={refIcon}
                open={menuVisible}
                onClick={() => setMenuVisible(!menuVisible)}
            />

            {menuVisible && (
                <>
                    <OpaqueBackground />

                    <Menu ref={refMenu}>
                        <ButtonsContainer>
                            <NavLinkButton to="about">🔎 About</NavLinkButton>
                            <NavLinkButton to="blog">📝 Blog</NavLinkButton>

                            <ButtonsSeparator />

                            <ExternalLinkButton href="https://github.com/Eagletech-robotic">
                                <GitHubLogo src={githubLogo} />
                                Github
                            </ExternalLinkButton>
                        </ButtonsContainer>
                    </Menu>
                </>
            )}
        </StyledHeader>
    )
}
