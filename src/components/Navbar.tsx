import { useContext } from "react";
import { Container, Nav, Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

function Navbar() {
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
      <NavbarBs sticky="top" className="shadow-sm mb-3 bg-">
        <Container className="d-flex bg-white">
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
            <div className="d-flex align-items-center ">
              <a
                href="mailto:annarebeccasvensson@gmail.com"
                className="text-dark text-decoration-none"
              >
                <i className="bi bi-envelope"> </i>
                AnnaRebeccaSvensson@gmail.com
              </a>
              <i className="bi bi-phone"></i>0706-12 99 85
              <i className="bi bi-printer">Skriv ut CV</i>
            </div>
          </Nav>
        </Container>
      </NavbarBs>
    </>
  );
}

export default Navbar;
