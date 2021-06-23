import React from 'react'
import styled from 'styled-components'

import Layout from './'
import Seo from '../components/seo.tsx'
import DocsSidebar from '../components/docsSidebar'

export default function Docs(props) {
    return (
        <Layout isDocs={true} >
            <Seo title="Documentation" />
            <DocsSidebar path={props.location.pathname} />
        </Layout>
    )
}
