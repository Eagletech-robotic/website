import {
    breakpoints,
    colors,
    fontSizes,
    headerHeight,
    hoverTransitionTimingFunction,
    mixin,
} from 'src/styles/commonStyles'
import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    background-color: ${colors.darkBackground};
    color: ${colors.textWhite};
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - ${headerHeight.mobile});
    position: relative;
    z-index: 1;

    @media (min-width: ${breakpoints.desktop}) {
        height: 150vh;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
    z-index: 1;

    position: sticky;
    top: 9rem;

    @media (min-width: ${breakpoints.tablet}) {
        margin-top: 20rem;
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
    position: absolute;
    z-index: -1;
    background-image: url('/images/logo.png');
    background-size: contain;

    @media (min-width: ${breakpoints.tablet}) {
        height: 35rem;
        width: 35rem;
    }
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15rem 0;
`

export const Section1 = styled(Section)`
    background-color: ${colors.darkBackground};
`

export const Section2 = styled(Section)`
    background-color: ${colors.darkBackground};
`

export const Button = styled.button`
    margin-top: 2rem;
    border: 1px solid ${colors.primary};
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
        background-color: ${colors.primary};
        color: ${colors.text};

        &::after {
            background-color: ${colors.text};
            margin-left: 1.5rem;
        }
    }
`

export const SectionTitle = styled.h2`
    font-size: ${fontSizes.mobile.heading2};
    text-align: center;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.heading2};
    }
`
