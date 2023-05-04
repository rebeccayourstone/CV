import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { About } from "./pages/About";
import Navbar from "./components/NavbarR";
import { LanguageContext } from "./context/LanguageContext";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import ClockApp from "./projects/DigitalClock/ClockApp";

function App() {
  const [lang, setLang] = useState<string>("en");

  return (
    <>
      <LanguageContext.Provider
        value={{
          lang: lang,
          setLang: setLang,
        }}
      >
        <Navbar />
        <Container className="d-flex flex-row">
          <Container className="mb-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experiance" element={<Experience />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Container>
          <Container className="mt-4 d-none d-md-inline d-flex justify-content-end">
            <img
              src="/src/assets/IMG_4648.jpg"
              alt="profile picture"
              className="w-50 h-auto aspect-ratio-3x4 rounded"
              style={{ objectFit: "cover" }}
            ></img>
          </Container>
        </Container>
        <Container>
          <Carousel>
            <Carousel.Item>
              {/* <img
                className="d-block w-100"
                src="/src/assets/Digiclock.png"
                alt="Digital Clock slide"
              /> */}
              <div>
                <ClockApp />
              </div>
              <div>
                <Carousel.Caption>
                  <h3 className="text-primary">Digital Clock</h3>
                  <p className="text-primary">
                    A digital clock fetching data from an api. Built in react.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src=" /src/assets/WhackAMole.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 className="text-primary">Whack a Mole</h3>
                <p>Basic Whack a Mole game built in Angular.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/src/assets/MineSweeper.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="text-primary">MineSweeper</h3>
                <p>Mine Sweeper game built with partly done code base.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <footer className="footer bg-primary py-3 position-fixed bottom-0 w-100 text-white">
          <Container className="text-center">
            By Rebecca Yourstone 2023
          </Container>
        </footer>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
