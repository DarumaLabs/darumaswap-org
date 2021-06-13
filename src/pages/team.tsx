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

const StyledBanner = styled.img`
    display: block;
    box-sizing: border-box;
    max-width: 1200px;
    padding: 0 4rem;
    width: 100%;
    margin: 4rem auto;
`

const Title = styled.h1`
    margin: 4rem 0 0;
    text-align: center;
    color: ${({theme}) => theme.text1};
    font-size: 4rem;
    font-weight: 500;
`

const MembersWrapper = styled.div`
    box-sizing: border-box;
    max-width: 1200px;
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem auto 0;
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
    margin: 1rem;

    & svg {
        fill: ${({theme}) => theme.text2}
    }
`

const MemberAvatar = styled.img`
    width: 12rem;
    height: 12rem;
`

const MemberName = styled.h4`
    font-size: 1.5rem;
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
    margin: 0 0 0 1rem;
    font-weight: 600;
    text-decoration: none;
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
                        width: '24px',
                        height: '24px'
                    }})
                }
                <MemberSocialLink to={props.member.socialLink} >@{props.member.socialHandle}</MemberSocialLink>
            </div>
        </StyledMemberCard>
    )
}
