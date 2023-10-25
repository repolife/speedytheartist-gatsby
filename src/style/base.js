import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { Link } from 'gatsby'

const pallet = {
    darkOrange: '#852a10',
    lightPurple: '#883d98',
    yellow: '#9e9045',
}
const defaultMargin = '5px'
const defaultFont = 'oswald'

const LinkStyle = {
    width: '50%',

    backgroundImage: `linear-gradient(
        to right,
        ${pallet.lightPurple} 0%,
        ${pallet.darkOrange} 51%,
        ${pallet.yellow} 100%
    )`,
    backgroundSize: ' 200% auto',
    color: 'white',

    margin: `0 auto ${defaultMargin} auto`,
    height: '2em',
    transition: '0.5s',
    fontSize: '1.2rem',

    textTransform: 'uppercase',
    borderRadius: '5px',
    cursor: 'pointer',

    '&:hover': {
        backgroundPosition: 'right top',
    },
}

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
    background-image: linear-gradient(180deg, black, #150a18, black);
`
const Left = styled.div`
    width: 30vw;
    height: 100vh;
    float: left;
    background-image: linear-gradient(
        to bottom,
        ${pallet.darkOrange},
        ${pallet.lightPurple},
        black
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
`

const Span = styled.span`
    display: block;
    float: left;
    background: #fff;
    height: ${props => (props.active ? '.3vw' : '.1vw')};
    width: ${props => (props.active ? '3vw' : '1vw')};
    margin: ${props => (props.active ? '6px 0 0 0' : '6px 0 0 10px')};
`

const LogoContainer = styled.div`
    margin: 2vw 0 0 1vw;
`

const Logo = styled.img`
    height: 7vh;
    object-fit: contain;
    max-width: 25vw;

    width: auto;
`
const Menu = styled.div`
    margin-top: 150px;
    width: 30%;
`
const Artist = styled.div`
    height: 80vh;
    width: 30vw;
    position: absolute;
    left: 15%;
    top: 10vh;
    overflow: hidden;
    box-shadow: 0 0 40fx rgba(0, 0, 0, 0.1);
`

Artist.img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-fit: ${props => (props.object !== null ? 'contain' : 'fit')};

    object-position: center;
`
const Title = styled.h2`
    font-family: ${defaultFont};
    font-size: 2.2rem;
    color: #222;
    padding-left: 2vw;
    margin: 10px 0 10px 0;
    font-size: 2.2rem;
`

const Button = styled.button`
    ${LinkStyle}
`
const Collection = styled.div`
    display: grid;
    grid-auto-columns: auto;
    height: 80vh;
    grid-gap: 1em;
    overflow: overlay;
    justify-content: center;
`

const InternalLink = styled(Link)`
    color: white;
    font-family: ${defaultFont};
    text-align: center;
    text-decoration: none;
    font-size: 1.5rem;
`
export {
    GlobalStyle,
    Collection,
    Container,
    defaultMargin,
    LinkStyle,
    Button,
    Left,
    LogoContainer,
    Menu,
    Artist,
    Span,
    Logo,
    pallet,
    Title,
    InternalLink,
}
