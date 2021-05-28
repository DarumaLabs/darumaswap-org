import styled from 'styled-components';
import RowCenter from '../Row';
import ColumnCenter from '../Column';

const StatsWrapper = styled(RowCenter)`
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
    font-family: Montserrat;
    font-weight: 600;

    ${({theme}) => theme.media.small`
        font-size: 2rem;
    `}
`

const NumberInformation = styled.p`
    font-size: 1.1 rem;
`

interface StatDataProps {
    name: string,
    children: string,
    className?: string
}

function StatData({
    name,
    children,
    className
}: StatDataProps) {
    return (
        <ColumnCenter className={className} >
            <Number>
                {children}
                <span style={{opacity: 0.3}} >+</span>
            </Number>
            <NumberInformation>{name}</NumberInformation>
        </ColumnCenter>
    )
}

const StyledStatData = styled(StatData)`
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

export default function Stats() {
    return (
        <StatsWrapper>
            <StyledStatData name="Marketcap" >$196B</StyledStatData>
            <StyledStatData name="Liquidity" >$12M</StyledStatData>
            <Breakline />
            <StyledStatData name="Holders" >78K</StyledStatData>
            <StyledStatData name="All time volume" >$7B</StyledStatData>
        </StatsWrapper>
    )
}
