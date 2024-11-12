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
                </Section>
            </Container>
        </Fixed>
    );
}