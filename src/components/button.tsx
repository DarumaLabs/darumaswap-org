import React from 'react'
import styled, { css } from 'styled-components'

import Caret from '../images/caret.inline.svg'

const BaseButton = styled.button`
    border-radius: 0.5rem;
    border: none;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    text-align: center;
    width: fit-content;
    padding: 0.3rem 1.25rem;
    text-decoration: none;
    min-height: 35px;
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

    ${({theme, selected}) => selected && css`
        background: ${theme.white};
        color: ${theme.bg1};
    `}
`

const StyledNavigationButton = styled(SecondaryButton)`
    display: flex;
    flex-direction: ${({direction}) =>
        direction === NavigationDirection.Next && 'row-reverse' ||
        direction === NavigationDirection.Previous && 'row' ||
        'row'
    };
    align-items: center;
    ${({direction}) =>
        direction === NavigationDirection.Next && css`
            padding-right: 0.5rem;
            padding-left: 1rem;
        ` ||
        direction === NavigationDirection.Previous && css`
            padding-right: 1rem;
            padding-left: 0.5rem;
        `
    }

    & svg {
        stroke: ${({theme}) => theme.text1};
        width: 1rem;
        height: 1rem;
        ${({direction}) =>
            direction === NavigationDirection.Next && css`
                margin-left: 0.5rem;
            ` ||
            direction === NavigationDirection.Previous && css`
                transform: scaleX(-1);
                margin-right: 0.5rem;
            `
        };
    }

    ${({theme}) => theme.media.small`
        justify-content: center;
    `}
`

export enum NavigationDirection {
    Next,
    Previous
}

interface NavigationButtonProps {
    children: string,
    direction: NavigationDirection,
    to: string
}

export const NavigationButton = ({children, direction, to}: NavigationButtonProps) => {
    return (
        <StyledNavigationButton
            direction={direction}
            to={to}
        >
            <Caret />
            {children}
        </StyledNavigationButton>
    )
}
