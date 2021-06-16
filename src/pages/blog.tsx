import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../layouts"
import Seo from "../components/seo"
import BlogCard from '../components/blogCard'

const BlogSection = styled.section`
    margin: 4rem auto;
    box-sizing: border-box;
    max-width: 1328px;
    padding: 0 4rem;
    width: 100%;
`

const BlogCardsWrapper = styled.div`
    width: 100%;
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 4rem;

    & > * {
        &:first-child {
            grid-column: 1 / -1;
        }
    }
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
                                    fluid(maxWidth: 800) {
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
                <BlogCardsWrapper>
                    {
                        posts.map((post, index) =>
                            <BlogCard key={index} large={index == 0} data={post.node} />
                        )
                    }
                </BlogCardsWrapper>
            </BlogSection>
        </Layout>
    )
}
