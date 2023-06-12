import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import styled from 'styled-components'

export default function Nav() {

  


  return (
    <>
        <SideBar>
          <LogoContainer>
            <Logo src = {require("../assets/logo.png")}></Logo>
            <LogoTitle>NEXO</LogoTitle>
          </LogoContainer>
          
            <ul>
                <List><NavLink to ="/"><SubContainer>
                  <SubLogo  src = {require("../assets/dashboardgrey.svg").default}/>
                  <SidebarTitle>
                  Dashboard
                  </SidebarTitle></SubContainer></NavLink>
                  </List>
                <List><NavLink to ="security" ><SubContainer>
                  <SubLogo  src = {require("../assets/securitygrey.svg").default}/>
                  <SidebarTitle>
                  security
                  </SidebarTitle></SubContainer></NavLink>
                  </List>
                <List><NavLink to ="Settings"><SubContainer>
                  <SubLogo  src = {require("../assets/settingsgrey.svg").default}/>
                  <SidebarTitle>
                  Settings
                </SidebarTitle></SubContainer></NavLink></List>
                <List><NavLink to ="Trading"><SubContainer>
                  <SubLogo  src = {require("../assets/tradinggrey.svg").default}/>
                  <SidebarTitle>
                  Trading
                  </SidebarTitle></SubContainer></NavLink></List>
                <List><NavLink to ="Transcations"><SubContainer>
                  <SubLogo  src = {require("../assets/transactiongrey.svg").default}/>
                  <SidebarTitle>
                  Transcations
                  </SidebarTitle></SubContainer></NavLink></List>
                <List><NavLink to ="Wallet"><SubContainer>
                  <SubLogo  src = {require("../assets/walletgrey.svg").default}/>
                  <SidebarTitle> Wallet</SidebarTitle></SubContainer></NavLink>
                  </List>
                <List></List>
            </ul>

        </SideBar>
        <Outlet/>
    </>
  )
}

const SideBar = styled.div`
padding: 30px 50px 0;

width: 18%;
background-color:#171B2C;
height:vh;
`
const SubLogo = styled.img`
display: block;
width: 20px;
height: 20px;

margin: 0 auto;
`
const SidebarTitle = styled.h3`
color: #76829B;
font-weight: 600;
margin-left: 10px;
align-self: center;
justify-self: center;
`
const Logo = styled.img`
width: 25px;
height: 25px;
margin-right: 15px;
`
const LogoContainer = styled.div`
justify-content: center;
align-items: center;
margin-bottom: 40px;
display: flex;
`
const LogoTitle = styled.h1`
color: #07af5a;
font-size: 20px;
font-weight: 600;
`
const List = styled.li`
margin-bottom: 10px;
display: flex;
align-items: center;
`
const SubContainer = styled.div`
display: flex;
justify-content: left;
align-items: flex-start;

`




