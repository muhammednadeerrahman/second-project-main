import React,{useState} from 'react'
import { NavLink,Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Nav() {

  const [btnState, setBtnState] = useState(1);
  const [navClose, setNavClose] = useState(false);
  let handleFunction = (index) =>{
    setBtnState(index);

  }

  


  return (
    <>
        <SideBar>
          <LogoContainer>
            <LogoLink>
              <Logo src = {require("../assets/logo.png")}></Logo>
              <LogoTitle>NEXO</LogoTitle>
            </LogoLink>
          </LogoContainer>
          
            <ul>
                <List onClick={()=>handleFunction(1)}><NavLink to ="/"><SubContainer>
                  <SubLogo className={btnState===1?"imageactive":"not"}  src = {require("../assets/dashboardgreen.svg").default}/>
                  <SidebarTitle>
                  Dashboard
                  </SidebarTitle></SubContainer></NavLink>
                  </List>
                <List onClick={()=>handleFunction(2)}><NavLink to ="security" ><SubContainer>
                  <SubLogo className={btnState===2?"imageactive":"not"} src = {require("../assets/securitygreen.svg").default}/>
                  <SidebarTitle>
                  security
                  </SidebarTitle></SubContainer></NavLink>
                  </List>
                <List onClick={()=>handleFunction(3)}><NavLink to ="Settings"><SubContainer>
                  <SubLogo className={btnState===3?"imageactive":"not"}  src = {require("../assets/settingsgreen.svg").default}/>
                  <SidebarTitle>
                  Settings
                </SidebarTitle></SubContainer></NavLink></List>
                <List onClick={()=>handleFunction(4)}><NavLink to ="Trading"><SubContainer>
                  <SubLogo className={btnState===4?"imageactive":"not"}  src = {require("../assets/tradinggreen.svg").default}/>
                  <SidebarTitle>
                  Trading
                  </SidebarTitle></SubContainer></NavLink></List>
                <List onClick={()=>handleFunction(5)}><NavLink to ="Transaction"><SubContainer>
                  <SubLogo className={btnState===5?"imageactive":"not"}  src = {require("../assets/transactiongreen.svg").default}/>
                  <SidebarTitle>
                  Transcation
                  </SidebarTitle></SubContainer></NavLink></List>
                <List onClick={()=>handleFunction(6)}><NavLink to ="Wallet"><SubContainer>
                  <SubLogo className={btnState===6?"imageactive":"not"} src = {require("../assets/walletgreen.svg").default}/>
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
filter: grayscale(100%);

margin: 0 auto;
`
const SidebarTitle = styled.h3`
color: #76829B;
font-weight: 600;
margin-left: 10px;
align-self: center;
justify-self: center;
font-size: 16px;
`
const LogoLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
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




