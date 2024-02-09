import { Row, Col, Container } from "react-bootstrap";
import translate from "../languages/lang";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import "./Experience.css";

export function Experience() {
  const currentLang = useContext(LanguageContext);
  return (
    <>
      <Container className="d-flex flex-wrap educationContainerInfo">
        <div className="educationContainer">
          <Col>
            <Row className="fs-2 text-primary">
              {translate("education", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("LIA1", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("backend2", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("backend1", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("agileProjectMethosd", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("UXAndUI", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("javaScript3", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("javaScript2", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("javaScript1", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("HTMLAndCSS", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("interactionDesign", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("webDevelopment", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("bachelor", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("gymnasiet", currentLang.lang)}
            </Row>
          </Col>
        </div>

        <div className="educationContainer">
          <Col>
            <Row className="fs-2 text-primary">
              {translate("workLife", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("enskildFirma", currentLang.lang)}
            </Row>
            <ul>
              {/* SINCALC */}
              <li className="ms-2 text-muted">
                {translate("project1", currentLang.lang)}
                <div>
                  {translate("fullImplementation", currentLang.lang)}
                  <a
                    href="https://cerebralvenousthrombosis.com/professionals/calculator-si2ncal2c/"
                    target="_blank"
                  >
                    <u>cerebralvenousthrombosis.com</u>
                  </a>
                </div>
              </li>
              {/* AQUACLEAR */}
              <li className="ms-2 text-muted">
                {translate("project2", currentLang.lang)}
                {translate("fullImplementation", currentLang.lang)}
                <a href="https://www.aquaclear.se/" target="_blank">
                  <u>aquaclear.se</u>
                </a>
              </li>
              {/* ASEKIO */}
              <li className="ms-2 text-muted">
                {translate("project3", currentLang.lang)}
                {translate("fullImplementation", currentLang.lang)}
                <a className="" href="https://www.asekio.com/" target="_blank">
                  <u>asekio.com</u>
                </a>
              </li>
            </ul>

            <Row className="ms-2 text-muted">
              {translate("DV", currentLang.lang)}
            </Row>
            <Row className="ms-2 text-muted">
              {translate("socialWorker", currentLang.lang)}
            </Row>
          </Col>
        </div>
      </Container>

      <Container className="educationContainerText">
        <p className="mt-2">
          {translate("enskildFirmaWork", currentLang.lang)}
        </p>
        <p className="mt-2">
          {translate("enskildFirmaBackEnd", currentLang.lang)}
        </p>
        <p className="mt-2">{translate("workDescription", currentLang.lang)}</p>
        <p className="mt-2">{translate("qualities", currentLang.lang)}</p>
      </Container>
    </>
  );
}
