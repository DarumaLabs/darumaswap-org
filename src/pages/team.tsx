import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import Layout from "../layouts"
import Seo from "../components/seo"
import Title from '../components/title'
import { SecondaryButton } from '../components/button'
import TwitterIcon from '../images/twitter.inline.svg'
import InstagramIcon from '../images/instagram.inline.svg'

const TeamSection = styled.section`
    margin: 4rem auto;
    box-sizing: border-box;
    max-width: 1328px;
    padding: 0 4rem;
    width: 100%;

    ${({theme}) => theme.media.small`
        padding: 0 1rem;
        margin: 2rem auto 0;
    `}
`

const StyledTeamSpeech = styled.div`
    margin: 6rem 8rem 0 2rem;

    & > p {
        margin: 0;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.2;
    }

    & > h2 {
        line-height: 1.4;
        margin: 0;
        font-size: 2rem;
        font-weight: 500;
        color: ${({theme}) => theme.text2};
    }

    ${({theme}) => theme.media.medium`
        margin: 4rem 2rem 0
    `}

    ${({theme}) => theme.media.small`
        margin: 4rem 1rem 0
    `}
`

const CategoriesWrapper = styled.div`
    width: fit-content;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 6rem;
    display: flex;
    gap: 1.5rem;

    & > button {
        margin: 0 auto;
    }

    ${({theme}) => theme.media.medium`
        padding: 0 1rem;
    `}

    ${({theme}) => theme.media.small`
        margin-top: 5rem;
    `}
`

const MembersWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5,minmax(0,1fr));
    grid-gap: 2rem;
    box-sizing: border-box;
    max-width: 1200px;
    flex-wrap: wrap;
    margin: 2rem auto 0;

    ${({theme}) => theme.media.medium`
        grid-template-columns: repeat(3,minmax(0,1fr));
        padding: 0 1rem;
    `}

    ${({theme}) => theme.media.small`
        grid-template-columns: repeat(2,minmax(0,1fr));
    `}
`

enum TeamMemberCategory {
    Developer,
    Designer
}

interface Member {
    avatar: FluidObject,
    name: string,
    category: TeamMemberCategory,
    title: string,
    socialHandle: string,
    socialLink: string,
    socialIcon: ReactNode
}

export default function Team() {
    const [selectedCategory, setSelectedCategory] = useState()

    const data = useStaticQuery(graphql`
        {
            negativeHoroAvatar: file(relativePath: { eq: "negative-horo.png" }) {
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
            }, teamBanner: file(relativePath: { eq: "team-banner.png" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }, lit0neAvatar: file(relativePath: { eq: "lit0ne.png" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 512) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const toggleSelectedCategory = useCallback((category) => {
        setSelectedCategory(selectedCategory === category ? null : category)
    }, [setSelectedCategory, selectedCategory])

    const teamMembers: Array<Member> = [
        {
            avatar: data.negativeHoroAvatar.childImageSharp.fluid,
            name: 'NegativeHoro',
            category: TeamMemberCategory.Developer,
            title: 'Developer',
            socialHandle: '0xNegativeHoro',
            socialLink: 'https://twitter.com/0xNegativeHoro',
            socialIcon: <TwitterIcon />
        }, {
            avatar: data.jungleAvatar.childImageSharp.fluid,
            name: 'Jungle',
            category: TeamMemberCategory.Designer,
            title: 'Graphic Designer',
            socialHandle: 'jungleraiddog',
            socialLink: 'https://instagram.com/jungleraiddog',
            socialIcon: <InstagramIcon />
        }, {
            avatar: data.lit0neAvatar.childImageSharp.fluid,
            name: 'Lit0ne',
            category: TeamMemberCategory.Developer,
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
            <TeamSection>
                <Title>Meet the Team</Title>
                <StyledTeamSpeech>
                    <h2>We're DarumaLabs</h2>
                    <p>
                        An open-source software development organization,
                        working to create a more decentralised world powered
                        by the blockchain technology.
                        <br />
                        <br />
                        We do not share the values of the legacy financial system,
                        but we believe in DeFi (Decentralized Finance).
                        Hence, we’re playing our part to help building this ecosystem.
                    </p>
                </StyledTeamSpeech>
                <CategoriesWrapper>
                    {
                        Object
                        .values(TeamMemberCategory)
                        .filter(k => isNaN(Number(k)))
                        .map((category, index) =>
                            <SecondaryButton
                                onClick={() => toggleSelectedCategory(category)}
                                key={`team-member-category-${index}`}
                                selected={category === selectedCategory}
                            >
                                {category}
                            </SecondaryButton>
                        )
                    }
                </CategoriesWrapper>
                <MembersWrapper>
                    {
                        teamMembers
                        .filter(k => !selectedCategory || TeamMemberCategory[k.category] === selectedCategory)
                        .map((member, index) =>
                            <MemberCard key={index} member={member} />
                        )
                    }
                </MembersWrapper>
            </TeamSection>
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
