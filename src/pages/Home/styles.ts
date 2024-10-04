import {
    breakpoints,
    colors,
    fontSizes,
    hoverTransitionTimingFunction,
    lineHeights,
} from 'src/styles/commonStyles'
import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    background-color: ${colors.darkBackground};
    color: ${colors.textWhite};

    & > :nth-child(even) {
        background-color: ${colors.primaryDarkBlue};
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 130vh;
    z-index: 1;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6.5rem;
    position: sticky;
    top: 9rem;

    @media (min-width: ${breakpoints.tablet}) {
        margin-bottom: 8rem;
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

export const Logo = styled.div`
    height: 20rem;
    width: 20rem;
    z-index: -1;
    background-image: url('/images/logo.png');
    background-size: contain;

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
    padding: 10rem 0;
    z-index: 5;

    @media (min-width: ${breakpoints.tablet}) {
        flex-direction: row;
        padding: 15rem 0;
    }
`

export const Button = styled.button`
    margin-top: 2rem;
    border: 1px solid ${colors.primaryYellow};
    background-color: transparent;
    padding: 1rem 4rem 1rem 3rem;
    color: ${colors.textWhite};
    border-radius: 2rem;

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

    @media (min-width: ${breakpoints.tablet}) {
        max-width: 40vw;
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

export const Image = styled.img`
    width: 100%;
    max-width: 20rem;
    margin-top: 2rem;

    @media (min-width: ${breakpoints.tablet}) {
        max-width: 30rem;
    }
`
