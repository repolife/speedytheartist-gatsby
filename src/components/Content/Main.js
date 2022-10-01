import React from 'react'
import Content from '.'

export const Main = ({ title, children }) => {
    return (
        <Content
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <Content.Text>
                <hr size={10} />
                <Content.Title>{title}</Content.Title>
            </Content.Text>
            <Content.Main>{children}</Content.Main>
        </Content>
    )
}
