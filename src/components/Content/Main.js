import React from 'react';
import Content from '.';
import { AiOutlineLeft } from 'react-icons/all'

export const Main = ({ title, children }) => {


    return (<Content initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
    >
        <Content.Text>
            <AiOutlineLeft size={10} />
            <Content.Title>{title}</Content.Title>

        </Content.Text>
        <Content.Main>{children}</Content.Main>
    </Content>)

}