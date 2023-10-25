import React, { createContext, useState } from 'react'

export const ThemeContext = createContext({
    image: null,
    setImage: image => {},
})

ThemeContext.displayName = 'ThemeContext'
export const ThemeContextProvider = ({ children }) => {
    const [image, setImage] = useState({})
    ;<ThemeContext.Provider value={{ image, setImage }}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContext
