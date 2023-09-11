import { Container, Carousel } from "react-bootstrap";
import ClockApp from "../projects/DigitalClock/ClockApp";
import Calculator from "../projects/Calculator/Calculator";
import Board from "../projects/MineSweeper/Board";

function ProjectCarousel() {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item
            className="carousel-style"
            style={{
              background: "linear-gradient(to bottom, #333, #fff)",
            }}
          >
            <ClockApp />

            <div>
              <Carousel.Caption>
                <h3 className="text-primary">Digital Clock</h3>
                <p className="text-primary">
                  A digital clock fetching data from an api. Built in react.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item
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
                SI<sub>2</sub>NCAl<sub>2</sub>C
              </h3>
              <p className="text-primary">
                A Calculater used by medical professionals to predict poor
                outcome after Cerebral Venous Thrombosis.
              </p>
              <p className="text-primary">
                Se the full implementation on{" "}
                <a href="https://cerebralvenousthrombosis.com/professionals/calculator-si2ncal2c/">
                  <u>CerebralVenousthrombosis.com</u>
                </a>
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item
            style={{
              backgroundColor: "#21232a",
            }}
          >
            <Board />
            <div className="text-primary text-center pb-5">
              <h3>MineSweeper</h3>
              <p>Mine Sweeper game built with partly done code base.</p>
              <p>Try it out on desktop!</p>
            </div>
          </Carousel.Item>

          <Carousel.Item
            style={{ height: "800px", backgroundColor: "#131313" }}
          >
            <Calculator />
            <Carousel.Caption>
              <h3>Calculator</h3>
              <p>A calculator inspired by iOS. Try it out!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            style={{
              backgroundColor: "#21232a",
            }}
          >
            <Board />
            <div className="text-primary text-center pb-5">
              <h3>MineSweeper</h3>
              <p>Mine Sweeper game built with partly done code base.</p>
              <p>Try it out on desktop!</p>
            </div>
          </Carousel.Item>

          <Carousel.Item style={{ backgroundColor: "#fff" }}>
            <img
              className="d-block w-100"
              src=" /assets/aquaclear.png"
              alt="Second slide"
            />
            <div className="text-center pb-5">
              <h3 className="text-primary">Aqua Clear</h3>
              <p className="text-primary">
                A webshop for Aqua Clear, a company selling water filters.
              </p>
              <p className="text-primary">
                Implementation of existing desig and solution for klarna
                checkout.
              </p>
              <p className="text-primary">
                Se the full implementation on{" "}
                <a href="https://www.aquaclear.se/">
                  <u>aquaclear.se</u>
                </a>
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

export default ProjectCarousel;
