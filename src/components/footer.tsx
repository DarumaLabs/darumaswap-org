import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import GithubIcon from '../images/github.inline.svg'
import TelegramIcon from '../images/telegram.inline.svg'
import TwitterIcon from '../images/twitter.inline.svg'

const StyledFooter = styled.footer`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5rem;
    margin-top: 8rem;
    height: 100px;
    background: ${({theme}) => theme.bg2};

    ${({theme}) => theme.media.medium`
        margin-top: 4rem;
    `}

    ${({theme}) => theme.media.extraSmall`
        justify-content: space-around;
        padding: 0 1rem;
    `}

    & > a {
        margin: 0 1.5rem;
        width: 2rem;
        height: 2rem;
    }
`

function Footer() {
    return (
        <StyledFooter>
            <Link to='https://twitter.com/DarumaLabs' >
                <TwitterIcon />
            </Link>
            <Link to='https://t.me/darumalabs' >
                <TelegramIcon />
            </Link>
            <Link to='http://github.com/darumalabs' >
                <GithubIcon />
            </Link>
        </StyledFooter>
    )
}

export default Footer
