import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
    return <>
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/nekolove">Nekoo</Nav.Link>
                        
                        <Nav.Link className="justify-content-end">Darkmode</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}