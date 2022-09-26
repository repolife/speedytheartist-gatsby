import React, { useState } from "react"
import {
  GlobalStyle,
  Container,
} from "../style/base"
import { Nav } from "../components/Nav/Nav"
import { Main } from "../components/Content/Main"


export const Home = () => {


  return (

    <Container>
      <GlobalStyle />
      <Nav />
      <Main />
    </Container>

  )
}

export const Head = () => {
  return (<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800|Oswald:400,500,600,700'" rel="stylesheet" />
  )
}


export default Home