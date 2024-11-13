import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, W50, InputWrapper } from './styles';

import { Input } from '../../components/Input';
import { InputSelect } from '../../components/InputSelect';
import { Textarea } from '../../components/Textarea';
import { Uploads } from '../../components/Uploads';
import { Button } from '../../components/Button';
import { Fixed } from '../../components/Fixed';

export function NewPublication() {
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
        <Fixed title="Nova Publicação" route="/create-publication">
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
                    <label>Anexos</label>
                    <Uploads />
                </InputWrapper>

                <W50>
                    <InputWrapper>
                        <label>Domínio Vinculado</label>

                        <InputSelect 
                            title="Selecione o domínio vinculado"
                            group="domains"
                            options={domains}
                            objectValue="domain_name"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Button 
                            title="Cadastrar"
                        />
                    </InputWrapper>
                </W50>
            </Container>
        </Fixed>
    );
}
