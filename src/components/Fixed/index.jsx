import { Container } from './styles';

import { SideMenu } from '../SideMenu';

export function Fixed({ title, route, children }) {
    return (
        <Container>
            <SideMenu />
        </Container>
    );
}