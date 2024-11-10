import { colors, borderRadius, fontSizes, breakpoints } from 'src/styles/commonStyles'
import styled from 'styled-components'

export const Overview = styled.div`
    position: relative;
    display: flex;
    justify-content: start;
    gap: 2rem;

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
`

export const Description = styled.div`
    max-height: 0;
    opacity: 0;
    transform: translateY(-10px);
    overflow: hidden;
    transition: 0.3s ease-in-out 0.3s;
`

export const StyledMemberPresentation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    margin: 0 2rem 2rem 2rem;
    padding: 1rem;
    border: 2px solid ${colors.border};
    border-radius: ${borderRadius};

    &:nth-child(even) {
        margin-left: auto;

        & ${Overview} {
            justify-content: end;
            flex-direction: row-reverse;

            &::after {
                right: auto;
                left: 1.5rem;
            }
        }
    }

    &:hover {
        ${Description} {
            max-height: 20rem;
            opacity: 1;
            transform: translateY(0);
        }

        & ${Overview}::after {
            transform: rotate(90deg);
        }
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
