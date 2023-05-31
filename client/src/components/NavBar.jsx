import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, ButtonGroup} from "react-bootstrap";

function NavBar(props) {


    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top" className={""}>
                <Container>
                    <Navbar.Brand href="/">Hero</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/addHero">Add hero</Nav.Link>
                    </Nav>

                    {window.location.pathname != "/"
                        ? (<div></div>)
                        : (
                            <ButtonGroup className="mb-1">
                        <Button variant="warning" onClick={props.handlebuttonLeftClick}>⇽</Button>
                        <Button variant="warning" onClick={props.handlebuttonRightClick}>⇾</Button>
                    </ButtonGroup>)}
                </Container>

            </Navbar>


        </>
    );
}

export default NavBar;