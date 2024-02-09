import { useContext } from "react";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import Navbar from "react-bootstrap/Navbar";
import translate from "../languages/lang";

function NavbarR() {
  const currentLang = useContext(LanguageContext);

  return (
    <>
      <div className="d-flex">
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
        <Container
          className="d-flex justify-content-center align-items-centertext-alert font-weight-bold"
          style={{ width: "100%", fontWeight: "bold" }}
        >
          <p className="text-xl mt-3 ">
            Looking for work in Front-end development!
          </p>
        </Container>
      </div>
      <Navbar sticky="top" className="shadow-sm mb-3 bg-primary ">
        <Container className="d-flex bg-primary">
          <Navbar.Brand href="/">
            <span className="d-none d-md-inline text-white">
              Rebecca Yourstone CV
            </span>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink} className="text-white">
              {translate("home", currentLang.lang)}
            </Nav.Link>
            <Nav.Link to="/experience" as={NavLink} className="text-white">
              {translate("experience", currentLang.lang)}
            </Nav.Link>
            {/* <Nav.Link to="/about" as={NavLink} className="text-white">
              {translate("aboutMe", currentLang.lang)}
            </Nav.Link> */}
            <Nav.Link to="/projects" as={NavLink} className="text-white">
              {translate("projects", currentLang.lang)}
            </Nav.Link>
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="m-2 text-white">
              <a
                href="https://github.com/rebeccayourstone/CV.git"
                target="_blank"
              >
                <i className="bi bi-github text-white"></i>
                {/* <span className="d-none d-xl-inline text-white">
                  {translate("readCode", currentLang.lang)}
                </span> */}
              </a>
            </Navbar.Text>
            <Navbar.Text className="m-2 text-white">
              <a href="mailto:annarebeccasvensson@gmail.com">
                <i className="bi bi-envelope text-white"></i>
                {/* <span className="d-none d-xl-inline text-white">
                  AnnaRebeccaSvensson@gmail.com
                </span> */}
              </a>
            </Navbar.Text>
            <Navbar.Text className="m-2 text-white">
              <a href="tel:0706129985">
                <i className="bi bi-phone text-white"></i>
                {/* <span className="d-none d-xl-inline text-white">
                  0706-12 99 85
                </span> */}
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarR;
