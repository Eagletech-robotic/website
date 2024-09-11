import styled from 'styled-components'
import { breakpoints, colors } from 'src/styles/commonStyles'

export const StyledPostsList = styled.div`
    display: block;

    @media (min-width: ${breakpoints.tablet}) {
        display: none;
    }
`

export const Post = styled.div``

export const Divider = styled.div`
    margin: 1em 0.5em;
    height: 2px;
    background-color: ${colors.border};
`
