import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import {
    breakpoints,
    colors,
    fontSizes,
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
    font-weight: 600;

    @media not (min-width: ${breakpoints.desktop}) {
        display: none;
    }
`

const linkStyles = css`
    text-align: center;
    align-content: center;
    height: 100%;
    padding: 0 2rem;

    text-decoration: none;
    cursor: pointer;
    font-size: ${fontSizes.desktop.content};
    transition: 0.5s ${hoverTransitionTimingFunction};
`

const scaleOnHoverLinkStyles = css`
    ${linkStyles};

    &:hover {
        transform: scale(1.125);
    }
`

export const Logo = styled.div`
    flex-grow: 1;
    ${mixin.centerElement};
`

export const LogoLink = styled(NavLink)`
    ${scaleOnHoverLinkStyles};
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

export const NavLinkButton = styled(NavLink)`
    ${linkStyles}

    position: relative;

    &.active {
        border-color: ${colors.primary};
        color: ${colors.primary};
    }

    &:hover {
        color: ${colors.primary};

        &::after {
            width: 100%;
        }
    }

    &::after {
        content: '';
        position: absolute;
        display: block;
        bottom: 0;
        left: 0;
        width: 0;
        height: 4px;

        border-radius: 2px;
        background: ${colors.primary};
        transition: width 0.5s ${hoverTransitionTimingFunction} 0s;
    }
`

export const ExternalLinkButton = styled.a`
    ${scaleOnHoverLinkStyles}

    display: flex;
    border: none;
    gap: 6px;

    justify-content: center;
    align-items: center;

    &:hover {
        transform: scale(1.1);
    }
`

export const GitHubLogo = styled.img`
    align-self: center;
    width: 1.4rem;
    height: auto;
`
