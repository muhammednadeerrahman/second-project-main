import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <>
        <SectionHeader >
                <HeaderLeft>
                    <Heading>Dashboard</Heading>
                    <SubHeading>Whole data stock here!</SubHeading>
                </HeaderLeft>
                <HeaderRight>
                    <HeadingNav>
                        <BellImage src ={require("../assets/bell.svg").default} alt ="bellImage"/>
                        <Imageprofile src ={require("../assets/profile.png")} alt ="profileIMage"/>
                        <DetailSection>
                            <ProfileName>Robert Fox</ProfileName>
                            <ProfilePositon>Admin</ProfilePositon>
                        </DetailSection>
                    </HeadingNav>

                </HeaderRight>
            
        </SectionHeader>
    
        
    </>
  )
}
const SectionHeader = styled.div`
padding: 30px;
display: flex;
justify-content: space-between;
height: 80px;
width: 100%;
align-items: center;
background-color:#111219;





`
const HeaderLeft = styled.div`
`


const Heading = styled.h1`
color: #fff;`
const SubHeading = styled.h5`
margin-top:10px;
color: #fff;
`
const HeaderRight = styled.div``
const HeadingNav = styled.div`
display: flex;
justify-content: right;
`
const BellImage = styled.img`
display: block;
width: 40px;
height: 40px;
border-radius: 50%;
background-color:#BDC5D9;
margin-right: 20px;

`
const Imageprofile = styled.img`
display: block;
width: 40px;
height: 40px;
border-radius: 50%;
margin-right: 20px;

`
const DetailSection = styled.div`
display: flex;
flex-direction: column;
`
const ProfileName = styled.span`
color: #fff;
`
const ProfilePositon = styled.span`
color: #fff;

`

