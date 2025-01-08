import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import {
    blogMaxWidth,
    breakpoints,
    colors,
    fontSizes,
    headerHeight,
    headerShadow,
    hoverTransitionTimingFunction,
    mixin,
    zIndices,
} from 'src/styles/commonStyles'

export const StyledHeader = styled.div`
    position: sticky;
    top: 0;
    height: ${headerHeight.desktop};
    z-index: ${zIndices.header};

    display: flex;
    gap: 1rem;

    background-color: ${colors.backgroundHeader};
    box-shadow: ${headerShadow};
    font-weight: 600;

    @media not (min-width: ${breakpoints.desktop}) {
        display: none;
    }
`

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr ${blogMaxWidth} 1fr;
    grid-template-rows: ${headerHeight.desktop};
    width: 100%;
    height: 100%;
`

const genericLinkStyles = css`
    text-decoration: none;
    cursor: pointer;
    font-size: ${fontSizes.desktop.content};
    transition: 0.5s ${hoverTransitionTimingFunction};
`

export const LogoLink = styled(NavLink)`
    ${genericLinkStyles};

    height: 100%;
    padding: 0.75rem 3rem;
    margin: 0 auto;

    &:hover {
        scale: 1.1;
    }
`

export const Logo = styled.div`
    margin: 0 auto;
    ${mixin.centerElement};
`

export const LogoImage = styled.img`
    height: 100%;
    width: auto;
`

const linkStyles = css`
    ${genericLinkStyles};

    position: relative;
    padding: 0 2rem;

    &:hover {
        color: ${colors.primary};

        &::before {
            width: 100%;
        }
    }

    &::before {
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

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${blogMaxWidth};
    gap: 1rem;
`

export const NavLinkButton = styled(NavLink)`
    ${linkStyles};

    align-content: center;

    &.active {
        border-color: ${colors.primary};
        color: ${colors.primary};
    }
`

export const ExternalLinkButton = styled.a`
    ${linkStyles};
    ${mixin.centerElement};

    &::after {
        content: '';
        margin-left: 0.75em;
        width: 0.75em;
        height: 0.75em;
        background-image: url('/images/link-out.svg');
        background-size: contain;
        background-repeat: no-repeat;
    }
`

export const GitHubLogo = styled.img`
    margin-right: 0.4em;
    align-self: center;
    width: 1.4rem;
    height: auto;
`
