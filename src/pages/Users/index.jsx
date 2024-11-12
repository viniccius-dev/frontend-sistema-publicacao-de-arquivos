import { useCallback, useEffect, useState } from 'react';
import { Container, W50, InputWrapper } from './styles';

import { Fixed } from '../../components/Fixed';
import { Section } from '../../components/Section';
import { InputSelect } from '../../components/InputSelect';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Users() {

    const users = [
        { id: 1, email: "vinicius@agencianew.com" },
        { id: 2, email: "eduardo@agencianew.com" }
    ];

    const domains = [
        { id: 1, domain_name: "Prefeitura Delta" },
        { id: 2, domain_name: "Câmara de Veríssimo" }
    ];

    return (
        <Fixed title="Usuários" route="/users">
            <Container>
                <Section title="Usuários Registrados">
                    <W50>
                        <InputWrapper>
                            <label>E-mail</label>

                            <InputSelect 
                                title="Selecione o e-mail atual do usuário"
                                group="email"
                                options={users}
                                objectValue="email"
                            />
                        </InputWrapper>
                        <InputWrapper className="buttons">
                            <Button 
                                title="Excluir" 
                                background="admin" 
                            />
                            <Button 
                                title="Editar"
                            />
                        </InputWrapper>
                    </W50>
                </Section>

                <Section title="Criar Perfil">
                    <W50>
                        <InputWrapper>
                            <label>Nome</label>

                            <Input 
                                placeholder="Digite o nome"
                                background="admin"
                            />
                        </InputWrapper>
                        
                        <InputWrapper>
                            <label>E-mail</label>

                            <Input
                                type="email"
                                placeholder="Digite o e-mail"
                                background="admin"
                            />
                        </InputWrapper>
                    </W50>
                    
                    <W50>                   
                        <InputWrapper>
                            <label>Senha Antiga</label>

                            <Input
                                type="password"
                                placeholder="Digite a senha antiga"
                                background="admin"
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <label>Senha</label>

                            <Input 
                                type="password"
                                placeholder="Digite a senha"
                                background="admin"
                            />
                        </InputWrapper>
                    </W50>
                    
                    <W50>
                        <InputWrapper>
                            <label>Domínio Vinculado</label>

                            <InputSelect 
                                title="Selecione o domínio para vincular"
                                group="domain"
                                options={domains}
                                objectValue="domain_name"
                            />
                        </InputWrapper>
                    </W50>
                    <Button title="Salvar" />
                </Section>
            </Container>
        </Fixed>
    );
}