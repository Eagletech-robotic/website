import { colors, borderRadius, fontSizes, breakpoints } from 'src/styles/commonStyles'
import styled from 'styled-components'

export const Overview = styled.div<{ $isOpen: boolean }>`
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

        transform: ${(props) => (props.$isOpen ? 'rotate(90deg)' : 'rotate(0)')};
    }
`

export const Description = styled.div<{ $isOpen: boolean }>`
    transition: 0.3s ease-in-out;

    max-height: ${(props) => (props.$isOpen ? '200rem' : 0)};
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
    transform: ${(props) => (props.$isOpen ? 'translateY(0)' : 'translateY(-10px)')};
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
    cursor: pointer;

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
