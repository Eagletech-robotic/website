import styled from 'styled-components'
import { breakpoints, postSummariesGap } from '../../styles/commonStyles'

export const StyledPostsList = styled.div`
    display: none;

    @media (min-width: ${breakpoints.tablet}) {
        display: block;
    }
`

export const Posts = styled.div`
    column-count: 2;
    column-gap: ${postSummariesGap.desktop};
`
