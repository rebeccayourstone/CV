import { Row, Col, Container } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import translate from "../languages/lang";
import { TbScubaMask } from "react-icons/tb";
import { FaPaw, FaItunesNote } from "react-icons/fa";
import "./About.css";

export function About() {
  const currentLang = useContext(LanguageContext);

  return (
    <>
      <Container className="d-flex flex-row">
        <Col>
          <Row className="fs-2 text-primary">
            {translate("hello", currentLang.lang)}!
          </Row>
          <Row className="text-primary">
            <span>{translate("funThatYouFound", currentLang.lang)}</span>
          </Row>
          <Row>
            <p>{translate("shortPresentation", currentLang.lang)}</p>
          </Row>
          <Row>
            <p>{translate("ownCompany", currentLang.lang)}</p>
          </Row>

          <Row className="fs-4 mt-3 text-primary">Hobbies</Row>
          <Row className="d-flex flex-column flex-md-row">
            <Col className="p-4 hobbyOdd">
              <span>
                <FaItunesNote />
                {translate("hobbyOne", currentLang.lang)}
              </span>
              <p className="text-center">
                {translate("hobbyOneDescription", currentLang.lang)}
              </p>
              <svg
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg"
              >
                <g>
                  <g>
                    <path
                      d="M503.319,5.939c-5.506-4.705-12.783-6.767-19.958-5.635L169.555,49.852c-12.04,1.901-20.909,12.28-20.909,24.47v99.097
			v156.903H99.097C44.455,330.323,0,371.073,0,421.161C0,471.25,44.455,512,99.097,512c54.642,0,99.097-40.75,99.097-90.839v-66.065
			V194.588l264.258-41.725v136.169h-49.548c-54.642,0-99.097,40.75-99.097,90.839s44.455,90.839,99.097,90.839
			S512,429.959,512,379.871v-66.065V123.871V24.774C512,17.529,508.827,10.646,503.319,5.939z"
                    />
                  </g>
                </g>
              </svg>
            </Col>
            <Col className="p-4  m-2 hobbyEven">
              <span>
                <FaPaw /> {translate("hobbyTwo", currentLang.lang)}
              </span>
              <p className="text-center">
                {translate("hobbyTwoDescription", currentLang.lang)}
              </p>
              <svg
                height="800px"
                width="800px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48.839 48.839"
                className="svg"
              >
                <g>
                  <path
                    d="M39.041,36.843c2.054,3.234,3.022,4.951,3.022,6.742c0,3.537-2.627,5.252-6.166,5.252
		c-1.56,0-2.567-0.002-5.112-1.326c0,0-1.649-1.509-5.508-1.354c-3.895-0.154-5.545,1.373-5.545,1.373
		c-2.545,1.323-3.516,1.309-5.074,1.309c-3.539,0-6.168-1.713-6.168-5.252c0-1.791,0.971-3.506,3.024-6.742
		c0,0,3.881-6.445,7.244-9.477c2.43-2.188,5.973-2.18,5.973-2.18h1.093v-0.001c0,0,3.698-0.009,5.976,2.181
		C35.059,30.51,39.041,36.844,39.041,36.843z M16.631,20.878c3.7,0,6.699-4.674,6.699-10.439S20.331,0,16.631,0
		S9.932,4.674,9.932,10.439S12.931,20.878,16.631,20.878z M10.211,30.988c2.727-1.259,3.349-5.723,1.388-9.971
		s-5.761-6.672-8.488-5.414s-3.348,5.723-1.388,9.971C3.684,29.822,7.484,32.245,10.211,30.988z M32.206,20.878
		c3.7,0,6.7-4.674,6.7-10.439S35.906,0,32.206,0s-6.699,4.674-6.699,10.439C25.507,16.204,28.506,20.878,32.206,20.878z
		 M45.727,15.602c-2.728-1.259-6.527,1.165-8.488,5.414s-1.339,8.713,1.389,9.972c2.728,1.258,6.527-1.166,8.488-5.414
		S48.455,16.861,45.727,15.602z"
                  />
                </g>
              </svg>
            </Col>
            <Col className="p-4 hobbyOdd">
              <span>
                <TbScubaMask /> {translate("hobbyThree", currentLang.lang)}
              </span>
              <p className="text-center">
                {translate("hobbyThreeDescription", currentLang.lang)}
              </p>
              <svg
                height="800px"
                width="800px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 226.44 226.44"
                className="svg"
              >
                <path
                  d="M226.44,28.408v122.041c0,30.373-23.334,55.083-52.015,55.083c-26.113,0-48.294-20.656-51.595-48.048
	c-0.446-3.701,0.712-7.417,3.177-10.196c2.445-2.758,5.961-4.339,9.646-4.339h0.242c6.489,0,12.005,4.903,12.831,11.406
	c1.761,13.878,12.81,24.343,25.699,24.343c14.306,0,25.944-12.673,25.944-28.249V28.408c0-4.143,3.358-7.5,7.5-7.5h11.071
	C223.083,20.908,226.44,24.266,226.44,28.408z M188.719,79.295v14.578c0,4.51-2.492,8.448-6.17,10.512
	c-0.421,13.894-11.46,25.063-24.97,25.063h-34.83c-2.587,0-5.121-0.576-7.442-1.644l-11.059,9.545
	c-2.984,2.574-6.624,3.87-10.27,3.87c-3.396,0-6.796-1.122-9.682-3.381l-12.169-9.52c-1.961,0.726-4.039,1.129-6.158,1.129H31.14
	c-13.509,0-24.549-11.169-24.97-25.063C2.491,102.321,0,98.383,0,93.873V79.295c0-4.505,2.486-8.44,6.158-10.506v-0.236
	c0-14.272,11.207-25.885,24.982-25.885h126.439c13.775,0,24.982,11.612,24.982,25.885v0.236
	C186.233,70.855,188.719,74.79,188.719,79.295z M107.478,84.015l19.258,21.246c0.264,0.292,0.57,0.459,0.838,0.459h30.39
	c0.629,0,1.543-0.965,1.543-2.477V69.391c0-1.512-0.914-2.477-1.543-2.477h-49.648c-0.629,0-1.543,0.965-1.543,2.477v12.604
	C106.772,82.771,107.036,83.526,107.478,84.015z M30.496,105.72h30.391c0.268,0,0.573-0.167,0.837-0.458l19.258-21.248
	c0.442-0.487,0.706-1.242,0.706-2.019V69.391c0-1.512-0.914-2.477-1.543-2.477H30.496c-0.629,0-1.543,0.965-1.543,2.477v33.853
	C28.953,104.755,29.867,105.72,30.496,105.72z M94.448,125.992l9.728-8.396l-9.295-10.451c-0.051-0.058-0.208-0.234-0.522-0.234
	s-0.471,0.177-0.523,0.235l-10.022,11.269l9.725,7.609C93.917,126.321,94.242,126.171,94.448,125.992z"
                />
              </svg>
            </Col>
          </Row>
        </Col>
        <Container className="d-none d-md-block pb-5" style={{ maxWidth: 400 }}>
          <img
            src="/assets/IMG_4648.jpg"
            alt="profile picture"
            className="rounded"
            style={{ objectFit: "scale-down", width: "100%" }}
          ></img>
        </Container>
      </Container>
    </>
  );
}
//                                              _/)ii/)
//                          _- _ , - . _       (o " )
//                       `,% o` ~~-_,'.'         | |
//                       % %@ - % %, -'%,        |o|
//                       ,-, . _ --\ -.%         | |
//              P^=.     `'"   |+|'    `         | |
//              ||             |+|               |O|________||
//              ||             |+|               |      O     |
//              ||             |+|               | O          |
//        ______/|             |+|               | __o____O__ |
//       `| ___ ,/             |+|               ||||     || ||
//        ||   ||              |+|               ||||     || ||
//        ||   ||              |+|               ||||     || ||
//________||___||___.__________/H|____           ||||     || ||
