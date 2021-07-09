import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import DocsSearch from '../docsSearch'
import DocsSidebar from '../docsSidebar'
import DarumaWhite from '../../images/logo-white.inline.svg'
import GithubIcon from '../../images/github.inline.svg'
import HomeIcon from '../../images/home.inline.svg'
import MenuIcon from '../../images/menu.inline.svg'
import SearchIcon from '../../images/search.inline.svg'

const StyledHeader = styled.header`
    background: ${({theme}) => theme.bg1};
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

    ${({theme}) => theme.media.small`
        padding: 0 1rem;
    `}
`

const Row = styled.div`
    display: flex;
    align-items: center;
`

const TitleLink = styled(Link)`
    display: flex;
    align-items: center;
`

const StyledDarumaWhite = styled(DarumaWhite)`
    width: 2rem;
    height: 2rem;

    ${({theme}) => theme.media.small`
        display: none;
    `}
`

const DocsTitle = styled.h4`
    font-weight: 500;
    margin: 0 0 0 1.25rem;
    font-size: 1rem;

    ${({theme}) => theme.media.small`
        margin: 0;
    `}
`

const IconLink = styled(Link)`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0 0 1.25rem;

    ${({theme}) => theme.media.large`
        display: none;
    `}
`

const StyledMenuIcon = styled(MenuIcon)`
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    display: none;
    transform: scaleX(-1);

    ${({theme}) => theme.media.large`
        display: initial;
    `}
`

const StyledSearchIcon = styled(SearchIcon)`
    cursor: pointer;
    width: 1.25rem;
    height: 1.25rem;
    display: none;

    ${({theme}) => theme.media.large`
        display: initial;
    `}
`

const MobileContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(2px);
    transition: opacity 250ms ease, ${({open}) => open || 'visibility 0s linear 250ms'};
    opacity: ${({open}) => open ? '1' : '0'};
    visibility: ${({open}) => open ? 'visible' : 'hidden'};
`

export default function DocsHeader(props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toogleIsSidebarOpen = useCallback(() => {
        setIsSidebarOpen(!isSidebarOpen)
    }, [isSidebarOpen, setIsSidebarOpen])

    return (
        <StyledHeader>
            <StyledMenuIcon onClick={toogleIsSidebarOpen} />
            <TitleLink to='/docs' style={{margin: 0}} >
                <StyledDarumaWhite />
                <DocsTitle>DarumaSwap <span>Documentation</span></DocsTitle>
            </TitleLink>
            <Row>
                <StyledSearchIcon />
                <DocsSearch />
                <IconLink to='https://github.com/darumalabs' >
                    <GithubIcon />
                </IconLink>
                <IconLink to='/' >
                    <HomeIcon />
                </IconLink>
            </Row>
            <DocsSidebar
                path={props.path}
                open={isSidebarOpen}
            />
            <MobileContainer
                onClick={toogleIsSidebarOpen}
                open={isSidebarOpen}
            />
        </StyledHeader>
    )
}
