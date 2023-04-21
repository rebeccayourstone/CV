import { Row, Col, Container } from "react-bootstrap";
import translate from "../languages/lang";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

export function Experience() {
  const currentLang = useContext(LanguageContext);
  return (
    <>
      <Container>
        <Col>
          <Row className="fs-2">{translate("education", currentLang.lang)}</Row>
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

        <Col>
          <Row className="fs-2">{translate("workLife", currentLang.lang)}</Row>
          <Row className="ms-2 text-muted">
            {translate("DV", currentLang.lang)}
          </Row>
          <Row className="ms-2 text-muted">
            {translate("socialWorker", currentLang.lang)}
          </Row>
        </Col>

        <p className="mt-2">{translate("workDescription", currentLang.lang)}</p>
        <p className="mt-2">{translate("qualities", currentLang.lang)}</p>
      </Container>
    </>
  );
}
