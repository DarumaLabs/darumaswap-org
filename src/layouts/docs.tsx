import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from './'
import Seo from '../components/seo.tsx'
import DocsSidebar from '../components/docsSidebar'
import TableOfContent from '../components/tableOfContent'
import Arrow from '../images/arrow.svg'

const DocsContent = styled.section`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-left: 304px;
    right: 0;
    padding: 1rem 1rem 1rem 3rem;
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
`

const DocsTitle = styled.h1`
    width: 100%;
    font-size: 2.75rem;
    font-weight: 500;
    margin: 1rem 0 0;
`

export default function Docs(props) {
    const data = useStaticQuery(graphql`
        {
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
                }
            }
        }
    `)

    const {node: docs} = data.allMdx.edges.filter(docs =>
        docs.node.fields.slug === props.path
    )[0] ?? {node: undefined}

    if (!docs) {
        return null
    }

    return (
        <Layout isDocs={true} >
            <Seo title="Documentation" />
            <DocsSidebar path={props.location.pathname} />
            <DocsContent>
                <StyledBody>
                    <DocsTitle>{docs.frontmatter.title}</DocsTitle>
                    {props.children}
                </StyledBody>
                <TableOfContent headings={docs.headings} />
            </DocsContent>
        </Layout>
    )
}
