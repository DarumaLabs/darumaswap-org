import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import Layout from "../layouts"
import Seo from "../components/seo"
import TwitterIcon from '../images/twitter.inline.svg'
import InstagramIcon from '../images/instagram.inline.svg'

const StyledBanner = styled(Img)`
    display: block;
    box-sizing: border-box;
    max-width: 1200px;
    padding: 0 4rem;
    width: 100%;
    margin: 4rem auto;
    border-radius: 0.5rem;

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
    avatar: FluidObject,
    name: string,
    title: string,
    socialHandle: string,
    socialLink: string,
    socialIcon: ReactNode
}

export default function Team() {
    const data = useStaticQuery(graphql`
        {
            negativeHoroAvatar: file(relativePath: { eq: "negative-horo.png" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 512) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }, macledAvatar: file(relativePath: { eq: "macled.png" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 512) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }, jungleAvatar: file(relativePath: { eq: "jungle.png" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 512) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }, lit0neAvatar: file(relativePath: { eq: "lit0ne.png" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 512) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }, teamBanner: file(relativePath: { eq: "team-banner.png" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const teamMembers: Array<Member> = [
        {
            avatar: data.negativeHoroAvatar.childImageSharp.fluid,
            name: 'NegativeHoro',
            title: 'Founder',
            socialHandle: '0xNegativeHoro',
            socialLink: 'https://twitter.com/0xNegativeHoro',
            socialIcon: <TwitterIcon />
        }, {
            avatar: data.macledAvatar.childImageSharp.fluid,
            name: 'Macled',
            title: 'Core Developer',
            socialHandle: '_Macled',
            socialLink: 'https://twitter.com/_Macled',
            socialIcon: <TwitterIcon />
        }, {
            avatar: data.jungleAvatar.childImageSharp.fluid,
            name: 'Jungle',
            title: 'Graphic Designer',
            socialHandle: 'jungleraiddog',
            socialLink: 'https://instagram.com/jungleraiddog',
            socialIcon: <InstagramIcon />
        }, {
            avatar: data.lit0neAvatar.childImageSharp.fluid,
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
            <StyledBanner fluid={data.teamBanner.childImageSharp.fluid} />
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

const MemberAvatar = styled(Img)`
    width: 100%;
    border-radius: 0.5rem;
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
            <MemberAvatar fluid={props.member.avatar} />
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
