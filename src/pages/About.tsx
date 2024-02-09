import { Row, Col, Container } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import translate from "../languages/lang";
import "./About.css";
import { Link } from "react-router-dom";

export function About() {
  const currentLang = useContext(LanguageContext);

  return (
    <>
      <div className="d-flex flex-row">
        <Container className="d-flex flex-row position-relative aboutMeContainer">
          <Col>
            <Row className="fs-4 mt-3 text-primary">Interests / Skills</Row>
            <Row className="d-flex flex-column flex-md-row">
              <Col className="p-4 hobby">
                <span>
                  {/* <FaItunesNote /> */}
                  TypeSript & React
                </span>
                <p className="text-center">
                  Whenever I get the operetunity to choose a tech stack I tend
                  to go for TypeScript and React. I am however happy to try out
                  and learn new things!
                </p>
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path
                    fill-rule="nonzero"
                    clip-rule="nonzero"
                    d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z"
                  />
                </svg>
              </Col>
              <Col className="p-4 hobby">
                <span>HTML & CSS</span>
                <p className="text-center">
                  Thesee are still the very basics of web development and I
                  enjoy exploring new ways to use HTML and CSS!
                </p>
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <g id="layer1">
                    <path d="M 3 0 L 3 20 L 17 20 L 17 19 L 16 19 L 4 19 L 4 1 L 12 1 L 12 4 L 12 5 L 16 5 L 16 12 L 17 12 L 17 5 L 17 4 L 13 0 L 12 0 L 3 0 z M 13 1.3535156 L 15.646484 4 L 13 4 L 13 1.3535156 z M 7 13 L 6.8164062 13.007812 L 6.6328125 13.033203 L 6.453125 13.076172 L 6.2773438 13.134766 L 6.1074219 13.208984 L 5.9472656 13.298828 L 5.7949219 13.404297 L 5.6523438 13.521484 L 5.5214844 13.652344 L 5.4042969 13.794922 L 5.3007812 13.947266 L 5.2089844 14.107422 L 5.1347656 14.277344 L 5.0761719 14.451172 L 5.0351562 14.632812 L 5.0078125 14.816406 L 5 15 L 5 16 L 5.0078125 16.183594 L 5.0351562 16.367188 L 5.0761719 16.546875 L 5.1347656 16.722656 L 5.2089844 16.890625 L 5.3007812 17.052734 L 5.4042969 17.205078 L 5.5214844 17.347656 L 5.6523438 17.478516 L 5.7949219 17.595703 L 5.9472656 17.699219 L 6.1074219 17.791016 L 6.2773438 17.865234 L 6.453125 17.923828 L 6.6328125 17.964844 L 6.8164062 17.992188 L 7 18 L 7.1835938 17.992188 L 7.3671875 17.964844 L 7.546875 17.923828 L 7.7226562 17.865234 L 7.8925781 17.791016 L 8.0527344 17.699219 L 8.2050781 17.595703 L 8.3476562 17.478516 L 8.4785156 17.347656 L 8.5957031 17.205078 L 8.6992188 17.052734 L 8.7890625 16.894531 L 7.8925781 16.445312 L 7.8652344 16.5 L 7.7929688 16.607422 L 7.7070312 16.707031 L 7.609375 16.792969 L 7.5 16.865234 L 7.3828125 16.923828 L 7.2597656 16.964844 L 7.1308594 16.992188 L 7 17 L 6.8691406 16.992188 L 6.7402344 16.964844 L 6.6171875 16.923828 L 6.5 16.865234 L 6.390625 16.792969 L 6.2929688 16.707031 L 6.2070312 16.607422 L 6.1347656 16.5 L 6.0761719 16.382812 L 6.0332031 16.257812 L 6.0078125 16.130859 L 6 16 L 6 15 L 6.0078125 14.869141 L 6.0332031 14.740234 L 6.0761719 14.617188 L 6.1347656 14.5 L 6.2070312 14.390625 L 6.2929688 14.292969 L 6.390625 14.207031 L 6.5 14.134766 L 6.6171875 14.076172 L 6.7402344 14.033203 L 6.8691406 14.007812 L 7 14 L 7.1308594 14.007812 L 7.2597656 14.033203 L 7.3828125 14.076172 L 7.5 14.134766 L 7.609375 14.207031 L 7.7070312 14.292969 L 7.7929688 14.390625 L 7.8652344 14.5 L 7.8925781 14.554688 L 8.7890625 14.105469 L 8.6992188 13.947266 L 8.5957031 13.794922 L 8.4785156 13.652344 L 8.3476562 13.521484 L 8.2050781 13.404297 L 8.0527344 13.298828 L 7.8925781 13.208984 L 7.7226562 13.134766 L 7.546875 13.076172 L 7.3671875 13.033203 L 7.1835938 13.007812 L 7 13 z M 11.5 13 C 10.671573 13 10 13.671573 10 14.5 C 10 15.328427 10.671573 16 11.5 16 L 12.5 16 C 12.776142 16 13 16.223858 13 16.5 C 13 16.776142 12.776142 17 12.5 17 L 10 17 L 10 18 L 12.5 18 C 13.328427 18 14 17.328427 14 16.5 C 14 15.671573 13.328427 15 12.5 15 L 11.5 15 C 11.223858 15 11 14.776142 11 14.5 C 11 14.223858 11.223858 14 11.5 14 L 14 14 L 14 13 L 11.5 13 z M 16.5 13 C 15.671573 13 15 13.671573 15 14.5 C 15 15.328427 15.671573 16 16.5 16 L 17.5 16 C 17.776142 16 18 16.223858 18 16.5 C 18 16.776142 17.776142 17 17.5 17 L 15 17 L 15 18 L 17.5 18 C 18.328427 18 19 17.328427 19 16.5 C 19 15.671573 18.328427 15 17.5 15 L 16.5 15 C 16.223858 15 16 14.776142 16 14.5 C 16 14.223858 16.223858 14 16.5 14 L 19 14 L 19 13 L 16.5 13 z " />
                  </g>
                </svg>
              </Col>
              <Col className="p-4 hobby">
                <span>React Native</span>
                <p className="text-center">
                  I am writing my exam project about React Native and I am very
                  interested and motivated to learn more about developing apps
                  for Android and iOS.
                </p>
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <title>react</title>
                  <path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path>
                </svg>
              </Col>
            </Row>
            <Row className="fs-4 mt-3 text-primary">Hobbies</Row>
            <Row className="d-flex flex-column flex-md-row">
              <Col className="p-4 hobby">
                <span>Programming</span>
                <p className="text-center">
                  I enjoy programming and I am always looking for new things to
                  learn and explore. I have built a few projects both for school
                  and for my own enjoyment.
                </p>
                <span>
                  See some of my projects <Link to="/projects">Here?</Link>
                  {/* href="/projects">Here?</Link> */}
                </span>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 94.504 94.504"
                  className="svg"
                >
                  <g>
                    <g>
                      <path
                        d="M93.918,45.833L69.799,21.714c-0.75-0.75-2.077-0.75-2.827,0l-5.229,5.229c-0.781,0.781-0.781,2.047,0,2.828
			l17.477,17.475L61.744,64.724c-0.781,0.781-0.781,2.047,0,2.828l5.229,5.229c0.375,0.375,0.884,0.587,1.414,0.587
			c0.529,0,1.039-0.212,1.414-0.587l24.117-24.118C94.699,47.881,94.699,46.614,93.918,45.833z"
                      />
                      <path
                        d="M32.759,64.724L15.285,47.248l17.477-17.475c0.375-0.375,0.586-0.883,0.586-1.414c0-0.53-0.21-1.039-0.586-1.414
			l-5.229-5.229c-0.375-0.375-0.884-0.586-1.414-0.586c-0.53,0-1.039,0.211-1.414,0.586L0.585,45.833
			c-0.781,0.781-0.781,2.047,0,2.829L24.704,72.78c0.375,0.375,0.884,0.587,1.414,0.587c0.53,0,1.039-0.212,1.414-0.587l5.229-5.229
			C33.542,66.771,33.542,65.505,32.759,64.724z"
                      />
                      <path
                        d="M60.967,13.6c-0.254-0.466-0.682-0.812-1.19-0.962l-4.239-1.251c-1.058-0.314-2.172,0.293-2.484,1.352L33.375,79.382
			c-0.15,0.509-0.092,1.056,0.161,1.521c0.253,0.467,0.682,0.812,1.19,0.963l4.239,1.251c0.189,0.056,0.38,0.083,0.567,0.083
			c0.863,0,1.66-0.564,1.917-1.435l19.679-66.644C61.278,14.612,61.221,14.065,60.967,13.6z"
                      />
                    </g>
                  </g>
                </svg>
              </Col>
              <Col className="p-4 hobby">
                <span>{translate("hobbyTwo", currentLang.lang)}</span>
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
              <Col className="p-4 hobby">
                <span>{translate("hobbyThree", currentLang.lang)}</span>
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
        </Container>
      </div>
    </>
  );
}
