import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../layouts"
import Seo from "../components/seo"
import BlogCardsGrid from '../components/blogCard'

const BlogSection = styled.section`
    margin: 4rem auto;
    box-sizing: border-box;
    max-width: 1328px;
    padding: 0 4rem;
    width: 100%;

    ${({theme}) => theme.media.large`
        width: fit-content;
    `}

    ${({theme}) => theme.media.small`
        padding: 0 1rem;
        margin: 4rem auto 0;
    `}
`

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    margin: 0 0 0 2rem;
    line-height: 1;
`

export default function Blog() {
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
            }
        }
    `)

    const posts = data.allMdx.edges

    return (
        <Layout>
            <Seo
                title="Blog"
            />
            <BlogSection>
                <Title>Blog</Title>
                <BlogCardsGrid data={posts} large={true} />
            </BlogSection>
        </Layout>
    )
}
