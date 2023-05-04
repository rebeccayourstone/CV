import { Container, Carousel } from "react-bootstrap";
import ClockApp from "../projects/DigitalClock/ClockApp";

function ProjectCarousel() {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
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
    </>
  );
}

export default ProjectCarousel;
