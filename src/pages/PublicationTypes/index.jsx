import { Container, W50, InputWrapper } from './styles';
import { Fixed } from "../../components/Fixed";
import { Section } from "../../components/Section";
import { InputSelect } from '../../components/InputSelect';
import { Button } from '../../components/Button';

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
                            <label>Publicações</label>

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
            </Container>
        </Fixed>
    );
}