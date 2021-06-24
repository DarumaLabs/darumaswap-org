import * as React from "react"
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts"
import Seo from "../components/seo"
import BlogCardsGrid, { BlogCardData } from '../components/blogCard'
import TokenData from '../components/tokenData'
import { CardBGImage, CardRadial } from '../components/utils'
import Katakana from '../images/katakana.inline.svg'
import { PrimaryButton, SecondaryButton } from '../components/button'
import LiquidityIcon from '../images/liquidity.inline.svg'
import SwapIcon from '../images/swap.inline.svg'
import StakingIcon from '../images/staking.inline.svg'
import AnalyticsIcon from '../images/analytics.inline.svg'

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

const TitleSection = styled.section`
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 1.5rem;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const DarumaTitle = styled.span`
    color: ${({theme}) => theme.primaryText1};
    font-weight: 700;
    display: none;

    ${({theme}) => theme.media.small`
        display: initial;
    `}
`

const StyledKatakana = styled(Katakana)`
    width: 30rem;
    margin: 0.5rem 0 0;

    ${({theme}) => theme.media.large`
        width: 26rem;
    `}

    ${({theme}) => theme.media.small`
        display: none;
    `}
`

const Subtitle = styled.h2`
    margin-top: 3rem;
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
    const data = useStaticQuery(graphql`
        {
            allMdx(
                filter: {fileAbsolutePath: {regex: "/blog/"}},
                sort: {order: DESC, fields: frontmatter___date},
                limit: 3
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            description
                            banner {
                                childImageSharp {
                                    fluid(quality: 100, maxWidth: 800) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            },
            darumaswapIllustration: file(relativePath: { eq: "darumaswap-illustration.png" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 512) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const blogPosts = data.allMdx.edges

    const ecosystemData: CardsData = {
        title: 'A growing ecosystem',
        cards: [
            {
                link: 'https://app.darumaswap.org/#/liquidity',
                title: 'Adaptive liquidity',
                icon: <LiquidityIcon />,
                description: 'An exchange with a programmable raise of the price floor'
            }, {
                link: 'https://app.darumaswap.org/#/stake',
                title: 'Staking',
                icon: <StakingIcon />,
                description: 'Stake your DARUMA and get a reward on each DarumaSwap trade'
            }, {
                link: 'https://app.darumaswap.org/#/swap',
                title: 'AMM',
                icon: <SwapIcon />,
                description: 'Swap between ERC-20 tokens with the best user friendly application'
            }, {
                link: 'https://app.darumaswap.org/#/analytics',
                title: 'Analytics',
                icon: <AnalyticsIcon />,
                description: 'Track the data of any ERC-20 token with liquidity on DarumaSwap'
            }
        ]
    }

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
                    <Title>
                        Master DeFi with
                        <DarumaTitle> DARUMA</DarumaTitle>
                    </Title>
                    <StyledKatakana />
                    <Subtitle>The new generation of decentralised swapping protocol</Subtitle>
                    <TitleButtonsWrapper>
                        <PrimaryButton
                            href="https://app.darumaswap.org"
                        >
                            Use Darumaswap
                        </PrimaryButton>
                        <SecondaryButton
                            href="/docs"
                        >
                            Documentation
                        </SecondaryButton>
                    </TitleButtonsWrapper>
                </TitleSection>
                <StyledTokenData />
                <AppSection data={data} />
                <TokenSection data={data} />
                <CardsSection data={ecosystemData} primary={false} />
                <BlogCardsSection data={blogPosts} />
            </StyledBody>
        </Layout>
    )
}

const SectionWrapper = styled.section`
    margin: 10rem auto 0;
    max-width: 1200px;
    display: flex;
    flex-direction: ${({reverse}) => reverse ? 'row-reverse' : 'row'};
    justify-content: space-between;
    gap: 4rem;
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

const SectionIllustration = styled(Img)`
    width: 16rem;
    align-self: center;
    border-radius: 8px;
    flex-shrink: 0;

    ${({theme}) => theme.media.medium`
        margin: 0 !important;
    `}
`

const AppIllustration = styled(SectionIllustration)`
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
                <SectionTitle>DarumaSwap adaptive liquidity, the new DeFi innovation</SectionTitle>
                <SectionText>
                    With its adaptive liquidity tax, DarumaSwap allows new projects
                    to launch their token without having to care about liquidity.
                    <br />
                    A token launched on DarumaSwap won't consume much gas,
                    and only take a tax at the time of purchase / sale,
                    unlike a deflationary token.
                </SectionText>
            </div>
            <SectionIllustration fluid={props.data.darumaswapIllustration.childImageSharp.fluid} />
        </SectionWrapper>
    )
}

const TokenSection = props => {
    return (
        <SectionWrapper>
            <div>
                <SectionTitle>DARUMA token, to govern the protocol</SectionTitle>
                <SectionText>
                    Stake DarumaSwap liquidity tokens and earn DARUMA
                    <br />
                    Likewise, the DarumaSwap exchange will take a tax of 0.05% on each trade.
                    in order to buy DARUMA tokens and send them to the DARUMA staking pool.
                </SectionText>
            </div>
            <SectionIllustration fluid={props.data.darumaswapIllustration.childImageSharp.fluid} />
        </SectionWrapper>
    )
}

const CardsWrapper = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 4rem;
`

const Card = styled(Link)`
    max-width: 22.5rem;
    flex-grow: 1;
    flex-basis: 0;
    padding: 0 1rem;
    background: ${({active, theme}) => active ? theme.primary1 : theme.bg2};
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    transition: transform 0.3s cubic-bezier(0.1, 0.7, 0.2, 1);

    & > h3 {
        color: ${({active, theme}) => active ? theme.text1 : theme.primary1};
        font-weight: 600;
        font-size: 1.5rem;
    }

    & > p {
        font-size: 1rem;
    }

    &:hover {
        transform: translate(2px, 1px);
    }

    ${({theme}) => theme.media.medium`
        flex-basis: 25%;
        flex-grow: 0;
    `}

    ${({theme}) => theme.media.small`
        flex-basis: 40%;
        flex-grow: 1;
    `}
`

const CardsSectionTitle = styled(SectionTitle)`
    font-size: 4rem;
    text-align: center;
    margin: 0;
`

const CardsSectionWrapper = styled(SectionWrapper)`
    flex-direction: column;
`

interface CardsData {
    title: string,
    cards: Array<{
        link: string,
        title: string,
        description: string,
        icon?: ReactNode
    }>
}

const CardsSection = (props: {data: CardsData}) => {
    return (
        <CardsSectionWrapper>
            <CardsSectionTitle>{props.data.title}</CardsSectionTitle>
            <CardsWrapper>
                {
                    props.data.cards.map((card, index) =>
                        <Card key={index} to={card.link} active={!index} >
                            <h3>{card.title}</h3>
                            {!!card.icon &&
                                React.cloneElement(card.icon, {style: {
                                    width: '64px',
                                    height: '64px'
                                }})
                            }
                            <p>{card.description}</p>
                        </Card>
                    )
                }
            </CardsWrapper>
        </CardsSectionWrapper>
    )
}

const BlogSubtitle = styled.h3`
    margin: 2rem 0 0;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
`

const BlogCardsSection = (props: {data: Array<BlogCardData>}) => {
    return (
        <CardsSectionWrapper>
            <CardsSectionTitle>Last blog posts</CardsSectionTitle>
            <BlogCardsGrid data={props.data} />
            <BlogSubtitle>
                See more on our
                <span> </span>
                <Link to='/blog' style={{textDecoration: 'none'}} >blog</Link>
            </BlogSubtitle>
        </CardsSectionWrapper>
    )
}
