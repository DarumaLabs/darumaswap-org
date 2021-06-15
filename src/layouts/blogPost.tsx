import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from './'
import Seo from '../components/seo'

export default function BlogPost(props: {children: ReactNode}) {
    const data = useStaticQuery(graphql`
        {
            allMdx(filter: { fileAbsolutePath: { regex: "/blog/" } }, sort: { order: DESC, fields: frontmatter___date }) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Seo
                title={data.allMdx.edges[0].node.fields.slug}
            />
            <div>{props.children}</div>
        </Layout>
    )
}
