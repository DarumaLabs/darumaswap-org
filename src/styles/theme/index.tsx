import React, { useMemo } from "react";
import {
    DefaultTheme,
    ThemeProvider as StyledThemeProvider,
    createGlobalStyle,
    css
} from 'styled-components';
import { Colors } from './styled'

const MEDIA_QUERIES_WIDTH = {
    extraSmall: 481,
    small: 769,
    medium: 1024,
    large: 1200
}

const mediaWidth: { [breakpoint in keyof typeof MEDIA_QUERIES_WIDTH]: typeof css } =
    Object.keys(MEDIA_QUERIES_WIDTH).reduce((acc, breakpoint) => {
        acc[breakpoint] = (a: any, b: any, c: any) => css`
            @media only screen and (max-width: ${MEDIA_QUERIES_WIDTH[breakpoint]}px) {
                ${css(a, b, c)}
            }
        `;
        return acc
    }, {}) as any

export function colors(darkMode: boolean): Colors {
    return {
        white: '#ffffff',
        black: '#000000',

        primary1: '#e8283f',

        gradient1: 'linear-gradient(to right, #BA181D, #E8283F 25%, #FF4063 100%)',

        bg1: '#030813',

        bgGradient: 'linear-gradient(to bottom, #03081300, #030813)',

        primaryText1: '#e8283f',

        text1: '#f7f7f7',
    }
}

function theme(darkMode: boolean): DefaultTheme {
    return {
        ...colors(darkMode),

        media: mediaWidth
    }
}

const ThemedGlobalStyle = createGlobalStyle`
    body {
        background-color: ${({theme}) => theme.bg1};
    }

    h1 {
        color: ${({theme}) => theme.primaryText1};
    }

    h2, h3, h4, h5, h6, p {
        color: ${({theme}) => theme.text1};
    }

    h2 {
        font-size: 2rem;
    }
`

export default function ThemeProvider({children}: {children: React.ReactNode}) {
    const darkMode = false
    const themeObject = useMemo(() => theme(darkMode), [darkMode])

    return (
        <StyledThemeProvider theme={themeObject} >
            <ThemedGlobalStyle />
            {children}
        </StyledThemeProvider>
    )
}
