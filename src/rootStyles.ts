import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { hoverTransitionTimingFunction, primaryColor } from './styles/commonStyles'

export const Header = styled.div`
    position: sticky;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    top: 0;

    overflow: hidden;
    padding: 1.5rem;
    gap: 1rem;

    background-color: #fcfcfc;
    box-shadow: 0px 1px 15px 0px;
    border-bottom: 1px solid black;
    font-weight: 600;

    @media (min-width: 600px) {
        flex-direction: row;
    }
`

const linkButtonStyles = css`
    padding: 1rem 3rem;

    text-align: center;
    align-content: center;

    border: 2px solid black;
    border-radius: 2rem;
    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;

    transition: 0.3s ${hoverTransitionTimingFunction};
`

export const NavLinkButton = styled(NavLink)`
    ${linkButtonStyles}

    &.active {
        border-color: ${primaryColor};
        color: ${primaryColor};
    }

    &:hover {
        border-color: ${primaryColor};
        color: ${primaryColor};
        transform: scale(1.15);
    }
`

export const ExternalLinkButton = styled.a`
    ${linkButtonStyles}

    display: flex;
    border: none;
    gap: 6px;

    align-items: center;

    img {
        align-self: center;
        width: 1.4rem;
        height: auto;
    }

    &:hover {
        transform: scale(1.15);
    }
`
