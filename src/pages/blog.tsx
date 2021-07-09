import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../layouts"
import Seo from "../components/seo"
import BlogCardsGrid from '../components/blogCard'
import Title from '../components/title'

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
        margin: 2rem auto 0;
    `}
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
