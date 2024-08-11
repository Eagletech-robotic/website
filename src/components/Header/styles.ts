import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { breakpoints, hoverTransitionTimingFunction, primaryColor } from '../../styles/commonStyles'

export const StyledHeader = styled.div`
    position: sticky;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    top: 0;
    z-index: 999;

    overflow: hidden;
    padding: 1.5rem;
    gap: 1rem;

    background-color: #fcfcfc;
    box-shadow: 0px 1px 15px 0px;
    border-bottom: 1px solid black;
    font-weight: 600;

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
    }
`

const linkButtonStyles = css`
    padding: 1rem 3rem;

    text-align: center;
    align-content: center;

    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;

    transition: 0.3s ${hoverTransitionTimingFunction};

    @media (min-width: ${breakpoints.tablet}) {
        &:hover {
            transform: scale(1.15);
        }
    }
`

export const Logo = styled(NavLink)`
    ${linkButtonStyles}

    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 0;

    img {
        height: 4rem;
        width: auto;
    }
`

export const Links = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    flex-grow: 2;

    gap: 1rem;

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
    }
`

export const NavLinkButton = styled(NavLink)`
    ${linkButtonStyles}

    border: 2px solid black;
    border-radius: 2rem;

    &.active {
        border-color: ${primaryColor};
        color: ${primaryColor};
    }

    &:hover {
        border-color: ${primaryColor};
        color: ${primaryColor};
    }
`

export const ExternalLinkButton = styled.a`
    ${linkButtonStyles}

    display: flex;
    border: none;
    gap: 6px;

    justify-content: center;

    img {
        align-self: center;
        width: 1.4rem;
        height: auto;
    }

    @media (min-width: ${breakpoints.tablet}) {
        align-items: center;
    }
`
