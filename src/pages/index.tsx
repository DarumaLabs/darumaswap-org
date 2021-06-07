import * as React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../layouts"
import Seo from "../components/seo"
import TokenData from '../components/tokenData'
import { CardBGImage, CardRadial } from '../components/utils'
import Katakana from '../images/katakana.inline.svg'
import { PrimaryButton, SecondaryButton } from '../components/button'
import DarumaSwapIllustration from '../images/darumaswap-illustration.png'

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
    margin: 1rem auto 0;
    text-align: center;
    font-size: 6rem;
    font-weight: 600;
    line-height: 7rem;
    text-shadow: 5px 3px ${({theme}) => theme.black};

    ${({theme}) => theme.media.large`
        margin-top: 0;
        font-size: 5.5rem;
        line-height: 6rem;
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
    margin-bottom: 2.5rem;

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
                description="The new generation of decentralised swapping protocol"
            />
            <BGCard>
                <CardBGImage />
                <CardRadial />
            </BGCard>
            <StyledBody>
                <TitleSection>
                    <TitleWrapper>

                        <Title>
                            Master DeFi with
                            <span> </span>
                            <DarumaTitle>DARUMA</DarumaTitle>
                        </Title>

                        <Subtitle>The new generation of decentralised swapping protocol</Subtitle>

                        <TitleButtonsWrapper>
                            <PrimaryButton
                                href="https://app.darumaswap.org"
                            >
                                Use Darumaswap
                            </PrimaryButton>
                            <SecondaryButton
                                href="/buy"
                            >
                                How to buy
                            </SecondaryButton>
                        </TitleButtonsWrapper>

                    </TitleWrapper>
                    <StyledKatakana />
                </TitleSection>
                <StyledTokenData />
                <AppSection />
                <TokenSection />
                <BlogSection />
            </StyledBody>
        </Layout>
    )
}

const SectionWrapper = styled.section`
    margin: 10rem auto 0;
    max-width: 1200px;
    display: flex;
    flex-direction: ${({reverse}) => reverse ? 'row-reverse' : 'row'};
    padding: 0 4rem;

    ${({theme}) => theme.media.medium`
        flex-direction: column;
    `}

    ${({theme}) => theme.media.small`
        padding: 0 1rem;
        margin: 4rem auto 0;
    `}
`

const SectionTitle = styled.h1`
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    margin: 0 0 2rem;

    ${({theme}) => theme.media.small`
        font-size: 2rem;
        text-align: left;
    `}
`

const SectionIllustration = styled.img`
    width: 300px;
    align-self: center;
    border-radius: 8px;

    ${({theme}) => theme.media.medium`
        margin: 0 !important;
    `}
`

const AppIllustration = styled(SectionIllustration)`
    margin-right: 4rem;
`

const SectionText = styled.p`
    font-size: 1.5rem;
    text-align: center;

    ${({theme}) => theme.media.small`
        text-align: left;
    `}
`

const AppSection = props => {
    return (
        <SectionWrapper reverse={true} >
            <div>
                <SectionTitle>DarumaSwap, the new DeFi innovation</SectionTitle>
                <SectionText>
                    Nam eget ligula ut arcu fermentum efficitur. Suspendisse tincidunt molestie nibh sit amet ultrices.
                    Phasellus consectetur lorem vitae lacus mattis, quis sodales tortor ultrices.
                </SectionText>
            </div>
            <AppIllustration src={DarumaSwapIllustration} />
        </SectionWrapper>
    )
}

const TokenIllustration = styled(SectionIllustration)`
    margin-left: 4rem;
`

const TokenSection = props => {
    return (
        <SectionWrapper>
            <div>
                <SectionTitle>Some explainations about the DARUMA token</SectionTitle>
                <SectionText>
                    Nam eget ligula ut arcu fermentum efficitur. Suspendisse tincidunt molestie nibh sit amet ultrices.
                    Phasellus consectetur lorem vitae lacus mattis, quis sodales tortor ultrices.
                </SectionText>
            </div>
            <TokenIllustration src={DarumaSwapIllustration} />
        </SectionWrapper>
    )
}

const BlogCard = styled(Link)`
    width: 18rem;
    padding: 0 1rem;
    height: 8rem;
    background: ${({active, theme}) => active ? theme.primary1 : theme.bg2};
    border-radius: 8px;
    text-align: center;
    text-decoration: none;

    & > h3 {
        color: ${({active, theme}) => active ? theme.text1 : theme.primaryText1};
        font-weight: 600;
        font-size: 1.5rem;
        margin: 1rem 0 0;
    }

    & > p {
        margin: 0.5rem 0 0;
        font-size: 1rem;
    }
`

const BlogSectionTitle = styled(SectionTitle)`
    font-size: 4rem;
    text-align: center;
`

const BlogSubtitle = styled.h3`
    margin: 2rem 0 0;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
`

const BlogSectionWrapper = styled(SectionWrapper)`
    flex-direction: column;
`

const BlogCardsWrapper = styled.div`
    display: flex;
    justify-content: space-around;

    ${({theme}) => theme.media.large`
        flex-direction: column;
        align-items: center;

        & > ${BlogCard} {
            margin: 1rem 0;
        }
    `}
`

const BlogSection = props => {
    const blogData = [
        {
            link: '/',
            title: 'DarumaSwap',
            description: 'An AMM with automatic raise of the price floor'
        }, {
            link: '/',
            title: 'DARUMA token',
            description: 'Stake LP tokens from DarumaSwap and earn DARUMA'
        }, {
            link: '/',
            title: 'Introducing Daruma',
            description: 'An overview of the concept behind Daruma'
        },
    ]

    return (
        <BlogSectionWrapper>
            <BlogSectionTitle>Last blog posts</BlogSectionTitle>
            <BlogCardsWrapper>
                {
                    blogData.map((data, index) =>
                        <BlogCard key={index} to={data.link} active={!index} >
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                        </BlogCard>
                    )
                }
            </BlogCardsWrapper>
            <BlogSubtitle>
                See more on our
                <span> </span>
                <Link to='/blog' style={{textDecoration: 'none'}} >blog</Link>
            </BlogSubtitle>
        </BlogSectionWrapper>
    )
}
