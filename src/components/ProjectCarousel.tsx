import { Container, Carousel, Card } from "react-bootstrap";
import ClockApp from "../projects/DigitalClock/ClockApp";
import Calculator from "../projects/Calculator/Calculator";
import Board from "../projects/MineSweeper/Board";
import "./ProjectCarousel.css";

function ProjectCarousel() {
  return (
    <>
      <Container>
        <div className="projectCard">
          <div className="projectBoardContainer">
            <Calculator />
          </div>
          <div className="col-sm-5 text-primary text-center pb-5 projectInfoContainer">
            <h3 className="text-primary pt-3">
              Calculator - Own Hobby Project
            </h3>
            <p className="text-center p-3">
              This was my first JavaScript project and was built all in vanilla
              JavaScript, now moved to React. The design is inspired/copied from
              the iOS calculator.
            </p>
            <p>Try it out!</p>
            <small className="text-primary">2023</small>
          </div>
        </div>

        <div className="projectCard">
          <div className="text-primary text-center pb-5 col-sm-5 projectInfoContainer">
            <h3 className="pt-3">MineSweeper - School Project</h3>
            <p className="text-center p-3">
              This Mine Sweeper game was part of a scool project and was built
              with a partly done code base. I have addeed style and functions to
              make it a more playable game.
            </p>
            <p>Try it out on desktop!</p>
            <small className="text-primary">2023</small>
          </div>
          <div className="projectBoardContainer">
            <Board />
          </div>
        </div>

        <div className="projectCard">
          <div className=" projectBoardContainer">
            <div className="projectImgContainer">
              <img
                className="d-block w-100 "
                src=" /assets/Superjuicecalc.png"
                alt="Second slide"
              />
            </div>
          </div>
          <div className="text-primary text-center pb-5 col-sm-5 projectInfoContainer">
            <h3 className="pt-3">SuperJuice Calculator - Hobby Project</h3>
            <p className="text-center p-3">
              This is a superejuice calculator! It is a calculator that helps
              you make citrus juice for making drinks. It is built in React in
              colaboration with another developer.
            </p>
            <p className="text-primary">
              See the full implementation on <br />
              <a href="https://citrus-ratios.pages.dev/" target="_blank">
                <u>citrus-ratios.pages.dev</u>
              </a>
            </p>
            <small className="text-primary">2024</small>
          </div>
        </div>

        <div className="projectCard">
          <Container className="pt-3 projectBoardContainer">
            <ClockApp />
          </Container>
          <div className="text-primary text-center pb-5 col-sm-5 projectInfoContainer">
            <h3 className="text-primary pt-3">
              Digital Clock - School Project
            </h3>
            <p className="text-primary text-start p-3">
              A digital clock fetching data from an api. Built in React.
            </p>
            <small className="text-primary">2023</small>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectImgContainer">
            <img
              className="d-block w-100"
              src=" /assets/si2ncal2c.png"
              alt="Second slide"
            />
          </div>
          <div className="text-center pb-5">
            <h3 className="text-primary">
              SI<sub>2</sub>NCAl<sub>2</sub>C - Project on Enskild Firma
            </h3>
            <p className="text-primary">
              A Calculater used by medical professionals to predict poor outcome
              after Cerebral Venous Thrombosis.
            </p>
            <p className="text-primary">
              See the full implementation on{" "}
              <a
                href="https://cerebralvenousthrombosis.com/professionals/calculator-si2ncal2c/"
                target="_blank"
              >
                <u>cerebralvenousthrombosis.com</u>
              </a>
            </p>
            <small className="text-primary">2023</small>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectImgContainer">
            <img
              className="d-block w-100"
              src=" /assets/aquaclear2.png"
              alt="Second slide"
            />
          </div>
          <div className="text-center pb-5">
            <h3 className="text-primary">
              Aqua Clear - Project on Enskild Firma
            </h3>
            <p className="text-primary">
              A website for Aqua Clear, a company selling water filters.
            </p>
            <p className="text-primary">Implementation of existing design.</p>
            <p className="text-primary">
              See the full implementation on{" "}
              <a href="https://www.aquaclear.se/" target="_blank">
                <u>aquaclear.se</u>
              </a>
            </p>
            <small className="text-primary">2023</small>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectImgContainer">
            <img
              className="d-block w-100"
              src=" /assets/asekio2.png"
              alt="Second slide"
            />
          </div>
          <div className="text-center pb-5">
            <h3 className="text-primary">Asekio - Project on Enskild Firma</h3>
            <p className="text-primary">
              Working in a team of four developers on Asekio.
            </p>
            <p className="text-primary">
              Designing, building and implementing new features on Asekio.com.
            </p>
            <p className="text-primary">
              Se the full implementation on{" "}
              <a href="https://www.asekio.com/" target="_blank">
                <u>asekio.com</u>
              </a>
            </p>
            <small className="text-primary">2023 - Ongoing</small>
          </div>
        </div>
      </Container>

      <Container>
        {/* <Carousel> */}
        {/* CLOCK */}
        {/* <Carousel.Item
            className="carousel-style"
            style={{
              background: "linear-gradient(to bottom, #333, #fff)",
            }}
          >
            <ClockApp />
            <div
              className="text-center pb-5"
              style={{ backgroundColor: "#c6c5c5" }}
            >
              <h3 className="text-primary">Digital Clock - School Project</h3>
              <p className="text-primary">
                A digital clock fetching data from an api. Built in react.
              </p>
            </div>
          </Carousel.Item> */}

        {/* SINCALC */}
        {/* <Carousel.Item
            style={{
              background: "#fff",
            }}
          >
            <img
              className="d-block w-100"
              src=" /assets/si2ncal2c.png"
              alt="Second slide"
            />
            <div className="text-center pb-5">
              <h3 className="text-primary">
                SI<sub>2</sub>NCAl<sub>2</sub>C - Project on Enskild Firma
              </h3>
              <p className="text-primary">
                A Calculater used by medical professionals to predict poor
                outcome after Cerebral Venous Thrombosis.
              </p>
              <p className="text-primary">
                See the full implementation on{" "}
                <a
                  href="https://cerebralvenousthrombosis.com/professionals/calculator-si2ncal2c/"
                  target="_blank"
                >
                  <u>cerebralvenousthrombosis.com</u>
                </a>
              </p>
            </div>
          </Carousel.Item> */}

        {/* MINE SWEEPER */}
        {/* <Carousel.Item
            style={{
              backgroundColor: "#21232a",
            }}
          >
            <Board />
            <div className="text-primary text-center pb-5">
              <h3>MineSweeper - School Project</h3>
              <p>Mine Sweeper game built with partly done code base.</p>
              <p>Try it out on desktop!</p>
            </div>
          </Carousel.Item> */}

        {/* CALCULATOR */}
        {/* <Carousel.Item
            style={{ height: "800px", backgroundColor: "#131313" }}
          >
            <Calculator />
            <div className="text-primary text-center pb-5">
              <h3>Calculator - Own Hobby Project</h3>
              <p>A calculator inspired by iOS. Try it out!</p>
            </div>
          </Carousel.Item> */}

        {/* AQUA CLEAR */}
        {/* <Carousel.Item style={{ backgroundColor: "#fff" }}>
            <img
              className="d-block w-100"
              src=" /assets/aquaclear2.png"
              alt="Second slide"
            />
            <div className="text-center pb-5">
              <h3 className="text-primary">
                Aqua Clear - Project on Enskild Firma
              </h3>
              <p className="text-primary">
                A website for Aqua Clear, a company selling water filters.
              </p>
              <p className="text-primary">Implementation of existing design.</p>
              <p className="text-primary">
                See the full implementation on{" "}
                <a href="https://www.aquaclear.se/" target="_blank">
                  <u>aquaclear.se</u>
                </a>
              </p>
            </div>
          </Carousel.Item> */}

        {/* ASEKIO */}
        {/* <Carousel.Item style={{ backgroundColor: "#fff" }}>
            <img
              className="d-block w-100"
              src=" /assets/asekio2.png"
              alt="Second slide"
            />
            <div className="text-center pb-5">
              <h3 className="text-primary">
                Asekio - Project on Enskild Firma
              </h3>
              <p className="text-primary">
                Working in a team of four developers on Asekio.
              </p>
              <p className="text-primary">
                Designing, building and implementing new features on Asekio.com.
              </p>
              <p className="text-primary">
                Se the full implementation on{" "}
                <a href="https://www.asekio.com/" target="_blank">
                  <u>asekio.com</u>
                </a>
              </p>
            </div>
          </Carousel.Item> */}
        {/* </Carousel> */}
      </Container>
    </>
  );
}

export default ProjectCarousel;
