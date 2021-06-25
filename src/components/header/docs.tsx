import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import DocsSearch from '../docsSearch'
import DarumaWhite from '../../images/logo-white.inline.svg'
import GithubIcon from '../../images/github.inline.svg'

const StyledHeader = styled.header`
    z-index: 99;
    height: 4.25rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1.25rem;
    position: sticky;
    top: -1px;
    border-bottom: 1px solid ${({theme}) => theme.bg3};
`

const Row = styled.div`
    display: flex;
    align-items: center;
`

const TitleLink = styled(Link)`
    display: flex;
    align-items: center;
`

const DocsTitle = styled.h4`
    font-weight: 500;
    margin: 0 0 0 1.25rem;
    font-size: 1rem;
`

const IconLink = styled(Link)`
    width: 2rem;
    height: 2rem;
    margin: 0 0 0 1.25rem;
`

export default function DocsHeader() {
    return (
        <StyledHeader>
            <TitleLink to='/docs' style={{margin: 0}} >
                <DarumaWhite style={{width: '2rem', height: '2rem'}} />
                <DocsTitle>DarumaSwap Documentation</DocsTitle>
            </TitleLink>
            <Row>
                <DocsSearch />
                <IconLink to='https://github.com/darumalabs'>
                    <GithubIcon />
                </IconLink>
            </Row>
        </StyledHeader>
    )
}
