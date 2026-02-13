'use client'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Content = styled(motion.div)`
    width: 60vw;
    height: 100vh;
    padding-left: 5vw;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media (max-width: 650px) {
        width: 70vw;
    }
`

Content.Title = styled.h1`
    font-size: 5rem;
    color: white;
    font-weight: 900;
    font-family: 'oswald', sans-serif;
    line-height: 1;
`

Content.Main = styled.div`
    height: 100vh;
`

Content.Text = styled.div`
    margin-top: 5vh;
    margin-bottom: 2rem;
`

export default Content
