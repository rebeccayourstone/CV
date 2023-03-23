import { useContext } from "react";
import { Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import Navbar from "react-bootstrap/Navbar";

function NavbarR() {
  const currentLang = useContext(LanguageContext);

  return (
    <>
      <button
        type="button"
        className="btn"
        onClick={() => currentLang.setLang("se")}
      >
        SE
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => currentLang.setLang("en")}
      >
        EN
      </button>
      <Navbar sticky="top" className="shadow-sm mb-3 bg-white">
        <Container className="d-flex bg-white">
          <Navbar.Brand href="#home">Rebecca Yourstone CV</Navbar.Brand>

          {/* <Navbar.Toggle /> */}

          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Hem
            </Nav.Link>
            <Nav.Link to="/experiance" as={NavLink}>
              Erfarenhet
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              Om Mig
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="m-2">
              <a
                href="https://github.com/rebeccayourstone/CV.git"
                target="_blank"
              >
                <i className="bi bi-github"></i>
                Se min källkod!
              </a>
            </Navbar.Text>
            <Navbar.Text className="m-2">
              <a href="mailto:annarebeccasvensson@gmail.com">
                <i className="bi bi-envelope"> </i>
                AnnaRebeccaSvensson@gmail.com
              </a>
            </Navbar.Text>
            <Navbar.Text className="m-2">
              <a href="tel:0706129985">
                <i className="bi bi-phone"></i>0706-12 99 85
              </a>
            </Navbar.Text>
            <Navbar.Text className="m-2">
              <i className="bi bi-printer">Skriv ut CV</i>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarR;
