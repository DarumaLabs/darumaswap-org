import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { transparentize } from 'polished'

import Caret from '../images/caret.inline.svg'

const StyledDocsSidebar = styled.nav`
    display: flex;
    flex-direction: column;
    z-index: 99;
    position: fixed;
    width: 17rem;
    left: 0;
    top: 4.25rem;
    bottom: 0;
    border-right: 1px solid ${({theme}) => theme.bg3};
    padding: 1rem 1rem 0 1rem;
    transition: transform 250ms ease;

    ${({theme, open}) => theme.media.large`
        ${!open && 'transform: translateX(-100%);'}
        background: ${theme.bg1};
        top: 0;
    `}
`

const DocsCategoryButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background: transparent;
    outline: none;
    border: none;
    color: ${({theme}) => theme.text1};
    font-size: 1rem;
    width: 100%;
    padding: 0.75rem 0.5rem;
    border-radius: 0.25rem;

    &:hover {
        background: ${({theme}) => transparentize(0.75, theme.bg3)};
    }

    & svg {
        margin: 0 0 0 .5rem;
        width: 0.75rem;
        height: 0.75rem;
        stroke: ${({theme}) => theme.text2};
        transform: rotate(${({active}) => active ? '90deg' : '0deg'});
        transition: transform 250ms ease 0s;
    }
`

interface DocsSidebarProps {
    path: string,
    open: boolean
}

export default function DocsSidebar(props: DocsSidebarProps) {
    const [selectedMenu, setSelectedMenu] = useState()

    const data = useStaticQuery(graphql`
        {
            docsCategories: allDirectory(
                filter: {dir: {regex: "/.*\/docs$/"}}
                sort: { fields: name, order: ASC }
            ) {
                edges {
                    node {
                        name
                    }
                }
            },
            docsLinks: allMdx(
                filter: {fileAbsolutePath: {regex: "/docs/"}}
                sort: {order: ASC, fields: fileAbsolutePath}
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    console.log(data)

    const categories = data.docsCategories.edges

    const docsLinks = data.docsLinks.edges

    const toggleSelectedMenu = useCallback((menu) => {
        setSelectedMenu(selectedMenu === menu ? null : menu)
    }, [setSelectedMenu, selectedMenu])

    return (
        <StyledDocsSidebar open={props.open} >
            {
                categories.map((category, index) =>
                    <>
                        <DocsCategoryButton
                            onClick={() => toggleSelectedMenu(category.node.name)}
                            active={selectedMenu == category.node.name}
                            key={index}
                        >
                            {category.node.name
                                .replace(/\d+-/g, '')
                                .replace(/-/, ' ')
                                .toUpperCase()
                            }
                            <Caret />
                        </DocsCategoryButton>
                        <DocsList
                            style={{display: selectedMenu == category.node.name ? 'initial' : 'none'}}
                            data={docsLinks}
                            parent={category.node.name}
                            key={index}
                        />
                    </>
                )
            }
        </StyledDocsSidebar>
    )
}

const StyledDocsList = styled.ul`
    margin: 0 0 0 2rem;
    list-style-type: none;
    padding: 0;
`

const DocsListItem = styled.li`
    font-size: 1rem;

    & > a {
        margin-left: -0.5rem;
        padding: 0.5rem 0 0.5rem 0.5rem;
        display: block;
        width: 100%;
        border-radius: 0.25rem;
        color: ${({theme}) => theme.text1};
    }

    & > a:hover {
        background: ${({theme}) => transparentize(0.75, theme.bg3)};
    }
`

const DocsList = ({data, parent, style}) => {
    return (
        <StyledDocsList style={style} >
            {
                data.filter((link) =>
                    link.node.fields.slug.split('/')[2] === parent.replace(/\d+-/g, '')
                )
                .map((link, index) =>
                    <DocsListItem key={index} >
                        <Link to={link.node.fields.slug} >{link.node.frontmatter.title}</Link>
                    </DocsListItem>
                )
            }
        </StyledDocsList>
    )
}
