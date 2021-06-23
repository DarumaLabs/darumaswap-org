import React from 'react'
import styled from 'styled-components';

const StatsWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    max-width: 1000px;
    justify-content: space-between;

    ${({theme}) => theme.media.medium`
        flex-wrap: wrap;
        justify-content: space-around;
        width: 70%;
    `}

    ${({theme}) => theme.media.extraSmall`
        width: 100%;
    `}
`

const Number = styled.span`
    font-size: 3rem;
    font-family: 'Montserrat';
    font-weight: 600;

    ${({theme}) => theme.media.small`
        font-size: 2rem;
    `}
`

const NumberInformation = styled.p`
    font-size: 1rem;
    letter-spacing: 1.1px;
`

interface StatDataProps {
    name: string,
    children: string,
    className?: string
}

function Data({
    name,
    children,
    className
}: DataProps) {
    return (
        <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        className={className}
        >
            <Number>
                {children}
                <span style={{opacity: 0.3, marginLeft: '0.25rem'}} >+</span>
            </Number>
            <NumberInformation>{name}</NumberInformation>
        </div>
    )
}

const StyledData = styled(Data)`
    width: 250px;
    text-align: center;
    color: ${({theme}) => theme.text1};

    * {
        margin: 0;
    }

    ${({theme}) => theme.media.medium`
        margin: 10px 0;
    `}

    ${({theme}) => theme.media.small`
        width: 150px;
    `}
`

const Breakline = styled.span`
    ${({theme}) => theme.media.medium`
        width: 100%;
    `}
`

export default function TokenData({className}: {
    className?: string
}) {
    return (
        <StatsWrapper className={className} >
            <StyledData name="DARUMA Marketcap" >$0</StyledData>
            <StyledData name="Total Liquidity" >$0</StyledData>
            <Breakline />
            <StyledData name="All time trades" >0</StyledData>
            <StyledData name="All time volume" >$0</StyledData>
        </StatsWrapper>
    )
}
