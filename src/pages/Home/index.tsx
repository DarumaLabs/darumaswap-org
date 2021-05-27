import styled from 'styled-components';

import { CardFade, CardBGImage } from '../../components/Utils';
import HLogoTextPath from '../../assets/images/h-logo-text.png';
import VLogoTextPath from '../../assets/images/v-logo-text.png';

const BGCard = styled.span`
    width: 100vw;
    height: 70vh;
    max-height: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const HLogoText = ({className}: {
        className?: string
}) => {
    return (
        <img className={className} src={HLogoTextPath} />
    )
}

const StyledHLogoText = styled(HLogoText)`
    width: 50%;
    z-index: 1;

    ${({theme}) => theme.media.medium`
        width: 70%;
    `}

    ${({theme}) => theme.media.small`
        display: none;
    `}
`

const VLogoText = ({className}: {
        className?: string
}) => {
    return (
        <img className={className} src={VLogoTextPath} />
    )
}

const StyledVLogoText = styled(VLogoText)`
    width: 50%;
    z-index: 1;
    display: none;

    ${({theme}) => theme.media.small`
        display: inherit;
    `}

    ${({theme}) => theme.media.extraSmall`
        width: 70%;
    `}
`

export default function Home() {
    return (
        <>
        <BGCard>
            <CardBGImage />
            <CardFade />
            <StyledHLogoText />
            <StyledVLogoText />
        </BGCard>
        <StyledBody>
        </StyledBody>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </>
    )
}
