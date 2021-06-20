import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { FluidObject } from 'gatsby-image'

import Layout from './'
import Seo from '../components/seo'
import BlogAuthor from '../components/blogAuthor'
import TableOfContent from '../components/tableOfContent'
import Arrow from '../images/arrow.svg'
import Caret from '../images/caret.inline.svg'

const StyledBody = styled.section`
    max-width: 1200px;
    padding: 0 4rem;
    margin: 2rem auto 0;

    ${({theme}) => theme.media.small`
        padding: 0 1rem;
    `}
`

const BlogBannerWrapper = styled.div`
    max-width: 1200px;
    height: 32rem;
    margin: 4rem auto 0;
    padding: 0 4rem;

    ${({theme}) => theme.media.large`
        padding: 0;
        height: 26rem;
        margin-top: 0;
    `}
`

const BlogBanner = styled(BackgroundImage)`
    width: 100%;
    height: 100%;
`

const BlogTitle = styled.h1`
    font-size: 4rem;
    font-weight: 600;
    line-height: 1.2;
    margin: 1rem 0 0;

    ${({theme}) => theme.media.small`
        font-size: 3rem;
    `}

    ${({theme}) => theme.media.extraSmall`
        font-size: 2.5rem;
    `}
`

const BlogContent = styled.div`
    margin: 2rem 2rem 0;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    ${({theme}) => theme.media.medium`
        margin-left: 0;
        margin-right: 0;
    `}
`

const BlogBody = styled.div`
    max-width: 750px;

    & img {
        width: 100%;
    }

    & h1 {
        font-size: 2rem;
        font-weight: 600;
        line-height: 1;
        margin: 3rem 0 1.25rem;
        scroll-margin-top: 6.5rem;
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
        padding-left: 0.5rem;
        margin: 0 0 0.5rem;
    }

    & li::marker {
        content: url('${Arrow}');
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

    & h1:hover .anchor {
        opacity: 1;
    }

    ${({theme}) => theme.media.medium`
        max-width: none;
    `}

    ${({theme}) => theme.media.small`
        & .anchor {
            display: none;
        }
    `}

    ${({theme}) => theme.media.extraSmall`
        & h1 {
            font-size: 1.5rem;
        }
    `}
`

const Breadcrumbs = styled.div`
    display: flex;
    align-items: center;

    & > a {
        color: ${({theme}) => theme.text2};
        font-size: 1rem;
        transition: color 250ms ease 0s;
    }

    & > a:hover {
        color: ${({theme}) => theme.text1};
    }

    & > svg {
        margin: 0 1rem;
        stroke: ${({theme}) => theme.text2};
    }
`

interface BlogPostProps {
    children: ReactNode,
    pageContext: any,
    path: string
}

export default function BlogPost({children, pageContext, path}: BlogPostProps) {
    const data = useStaticQuery(graphql`
        {
            allMdx(filter: {fileAbsolutePath: {regex: "/blog/"}}, sort: {order: DESC, fields: frontmatter___date}) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            description
                            banner {
                                childImageSharp {
                                    fluid(quality: 100, maxWidth: 1200) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            authorName
                            authorAvatar {
                                childImageSharp {
                                    fluid(quality: 100, maxWidth: 1200) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                            readingTime {
                                text
                            }
                        }
                        headings {
                            value
                            depth
                        }
                    }
                }
            }
        }
    `)

    const {node: post} = data.allMdx.edges.filter(post =>
        post.node.fields.slug === path
    )[0] ?? {node: undefined}

    if (!post) {
        return null
    }

    return (
        <Layout>
            <Seo
                title={post.frontmatter.title}
            />
            <BlogBannerWrapper>
                <BlogBanner fluid={post.frontmatter.banner.childImageSharp.fluid} />
            </BlogBannerWrapper>
            <StyledBody>
                <Breadcrumbs>
                    <Link to='/' >Home</Link>
                    <Caret height="0.75rem" />
                    <Link to='/blog' >Blog</Link></Breadcrumbs>
                <BlogTitle>{post.frontmatter.title}</BlogTitle>
                <BlogAuthor
                    author={{
                        name: post.frontmatter.authorName,
                        avatar: post.frontmatter.authorAvatar.childImageSharp.fluid
                    }}
                    date={post.frontmatter.date}
                    readingTime={post.fields.readingTime.text}
                />
                <BlogContent>
                    <BlogBody>{children}</BlogBody>
                    <TableOfContent headings={post.headings} />
                </BlogContent>
            </StyledBody>
        </Layout>
    )
}
