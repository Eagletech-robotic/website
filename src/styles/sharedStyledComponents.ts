import styled from 'styled-components'
import logo from '/images/logo_128.png'
import { colors } from './commonStyles'

export const InlineLogo = styled.div`
    width: 1.2em;
    height: 1.2em;
    display: inline-block;
    background-size: contain;
    vertical-align: middle;
    background-image: url(${logo});
`

export const LoadingSpinner = styled.div`
    border: 4px solid #0001;
    border-top-color: ${colors.primary};
    border-radius: 50%;

    width: 40px;
    height: 40px;
    margin: 20px auto;

    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`