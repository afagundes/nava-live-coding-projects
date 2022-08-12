import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/lista-contatos">
                        Lista de Contatos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="novo-contato">
                        Cadastrar Novo
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
