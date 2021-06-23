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
    left: 2rem;
    top: 4.25rem;
    bottom: 0;
    border-right: 1px solid ${({theme}) => transparentize(0.75, theme.text1)};
    padding-top: 2rem;
`

const DocsCategoryButton = styled.button`
    cursor: pointer;
    background: transparent;
    outline: none;
    border: none;
    color: ${({theme}) => theme.text1};
    font-size: 1rem;
    width: fit-content;
    margin: 0.75rem 0;

    & svg {
        margin: 0 0 0 .5rem;
        width: 0.75rem;
        height: 0.75rem;
        stroke: ${({theme}) => theme.text1};
        transform: rotate(${({active}) => active ? '90deg' : '0deg'});
        transition: transform 250ms ease 0s;
    }
`

export default function DocsSidebar(props: {path: string}) {
    const [selectedMenu, setSelectedMenu] = useState()

    const data = useStaticQuery(graphql`
        {
            docsCategories: allDirectory(
                filter: { sourceInstanceName: { eq: "docs" } relativeDirectory: { eq: "" } }
                sort: { fields: name, order: ASC }
            ) {
                edges {
                    node {
                        name
                    }
                }
            }
        }
    `)

    const categories = data.docsCategories.edges.map(category =>
        category.node.name
            .replace(/\d+-/g, '')
            .replace(/-/, ' ')
            .toUpperCase()
    )

    const toggleSelectedMenu = useCallback((menu) => {
        setSelectedMenu(selectedMenu === menu ? null : menu)
    }, [setSelectedMenu, selectedMenu])

    return (
        <StyledDocsSidebar>
            {
                categories.map((category, index) =>
                    <DocsCategoryButton
                        onClick={() => toggleSelectedMenu(category)}
                        active={selectedMenu == category}
                        key={index}
                    >
                        {category}
                        <Caret />
                    </DocsCategoryButton>
                )
            }
        </StyledDocsSidebar>
    )
}
