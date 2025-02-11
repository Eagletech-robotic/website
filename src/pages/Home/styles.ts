import { Link } from 'react-router-dom'
import {
    breakpoints,
    colors,
    fontSizes,
    headerHeight,
    hoverTransitionTimingFunction,
    lineHeights,
} from 'src/styles/commonStyles'
import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 0;
    background-color: ${colors.darkBackground};
    color: ${colors.textWhite};

    & > :nth-child(even) {
        background-color: ${colors.primaryDarkBlue};
    }

    @media (min-width: ${breakpoints.tablet}) {
        padding: 0 1rem;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 110vh;
    z-index: 1;
    max-height: 60rem;

    @media (min-width: ${breakpoints.tablet}) {
        height: 130vh;
        max-height: 80rem;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6.5rem;
    position: sticky;
    top: 7rem;

    @media (min-width: ${breakpoints.tablet}) {
        margin-bottom: 8rem;
        top: 9rem;
    }
`

export const Title = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: 7rem;
    }
`

export const Subtitle = styled.h2`
    font-size: ${fontSizes.mobile.heading1};
    text-align: center;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.heading1};
    }
`

export const Logo = styled.img`
    height: 20rem;
    width: 20rem;
    z-index: -1;

    @media (min-width: ${breakpoints.tablet}) {
        height: 30rem;
        width: 30rem;
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 5rem 1rem;
    z-index: 5;

    @media (min-width: ${breakpoints.desktop}) {
        flex-direction: row;
        padding: 12rem 0;

        &:nth-child(odd) {
            flex-direction: row-reverse;
        }
    }
`

export const Button = styled.button`
    margin-top: 2rem;
    border: 1px solid ${colors.primaryYellow};
    background-color: transparent;
    padding: 1rem 4rem 1rem 3rem;
    color: ${colors.textWhite};
    border-radius: 2rem;
    position: sticky;
    top: 0rem;

    transition: background-color 0.5s ${hoverTransitionTimingFunction},
        color 0.5s ${hoverTransitionTimingFunction};

    &::after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 1em;
        height: 1em;
        margin-left: 1rem;
        vertical-align: middle;
        background-color: ${colors.textWhite};
        mask: url('/images/button-arrow.svg') no-repeat center;
        mask-size: contain;
        transition: margin-left 0.5s ${hoverTransitionTimingFunction};
    }

    &:hover {
        background-color: ${colors.primaryYellow};
        color: ${colors.text};

        &::after {
            background-color: ${colors.text};
            margin-left: 1.5rem;
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: ${lineHeights.contentLineHeight};

    @media (min-width: ${breakpoints.desktop}) {
        max-width: 40vw;
    }
`

export const InlineLink = styled(Link)`
    position: relative;
    font-style: italic;
    text-decoration: underline;
    text-underline-offset: 0.3em;
    transition: color 0.3s ${hoverTransitionTimingFunction},
        text-underline-offset 0.3s ${hoverTransitionTimingFunction};

    &:hover {
        color: ${colors.primaryYellow};
        text-underline-offset: 0.4em;
    }
`

export const SectionTitle = styled.h2`
    font-size: ${fontSizes.mobile.heading1};
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.heading1};
    }
`

export const Paragraph = styled.p`
    font-size: ${fontSizes.mobile.heading3};
    text-align: center;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.heading3};
    }
`

export const StyledLink = styled(Link)`
    position: sticky;
    top: ${headerHeight.mobile};

    @media (min-width: ${breakpoints.desktop}) {
        top: ${headerHeight.desktop};
    }
`
