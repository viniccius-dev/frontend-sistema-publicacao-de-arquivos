import { Container, Menu } from "./styles";
import { Button } from "../Button";

import { FaList, FaPlus } from "react-icons/fa";

export function Header({ title, onOpenMenu }) {
    function handleLinkClick() {
        Navigate("/create-publication");
    }

    return (
        <Container>
            <Menu onClick={onOpenMenu}>
                <FaList />
            </Menu>

            <h1>{title}</h1>
            
            <Button icon={FaPlus} title="Adicionar Publicação" onClick={handleLinkClick} />
        </Container>
    );
}