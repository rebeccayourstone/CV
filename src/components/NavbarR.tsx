import { useContext } from "react";
import { Container, Nav, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import Navbar from "react-bootstrap/Navbar";
import translate from "../languages/lang";

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
          <Navbar.Brand href="#home">
            <span className="d-none d-md-inline">Rebecca Yourstone CV</span>
          </Navbar.Brand>

          {/* <Navbar.Toggle /> */}

          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              {translate("home", currentLang.lang)}
            </Nav.Link>
            <Nav.Link to="/experiance" as={NavLink}>
              {translate("experience", currentLang.lang)}
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              {translate("aboutMe", currentLang.lang)}
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="m-2">
              <a
                href="https://github.com/rebeccayourstone/CV.git"
                target="_blank"
              >
                <i className="bi bi-github"></i>
                <span className="d-none d-md-inline">
                  {translate("readCode", currentLang.lang)}
                </span>
              </a>
            </Navbar.Text>

            <Navbar.Text className="m-2">
              <a href="mailto:annarebeccasvensson@gmail.com">
                <i className="bi bi-envelope"></i>
                <span className="d-none d-md-inline">
                  AnnaRebeccaSvensson@gmail.com
                </span>
              </a>
            </Navbar.Text>
            <Navbar.Text className="m-2">
              <a href="tel:0706129985">
                <i className="bi bi-phone"></i>
                <span className="d-none d-md-inline">0706-12 99 85</span>
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarR;
