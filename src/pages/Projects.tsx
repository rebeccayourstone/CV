import { Row, Col, Container } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import translate from "../languages/lang";
import { TbScubaMask } from "react-icons/tb";
import { FaPaw, FaItunesNote } from "react-icons/fa";

export function Projects() {
  const currentLang = useContext(LanguageContext);

  return (
    <>
      <Container>
        <Col>
          <Row className="fs-2 text-primary">
            {translate("hello", currentLang.lang)}!
          </Row>
          <Row className="text-primary">
            <span>{translate("funThatYouFound", currentLang.lang)}</span>
          </Row>
          <Row>
            <p>{translate("shortPresentation", currentLang.lang)}</p>
          </Row>
          <Row>
            <p>{translate("ownCompany", currentLang.lang)}</p>
          </Row>

          <Row className="fs-4 mt-3 text-primary">Hobbies</Row>
          <Row className="d-flex flex-column flex-md-row">
            <Col className="p-4 hobbyOdd">
              <span>
                <FaItunesNote />
                {translate("hobbyOne", currentLang.lang)}
              </span>
              <p className="text-center">
                {translate("hobbyOneDescription", currentLang.lang)}
              </p>
            </Col>
            <Col className="p-4  m-2 hobbyEven">
              <span>
                <FaPaw /> {translate("hobbyTwo", currentLang.lang)}
              </span>
              <p className="text-center">
                {translate("hobbyTwoDescription", currentLang.lang)}
              </p>
            </Col>
            <Col className="p-4 hobbyOdd">
              <span>
                <TbScubaMask /> {translate("hobbyThree", currentLang.lang)}
              </span>
              <p className="text-center">
                {translate("hobbyThreeDescription", currentLang.lang)}
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
}
