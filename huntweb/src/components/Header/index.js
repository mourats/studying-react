import React from 'react';
import { NavItem, Nav } from 'react-bootstrap/lib';

import "./styles.css";

const Header = () => {
    return (
        <div className="Header">
            <header id="main-header">Pré Matricula - View API</header>

            <Nav id="menu" bsStyle="pills" stacked>
                <NavItem eventKey={1} href="/alunos">
                    Alunos
                </NavItem>
                <NavItem eventKey={2} href="/disciplinas">
                    Disciplinas
                </NavItem>
            </Nav>
        </div>
    )
};

export default Header;