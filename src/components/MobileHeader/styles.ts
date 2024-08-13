import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { breakpoints, colors, headerHeight, mixin, zIndices } from '../../styles/commonStyles'
import BurgerIcon from './BurgerIcon'

export const StyledHeader = styled.div`
    position: sticky;
    top: 0;
    height: ${headerHeight.mobile};
    z-index: ${zIndices.header};

    ${mixin.centerElement};

    background-color: ${colors.backgroundHeader};
    box-shadow: 0px 1px 15px 0px;
    border-bottom: 1px solid black;
    font-weight: 600;

    @media (min-width: ${breakpoints.desktop}) {
        display: none;
    }
`

export const StyledBurgerIcon = styled(BurgerIcon)`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    padding: 1rem;
    padding-right: 1.5rem;

    cursor: pointer;
`

const linkStyles = css`
    text-align: center;
    align-content: center;

    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;
`

export const Logo = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogoLink = styled(NavLink)`
    ${linkStyles};
    height: 100%;
    padding: 0.75rem 3rem;
`

export const LogoImage = styled.img`
    height: 100%;
    width: auto;
`

export const OpaqueBackground = styled.div`
    z-index: ${zIndices.contentCover};
    position: fixed;
    top: ${headerHeight.mobile};
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`

export const Menu = styled.div`
    z-index: ${zIndices.menuMobile};
    position: fixed;
    left: 0;
    width: 70vw;
    max-width: 30rem;
    top: ${headerHeight.mobile};
    height: 100%;
    background-color: ${colors.backgroundHeader};
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
`

export const ButtonsSeparator = styled.div`
    border: 2px solid ${colors.text};
    border-radius: 4px;
    margin: 1rem 0;
`

const buttonStyles = css`
    ${linkStyles};
    padding: 1rem 3rem;
`

export const NavLinkButton = styled(NavLink)`
    ${buttonStyles}

    &.active {
        color: ${colors.primary};
    }

    &:hover {
        color: ${colors.primary};
    }
`

export const ExternalLinkButton = styled.a`
    ${buttonStyles}

    display: flex;
    border: none;
    gap: 6px;

    justify-content: center;
`

export const GitHubLogo = styled.img`
    align-self: center;
    width: 1.4rem;
    height: auto;
`
