import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from '@components/App/Layout/Layout'

export const RootElement = ({ children }) => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <Layout> {children}</Layout>
        </QueryClientProvider>
    )
}

export default RootElement
