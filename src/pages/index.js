import React, { } from "react"
import axios from "axios";
import { PageWrapper } from "../components/App/PageWrapper";
import { Main } from "../components/Content/Main"
import { Maintence } from "../components/App/Maintence/Maintence";

export const Home = () => {

  console.log(process.env)

  if (process.env.NODE_ENV === 'production') {
    return (<Maintence title="Under Maintence" />
    )
  }


  return (

    <PageWrapper>

      <Main title='Speedy The Artist'>
        <h2>Hi</h2>
      </Main>
    </PageWrapper>


  )
}

export const Head = () => {
  return (<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800|Oswald:400,500,600,700'" rel="stylesheet" />
  )
}


export default Home