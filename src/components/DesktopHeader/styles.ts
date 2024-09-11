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

const scaleOnHover = css`
    &:hover {
        transform: scale(1.125);
    }
`

export const Logo = styled.div`
    height: 100%;
    margin: 0 auto;
    ${mixin.centerElement};
`

export const LogoLink = styled(NavLink)`
    ${linkStyles}
    ${scaleOnHover}

    height: 100%;
    padding: 0.75rem 3rem;
    margin: 0 auto;
`

export const LogoImage = styled.img`
    height: 100%;
    width: auto;
`

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${blogMaxWidth};
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
    ${linkStyles}
    ${scaleOnHover}

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
