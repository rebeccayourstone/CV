import { Row, Col, Container } from "react-bootstrap";

export function About() {
  return (
    <>
      <Container>
        <Col>
          <Row className="fs-2">Hej!</Row>
          <Row className=" text-muted">
            <span>Så kul att du hittat hit och vill veta lite mer om mig!</span>
          </Row>
          <Row>
            <span>
              Jag heter Rebecca och har tidigare arbetat med Socialt Arbete. Jag
              har under flera år sneglat på IT-branchen och tyckt att det ser
              spännande ut och nu har jag äntligen tagit tag i min nyfikenhet
              och helt valt att skola om mig!
            </span>
          </Row>
          <Row className="fs-4 mt-3">Hobbys</Row>
          <Row>
            <Col>
              <i className="bi bi-music-note-beamed"> </i>
              Musik
            </Col>
            <Col>🐾 Hunden</Col>
            <Col>🌊 Dykning</Col>
          </Row>
        </Col>
      </Container>
    </>
  );
}
