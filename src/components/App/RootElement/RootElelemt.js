import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const RootElement = ({ element }) => {
    const queryClient = new QueryClient()

    return <QueryClientProvider>{element}</QueryClientProvider>
}

export { RootElement as wrapRootElement }
