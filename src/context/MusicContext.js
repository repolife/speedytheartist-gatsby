import React, { createContext } from 'react'

export const MusicContext = createContext({ music: [] });

export const MusicContextProvider = ({ music, children }) => {
    <MusicContext.Provider value={{ music }}>
        {children}
    </MusicContext.Provider>

}

export default MusicContext;