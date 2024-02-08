import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { About } from "./pages/About";
import Navbar from "./components/NavbarR";
import { LanguageContext } from "./context/LanguageContext";
import { useState } from "react";

import ProjectCarousel from "./components/ProjectCarousel";
import SVGBackground from "./components/svgBackground";

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
              <Route path="/projects" element={<ProjectCarousel />} />
            </Routes>
          </Container>
        </Container>

        {/* <ProjectCarousel /> */}
        <footer
          className="footer bg-primary py-3 position-fixed bottom-0 w-100 text-white"
          style={{ zIndex: 2 }}
        >
          <Container className="text-center">
            By Rebecca Yourstone 2023
          </Container>
        </footer>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
