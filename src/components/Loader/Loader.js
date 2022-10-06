import React from 'react'
import { useLoading, Audio } from '@agney/react-loading'
import styled from 'styled-components'
export const Loader = () => {
    const Section = styled.section`
        display: flex;
        justify-content: center;
        position: relative;
        top: 25vh;
    `
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Audio width="80" />,
    })

    return (
        <Section {...containerProps}>
            {indicatorEl} {/* renders only while loading */}
        </Section>
    )
}

export default Loader
