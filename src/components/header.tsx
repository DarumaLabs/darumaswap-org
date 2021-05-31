import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { darken, lighten } from 'polished'

import useScrollPosition from '../hooks/useScrollPosition'
import Menu from './menu'
import Daruma from '../images/daruma.inline.svg'
import MenuIcon from '../images/menu.inline.svg'

const StyledHeader = styled.header`
    z-index: 99;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 5rem;
    position: sticky;
    top: 0;
    background: ${({theme, transparentHeader}) => transparentHeader ? 'transparent' : theme.bg1};
    border-bottom: ${({theme, transparentHeader}) => transparentHeader ? 'none' : `1px solid ${lighten(0.1, theme.bg1)}`};
    transition: background 0.3s ease;

    ${({theme}) => theme.media.large`
        padding: 1rem 1.25rem;
    `}

    ${({theme}) => theme.media.medium`
        padding: 1rem 1.25rem;
    `}
`

const StyledTitleNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${({theme}) => theme.media.medium`
        display: none;
    `}
`

const StyledHomeLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
`

const AppLink = styled.a`
    display: flex;
    align-items: center;
    outline: none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    background: ${({theme}) => theme.gradient1};
    height: 35px;
    padding: 0 20px;
    color: ${({theme}) => theme.text1};
    border-radius: 0.5rem;

    &.disabled {
        cursor: auto;
    }
`

const StyledDaruma = styled(Daruma)`
    width: 40px;
`

const StyledTitle = styled.h2`
    font-size: 1.25rem;
    margin: 0;
    margin-left: 20px;

    ${({theme}) => theme.media.medium`
        display: none;
    `}
`

const StyledNavLink = styled(Link)`
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    margin-right: 20px;
    text-decoration: none;
    color: ${({theme}) => theme.text1};

    &:hover {
        color: ${({theme}) => darken(0.2, theme.text1)}
    }
`

const StyledMenuIcon = styled(MenuIcon)`
    display: none;

    ${({theme}) => theme.media.medium`
        display: block;
    `}
`

function Header({ siteTitle }) {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    menulinks {
                        name
                        sublinks {
                            name
                            href
                        }
                    }
                    title
                }
            }
        }
    `)

    const [isHeaderTransparent, setIsHeaderTransparent] = useState(true)

    useScrollPosition(({ currPos }) => {
        setIsHeaderTransparent(currPos.y >= 0)
    })

    return (
        <StyledHeader transparentHeader={isHeaderTransparent} >
            <StyledTitleNav>
                <StyledHomeLink to="/" >
                    <StyledDaruma />
                    <StyledTitle>{siteTitle}</StyledTitle>
                </StyledHomeLink>
            </StyledTitleNav>
            <StyledNav>
                {
                    data.site.siteMetadata.menulinks.map((menulink, index) => {
                        return <Menu key={index} menulink={menulink} />
                    })
                }
                <AppLink
                    target="_blank"
                    href="https://app.darumascan.org/"
                >
                    Use Darumascan
                </AppLink>
            </StyledNav>
            <StyledMenuIcon />
        </StyledHeader>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
