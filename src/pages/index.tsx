import * as React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../layouts"
import Seo from "../components/seo"
import TokenData from '../components/tokenData'
import { CardBGImage } from '../components/utils'

const BGCard = styled.span`
    width: 100vw;
    height 70%;
    max-height: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`

const StyledBody = styled.div`
    position: relative;
    margin-top: 120px;

    ${({theme}) => theme.media.small`
        margin-top: 50px;
    `}

    ${({theme}) => theme.media.extraSmall`
        margin-top: 30px;
    `}
`

const StyledTokenData = styled(TokenData)`
    margin: 200px auto 0;

    ${({theme}) => theme.media.medium`
        margin-top: 150px;
    `}
`

const Title = styled.h1`
    max-width: 1100px;
    margin: 0 auto 0;
    padding: 0 1.5rem;
    text-align: center;
    font-size: 6rem;
    font-weight: 600;
    line-height: 6rem;

    ${({theme}) => theme.media.large`
        font-size: 4.5rem;
    `}

    ${({theme}) => theme.media.medium`
        font-size: 5rem;
        line-height: 7rem;
        text-align: left;
    `}

    ${({theme}) => theme.media.extraSmall`
        font-size: 3rem;
        line-height: 4rem;
    `}
`

const DarumaTitle = styled.span`
    color: ${({theme}) => theme.primaryText1};
    font-weight: 700;
`

export default function Home() {
    return (
        <Layout>
            <Seo
                title="Home"
                description="Travel the world and discover all hidden Daruma NFT"
            />
            <BGCard>
                <CardBGImage />
            </BGCard>
            <StyledBody>
                <Title>
                    Discover
                    <DarumaTitle> Daruma </DarumaTitle>
                    NFT Worldwide
                </Title>
                <StyledTokenData />
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
