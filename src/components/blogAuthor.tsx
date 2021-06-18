import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

const StyledBlogAuthor = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem 0 0;

    & p {
        color: ${({theme}) => theme.text2};
    }

    & h3 {
        font-weight: 500;
        font-size: 1.25rem;
    }

    & h3, & p {
        margin: 0;
    }
`

const Avatar = styled(Img)`
    border-radius: 2rem;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
`

interface AuthorProps {
    author: {
        name: string,
        avatar: FluidObject,
    },
    date: string,
    readingTime: string
}

export default function BlogAuthor({author, date, readingTime}: AuthorProps) {
    return (
        <StyledBlogAuthor>
            <Avatar fluid={author.avatar} />
            <div>
                <h3>{author.name}</h3>
                <p>{date} - {readingTime}</p>
            </div>
        </StyledBlogAuthor>
    )
}
