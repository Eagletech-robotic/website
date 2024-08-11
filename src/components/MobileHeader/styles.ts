import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { breakpoints, colors, mixin, zIndices } from '../../styles/commonStyles'
import BurgerIcon from './BurgerIcon'

const headerHeight = '3rem'

export const StyledHeader = styled.div`
    position: sticky;
    top: 0;
    height: ${headerHeight};
    z-index: ${zIndices.header};

    ${mixin.centerElement};
    position: relative;

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
    padding: 0.5rem;
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

export const Menu = styled.div`
    z-index: ${zIndices.menuMobile};
    position: fixed;
    left: 0;
    width: 80vw;
    max-width: 30rem;
    top: ${headerHeight};
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
`

const buttonStyles = css`
    ${linkStyles};
    padding: 1rem 3rem;
`

export const NavLinkButton = styled(NavLink)`
    ${buttonStyles}

    border: 2px solid black;
    border-radius: 2rem;

    &.active {
        border-color: ${colors.primary};
        color: ${colors.primary};
    }

    &:hover {
        border-color: ${colors.primary};
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
