import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import {
    breakpoints,
    colors,
    headerBorder,
    headerHeight,
    headerShadow,
    hoverTransitionTimingFunction,
    mixin,
    zIndices,
} from '../../styles/commonStyles'

export const StyledHeader = styled.div`
    position: sticky;
    top: 0;
    height: ${headerHeight.desktop};
    z-index: ${zIndices.header};

    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    overflow: hidden;
    gap: 1rem;

    background-color: ${colors.backgroundHeader};
    box-shadow: ${headerShadow};
    border-bottom: ${headerBorder};
    font-weight: 600;

    @media not (min-width: ${breakpoints.desktop}) {
        display: none;
    }
`

const linkStyles = css`
    text-align: center;
    align-content: center;

    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;

    transition: 0.3s ${hoverTransitionTimingFunction};

    &:hover {
        transform: scale(1.15);
    }
`

export const Logo = styled.div`
    flex-grow: 1;
    ${mixin.centerElement};
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

export const Links = styled.div`
    flex-grow: 2;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
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
    align-items: center;
`

export const GitHubLogo = styled.img`
    align-self: center;
    width: 1.4rem;
    height: auto;
`
