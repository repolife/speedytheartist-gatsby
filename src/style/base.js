import React from 'react';
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"


const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}
    
html {
    box-sizing: border-box;
    font-size: 62.5%; 
    
    @media only screen and (max-width: $-large) {
        font-size: 50%;
    }
}

body {
    line-height: 1.6;
    min-height: 100vh;
   }     
 `
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  positon: relative;
  display: flex;
  flex-direction: row;
  `
const Left = styled.div`
  width: 30vw;
  height: 100vh;
  float: left;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  `

const Span = styled.span`
  display: block;
  float: left;
  background: #fff;
  height: ${props => (props.active ? '.3vw' : '.1vw')};
  width: ${props => (props.active ? '3vw' : '1vw')};
  margin: ${props => (props.active ? '6px 0 0 0'
    : '6px 0 0 10px')};
  `

const LogoContainer = styled.div` 
    margin: 2vw 0 0 1vw;`

const Logo = styled.img`
  height: 7vh;
  object-fit: contain; 
  max-width: 20vw;

  width: auto;
  `
const Menu = styled.div`
margin-top: 150px;
width: 30%;`


const Link = styled(props => <props.Link {...props} />)`
font-size: 12px;
color: #fff;
font-family: oswald;
float: right;`

const Artist = styled.div`
height: 80vh;
width: 30vw;
background: #222;
position: absolute;
left: 15%;
top: 10vh;
overflow:hidden;
box-shadow: 0 0 40fx rgba(0, 0, 0, 0.1);
background-image: url(${props => props.img});
background-size: cover;
background-blend-mode :screen;
background-position: center;
background-repeat: no-repeat;
@media screen and (max-width: 880px) {
  background-size: 50vw;
 }
`





const Footer = styled.div`
display: flex;
flex-direction: row;
max-width: 15vw;
justify-content: flex-start;
margin-top: auto;
margin-bottom: 5vw;
@media screen and (max-width: 650px) {
  margin-top: 0; 
  flex-wrap: wrap; 
 }
`





export {
  GlobalStyle,
  Container,
  Left,
  LogoContainer,
  Menu,
  Artist,
  Span,
  Logo,
  Footer
}
