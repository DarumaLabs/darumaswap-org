import styled from 'styled-components'

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    margin: 0 0 0 2rem;
    line-height: 1;

    ${({theme}) => theme.media.extraSmall`
        margin: 0 0 0 1rem;
    `}
`

export default Title
