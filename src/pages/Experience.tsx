import { Row, Col, Container, Card } from "react-bootstrap";

export function Experience() {
  return (
    <>
      <h1>Erfarenhet</h1>
      <Container>
        <Col>
          <Row className="fs-2">Utbildning</Row>
          <Row className="ms-2 text-muted">
            2023: UX och UI, EC-utbildning (Pågående)
          </Row>
          <Row className="ms-2 text-muted">
            2023: JavaScript 3, React, EC-utbildning (35 yrkeshögskolepoäng)
          </Row>
          <Row className="ms-2 text-muted">
            2023: JavaScript 2, Angular, EC-utbildning (35 yrkeshögskolepoäng)
          </Row>
          <Row className="ms-2 text-muted">
            2022: JavaScript 1, EC-utbildning (40 yrkeshögskolepoäng)
          </Row>
          <Row className="ms-2 text-muted">
            2022: HTML och CSS, EC-utbildning (35 yrkeshögskolepoäng)
          </Row>
          <Row className="ms-2 text-muted">
            2015: Interaktionsdesign I, Malmö Högskola (7,5 högskolepoäng)
          </Row>
          <Row className="ms-2 text-muted">
            2013: Webbutveckling: Grundkurs, Malmö Högskola (7,5 högskolepoäng)
          </Row>
          <Row className="ms-2 text-muted">
            2011 - 2016: Kandidatexamen i Socialt Arbete, Lunds Universitet (180
            högskolepoäng)
          </Row>
          <Row className="ms-2 text-muted">
            2008 - 2011: Gymnasieutbildning: Estetisk musik, Spyken, Lund
          </Row>
        </Col>

        <Col>
          <Row className="fs-2">Yrkesliv</Row>
          <Row className="ms-2 text-muted">
            2018 - 2022: Föreståndare för Daglig Verksamhet för vuxna med
            särskilda behov
          </Row>
          <Row className="ms-2 text-muted">
            2016 - 2018: Utredande och uppföljande Socialsekreterare för barn
            och unga vuxna
          </Row>
        </Col>

        <p className="mt-2">
          I mitt arbete inom Socialt Arbete har jag mött många olika männniskor
          med olika förutsättningar och behov. Mitt jobb har i breda drag varit
          att försöka hitta ett bra samarbete med barn, anhöriga, yrkesverksamma
          och vuxna med stödbehov även i svåra situationer.
        </p>
        <p className="mt-2">
          Några egenskaper och färdigheter som varit viktiga för mig och hjälpt
          mig i detta arbete har varit tålamod, förmåga att lyssna in behov,
          kunna kommunisera tydligt och hitta lösningar som fungerar för
          samtliga parter.
        </p>
      </Container>
    </>
  );
}
