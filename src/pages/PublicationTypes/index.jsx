import { Container, W50, InputWrapper, CheckList } from './styles';
import { Fixed } from "../../components/Fixed";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { InputSelect } from '../../components/InputSelect';
import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';

export function PublicationTypes() {
    const typesOfPublication = [
        { id: 1, name: "Ata" },
        { id: 2, name: "Decreto" },
        { id: 3, name: "Indicação" },
    ]

    return (
        <Fixed title="Tipos de Publicações Registradas" route="/publication-types">
            <Container>
                <Section title="Tipos de Publicações Registradas">
                    <W50>
                        <InputWrapper>
                            <label>Tipo</label>

                            <InputSelect 
                                title="Selecione o tipo de publicação"
                                group="types"
                                options={typesOfPublication}
                                objectValue="name"
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

                <Section title="Criar novo tipo de publicação">
                    <InputWrapper>
                        <label>Nome do tipo de publicação</label>

                        <Input 
                            placeholder="Digite o nome"
                            background="admin"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label>Selecione os campos para preenchimento</label>

                        <CheckList>
                            <Checkbox>Número</Checkbox>
                            <Checkbox>Data</Checkbox>
                            <Checkbox>Descrição</Checkbox>
                        </CheckList>
                    </InputWrapper>
                    <W50>
                        <InputWrapper>
                            <label>título do campo: Número</label>

                            <Input 
                                placeholder="Digite o nome do campo número"
                            background="admin"
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <label>título do campo: Data</label>

                            <Input 
                                placeholder="Digite o nome do campo data"
                            background="admin"
                            />
                        </InputWrapper>
                    </W50>
                    <W50>
                        <InputWrapper>
                            <label>título do campo: Descrição</label>

                            <Input 
                                placeholder="Digite o nome do campo descrição"
                            background="admin"
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <label>título do campo: Arquivos</label>

                            <Input 
                                placeholder="Digite o nome do campo arquivos"
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