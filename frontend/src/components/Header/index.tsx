import React from 'react';
import {Navbar,Container,Nav} from  'react-bootstrap' 

export function Header() {
    return (

        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>
                    Dev Run
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/developer">Início</Nav.Link>
                    <Nav.Link href="/developer">Develpers</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
    )
}

