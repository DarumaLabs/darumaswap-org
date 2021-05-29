import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'
import { Link } from "gatsby"
import { darken } from 'polished'

import Menu from '../Menu'
import Daruma from '../images/daruma.inline.svg'
import MenuIcon from '../images/menu.inline.svg'

const StyledHeader = styled.header`
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 5rem;
    position: sticky;
    top: 0;

    ${({theme}) => theme.media.large`
        padding: 1rem 1.25rem;
    `}

    ${({theme}) => theme.media.medium`
        padding: 1.5rem 1.25rem;
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
    border-radius: 8px;

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

const ExternalNavLink = styled.a`
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

const Header = ({ siteTitle }) => (
    <StyledHeader>
        <StyledTitleNav>
            <StyledHomeLink to="/" >
                <StyledDaruma />
                <StyledTitle>{siteTitle}</StyledTitle>
            </StyledHomeLink>
        </StyledTitleNav>
        <StyledNav>
            <StyledNavLink to="/team" >Meet Team</StyledNavLink>
            <StyledNavLink to="/team" >Community</StyledNavLink>
            <ExternalNavLink
                href="https://exchange.pancakeswap.finance/"
                target="_blank"
            >
                Buy DARUMA
            </ExternalNavLink>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
