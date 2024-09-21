import { CSSProperties } from 'styled-components'
import { InlineLogo } from 'src/styles/sharedStyledComponents'
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
    HeaderContainer,
} from './styles'
import githubLogo from '/images/github-mark.svg'
import logo from '/images/logo.png'
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

    const handleLinkClick = () => {
        setMenuVisible(false)
    }

    const isVisibleStyle: CSSProperties = !menuVisible
        ? { transform: 'translateX(-100%)', visibility: 'hidden' }
        : {}

    return (
        <HeaderContainer>
            <StyledHeader>
                <LogoLink to="/">
                    <LogoImage src={logo} />
                </LogoLink>

                <StyledBurgerIcon
                    ref={refIcon}
                    open={menuVisible}
                    onClick={() => setMenuVisible(!menuVisible)}
                />
            </StyledHeader>

            <OpaqueBackground style={isVisibleStyle} />
            <Menu ref={refMenu} style={isVisibleStyle}>
                <ButtonsContainer>
                    <NavLinkButton to="/" onClick={handleLinkClick}>
                        <InlineLogo /> Home
                    </NavLinkButton>
                    <NavLinkButton to="about" onClick={handleLinkClick}>
                        🔎 About
                    </NavLinkButton>
                    <NavLinkButton to="blog" onClick={handleLinkClick}>
                        📝 Blog
                    </NavLinkButton>

                    <ButtonsSeparator />

                    <ExternalLinkButton href="https://github.com/Eagletech-robotic">
                        <GitHubLogo src={githubLogo} />
                        Github
                    </ExternalLinkButton>
                </ButtonsContainer>
            </Menu>
        </HeaderContainer>
    )
}
