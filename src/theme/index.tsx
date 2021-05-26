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
    small: 769
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

        bg1: '#030813',

        primaryText1: '#e8283f',

        text1: '#f7f7f7',
    }
}

export function theme(darkMode: boolean): DefaultTheme {
    return {
        ...colors(darkMode),

        media: mediaWidth
    }
}

export default function ThemeProvider({children}: {children: React.ReactNode}) {
    const darkMode = false
    const themeObject = useMemo(() => theme(darkMode), [darkMode])

    return (
        <StyledThemeProvider theme={themeObject} >
            {children}
        </StyledThemeProvider>
    )
}

export const FixedGlobalStyle = createGlobalStyle`
    html {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    * {
    }
`

export const ThemedGlobalStyle = createGlobalStyle`
    body {
        height: var(--window-height, 100vh);
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
