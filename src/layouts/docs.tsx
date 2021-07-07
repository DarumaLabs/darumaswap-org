import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from './'
import Seo from '../components/seo.tsx'
import TableOfContent from '../components/tableOfContent'
import { NavigationDirection, NavigationButton } from '../components/button.tsx'
import Arrow from '../images/arrow.svg'
import GithubIcon from '../images/github.inline.svg'

const DocsContent = styled.section`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-left: 304px;
    right: 0;
    padding: 1rem 3rem 2rem;

    ${({theme}) => theme.media.large`
        margin: 0;
    `}


    ${({theme}) => theme.media.small`
        padding: 1rem 1rem 2rem;
    `}
`

const StyledBody = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    max-width: 1000px;

    & p, & li, & a {
        font-size: 17px;
    }

    & h2 {
        font-size: 1.75rem;
        font-weight: 500;
        line-height: 1;
        margin: 1.5rem 0 1.25rem;
    }

    & h3 {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1;
        margin: 1.5rem 0 1.25rem;
    }

    & h2, & h3 {
        scroll-margin-top: 5.5rem;
    }

    & li {
        font-family: 'Source Sans Pro', sans-serif;
    }

    & ul {
        color: ${({theme}) => theme.text1};
    }

    & hr {
        border-color: ${({theme}) => theme.text2};
        border-width: 1px 0 0;
        width: 90%;
        margin: 2rem auto;
    }

    & p {
        margin: 0 0 1.5rem;
    }

    & li {
        margin: 0 0 0.25rem;
    }

    & li::marker {
        color: ${({theme}) => theme.text1};
    }

    & .anchor {
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity 250ms ease 0s;
        transform: translateX(-150%);
        opacity: 0;
    }

    & .anchor svg {
        fill: ${({theme}) => theme.text1};
        width: 1.5rem;
        height: 1.5rem;
    }

    & h2:hover .anchor, & h3:hover .anchor {
        opacity: 1;
    }

    ${({theme}) => theme.media.small`
        & .anchor {
            display: none;
        }

        & h2 {
            font-size: 1.5rem;
        }

        & h3 {
            font-size: 1.25rem;
        }
    `}
`

const DocsTitle = styled.h1`
    font-size: 2.75rem;
    font-weight: 500;
    margin: 1rem 0 0;

    ${({theme}) => theme.media.small`
        font-size: 2.5rem;
        margin: 0;
    `}
`

const NavigationWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    ${({theme}) => theme.media.small`
        flex-wrap: wrap;
        column-gap: 2rem;
        row-gap: 1rem;
        align-items: center;

        & > a {
            margin: 0 auto;
        }

        & > div {
            display: none;
        }
    `}
`

const Row = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    & > * {
        flex-shrink: 0;
    }

    ${({theme}) => theme.media.small`
        & > * {
            flex-shrink: initial;
        }
    `}
`

const EditContentLink = styled.a`
    display: flex;
    align-items: center;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${({theme}) => theme.text2};
    transition: color 250ms ease;
    margin-right: 1rem;

    & > svg {
        margin-right: 0.5rem;
        widht: 1.5rem;
        height: 1.5rem;
    }

    &:hover {
        color: ${({theme}) => theme.text1};
    }

    ${({theme}) => theme.media.small`
        display: none;
    `}
`

export default function Docs({data, pageContext, path}) {
    const {node, next, previous} = data.allMdx.edges.filter(docs =>
        docs.node.fields.slug === path
    )[0] ?? {}

    if (!node) {
        return null
    }

    const editContentUrl = data.site.siteMetadata.repository
    + '/tree/documentation/'
    + pageContext.relativePath

    return (
        <Layout isDocs={true} path={path} >
            <Seo title="Documentation" />
            <DocsContent>
                <StyledBody>
                    <Row>
                        <DocsTitle>{node.frontmatter.title}</DocsTitle>
                        <EditContentLink
                            href={editContentUrl}
                            target='_blank'
                        >
                            <GithubIcon />
                            Edit page
                        </EditContentLink>
                    </Row>
                    <MDXRenderer>{data.mdx.body}</MDXRenderer>
                    <NavigationWrapper>
                        {previous && node.fields.slug !== '/docs/' &&
                            <NavigationButton
                                direction={NavigationDirection.Previous}
                                to={previous.fields.slug}
                            >{previous.frontmatter.title}</NavigationButton> ||
                            <div />
                        }
                        {next && next.fields.slug !== '/docs/' &&
                            <NavigationButton
                                direction={NavigationDirection.Next}
                                to={next.fields.slug}
                            >{next.frontmatter.title}</NavigationButton>
                        }
                        {node.fields.slug === '/docs/' &&
                            <NavigationButton
                                direction={NavigationDirection.Next}
                                to={data.allMdx.edges[0].node.fields.slug}
                            >{data.allMdx.edges[0].node.frontmatter.title}</NavigationButton>
                        }
                    </NavigationWrapper>
                </StyledBody>
                <TableOfContent headings={node.headings} />
            </DocsContent>
        </Layout>
    )
}

export const query = graphql`
    query DocsPageQuery($relativePath: String) {
        mdx(fields: { relativePath: { eq: $relativePath } }) {
            body
        }
        site {
            siteMetadata {
                repository
            }
        }
        allMdx(
            filter: { fileAbsolutePath: { regex: "/docs/" } },
            sort: { order: ASC, fields: fileAbsolutePath }
        ) {
            edges {
                node {
                    headings {
                        value
                        depth
                    }
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
                next {
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
                previous {
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
