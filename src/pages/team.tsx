import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from "../layouts"
import Seo from "../components/seo"
import TeamBanner from '../images/team-banner.png'
import TwitterIcon from '../images/twitter.inline.svg'
import InstagramIcon from '../images/instagram.inline.svg'

import NegativeHoroAvatar from '../images/negative-horo.png'
import AlpagueAvatar from '../images/alpague.png'
import JungleAvatar from '../images/jungle.png'
import Lit0neAvatar from '../images/lit0ne.png'

const StyledBanner = styled.img`
    display: block;
    box-sizing: border-box;
    max-width: 1200px;
    padding: 0 4rem;
    width: 100%;
    margin: 4rem auto;

    ${({theme}) => theme.media.medium`
        padding: 0 1rem;
    `}
`

const Title = styled.h1`
    margin: 4rem 0 0;
    text-align: center;
    color: ${({theme}) => theme.text1};
    font-size: 4rem;
    font-weight: 500;
`

const MembersWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 12rem);
    justify-content: space-between;
    grid-gap: 2rem;
    box-sizing: border-box;
    max-width: 1200px;
    padding: 0 4rem;
    flex-wrap: wrap;
    margin: 4rem auto 0;

    ${({theme}) => theme.media.medium`
        grid-template-columns: repeat(3,minmax(0,1fr));
        padding: 0 1rem;
    `}

    ${({theme}) => theme.media.small`
        grid-template-columns: repeat(2,minmax(0,1fr));
    `}
`

interface Member {
    avatar: string,
    name: string,
    title: string,
    socialHandle: string,
    socialLink: string,
    socialIcon: ReactNode
}

export default function Team() {
    const teamMembers: Array<Member> = [
        {
            avatar: NegativeHoroAvatar,
            name: 'NegativeHoro',
            title: 'Founder',
            socialHandle: '0xNegativeHoro',
            socialLink: 'https://twitter.com/0xNegativeHoro',
            socialIcon: <TwitterIcon />
        }, {
            avatar: AlpagueAvatar,
            name: 'Macled',
            title: 'Core Developer',
            socialHandle: '_Macled',
            socialLink: 'https://twitter.com/_Macled',
            socialIcon: <TwitterIcon />
        }, {
            avatar: JungleAvatar,
            name: 'Jungle',
            title: 'Graphic Designer',
            socialHandle: 'jungleraiddog',
            socialLink: 'https://instagram.com/jungleraiddog',
            socialIcon: <InstagramIcon />
        }, {
            avatar: Lit0neAvatar,
            name: 'Lit0ne',
            title: 'Security Lead',
            socialHandle: 'c0rtezhill',
            socialLink: 'https://twitter.com/c0rtezhill',
            socialIcon: <TwitterIcon />
        }
    ]

    return (
        <Layout>
            <Seo
                title="Team"
                description="Meet the team behind DarumaSwap"
            />
            <StyledBanner src={TeamBanner} />
            <Title>Meet the Team</Title>
            <MembersWrapper>
                {
                    teamMembers.map((member, index) =>
                        <MemberCard key={index} member={member} />
                    )
                }
            </MembersWrapper>
        </Layout>
    )
}

const StyledMemberCard = styled.div`
    & svg {
        fill: ${({theme}) => theme.text2}
    }
`

const MemberAvatar = styled.img`
    width: 100%;
`

const MemberName = styled.h4`
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0.75rem 0 0;
    line-height: 1;
`

const MemberTitle = styled.p`
    font-size: 1rem;
    margin: 0.5rem 0 0;
    color: ${({theme}) => theme.text2};
    line-height: 1;
`

const MemberSocialLink = styled(Link)`
    color: ${({theme}) => theme.text2};
    font-size: 1rem;
    margin: 0 0 0 0.75rem;
    font-weight: 600;
    text-decoration: none;

    ${({theme}) => theme.media.small`
        font-size: 0.875rem;
        margin: 0 0 0 0.5rem;
    `}
`

const MemberCard = (props: {member: Member}) => {
    return (
        <StyledMemberCard>
            <MemberAvatar src={props.member.avatar} />
            <MemberName>{props.member.name}</MemberName>
            <MemberTitle>{props.member.title}</MemberTitle>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '0.75rem'}} >
                {!!props.member.socialIcon &&
                    React.cloneElement(props.member.socialIcon, {style: {
                        minWidth: '1.25rem',
                        height: '1.25rem'
                    }})
                }
                <MemberSocialLink to={props.member.socialLink} >@{props.member.socialHandle}</MemberSocialLink>
            </div>
        </StyledMemberCard>
    )
}
