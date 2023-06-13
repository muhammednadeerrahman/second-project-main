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
                        <BellSpan>
                        <   BellImage src ={require("../assets/bell.svg").default} alt ="bellImage"/>
                        </BellSpan>
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
padding: 50px 30px 50px;
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
color: #BDC5D9;
font-size: 22px;
`
const SubHeading = styled.h5`
margin-top:10px;
color: #7B7F94;
font-weight: 600;

`
const HeaderRight = styled.div``
const HeadingNav = styled.div`
display: flex;
justify-content: right;
`
const BellSpan = styled.span`
background-color: rgb(29, 32, 51);
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items:center;
margin-right: 20px;
border-radius: 50%;


`
const BellImage = styled.img`
display: block;
width: 15px;
height: 15px;

`
const Imageprofile = styled.img`
display: block;
width: 30px;
height: 30px;
border-radius: 50%;
margin-right: 10px;

`
const DetailSection = styled.div`
display: flex;
flex-direction: column;
`
const ProfileName = styled.span`
color: #BDC5D9;
font-size: 12px;
font-weight: 600;

`
const ProfilePositon = styled.span`
color: #7B7F94;
font-size: 10px;
font-weight: 600;

`

