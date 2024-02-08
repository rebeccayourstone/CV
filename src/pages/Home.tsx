import { Col, Container } from "react-bootstrap";
import translate from "../languages/lang";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import "./Home.css";
import Skills from "../components/Skills";

export function Home() {
  const currentLang = useContext(LanguageContext);

  return (
    <>
      <div className="homeContainer d-flex flex-row">
        <Container className="d-none d-md-block pb-5" style={{ maxWidth: 400 }}>
          <img
            src="/assets/IMG_4648.jpg"
            alt="profile picture"
            className="rounded-circle"
            style={{ objectFit: "scale-down", width: "100%" }}
          ></img>
        </Container>
        <Container>
          <Col className="d-flex flex-column justify-content-between align-items-baseline mb-4">
            <span className="fs-2 text-primary">
              {translate("hello", currentLang.lang)}!
            </span>

            <span className="fs-2 text-primary mt-2">
              I'm Rebecca Yourstone, <br></br>
              Frontend Developer
              {/* {translate("myName", currentLang.lang)} */}
              {/* <a
                href="https://ecutbildning.se/utbildningar/frontendutvecklare/"
                target="_blank"
                className="text-primary"
              >
                {translate("school", currentLang.lang)}
              </a> */}
            </span>
            <span className="ms-2 text-black mt-2">
              {currentLang.lang === "en" ? (
                <>{translate("searching", currentLang.lang)}</>
              ) : (
                <>{translate("searching", currentLang.lang)}</>
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
      </div>
      {/* <Skills /> */}
    </>
  );
}
