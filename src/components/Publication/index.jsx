import { useEffect, useState } from 'react';

import { Container, Details, PublicationDate } from './styles';

export function Publication({ data, ...rest }) {
    return (
        <Container type="button" {...rest}>
            <Details>
                <h3>Lei Municipal, Lei N° 616 de 2024</h3>
            </Details>
            <PublicationDate>
                <span>Data de Publicação:</span>
                <span>14/11/2024</span>
            </PublicationDate>
        </Container>
    );
}