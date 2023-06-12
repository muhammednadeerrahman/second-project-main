import React from 'react'
import Charted from './Charted'
import styled from 'styled-components'
import Header from '../includes/Header'
import { Container } from '@mui/material'

export default function Security() {
  return (
    <>
       
        <SecurityPage>
            <Header/>
            <Content>
              <Title>Coming soon..!</Title>
            </Content>
           
        </SecurityPage>
    </>
  )
}

const SecurityPage = styled.div`
height:100vh;
width: 100%;
background-color: #111219;
align-items: center;

`
const Content = styled.div`
display: flex;
justify-content: center;
align-items:center;
width: 100%;
height: 80%;
`

const Title = styled.h1`
text-align: center;
font-weight: 700;
font-size: 42px;
color:#BDC5D9;
`


 