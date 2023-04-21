import { Col, Container } from "react-bootstrap";
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
            {translate("myName", currentLang.lang)}

            <a
              href="https://ecutbildning.se/utbildningar/frontendutvecklare/"
              target="_blank"
              className="text-muted"
            >
              {translate("school", currentLang.lang)}
            </a>
          </span>
          <span className="ms-2 text-black mt-2">
            {currentLang.lang === "en" ? (
              <>
                {translate("searching", currentLang.lang)}
                <b> 231120 - 240212!</b>
              </>
            ) : (
              <>
                <b>231120 - 240212 </b>
                {translate("searching", currentLang.lang)}
              </>
            )}
          </span>
          <p>{translate("preferrdWork", currentLang.lang)}</p>
          <p>
            {translate("builtWith", currentLang.lang)}
            <a
              href="https://github.com/rebeccayourstone/CV.git"
              target="_blank"
              className="text-black"
            >
              Github Repository.
            </a>
          </p>
          <p> {translate("skillLevel", currentLang.lang)}</p>
        </Col>
      </Container>
    </>
  );
}
