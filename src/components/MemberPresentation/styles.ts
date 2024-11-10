import {
    colors,
    borderRadius,
    fontSizes,
    breakpoints,
    hoverTransitionTimingFunction,
} from 'src/styles/commonStyles'
import styled from 'styled-components'

export const StyledMemberPresentation = styled.div`
    position: relative;
    width: 80%;
    margin-bottom: 2rem;
    display: flex;
    justify-content: start;
    padding: 1rem;
    gap: 2rem;
    border: 1px solid ${colors.border};
    border-radius: ${borderRadius};

    &:nth-child(even) {
        justify-self: end;
        justify-content: end;
        flex-direction: row-reverse;

        &::after {
            right: auto;
            left: 1.5rem;
        }
    }

    &::after {
        content: '';
        background-image: url('/images/unfold-icon.svg');
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        height: 1.5rem;
        width: 1.5rem;
        right: 1.5rem;
        align-self: center;
        transition: transform ease-in-out 0.2s;
    }

    &:hover::after {
        transform: rotate(90deg);
    }
`

export const MemberPhoto = styled.div<{ src: string }>`
    width: 5rem;
    height: 5rem;
    flex-shrink: 0;
    border-radius: ${borderRadius};
    background-color: ${colors.primary};
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
`

export const Title = styled.div`
    align-self: center;
    font-size: ${fontSizes.mobile.content};
    font-weight: bold;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.content};
    }
`

export const Description = styled.div`
    font-size: ${fontSizes.mobile.content};
    color: ${colors.primary};

    @media (min-width: ${breakpoints.tablet}) {
        font-size: ${fontSizes.desktop.content};
    }
`
