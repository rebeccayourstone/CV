import { Button, Card } from "react-bootstrap";
import translate from "../languages/lang";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

export function Home() {
  const currentLang = useContext(LanguageContext);

  return (
    <>
      {/* <h1>Hem</h1> */}
      <Card className="d-flex flex-row">
        <Card.Body className="d-flex">
          <Card.Title className="d-flex flex-column justify-content-between align-items-baseline mb-4">
            <span className="fs-2">
              {translate("hello", currentLang.lang)}!
            </span>
            <span className="ms-2 text-muted">
              Mitt namn är Rebecca Yourstone fd Svensson och jag läser till
              Frontend Utvecklare på
              <a
                href="https://ecutbildning.se/utbildningar/frontendutvecklare/"
                target="_blank"
              >
                EC Helsingborg
              </a>
            </span>
            <span className="ms-2 text-black">
              231120 - 240212 söker jag LIA-plats inom Frontendutveckling
            </span>
            <p>
              Jag bygger helst i TypeScript och React, men är öppen för andra
              ramverk/bibliotek och ren JavaScript.
            </p>
            <p className="card-text">
              Denna sida är byggd och designad av mig i TypeScript och React med
              style i Bootstrap och CSS.
            </p>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
