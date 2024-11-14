import { FaClock } from 'react-icons/fa';
import { TfiDropboxAlt } from "react-icons/tfi";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Container, NotFound } from './styles';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Fixed } from '../../components/Fixed';
import { File } from '../../components/File';

export function Details() {

    return (
        <Fixed title="Publicação" route="/details">
            <Container>
                <header>
                    <h2> Lei Municipal, Lei n° 616 de 2024</h2>
                    <small><FaClock /> Publicado em: 15/04/2024 às 09:30</small>
                </header>

                <Section title="Descrição">
                    <p>Dolore sunt aute eiusmod eu excepteur veniam elit occaecat ex sunt elit. Officia sit cillum in eu reprehenderit in ad incididunt commodo. Veniam aliquip pariatur commodo aliqua. Lorem magna nostrud eiusmod amet est. Nostrud ullamco elit laborum mollit cupidatat ad sint velit amet. Ea pariatur do occaecat deserunt anim sunt do nostrud laborum ex quis duis labore labore. Magna fugiat in velit incididunt culpa eiusmod do eu ad.</p>
                </Section>

                <Section title="Anexos">
                    <File 
                        title="Arquivo de Exemplo" 
                        extension={"docx"}
                    />
                </Section>

                <footer>        
                    <Button title="Editar" />
                    <Button background="admin" title="Excluir" />
                </footer>
            </Container>

            {/* <NotFound>
                <h2><TfiDropboxAlt /> Publicação Não Encontrada</h2>
            </NotFound> */}
        </Fixed>
    );
}