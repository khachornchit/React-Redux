import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">React</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link href="/saga">
                            <Link to="/saga">Redux-Saga</Link>
                        </Nav.Link>
                        <Nav.Link href="/profile">
                            <Link to="/profile">Profile</Link>
                        </Nav.Link>
                        <Nav.Link href="/about">
                            <Link to="/about">About</Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
