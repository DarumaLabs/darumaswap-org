import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import { darken } from 'polished'

const MenuTitle = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    margin-right: 20px;
    text-decoration: none;
    color: ${({theme}) => theme.text1};
    z-index: 1;

    ${({theme}) => theme.media.medium`
        font-size: 1.75rem;
        font-weight: 600;
    `}
`

const FloatingMenu = styled.nav`
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.black};
    margin-top: 1.75rem;
    padding: 10px 20px 10px 10px;
    border-radius: 0.5rem;

    ${({theme}) => theme.media.medium`
        padding: 0;
        margin: 0 0 0 1rem;
        background: transparent;
    `}
`

const FloatingMenuWrapper = styled.div`
    display: none;
    position: absolute;
    left: -1rem;
    top: 0;
    min-width: 150px;

    ${({theme}) => theme.media.medium`
        display: inherit;
        position: relative;
        min-width: auto;
        left: 0;
        margin-bottom: 2rem;
    `}
`

const MenuWrapper = styled.div`
    cursor: pointer;
    position: relative;
    transition: transform 0.3s cubic-bezier(0.1, 0.7, 0.2, 1);

    ${({theme}) => theme.media.minMedium`
        &:hover > ${FloatingMenuWrapper} {
            display: inherit;
        }

        &:hover > ${MenuTitle} {
            color: ${darken(0.2, theme.text1)};
        }

        &:hover {
            transform: translate(2px, 1px);
            height: 100%;
        }
    `}

    ${({theme}) => theme.media.medium`
        margin-left: 2rem;
    `}
`

const StyledLink = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    color: ${({theme}) => theme.text1};
    text-decoration: none;
    margin: 5px 0;
    white-space: nowrap;
    align-self: flex-start;

    &:hover {
        color: ${({theme}) => darken(0.2, theme.text1)};
    }

    ${({theme}) => theme.media.medium`
        font-size: 1.25rem;
    `}
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
