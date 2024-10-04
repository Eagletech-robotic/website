import { breakpoints, colors, fontSizes, headerHeight, mixin } from 'src/styles/commonStyles'
import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    background-color: ${colors.darkBackground};
    color: ${colors.textWhite};
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - ${headerHeight.mobile});
    position: relative;
    z-index: 1;

    @media (min-width: ${breakpoints.desktop}) {
        height: calc(100vh - ${headerHeight.desktop});
    }
`

export const Title = styled.h1`
    font-size: ${fontSizes.mobile.title};
    font-weight: bold;
    margin-bottom: 1rem;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.title};
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
