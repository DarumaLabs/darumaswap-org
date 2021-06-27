import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

import SearchIcon from '../images/search.inline.svg'
import CloseIcon from '../images/close.inline.svg'

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    background: ${({theme}) => theme.bg3};
    border-radius: 0.5rem;

    ::placeholder,
    ::-webkit-input-placeholder {
        color:
    }

    ${({theme}) => theme.media.large`
        display: none;
    `}
`

const StyledInput = styled.input`
    width: 9rem;
    background: transparent;
    outline: none;
    border: none;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    color: ${({theme}) => theme.text1};

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${({theme}) => theme.text2};
    }

    :-ms-input-placeholder {
        color: ${({theme}) => theme.text2};
    }
`

const StyledSearchIcon = styled(SearchIcon)`
    width: 1rem;
    height: 1rem;
    stroke: ${({theme}) => theme.text2};
    margin: 0 0 0 0.5rem;
`

const StyledCloseIcon = styled(CloseIcon)`
    cursor: pointer;
    width: 0.75rem;
    height: 0.75rem;
    stroke: ${({theme}) => theme.text1};
    margin: 0 0.5rem 0 0;
    visibility: ${({$visible}) => $visible ? 'visible' : 'hidden'}
`

export default function DocsSearch() {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = useCallback((newInput) => {
        setInputValue(newInput.target.value)
    }, [setInputValue])

    return (
        <StyledForm>
            <StyledSearchIcon />
            <StyledInput
                placeholder='Search ...'
                value={inputValue}
                onChange={handleInputChange}
            />
            <StyledCloseIcon
                $visible={!!inputValue && inputValue !== ''}
                onClick={() => setInputValue('')}
            />
        </StyledForm>
    )
}
