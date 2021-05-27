import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import Menu from '../Menu'

import { RowCenter } from '../Row';
import { ReactComponent as Daruma } from '../../assets/images/daruma.svg';

const StyledHeader = styled.header`
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 5rem;
    position: sticky;
    top: 0;

    ${({theme}) => theme.media.small`
        padding: 1rem 1.25rem;
    `}

    ${({theme}) => theme.media.medium`
        padding: 1.5rem 1.25rem;
    `}
`

const StyledTitleNav = styled(RowCenter)`
    justify-content: space-between;
`

const StyledNav = styled(RowCenter)`
    justify-content: space-between;

    ${({theme}) => theme.media.small`
        display: none;
    `}
`

const StyledHomeLink = styled(NavLink)`
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

    ${({theme}) => theme.media.small`
        display: none;
    `}
`

const StyledNavLink = styled(NavLink)`
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    margin-right: 20px;
    text-decoration: none;
    color: ${({theme}) => theme.text1}
`

const ExternalNavLink = styled.a`
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    margin-right: 20px;
    text-decoration: none;
    color: ${({theme}) => theme.text1}
`

const StyledMenu = styled(Menu)`
    display: none;

    ${({theme}) => theme.media.small`
        display: block;
    `}
`

export default function Header() {
    return (
        <StyledHeader>
            <StyledTitleNav>
                <StyledHomeLink to="/" >
                    <StyledDaruma />
                    <StyledTitle>Darumascan</StyledTitle>
                </StyledHomeLink>
            </StyledTitleNav>
            <StyledNav>
                <StyledNavLink to="/team" >Meet Team</StyledNavLink>
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
            <StyledMenu />
        </StyledHeader>
    )
}
