import styled from 'styled-components'
import backgroundImage from '../images/background.png'
import { transparentize } from 'polished'

export const CardBGImage = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({theme}) =>
        `linear-gradient(to bottom, ${transparentize(1, theme.bg1)}, ${theme.bg1}),
        url(${backgroundImage})`
    };
    width: 100%;
    height: 100%;
`

export const CardRadial = styled.span`
    z-index: -1;
    position: fixed;
    background-image: radial-gradient(50% 50% at 50% 50%, ${({theme}) => transparentize(0.9, theme.primary2)}, transparent);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
