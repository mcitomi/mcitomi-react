import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";

export default () => {
    return <>
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/nekolove">Nekoo</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}