import { Container, Carousel } from "react-bootstrap";
import ClockApp from "../projects/DigitalClock/ClockApp";
import Calculator from "../projects/Calculator/Calculator";
import Board from "../projects/MineSweeper/Board";

function ProjectCarousel() {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
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
            <Board />
            <Carousel.Caption>
              <h3>MineSweeper</h3>
              <p>
                Mine Sweeper game built with partly done code base. Try it out!
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Calculator />
            <Carousel.Caption>
              <h3>Calculator</h3>
              <p>A calculator inspired by iOS. Try it out!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

export default ProjectCarousel;
