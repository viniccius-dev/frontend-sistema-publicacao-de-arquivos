import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Header, Title, Button, Nav, Footer, Role } from './styles';

import { HiXMark } from 'react-icons/hi2';
import { BiDesktop } from 'react-icons/bi';
import { TbLogout2, TbNetwork } from 'react-icons/tb';
import { FaCodeBranch, FaUsers } from 'react-icons/fa';
import { MdAssignment, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

import imgAvatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function SideMenu({ menuIsOpen, onCloseMenu, onLinkClick }) {
    const navigation = useNavigate();

    const [filtersVisible, setFiltersVisible] = useState(false);
    const [activeLink, setActiveLink] = useState(onLinkClick);

    const toggleFilters = () => {
        if(activeLink === "/") {
            setFiltersVisible(!filtersVisible);
        }
    };

    const handleLinkClick = (linkName) => {
        if(linkName !== "/" || activeLink !== "/" && linkName === "/") {
            onCloseMenu();
            navigation(linkName);
        }
        setActiveLink(linkName);
    };

    return (
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <Title><BiDesktop /> Painel Administrativo</Title>

                {menuIsOpen && (
                    <Button>
                        <HiXMark onClick={onCloseMenu} />
                    </Button>
                )}
            </Header>

            <Nav>
                <a 
                    className="bidsButton"
                    data-filters-active={filtersVisible}
                    style={{cursor: "default"}}
                    onClick={() => handleLinkClick("/")}
                    data-menu-active={
                        activeLink === "/"
                    }
                >
                    <div onClick={toggleFilters} style={{cursor: "pointer"}}>
                            <MdAssignment /> Publicações {" "}
                            <MdOutlineKeyboardArrowDown data-filters-active={filtersVisible} />
                    </div> 
                    <div className="bidsFilters">
                            <ul>
                                <label>Domínios</label>
                                <li>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value="Prefeitura Delta"
                                            name="domains"
                                        />
                                        <span>Prefeitura Delta</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value="Câmara Municipal Duradoquara"
                                            name="domains"
                                        />
                                        <span>Câmara Municipal Duradoquara</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value="Prefeitura Verissimo"
                                            name="domains"
                                        />
                                        <span>Prefeitura Verissimo</span>
                                    </label>
                                </li>
                            </ul>

                            <ul>
                                <label>Tipo</label>
                                <li>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value="Ata"
                                            name="typesOfPublication"
                                        />
                                        <span>Ata</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value="Decreto"
                                            name="typesOfPublication"
                                        />
                                        <span>Decreto</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value="Indicação"
                                            name="typesOfPublication"
                                        />
                                        <span>Indicação</span>
                                    </label>
                                </li>
                            </ul>

                            <ul>
                                <label>Ano</label>
                                <li>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value="2024"
                                            name="years"
                                        />
                                        <span>2024</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input 
                                            type="checkbox"
                                            value="2023"
                                            name="years"
                                        />
                                        <span>2023</span>
                                    </label>
                                </li>
                            </ul>
                    </div>
                </a>

                <a
                    data-menu-active={activeLink === "/users"}
                    onClick={() => handleLinkClick("/users")}
                >
                    <FaUsers />Usuários
                </a>

                <a
                    data-menu-active={activeLink === "/domains"}
                    onClick={() => handleLinkClick("/domains")}
                >
                    <TbNetwork />Domínios
                </a>

                <a
                    data-menu-active={activeLink === "/publication-types"}
                    onClick={() => handleLinkClick("/publication-types")}     
                >
                    <FaCodeBranch />Tipos de Publicação
                </a>

                <a>
                    <TbLogout2 />Sair da Conta
                </a>
            </Nav>

            <Footer>
                <img src={imgAvatarPlaceholder} alt="Foto do usuário" />
                <div>
                    <strong>Marcos Vinícius</strong>
                    <small>vinicius@agencianew.com</small>
                </div>

                <Role type="button">admin</Role>
            </Footer>
        </Container>
    );
}