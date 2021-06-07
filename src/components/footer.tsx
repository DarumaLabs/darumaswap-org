import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    margin-top: 8rem;
    width: 100%;
    height: 250px;
    background: ${({theme}) => theme.bg2};

    ${({theme}) => theme.media.medium`
        margin-top: 4rem;
    `}
`

function Footer() {
    return (
        <StyledFooter>
        </StyledFooter>
    )
}

export default Footer
