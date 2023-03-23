import { Card } from "react-bootstrap";

export function About() {
  return (
    <>
      <Card className="d-flex flex-row">
        <Card.Body className="d-flex">
          <Card.Title className="d-flex flex-column justify-content-between align-items-baseline mb-4">
            <span className="fs-2">Hej!</span>
            <span className="ms-2 text-muted">
              Så kul att du hittat hit och vill veta lite mer om mig!
            </span>
            <span className="ms-2 text-black">
              Jag heter Rebecca och har tidigare arbetat med Socialt Arbete. Jag
              har under flera år sneglat på IT-branchen och tyckt att det ser
              spännande ut och nu har jag äntligen tagit tag i min nyfikenhet
              och helt valt att skola om mig!
            </span>
            <span className="ms-2 text-black">
              <span className="fs-2">Hobbys</span>
              <div>
                <i className="bi bi-music-note-beamed"> </i>
                Musik
              </div>
              <div>🐾 Hunden</div>
              <div> 🌊 Dykning</div>
            </span>
            <p className="card-text"></p>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
