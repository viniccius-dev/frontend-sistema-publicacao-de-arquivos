import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, W50, InputWrapper } from './styles';

import { Input } from '../../components/Input';
import { InputSelect } from '../../components/InputSelect';
import { Textarea } from '../../components/Textarea';
import { Uploads } from '../../components/Uploads';
import { Button } from '../../components/Button';
import { Fixed } from '../../components/Fixed';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function NewPublication() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [animationLoading, setAnimationLoading] = useState(false);
    const [saveLoading, setSaveLoading] = useState(false);

    const [types, setTypes] = useState([]);
    const [domains, setDomains] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedDomain, setSelectedDomain] = useState(null);

    const [number, setNumber] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [files, setFiles] = useState([]);

    const handleFilesChange = (newFiles) => {
        setFiles(newFiles);
    };

    const isValidDateTime = (dateString) => {
        const [day, month, year] = dateString.split('/');
        const date = new Date(year, month - 1, day);
        return !isNaN(date.getTime());
    };

    const handleSubmit = async () => {
        if(date && !isValidDateTime(date)) {
            alert("Data inválida. Por favor, verifique e tente novamente.");
            return
        };

        const publicationData = {
            type_of_publication_id: selectedType?.id,
            number: number === '' ? null : number,
            date: date === '' ? null : date,
            description: description === '' ? null : description,
            domain_id: selectedDomain?.id
        };

        setSaveLoading(true);

        try {
            const publicationResponse = await api.post("/publications", publicationData);

            if(files.length > 0) {
                const formData = new FormData();
                files.forEach(fileObj => {
                    formData.append("attachment", fileObj.file);
                });

                await api.post(`/publications/attachments/${publicationResponse.data.publication.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            };

            alert("Publicação cadastrada com sucesso!");
            navigate("/");
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("erro ao cadastrar a publicação");
            };
        } finally {
            setSaveLoading(false);
        };
    };

    useEffect(() => {
        if(user.role === "admin") {
            setAnimationLoading(true);

            api.get("/domains")
            .then((response) => setDomains(response.data))
            .catch(error => {
                if(error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível acessar dados do domínio");
                }
            });
            
            api.get("/types-of-publication")
            .then((response) => {
                setTypes(response.data)
                setAnimationLoading(false);
            })
            .catch(error => {
                if(error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível acessar dados dos tipos de publicação");
                }
            });
        }
    }, [user.role]);

    return (
        <Fixed title="Nova Publicação" route="/create-publication">
            {
                animationLoading ?

                    <LoadingSpinner loading={animationLoading} />

                :

                    <Container>
                        <InputWrapper>
                            <label>O que deseja publicar?</label>

                            <InputSelect 
                                title="Selecione o tipo de publicação"
                                group="types"
                                options={types}
                                objectValue="name"
                                onSelect={option => setSelectedType(option)}
                                selected={selectedType || {}}
                            />
                        </InputWrapper>
                        {
                            selectedType?.number_title &&

                            <InputWrapper>
                                <label>{selectedType.number_title}</label>

                                <Input 
                                    placeholder={`Digite o número da publicação`} 
                                    background="admin"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </InputWrapper>
                        }
                        {
                            selectedType?.date_title &&

                            <InputWrapper>
                                <label>{selectedType.date_title}</label>

                                <Input
                                    placeholder="Digite a data da publicação"
                                    background="admin"
                                    maskType="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </InputWrapper>
                        }
                        {
                            selectedType?.description_title &&

                            <InputWrapper>
                                <label>{selectedType.description_title}</label>

                                <Textarea 
                                    placeholder="Digite a descrição da publicação"
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </InputWrapper>
                        }
                        {
                            selectedType?.file_title &&

                            <InputWrapper>
                                <label>{selectedType.file_title}</label>
                                <Uploads onFilesChange={handleFilesChange} />
                            </InputWrapper>
                        }
                        {
                            selectedType &&

                            <W50>
                                {
                                    user.role === "admin" &&

                                    <InputWrapper>
                                        <label>Domínio Vinculado</label>

                                        <InputSelect 
                                            title="Selecione o domínio vinculado"
                                            group="domains"
                                            options={domains}
                                            objectValue="domain_name"
                                            onSelect={option => setSelectedDomain(option)}
                                            selected={selectedDomain || {}}
                                        />
                                    </InputWrapper>
                                }
                                <InputWrapper>
                                    <Button 
                                        title="Cadastrar"
                                        onClick={handleSubmit}
                                        loading={saveLoading}
                                    />
                                </InputWrapper>
                            </W50>
                        }
                    </Container>
            }
        </Fixed>
    );
}
