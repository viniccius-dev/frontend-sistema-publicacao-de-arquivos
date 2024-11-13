import { useCallback, useEffect, useState } from 'react';
import { Container, W50, InputWrapper } from "./styles";

import { Section } from "../../components/Section";
import { InputSelect } from "../../components/InputSelect";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Fixed } from "../../components/Fixed";

export function Domains() {

    const domains = [
        { id: 1, domain_name: "Prefeitura Delta", url: "http://localhost:5173" },
        { id: 2, domain_name: "Câmara de Veríssimo", url: "http://localhost:5174" }
    ];

    return (
        <Fixed title="Domínios" route="/domains">
                <Container>
                    <Section title="Domínios Registrados">
                        <W50>
                            <InputWrapper>
                                <label>URL do domínio</label>

                                <InputSelect 
                                    title="Selecione o URL do domínio"
                                    group="domain"
                                    options={domains}
                                    objectValue="url"
                                />
                            </InputWrapper>
                            <Button 
                                className="button" 
                                title="Exportar Banco de Dados" 
                            />
                        </W50>
                        <W50>
                            <Button 
                                background="admin" 
                                title="Excluir" 
                            />
                            <Button 
                                title="Editar"
                            />
                        </W50>
                    </Section>
                    <Section title="Criar Domínio">
                        <W50>
                            <InputWrapper>
                                <label>Nome</label>

                                <Input 
                                    placeholder="Digite o nome do domínio"
                                    background="admin"
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <label>URL do domínio</label>

                                <Input 
                                    placeholder="Digite o URL do domínio"
                                    background="admin"
                                />
                            </InputWrapper>
                        </W50>
                        <Button title="Salvar" />
                    </Section>
                </Container>
        </Fixed>
    );
}