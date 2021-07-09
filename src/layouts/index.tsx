import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Header from '../components/header'
import DocsHeader from '../components/header/docs'
import Footer from '../components/footer'
import ThemeProvider from '../styles/theme'
import { CardRadial } from '../components/utils'

import '../styles/layout.css'
import '../styles/fonts.css'

interface LayoutProps {
    children: React.ReactNode,
    isDocs: boolean,
    path: string
}

export default function Layout({ children, isDocs, path }: LayoutProps) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <ThemeProvider>
            <CardRadial/>
            {isDocs ? (
                <DocsHeader path={path} />
            ) : (
                <Header siteTitle={data.site.siteMetadata.title} />
            )}
            {children}
            {!isDocs &&
                <Footer />
            }
        </ThemeProvider>
    )
}
