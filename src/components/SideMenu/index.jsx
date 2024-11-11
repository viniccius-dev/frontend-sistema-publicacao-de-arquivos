import { HiXMark } from 'react-icons/hi2';
import { Container, Header, Title, Button, Nav } from './styles';

import { FaCodeBranch, FaUsers } from 'react-icons/fa';
import { BiDesktop } from 'react-icons/bi';
import { MdAssignment, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { TbLogout2, TbNetwork } from 'react-icons/tb';

export function SideMenu({ menuIsOpen, onCloseMenu, onLinkClick }) {
    return (
        <Container>
            <Header>
                <Title><BiDesktop /> Painel Administrativo</Title>

                <Button>
                    <HiXMark />
                </Button>
            </Header>

            <Nav>
                <a 
                    className="bidsButton"
                    data-menu-active="true"
                    data-filters-active="true"
                >
                    <div>
                            <MdAssignment /> Licitações {" "}
                            <MdOutlineKeyboardArrowDown />
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

                <a>
                    <FaUsers />Usuários
                </a>

                <a>
                    <TbNetwork />Domínios
                </a>

                <a>
                    <FaCodeBranch />Tipos de Publicação
                </a>

                <a>
                    <TbLogout2 />Sair da Conta
                </a>
            </Nav>
        </Container>
    );
}