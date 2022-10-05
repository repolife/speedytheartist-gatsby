import React, { createContext } from 'react'

export const MusicContext = createContext({ music: [], featured: [] })

export const MusicContextProvider = ({ music, featured, children }) => {
    ;<MusicContext.Provider value={{ music, featured }}>
        {children}
    </MusicContext.Provider>
}

export default MusicContext
