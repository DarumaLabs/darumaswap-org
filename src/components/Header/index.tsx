import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

import { RowCenter } from '../Row';
import { ReactComponent as Damura } from '../../assets/images/damura.svg';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 1.25rem;
    position: sticky;
    top: 0;
`

const StyledNav = styled(RowCenter)`
    justify-content: space-between;
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

const StyledDamura = styled(Damura)`
    width: 40px;
`

const StyledTitle = styled.h2`
    font-size: 1.25rem;
    margin: 0;
    margin-left: 20px;
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

export default function Header() {
    return (
        <StyledHeader>
            <StyledNav>
                <StyledHomeLink to="/" >
                    <StyledDamura />
                    <StyledTitle>Damurascan</StyledTitle>
                </StyledHomeLink>
            </StyledNav>
            <StyledNav>
                <StyledNavLink to="/team" >Meet Team</StyledNavLink>
                <ExternalNavLink
                    href="https://exchange.pancakeswap.finance/"
                    target="_blank"
                >
                    Buy DAMURA
                </ExternalNavLink>
                <AppLink
                    target="_blank"
                    href="https://app.darumascan.org/"
                >
                    Use Darumascan
                </AppLink>
            </StyledNav>
        </StyledHeader>
    )
}
