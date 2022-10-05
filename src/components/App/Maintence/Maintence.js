import React from 'react'
import Container from '.'
import { pallet } from '@style/base'

export const Maintence = ({ title }) => {
    return (
        <Container color={pallet.darkOrange}>
            <Container.Heading>{title}</Container.Heading>
        </Container>
    )
}

export default Maintence
