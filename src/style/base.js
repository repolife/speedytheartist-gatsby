import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import nomodel from "../images/no_model.jpg"
import modelPic from "../images/model.png"
import withModel from "../images/with_model.jpg"
import bigBackground from "../images/bigBackgroundpg.jpg"
import frontRight from "../images/Front top right.png"
import lowResImage from "../images/BigBackgroundpglowres.jpg"


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800|Oswald:400,500,600,700')

* {
  box-sizing: border-box;
  text-decoration: none;
}  
 `
const Container = styled.div`
  width: 100vw;
  heigh: 100vh;
  positon: relative;
`
const Left = styled.div`
  width: 30vw;
  height: 100vh;
  float: left;
  background: red;
  `

  const Logo = styled.div` 
    margin: 30px 0 0 30px;  `



const Menu = styled.div`
margin-top: 150px;
width: 30%;`

const Links = styled.div`
margin-bottom: 10px;
a {
  font-size: 12px;
  color: #fff;
  font-family: oswald;
  float: right;
}

`
export {
  GlobalStyle,
  Container,
  Left,

  Menu,
}
