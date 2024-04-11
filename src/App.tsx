import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { About } from "./pages/About";
import Navbar from "./components/NavbarR";
import { LanguageContext } from "./context/LanguageContext";
import { useState } from "react";

import SVGBackground from "./components/svgBackground";
import Projects from "./components/Projects";

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
        <SVGBackground />
        <Navbar />
        <Container className="d-flex flex-row">
          <Container className="mb-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Container>
        </Container>

        <footer
          className="footer bg-primary py-3 position-fixed bottom-0 w-100 text-white"
          style={{ zIndex: 2 }}
        >
          <Container className="text-center">
            By Rebecca Yourstone 2024
          </Container>
        </footer>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
