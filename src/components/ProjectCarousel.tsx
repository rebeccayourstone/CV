import { Container, Carousel, Card } from "react-bootstrap";
import ClockApp from "../projects/DigitalClock/ClockApp";
import Calculator from "../projects/Calculator/Calculator";
import Board from "../projects/MineSweeper/Board";
import "./ProjectCarousel.css";

function ProjectCarousel() {
  return (
    <>
      <Container>
        {/* AQUA CLEAR */}
        <div className="projectCard">
          <div className="projectImgContainer">
            <img
              className="d-block w-100"
              src=" /assets/aquaclear2.png"
              alt="aquaclear"
            />
          </div>
          <div className="text-center pb-5 m-5">
            <h3 className="text-primary">
              Aqua Clear - Project on Enskild Firma
            </h3>
            <p className="text-primary">
              A website for Aqua Clear, a company selling water filters.
            </p>
            <p className="text-primary">
              This project is built i React and uses Bootstrap for style. The
              design was made in Figma by a designer and implemented by me.
            </p>
            <p className="text-primary">
              See the full implementation on{" "}
              <a href="https://www.aquaclear.se/" target="_blank">
                <u>aquaclear.se</u>
              </a>
            </p>
            <small className="text-primary">2023</small>
          </div>
        </div>

        {/* SINCALC */}
        <div className="projectCard">
          <div className="projectImgContainer">
            <img
              className="d-block w-100"
              src=" /assets/si2ncal2c.png"
              alt="Si2ncal2c"
            />
          </div>
          {/* <div className="projectImgContainer">
            <img
              className="d-block w-100"
              src=" /assets/dias3.png"
              alt="Dias3"
            />
          </div> */}

          <div className="text-center pb-5 m-5">
            <h3 className="text-primary">
              SI<sub>2</sub>NCAl<sub>2</sub>C & DIAS<sup>3</sup>- Project on
              Enskild Firma
            </h3>
            <p className="text-primary">
              Two calculators used by medical professionals to help calculate
              risks associated with specific symptoms.
            </p>
            <p className="text-primary">
              The code for the first calculator, SI<sub>2</sub>NCAl<sub>2</sub>
              C, was half done in plain JavaScript by another developer when i
              took over the project. I moved it to React and added styles based
              on the existing design on the website. DIAS<sup>3</sup> was built
              by me from scratch.
            </p>
            <p className="text-primary">
              See the full implementation on{" "}
              <a
                href="https://cerebralvenousthrombosis.com/professionals/calculator-si2ncal2c/"
                target="_blank"
              >
                <u>
                  SI<sub>2</sub>NCAl<sub>2</sub>C
                </u>
              </a>
              <span> and </span>
              <a
                href="https://cerebralvenousthrombosis.com/professionals/dias-3/"
                target="_blank"
              >
                <u>
                  DIAS<sup>3</sup>
                </u>
              </a>
            </p>
            <small className="text-primary">2023</small>
          </div>
        </div>

        {/* ASEKIO */}
        <div className="projectCard">
          <div className="projectImgContainer">
            <img
              className="d-block w-100"
              src=" /assets/asekio2.png"
              alt="asekio"
            />
          </div>
          <div className="text-center pb-5 m-5">
            <h3 className="text-primary">Asekio - Internship</h3>
            <p className="text-primary">
              Working in a team of four developers on Asekio.
            </p>
            <p className="text-primary">
              Designing, building and implementing new features on Asekio.com
              and in the product. Working with Next, React, TypeScript and Scss.
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

        {/* DR JOHANNA OrdersSystem */}
        <div className="projectCard">
          <div className="projectImgContainer">
            <img
              className="d-block w-100"
              src=" /assets/drjohanna.png"
              alt="drjohanna"
            />
          </div>

          <div className="text-center pb-5 m-5">
            <h3 className="text-primary">Bar - Hobby Project</h3>
            <p className="text-primary">
              This project is built in React and is a bar system built for
              organizing at my sister in laws doctorate. This is built in
              collaboration with a back end developer. I have made and
              implemented the design and UI.
            </p>
            <p className="text-primary">
              See the full implementation on <br />
              <a href="https://drjohanna.vercel.app/client" target="_blank">
                <u>drjohanna.vercel.app</u>
              </a>
            </p>
            <small className="text-primary">2023</small>
          </div>
        </div>

        {/* IOS CALCULATOR */}
        <div className="projectCard">
          <div className="projectBoardContainer">
            <Calculator />
          </div>

          <div className="col-sm-5 text-primary text-center pb-5 projectInfoContainer">
            <h3 className="text-primary pt-3">Calculator - Hobby Project</h3>
            <p className="text-center p-3">
              This was my first JavaScript project and was built all in vanilla
              JavaScript, now moved to React. The design is inspired/copied from
              the iOS calculator.
            </p>
            <p>Try it out!</p>
            <small className="text-primary">2023</small>
          </div>
        </div>

        {/* MINE SWEEPER */}
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

        {/* SUPERJUICE */}
        <div className="projectCard">
          <div className=" projectBoardContainer">
            <div className="projectImgContainer">
              <img
                className="d-block w-100 "
                src=" /assets/Superjuicecalc.png"
                alt="superjuice"
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

        {/* DIGITAL CLOCK */}

        <div className="projectCard">
          <div className="text-primary text-center pb-5 col-sm-5 projectInfoContainer">
            <h3 className="pt-3"> Digital Clock - School Project</h3>
            <p className="text-center p-3">
              A digital clock fetching data from an api. Built in React.
            </p>
            <small className="text-primary">2023</small>
          </div>
          <div className="projectBoardContainer">
            <ClockApp />
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProjectCarousel;
