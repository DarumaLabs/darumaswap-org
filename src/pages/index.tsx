import * as React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../layouts"
import Seo from "../components/seo"
import TokenData from '../components/tokenData'
import { CardBGImage } from '../components/utils'
import HLogoText from '../images/h-logo-text.png'
import VLogoText from '../images/v-logo-text.png'

const BGCard = styled.span`
    width: 100vw;
    height: 50vh;
    max-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;

    ${({theme}) => theme.media.medium`
        margin-top: 50px;
    `}

    ${({theme}) => theme.media.small`
        margin-top: 75px;
    `}
`

const StyledHLogoText = styled.img`
    width: 50%;
    z-index: 1;

    ${({theme}) => theme.media.medium`
        width: 70%;
    `}

    ${({theme}) => theme.media.small`
        display: none;
    `}
`

const StyledVLogoText = styled.img`
    width: 50%;
    z-index: 1;
    display: none;
    margin-bottom: 50px;

    ${({theme}) => theme.media.small`
        display: inherit;
    `}

    ${({theme}) => theme.media.extraSmall`
        width: 60%;
    `}
`

export default function Home({props}) {
    return (
        <Layout>
            <BGCard>
                <Seo
                    title="Home"
                    description="Travel the world and discover all hidden Daruma NFT"
                />
                <CardBGImage />
                <StyledHLogoText src={HLogoText} />
                <StyledVLogoText src={VLogoText} />
            </BGCard>
            <StyledBody>
                <TokenData />
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
        </Layout>
    )
}
