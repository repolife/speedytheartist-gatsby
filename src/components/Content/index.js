import styled from 'styled-components'
import { motion } from 'framer-motion'

const Content = styled(motion.div)`
    width: 70vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-left: 17vw;
    padding-right: 1em;
    overflow-x: hidden;
    overflow-y: scroll;
`
const Text = styled.div`
    height: auto;
    margin-top: 10vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    right: 2vw;
`
const Arrow = styled.i`
    color: #7d7d7d;
    font-size: 14px;
`
const Title = styled.h1`
    font-family: oswald;
    font-size: 30px;
    color: #222;
`
const Main = styled.div` 
    width: 100%;
    height: 100vh;
=   font-size: 1em;
    line-height: 20px;
    color: #9E9E9E;
    letter-spacing: 0.5px;
    font-family: sans-serif;
  `
Content.Text = Text
Content.Text.Arrow = Arrow
Content.Title = Title
Content.Main = Main

export default Content
