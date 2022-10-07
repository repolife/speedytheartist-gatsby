import React from 'react'
import { useLoading, Audio } from '@agney/react-loading'
import styled from 'styled-components'
export const Loader = () => {
    const Section = styled.section`
        display: flex;
        justify-content: center;
    `
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Audio width="20" />,
    })

    return (
        <Section {...containerProps}>
            {indicatorEl} {/* renders only while loading */}
        </Section>
    )
}

export default Loader
