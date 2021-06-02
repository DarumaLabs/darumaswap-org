import * as React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../layouts"
import Seo from "../components/seo"
import TokenData from '../components/tokenData'
import { CardBGImage } from '../components/utils'
import Katakana from '../images/katakana.inline.svg'
import { PrimaryButton, SecondaryButton } from '../components/button'

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
    margin-top: 50px;

    ${({theme}) => theme.media.small`
        margin-top: 50px;
    `}

    ${({theme}) => theme.media.extraSmall`
        margin-top: 30px;
    `}
`

const StyledTokenData = styled(TokenData)`
    margin: 4.5rem auto 0;

    ${({theme}) => theme.media.medium`
        margin-top: 4rem;
    `}

    ${({theme}) => theme.media.small`
        margin-top: 2rem;
    `}
`

const Title = styled.h1`
    margin: 0 auto 0;
    text-align: center;
    font-size: 6rem;
    font-weight: 600;
    line-height: 7rem;
    text-shadow: 5px 3px ${({theme}) => theme.black};

    ${({theme}) => theme.media.large`
        font-size: 4.5rem;
        line-height: 5.5rem;
    `}

    ${({theme}) => theme.media.medium`
        font-size: 5rem;
        line-height: 6rem;
    `}

    ${({theme}) => theme.media.small`
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

const TitleSection = styled.section`
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between
`

const StyledKatakana = styled(Katakana)`
    width: 450px;
    min-width: 450px;

    ${({theme}) => theme.media.large`
        width: 300px;
        min-width: 300px;
    `}

    ${({theme}) => theme.media.large`
        display: none;
    `}
`

const TitleWrapper = styled.div`
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Subtitle = styled.h2`
    margin-top: auto;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;

    ${({theme}) => theme.media.large`
        margin-top: 4rem;
    `}

    ${({theme}) => theme.media.small`
        margin-top: 1.5rem;
    `}
`

const TitleButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;

    & > * {
        margin: 0 1rem;
    }

    ${({theme}) => theme.media.large`
        margin-bottom: 0;
    `}

    ${({theme}) => theme.media.small`
        flex-direction: column;
        align-items: center;
        margin-top 1.25rem;

        & > * {
            margin: 0.75rem 0;
        }
    `}
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
                <TitleSection>
                    <TitleWrapper>

                        <Title>
                            Discover
                            <span> </span>
                            <DarumaTitle>Daruma</DarumaTitle>
                            <span> </span>
                            NFT Worldwide
                        </Title>

                        <Subtitle>Travel the world and discover all hidden Daruma NFT</Subtitle>

                        <TitleButtonsWrapper>
                            <PrimaryButton>Use Darumascan</PrimaryButton>
                            <SecondaryButton>Learn More</SecondaryButton>
                        </TitleButtonsWrapper>

                    </TitleWrapper>
                    <StyledKatakana />
                </TitleSection>
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
