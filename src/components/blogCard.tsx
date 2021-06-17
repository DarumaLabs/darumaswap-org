import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { transparentize } from 'polished'

const BlogCardsWrapper = styled.div`
    width: 100%;
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 4rem;
    box-sizing: border-box;

    ${({theme}) => theme.media.large`
        justify-items: center;
        grid-template-columns: repeat(2, 1fr);
        max-width: 50rem;
        margin-left: auto;
        margin-right: auto;
    `}

    ${({theme}) => theme.media.small`
        grid-template-columns: 1fr;
        padding: 0 1rem;
        gap: 2rem;
    `}
`

interface BlogCardsSectionProps {
    large: boolean,
    data: Array<BlogCardData>
}

export default function BlogCardsSection(props: BlogCardsSectionProps) {
    return (
        <BlogCardsWrapper>
            {
                props.data.map((post, index) =>
                    <BlogCard key={index} large={index === 0 && props.large} data={post.node} />
                )
            }
        </BlogCardsWrapper>
    )
}

const StyledCard = styled(Link)`
    display: flex;
    flex-wrap: no-wrap;
    background: ${({theme}) => theme.bg2};
    border-radius: 0.75rem;
    border: 2px solid ${({theme}) => theme.bg2};
    text-decoration: none;
    transition: transform 0.3s cubic-bezier(0.1, 0.7, 0.2, 1);
    grid-column: 1 / -1;

    &:hover {
        transform: translate(4px, 2px);
    }

    ${({large, theme}) => {
        const themeCssFunction = large ? theme.media.large : css

        return themeCssFunction`
            flex-direction: column;
            border-width: 1px;
            grid-column: auto;
            max-width: 22.5rem;

            & ${CardBanner} {
                height: 14.3rem;
            }

            & ${CardTitleWrapper} {
                width: 100%;
            }

            & ${CardTitle} {
                font-size: 1.5rem;
                margin: 0.5rem 1rem 0;
            }
            & ${CardDescription} {
                font-size: 1rem;
                margin: 1rem;
            }
        `
    }}
`

const CardBanner = styled(BackgroundImage)`
    width: 100%;
    height: 27rem;
    background-size: cover;
    background-position: center;
    border-radius: 0.75rem;
    overflow: hidden;
`

const CardTitleWrapper = styled.div`
    width: 30rem;
    flex-shrink: 0;
`

const CardTitle = styled.h2`
    font-size: 3rem;
    font-weight: 500;
    margin: 1rem 2rem 0;
    line-height: 1.3;
`

const CardDate = styled.p`
    color: ${({theme}) => theme.text2};
    margin: 1rem 2rem 0;
`

const CardDescription = styled.p`
    margin: 1rem 2rem 0;
    font-size: 1.5rem;
    line-height: 1.3;
`

interface BlogCardData {
    frontmatter: {
        title: string,
        date: string,
        description: string,
        banner: {
            childImageSharp: {
                fluid: FluidObject
            }
        }
    },
    fields: {
        slug: string
    }
}

interface BlogCardProps {
    large: boolean,
    data: BlogCardData
}

function BlogCard(props: BlogCardProps) {
    console.log(props.data.frontmatter.banner)
    return (
        <StyledCard to={props.data.fields.slug} large={props.large} >
            <CardBanner fluid={props.data.frontmatter.banner.childImageSharp.fluid} />
            <CardTitleWrapper>
                <CardDate>{props.data.frontmatter.date}</CardDate>
                <CardTitle>{props.data.frontmatter.title}</CardTitle>
                <CardDescription>{props.data.frontmatter.description}</CardDescription>
            </CardTitleWrapper>
        </StyledCard>
    )
}

export { BlogCardData }
