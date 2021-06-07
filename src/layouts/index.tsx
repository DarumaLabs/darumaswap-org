import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Header from '../components/header'
import Footer from '../components/footer'
import ThemeProvider from '../styles/theme'

import '../styles/layout.css'
import '../styles/fonts.css'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
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
            <Header siteTitle={data.site.siteMetadata.title} />
            {children}
            <Footer />
        </ThemeProvider>
    )
}
