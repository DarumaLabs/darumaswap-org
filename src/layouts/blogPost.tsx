import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { FluidObject } from 'gatsby-image'

import Layout from './'
import Seo from '../components/seo'
import BlogAuthor from '../components/blogAuthor'
import Arrow from '../images/arrow.svg'
import Caret from '../images/caret.inline.svg'

const StyledBody = styled.section`
    max-width: 1328px;
    padding: 0 4rem;
    margin: 4rem auto 0;
`

const BlogBanner = styled(BackgroundImage)`
    width: 100%;
    height: 32rem;
    background-size: cover;
    background-position: center;
`

const BlogTitle = styled.h1`
    font-size: 4rem;
    font-weight: 600;
    line-height: 1;
    margin: 1rem 0 0;
`

const BlogBody = styled.div`
    max-width: 750px;
    margin: 2rem 0 0 2rem;

    & * {
        width: 100%;
    }

    & h1 {
        font-size: 2rem;
        font-weight: 600;
        line-height: 1;
        margin: 3rem 0 1.25rem;
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
`

const Breadcrumbs = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem 0 0;

    & > a {
        color: ${({theme}) => theme.text2};
        font-size: 1rem;
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
            <StyledBody>
                <BlogBanner fluid={post.frontmatter.banner.childImageSharp.fluid} />
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
                <BlogBody>{children}</BlogBody>
            </StyledBody>
        </Layout>
    )
}
