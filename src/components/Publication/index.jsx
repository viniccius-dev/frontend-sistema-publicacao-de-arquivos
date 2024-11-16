import { Container, Details, PublicationDate } from './styles';

export function Publication({ data, ...rest }) {
    const formatDate = (dateString) => {
        const [fullDate, fullTime] = dateString.split(' ');
        const [year, month, day] = fullDate.split('-');
        return `${day}/${month}/${year}`;
    }

    return (
        <Container type="button" {...rest}>
            <Details>
                <h3>{data.name}{data.number && `, ${data.number}`}{data.date && `, ${data.date}`}</h3>
            </Details>
            <PublicationDate>
                <span>Data de Publicação:</span>
                <span>{formatDate(data.created_at)}</span>
            </PublicationDate>
        </Container>
    );
}