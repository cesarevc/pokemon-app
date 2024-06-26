import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavigationBar = () => {
    return(
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
                        width="110"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Pokemon App Logo"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;