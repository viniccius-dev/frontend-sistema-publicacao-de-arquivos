import { useState } from 'react';

import { Container } from './styles';
import { SideMenu } from '../SideMenu';

export function Fixed({ title, route, children }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <Container>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
                onLinkClick={route}
            />
            
        </Container>
    );
}