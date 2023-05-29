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
          <Row className="fs-2 text-primary">
            {translate("hello", currentLang.lang)}!
          </Row>
          <Row className=" text-primary">
            <span>{translate("funThatYouFound", currentLang.lang)}</span>
          </Row>
          <Row>
            <p>{translate("shortPresentation", currentLang.lang)}</p>
          </Row>

          <Row className="fs-4 mt-3 text-primary">Hobbies</Row>
          <Row className="d-flex flex-column flex-md-row">
            <Col>
              <i className="bi bi-music-note-beamed"></i>
              {translate("hobbyOne", currentLang.lang)}
              <p>{translate("hobbyOneDescription", currentLang.lang)}</p>
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
//                                              _/)ii/)
//                          _- _ , - . _       (o " )
//                       `,% o` ~~-_,'.'         | |
//                       % %@ - % %, -'%,        |o|
//                       ,-, . _ --\ -.%         | |
//              P^=.     `'"   |+|'    `         | |
//              ||             |+|               |O|________||
//              ||             |+|               |      O     |
//              ||             |+|               | O          |
//        ______/|             |+|               | __o____O__ |
//       `| ___ ,/             |+|               ||||     || ||
//        ||   ||              |+|               ||||     || ||
//        ||   ||              |+|               ||||     || ||
//________||___||___.__________/H|____           ||||     || ||
