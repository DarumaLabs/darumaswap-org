import React from 'react'
import styled, { css } from 'styled-components'

import MenuIcon from '../images/menu.inline.svg'

const StyledMenuIcon = styled(props => <MenuIcon {...props} />)`
    ${({open}) => css`
        #middle-bar-1, #middle-bar-2, #top-bar, #bottom-bar {
            transition: transform 0.2s ease, opacity 0.2s ease;
        }

        #middle-bar-1 {
            transform-origin: center;
            transform: ${open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        #middle-bar-2 {
            transform-origin: center;
            transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'};
        }

        #top-bar {
            transform: ${open ? 'translateY(35px)' : 'translateY(0)'};
            opacity: ${open ? '0' : '1'};
        }

        #bottom-bar {
            transform: ${open ? 'translateY(-35px)' : 'translateY(0)'};
            opacity: ${open ? '0' : '1'};
        }
    `}
`

export default StyledMenuIcon
