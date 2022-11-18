import React, { createContext, useState } from 'react'

export const ThemeContext = createContext({
    image: null,
    setImage: image => {},
})

ThemeContext.displayName = 'ThemeContext'
export const ThemeContextProvider = ({ image, setImage, children }) => {
    ;<ThemeContext.Provider value={{ image, setImage }}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContext
