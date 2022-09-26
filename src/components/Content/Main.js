import React from 'react';
import Content from '.';
import { AiOutlineLeft } from 'react-icons/all'

export const Main = () => {
    return (<Content initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
    >
        <Content.Text>
            <AiOutlineLeft size={10} />
            <Content.Title>Yo</Content.Title>

        </Content.Text>
        <Content.Main>asdfadsf;a</Content.Main>
    </Content>)

}