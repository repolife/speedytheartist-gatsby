import React, { createContext } from 'react'

export const MusicContext = createContext({ music: [], featured: [], news: [] })

export const MusicContextProvider = ({ music, featured, news, children }) => {
    ;<MusicContext.Provider value={{ music, featured, news }}>
        {children}
    </MusicContext.Provider>
}

export default MusicContext
