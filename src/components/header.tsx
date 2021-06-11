import React, { useState, useLayoutEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { darken, lighten, transparentize } from 'polished'

import useScrollPosition from '../hooks/useScrollPosition'
import Menu from './menu'
import Daruma from '../images/daruma.inline.svg'
import MenuIcon from './menuIcon'
import { PrimaryButton } from './button'

const StyledHeader = styled.header`
    z-index: 99;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 5rem;
    position: sticky;
    top: -1px;
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

    ${({theme, isOpen}) => theme.media.medium`
        overflow-y: scroll;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: fixed;
        background: ${transparentize(0.2, theme.bg1)};
        backdrop-filter: blur(8px);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: opacity 0.3s ease, ${isOpen || 'visibility 0s linear 0.3s'};
        opacity: ${isOpen ? '1' : '0'};
        visibility: ${isOpen ? 'visibile' : 'hidden'};
    `}
`

const StyledHomeLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
`

const AppLink = styled(PrimaryButton)`
    ${({theme}) => theme.media.medium`
        display: none;
    `}
`

const StyledDaruma = styled(Daruma)`
    width: 2.5rem;
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
    z-index: 99;
    width: 2rem;

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

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toogleIsMenuOpen = useCallback(() => {
        setIsMenuOpen(!isMenuOpen)
    }, [isMenuOpen, setIsMenuOpen])

    // useLayoutEffect(() => {
    //     if (isMenuOpen) {
    //         document.
    //     }
    // }, [isMenuOpen])



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
            <StyledNav isOpen={isMenuOpen} >
                {
                    data.site.siteMetadata.menulinks.map((menulink, index) => {
                        return <Menu key={index} menulink={menulink} />
                    })
                }
                <AppLink
                    target="_blank"
                    href="https://app.darumaswap.org/"
                >
                    Use Darumaswap
                </AppLink>
            </StyledNav>
            <StyledMenuIcon isOpen={isMenuOpen} onClick={toogleIsMenuOpen} />
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
