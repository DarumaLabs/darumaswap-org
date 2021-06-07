import React, { useMemo } from "react";
import {
    DefaultTheme,
    ThemeProvider as StyledThemeProvider,
    createGlobalStyle,
    css
} from 'styled-components';
import { Colors } from './styled'

const MEDIA_QUERIES_WIDTH = {
    extraSmall: 'max-width: 481',
    small: 'max-width: 769',
    medium: 'max-width: 1024',
    large: 'max-width: 1200',
    minMedium: 'min-width: 1025',
}

const mediaWidth: { [breakpoint in keyof typeof MEDIA_QUERIES_WIDTH]: typeof css } =
    Object.keys(MEDIA_QUERIES_WIDTH).reduce((acc, breakpoint) => {
        acc[breakpoint] = (first: any, ...interpolations: any[]) => css`
            @media only screen and (${MEDIA_QUERIES_WIDTH[breakpoint]}px) {
                ${css(first, ...interpolations)}
            }
        `;
        return acc
    }, {}) as any

export function colors(darkMode: boolean): Colors {
    return {
        white: '#ffffff',
        black: '#000000',

        primary1: '#ff003e',
        primary2: '#6E44FF',

        gradient1: 'linear-gradient(to right, #ff003e, #6E44FF)',

        bg1: '#0d1114',
        bg2: '#00000080',

        primaryText1: '#ff003e',

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

    h1, h2, h3, h4, h5, h6, p {
        color: ${({theme}) => theme.text1};
    }

    h2 {
        font-size: 2rem;
    }

    a {
        color: ${({theme}) => theme.primaryText1};
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
