import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import '../styles/Header.css'
function Header(){

    return <>
    <div>
    <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">Haq</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="/post" className="nav-link">Post</Nav.Link>
                        <Nav.Link href="/profile" className="nav-link">Profile</Nav.Link>
                        <Nav.Link href="/requests" className="nav-link">Requests</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown" className="nav-dropdown">
                            
                            <NavDropdown.Item href="/people">People</NavDropdown.Item>
                            <NavDropdown.Item href="/friends">Friends</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button href="/logout" className="logout-button">Logout</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    
    
    
    
    </>
}
export default Header