import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaXmark } from 'react-icons/fa6';

import { Container, InputWrapper, Archive, NotFound } from './styles';

import { Input } from '../../components/Input';
import { File } from "../../components/File";
import { InputSelect } from '../../components/InputSelect';
import { Textarea } from '../../components/Textarea';
import { Uploads } from '../../components/Uploads';
import { Button } from '../../components/Button';
import { Fixed } from '../../components/Fixed';

export function EditPublication() {
    const typesOfPublication = [
        { id: 1, name: "Ata" },
        { id: 2, name: "Decreto" },
        { id: 3, name: "Indicação" },
    ]

    const domains = [
        { id: 1, domain_name: "Prefeitura Delta", url: "http://localhost:5173" },
        { id: 2, domain_name: "Câmara de Veríssimo", url: "http://localhost:5174" }
    ];

    return (
        <Fixed title="Editar Publicação" route="/edit-publication">
            <Container>
                <InputWrapper>
                    <label>O que deseja publicar?</label>

                    <InputSelect 
                        title="Selecione a Modalidade da Licitação"
                        group="modalities"
                        options={typesOfPublication}
                        objectValue="name"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label>Número</label>

                    <Input 
                        placeholder="Digite o número da publicação" 
                        background="admin"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label>Data</label>

                    <Input
                        placeholder="Digite a data da publicação"
                        background="admin"
                        maskType="date"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label>Descrição</label>

                    <Textarea 
                        placeholder="Digite a descrição da publicação"
                    />
                </InputWrapper>

                <InputWrapper>
                    <label>Anexos Salvos</label>
                    <div className="savedUploads">
                        <Archive>
                            <File 
                                title="Arquivo Teste"
                                extension="pdf"
                            />
                            <FaXmark />
                        </Archive>
                    </div>
                </InputWrapper>

                <InputWrapper>
                    <label>Upload de Novos Anexos</label>
                    <Uploads />
                </InputWrapper>

                <InputWrapper>
                    <Button 
                        title="Editar"
                    />
                </InputWrapper>
            </Container>

            
            {/* <NotFound>
                <h2><TfiDropboxAlt /> Licitação Não Encontrada</h2>
            </NotFound> */}
        </Fixed>
    );
}
