import { Row, Col, Container } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import translate from "../languages/lang";

export function About() {
  const currentLang = useContext(LanguageContext);

  return (
    <>
      <Container>
        <Col>
          <Row className="fs-2">{translate("hello", currentLang.lang)}!</Row>
          <Row className=" text-muted">
            <span>{translate("funThatYouFound", currentLang.lang)}</span>
          </Row>
          <Row>
            <p>{translate("shortPresentation", currentLang.lang)}</p>
          </Row>

          <Row className="fs-4 mt-3">Hobbies</Row>
          <Row>
            <Col>
              <i className="bi bi-music-note-beamed"> </i>
              {translate("hobbyOne", currentLang.lang)}
              <Row>{translate("hobbyOneDescription", currentLang.lang)}</Row>
            </Col>
            <Col>
              🐾 {translate("hobbyTwo", currentLang.lang)}
              <p>{translate("hobbyTwoDescription", currentLang.lang)}</p>
            </Col>

            <Col>
              🌊 {translate("hobbyThree", currentLang.lang)}
              <p>{translate("hobbyThreeDescription", currentLang.lang)}</p>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
}
