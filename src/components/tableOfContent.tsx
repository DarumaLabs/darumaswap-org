import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import GithubSlugger from 'github-slugger'
import { transparentize } from 'polished'

const slugger = new GithubSlugger()

interface Heading {
    value: string
}

interface TableOfContentProps {
    headings: Array<Heading>
}

const StyledTableOfContent = styled.nav`
    position: sticky;
    top: 6.5rem;
    width: 15rem;
    height: fit-content;
    padding-left: 1rem;
    border-left: 1px solid ${({theme}) => transparentize(0.9, theme.text1)};

    & > h3 {
        letter-spacing: 1.1px;
        font-weight: 500;
        margin: 0 0 1rem;
    }
`

const StyledHeadingLink = styled(Link)`
    display: block;
    margin: 0 0 0.5rem;
    font-size: 0.75rem;
    color: ${({theme}) => theme.text2};
    transition: color 250ms ease 0s;

    &:hover {
        color: ${({theme}) => theme.text1};
    }
`

const HeadingLink = function({heading}: Heading) {
    const slug = slugger.slug(heading.value)
    slugger.reset()

    return (
        <StyledHeadingLink to={'#' + slug} >{heading.value}</StyledHeadingLink>
    )
}

export default function TableOfContent({headings}: TableOfContentProps) {
    return (
        <StyledTableOfContent>
            <h3>Table of content</h3>
            {
                headings.map((heading, index) =>
                    <HeadingLink key={index} heading={heading} />
                )
            }
        </StyledTableOfContent>
    )
}
