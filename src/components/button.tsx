import styled from 'styled-components'

const BaseButton = styled.a`
    border-radius: 0.5rem;
    border: none;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    text-align: center;
    width: fit-content;
    padding: 0.3rem 1.25rem;
    text-decoration: none;
    max-height: 35px;
    transition: transform 0.2s ease;
    color: ${({theme}) => theme.text1};
    font-size: 1rem;
    font-weight: 600;

    &:focus {
        outline: none;
    }

    &.disabled {
        cursor: auto;
    }

    &:hover {
        transform: scale(1.02);
    }

    ${({theme}) => theme.media.small`
        min-width: 250px;
        font-size: 1.25rem;
        padding: 0.65rem 0;
    `}
`

export const PrimaryButton = styled(BaseButton)`
    background: ${({theme}) => theme.gradient1};
`

export const SecondaryButton = styled(BaseButton)`
    background: transparent;
    border: 1px solid ${({theme}) => theme.white};
`
