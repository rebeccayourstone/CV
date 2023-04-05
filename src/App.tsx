import { Routes, Route } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { About } from "./pages/About";
import Navbar from "./components/NavbarR";
import { LanguageContext } from "./context/LanguageContext";
import { useState } from "react";

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
          <Container className="mb-4 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experiance" element={<Experience />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Container>
          <Container className="mt-4">
            <img
              src="/src/assets/IMG_4648.jpg"
              alt="profile picture"
              className="w-50 h-auto aspect-ratio-3x4 rounded"
              style={{ objectFit: "cover" }}
            ></img>
          </Container>
        </Container>
        <small className="d-flex justify-content-center mt-4">
          By Rebecca Yourstone 2023
        </small>
      </LanguageContext.Provider>
    </>
  );
}

export default App;