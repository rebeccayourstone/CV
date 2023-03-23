import { Button, Card } from "react-bootstrap";

export function Experience() {
  return (
    <>
      <h1>Erfarenhet</h1>
      <Card className="d-flex flex-row">
        <Card.Body className="d-flex">
          <Card.Title className="d-flex flex-column justify-content-between align-items-baseline mb-4">
            <span className="fs-2">Utbildning</span>

            <span className="ms-2 text-muted">
              2023: UX och UI, EC-utbildning (Pågående)
            </span>

            <span className="ms-2 text-muted">
              2023: JavaScript 3, React, EC-utbildning (35 yrkeshögskolepoäng)
            </span>

            <span className="ms-2 text-muted">
              2023: JavaScript 2, Angular, EC-utbildning (35 yrkeshögskolepoäng)
            </span>

            <span className="ms-2 text-muted">
              2022: JavaScript 1, EC-utbildning (40 yrkeshögskolepoäng)
            </span>

            <span className="ms-2 text-muted">
              2022: HTML och CSS, EC-utbildning (35 yrkeshögskolepoäng)
            </span>

            <span className="ms-2 text-muted">
              2015: Datorspel och lärande, Umeå Universitet (7,5 högskolepoäng)
            </span>
            <span className="ms-2 text-muted">
              2015: Interaktionsdesign I, Malmö Högskola (7,5 högskolepoäng)
            </span>
            <span className="ms-2 text-muted">
              2013: Webbutveckling: Grundkurs, Malmö Högskola (7,5
              högskolepoäng)
            </span>
            <span className="ms-2 text-muted">
              2011 - 2016: Kandidatexamen i Socialt Arbete, Lunds Universitet
              (180 högskolepoäng)
            </span>
            <span className="ms-2 text-muted">
              2008-2011: Gymnasieutbildning: Estetisk musik, Spyken, Lund
            </span>
            <p className="card-text"></p>
          </Card.Title>
        </Card.Body>
      </Card>
      <Card className="d-flex flex-row">
        <Card.Body className="d-flex">
          <Card.Title className="d-flex flex-column justify-content-between align-items-baseline mb-4">
            <span className="fs-2">Yrkesliv</span>
            <span className="ms-2 text-muted">
              2018-2022: Föreståndare för Daglig Verksamhet för vuxna med
              särskilda behov
            </span>

            <span className="ms-2 text-muted">
              2016-2018: Utredande och uppföljande Socialsekreterare för barn
              och unga vuxna
            </span>

            <p className="card-text"></p>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
