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
            <p>
              Mitt namn är Rebecca och jag har tidigare arbetat med Socialt
              Arbete. Jag har under flera år sneglat på IT-branchen och tyckt
              att det ser spännande ut och nu har jag äntligen tagit tag i min
              nyfikenhet och helt valt att skola om mig!
            </p>
          </Row>

          <Row className="fs-4 mt-3">Hobbys</Row>
          <Row>
            <Col>
              <i className="bi bi-music-note-beamed"> </i> Musik
              <Row>
                Jag har ett musikintresse som följt mig genom hela livet med
                devisen "hellre än bra".
              </Row>
            </Col>
            <Col>
              🐾 Hunden
              <p>
                Jag har en hund, whippet, som heter Garbo. När Garbo var 3 år
                flyttade han in till mig och har förgyllt dagarna sedan dess.
              </p>
            </Col>

            <Col>
              🌊 Dykning
              <p>
                Jag tog dykcertifikat 2015 och har verkligen uppskattat att få
                flyta runt under ytan.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
}
