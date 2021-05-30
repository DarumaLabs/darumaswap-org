import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import { darken } from 'polished'

const MenuTitle = styled.p`
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    margin-right: 20px;
    text-decoration: none;
    color: ${({theme}) => theme.text1};
    z-index: 1;
`

const FloatingMenu = styled.nav`
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.black};
    margin-top: 1.75rem;
    padding: 10px 20px 10px 10px;
    border-radius: 0.5rem;
`

const FloatingMenuWrapper = styled.div`
    display: none;
    position: absolute;
    left: -1rem;
    top: 0;
    min-width: 150px;
`

const MenuWrapper = styled.div`
    cursor: pointer;
    position: relative;
    transition: transform 0.3s cubic-bezier(0.1, 0.7, 0.2, 1);

    &:hover > ${FloatingMenuWrapper} {
        display: inherit;
    }

    &:hover > ${MenuTitle} {
        color: ${({theme}) => darken(0.2, theme.text1)};
    }

    &:hover {
        transform: translate(2px, 1px);
        height: 100%;
    }
`

const StyledLink = styled(Link)`
    color: ${({theme}) => theme.text1};
    text-decoration: none;
    margin: 5px 0;
    white-space: nowrap;
    align-self: flex-start;

    &:hover {
        color: ${({theme}) => darken(0.2, theme.text1)};
    }
`

interface MenuProps {
    menulink: {
        name: string,
        sublinks: Array<{
            name: string,
            href: string
        }>
    }
}

export default function Menu({ menulink }: MenuProps) {
    return (
        <MenuWrapper>
            <MenuTitle>{menulink.name}</MenuTitle>
            <FloatingMenuWrapper>
                <FloatingMenu>
                    {
                        menulink.sublinks.map((link, index) => {
                            return <StyledLink key={index} to={link.href} >{link.name}</StyledLink>
                        })
                    }
                </FloatingMenu>
            </FloatingMenuWrapper>
        </MenuWrapper>
    )
}
