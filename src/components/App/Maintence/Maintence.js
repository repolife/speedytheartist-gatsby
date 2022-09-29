import React from 'react';
import Container from '.';
import { red } from "../../../style/base"
export const Maintence = ({ title }) => {
    return (<Container color={red}>
        <Container.Heading>
            {title}
        </Container.Heading>
    </Container>)
}

export default Maintence