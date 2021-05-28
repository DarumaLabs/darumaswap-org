import styled from 'styled-components';
import backgroundImage from '../../assets/images/background.png'

export const CardBGImage = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({theme}) => theme.bgGradient}, url(${backgroundImage});
    width: 100%;
    height 80%;
    max-height: 1000px;
`

export const CardFade = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
`
