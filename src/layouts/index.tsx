import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
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
        </ThemeProvider>
    )
}
