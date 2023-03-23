import { Row, Col, Container } from "react-bootstrap";
import translate from "../languages/lang";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

export function Home() {
  const currentLang = useContext(LanguageContext);

  return (
    <>
      <Container>
        <Col className="d-flex flex-column justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{translate("hello", currentLang.lang)}!</span>
          <span className="ms-2 text-muted mt-2">
            Mitt namn är Rebecca Yourstone fd Svensson och jag läser till
            Frontendutvecklare på{" "}
            <a
              href="https://ecutbildning.se/utbildningar/frontendutvecklare/"
              target="_blank"
            >
              EC i Helsingborg.
            </a>
          </span>
          <span className="ms-2 text-black mt-2">
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
        </Col>
      </Container>
    </>
  );
}
