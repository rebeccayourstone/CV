import React from "react";
import "./svgBackground.css";

export default function SVGBackground() {
  return (
    <svg
      opacity="0.3"
      xmlns="http://www.w3.org/2000/svg"
      className=" svgBackground"
    >
      <rect fill="#ffffff" />
      <defs>
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="0"
          y1="0"
          y2="100%"
          gradientTransform="rotate(321,948,652)"
        >
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="1" stop-color="#587B69" />
        </linearGradient>
        <pattern
          patternUnits="userSpaceOnUse"
          id="b"
          width="2000"
          height="1666.7"
          x="0"
          y="0"
          viewBox="0 0 1080 900"
        >
          <g fill-opacity="0.1">
            <polygon fill="#444" points="90 150 0 300 180 300" />
            <polygon points="90 150 180 0 0 0" />
            <polygon fill="#AAA" points="270 150 360 0 180 0" />
            <polygon fill="#DDD" points="450 150 360 300 540 300" />
            <polygon fill="#999" points="450 150 540 0 360 0" />
            <polygon points="630 150 540 300 720 300" />
            <polygon fill="#DDD" points="630 150 720 0 540 0" />
            <polygon fill="#444" points="810 150 720 300 900 300" />
            <polygon fill="#FFF" points="810 150 900 0 720 0" />
            <polygon fill="#DDD" points="990 150 900 300 1080 300" />
            <polygon fill="#444" points="990 150 1080 0 900 0" />
            <polygon fill="#DDD" points="90 450 0 600 180 600" />
            <polygon points="90 450 180 300 0 300" />
            <polygon fill="#666" points="270 450 180 600 360 600" />
            <polygon fill="#AAA" points="270 450 360 300 180 300" />
            <polygon fill="#DDD" points="450 450 360 600 540 600" />
            <polygon fill="#999" points="450 450 540 300 360 300" />
            <polygon fill="#999" points="630 450 540 600 720 600" />
            <polygon fill="#FFF" points="630 450 720 300 540 300" />
            <polygon points="810 450 720 600 900 600" />
            <polygon fill="#DDD" points="810 450 900 300 720 300" />
            <polygon fill="#AAA" points="990 450 900 600 1080 600" />
            <polygon fill="#444" points="990 450 1080 300 900 300" />
            <polygon fill="#222" points="90 750 0 900 180 900" />
            <polygon points="270 750 180 900 360 900" />
            <polygon fill="#DDD" points="270 750 360 600 180 600" />
            <polygon points="450 750 540 600 360 600" />
            <polygon points="630 750 540 900 720 900" />
            <polygon fill="#444" points="630 750 720 600 540 600" />
            <polygon fill="#AAA" points="810 750 720 900 900 900" />
            <polygon fill="#666" points="810 750 900 600 720 600" />
            <polygon fill="#999" points="990 750 900 900 1080 900" />
            <polygon fill="#999" points="180 0 90 150 270 150" />
            <polygon fill="#444" points="360 0 270 150 450 150" />
            <polygon fill="#FFF" points="540 0 450 150 630 150" />
            <polygon points="900 0 810 150 990 150" />
            <polygon fill="#222" points="0 300 -90 450 90 450" />
            <polygon fill="#FFF" points="0 300 90 150 -90 150" />
            <polygon fill="#FFF" points="180 300 90 450 270 450" />
            <polygon fill="#666" points="180 300 270 150 90 150" />
            <polygon fill="#222" points="360 300 270 450 450 450" />
            <polygon fill="#FFF" points="360 300 450 150 270 150" />
            <polygon fill="#444" points="540 300 450 450 630 450" />
            <polygon fill="#222" points="540 300 630 150 450 150" />
            <polygon fill="#AAA" points="720 300 630 450 810 450" />
            <polygon fill="#666" points="720 300 810 150 630 150" />
            <polygon fill="#FFF" points="900 300 810 450 990 450" />
            <polygon fill="#999" points="900 300 990 150 810 150" />
            <polygon points="0 600 -90 750 90 750" />
            <polygon fill="#666" points="0 600 90 450 -90 450" />
            <polygon fill="#AAA" points="180 600 90 750 270 750" />
            <polygon fill="#444" points="180 600 270 450 90 450" />
            <polygon fill="#444" points="360 600 270 750 450 750" />
            <polygon fill="#999" points="360 600 450 450 270 450" />
            <polygon fill="#666" points="540 600 630 450 450 450" />
            <polygon fill="#222" points="720 600 630 750 810 750" />
            <polygon fill="#FFF" points="900 600 810 750 990 750" />
            <polygon fill="#222" points="900 600 990 450 810 450" />
            <polygon fill="#DDD" points="0 900 90 750 -90 750" />
            <polygon fill="#444" points="180 900 270 750 90 750" />
            <polygon fill="#FFF" points="360 900 450 750 270 750" />
            <polygon fill="#AAA" points="540 900 630 750 450 750" />
            <polygon fill="#FFF" points="720 900 810 750 630 750" />
            <polygon fill="#222" points="900 900 990 750 810 750" />
            <polygon fill="#222" points="1080 300 990 450 1170 450" />
            <polygon fill="#FFF" points="1080 300 1170 150 990 150" />
            <polygon points="1080 600 990 750 1170 750" />
            <polygon fill="#666" points="1080 600 1170 450 990 450" />
            <polygon fill="#DDD" points="1080 900 1170 750 990 750" />
          </g>
        </pattern>
      </defs>
      <rect x="0" y="0" fill="url(#a)" width="100%" height="100%" />
      <rect x="0" y="0" fill="url(#b)" width="100%" height="100%" />
    </svg>

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 2000 1500"
    //   className="
    //   svgBackground"
    // >
    //   <rect fill="#F8F8F8" />
    //   <defs>
    //     <rect stroke="#F8F8F8" stroke-width="0.5" width="1" height="1" id="s" />
    //     <pattern
    //       id="a"
    //       width="3"
    //       height="3"
    //       patternUnits="userSpaceOnUse"
    //       patternTransform="scale(50) translate(-980 -735)"
    //     >
    //       <use fill="#f6f6f6" href="#s" y="2" />
    //       <use fill="#f6f6f6" href="#s" x="1" y="2" />
    //       <use fill="#f3f3f3" href="#s" x="2" y="2" />
    //       <use fill="#f3f3f3" href="#s" />
    //       <use fill="#f0f0f0" href="#s" x="2" />
    //       <use fill="#f0f0f0" href="#s" x="1" y="1" />
    //     </pattern>
    //     <pattern
    //       id="b"
    //       width="7"
    //       height="11"
    //       patternUnits="userSpaceOnUse"
    //       patternTransform="scale(50) translate(-980 -735)"
    //     >
    //       <g fill="#eeeeee">
    //         <use href="#s" />
    //         <use href="#s" y="5" />
    //         <use href="#s" x="1" y="10" />
    //         <use href="#s" x="2" y="1" />
    //         <use href="#s" x="2" y="4" />
    //         <use href="#s" x="3" y="8" />
    //         <use href="#s" x="4" y="3" />
    //         <use href="#s" x="4" y="7" />
    //         <use href="#s" x="5" y="2" />
    //         <use href="#s" x="5" y="6" />
    //         <use href="#s" x="6" y="9" />
    //       </g>
    //     </pattern>
    //     <pattern
    //       id="h"
    //       width="5"
    //       height="13"
    //       patternUnits="userSpaceOnUse"
    //       patternTransform="scale(50) translate(-980 -735)"
    //     >
    //       <g fill="#eeeeee">
    //         <use href="#s" y="5" />
    //         <use href="#s" y="8" />
    //         <use href="#s" x="1" y="1" />
    //         <use href="#s" x="1" y="9" />
    //         <use href="#s" x="1" y="12" />
    //         <use href="#s" x="2" />
    //         <use href="#s" x="2" y="4" />
    //         <use href="#s" x="3" y="2" />
    //         <use href="#s" x="3" y="6" />
    //         <use href="#s" x="3" y="11" />
    //         <use href="#s" x="4" y="3" />
    //         <use href="#s" x="4" y="7" />
    //         <use href="#s" x="4" y="10" />
    //       </g>
    //     </pattern>
    //     <pattern
    //       id="c"
    //       width="17"
    //       height="13"
    //       patternUnits="userSpaceOnUse"
    //       patternTransform="scale(50) translate(-980 -735)"
    //     >
    //       <g fill="#ebebeb">
    //         <use href="#s" y="11" />
    //         <use href="#s" x="2" y="9" />
    //         <use href="#s" x="5" y="12" />
    //         <use href="#s" x="9" y="4" />
    //         <use href="#s" x="12" y="1" />
    //         <use href="#s" x="16" y="6" />
    //       </g>
    //     </pattern>
    //     <pattern
    //       id="d"
    //       width="19"
    //       height="17"
    //       patternUnits="userSpaceOnUse"
    //       patternTransform="scale(50) translate(-980 -735)"
    //     >
    //       <g fill="#F8F8F8">
    //         <use href="#s" y="9" />
    //         <use href="#s" x="16" y="5" />
    //         <use href="#s" x="14" y="2" />
    //         <use href="#s" x="11" y="11" />
    //         <use href="#s" x="6" y="14" />
    //       </g>
    //       <g fill="#e9e9e9">
    //         <use href="#s" x="3" y="13" />
    //         <use href="#s" x="9" y="7" />
    //         <use href="#s" x="13" y="10" />
    //         <use href="#s" x="15" y="4" />
    //         <use href="#s" x="18" y="1" />
    //       </g>
    //     </pattern>
    //     <pattern
    //       id="e"
    //       width="47"
    //       height="53"
    //       patternUnits="userSpaceOnUse"
    //       patternTransform="scale(50) translate(-980 -735)"
    //     >
    //       <g fill="#B7ADCF">
    //         <use href="#s" x="2" y="5" />
    //         <use href="#s" x="16" y="38" />
    //         <use href="#s" x="46" y="42" />
    //         <use href="#s" x="29" y="20" />
    //       </g>
    //     </pattern>
    //     <pattern
    //       id="f"
    //       width="59"
    //       height="71"
    //       patternUnits="userSpaceOnUse"
    //       patternTransform="scale(50) translate(-980 -735)"
    //     >
    //       <g fill="#B7ADCF">
    //         <use href="#s" x="33" y="13" />
    //         <use href="#s" x="27" y="54" />
    //         <use href="#s" x="55" y="55" />
    //       </g>
    //     </pattern>
    //     <pattern
    //       id="g"
    //       width="139"
    //       height="97"
    //       patternUnits="userSpaceOnUse"
    //       patternTransform="scale(50) translate(-980 -735)"
    //     >
    //       <g fill="#B7ADCF">
    //         <use href="#s" x="11" y="8" />
    //         <use href="#s" x="51" y="13" />
    //         <use href="#s" x="17" y="73" />
    //         <use href="#s" x="99" y="57" />
    //       </g>
    //     </pattern>
    //   </defs>
    //   <rect fill="url(#a)" width="100%" height="100%" />
    //   <rect fill="url(#b)" width="100%" height="100%" />
    //   <rect fill="url(#h)" width="100%" height="100%" />
    //   <rect fill="url(#c)" width="100%" height="100%" />
    //   <rect fill="url(#d)" width="100%" height="100%" />
    //   <rect fill="url(#e)" width="100%" height="100%" />
    //   <rect fill="url(#f)" width="100%" height="100%" />
    //   <rect fill="url(#g)" width="100%" height="100%" />
    // </svg>

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="position-absolute"
    //   width="100%"
    //   height="100%"
    // >
    //   <defs>
    //     <linearGradient
    //       id="a"
    //       gradientUnits="userSpaceOnUse"
    //       x1="0"
    //       x2="0"
    //       y1="0"
    //       y2="100%"
    //       gradientTransform="rotate(240)"
    //     >
    //       <stop offset="0" stop-color="#ffffff" />
    //       <stop offset="1" stop-color="#587b69" />
    //     </linearGradient>
    //     <pattern
    //       patternUnits="userSpaceOnUse"
    //       id="b"
    //       width="540"
    //       height="450"
    //       x="0"
    //       y="0"
    //       viewBox="0 0 1080 900"
    //     >
    //       <g fill-opacity="0.1">
    //         <polygon fill="#444" points="90 150 0 300 180 300" />
    //         <polygon points="90 150 180 0 0 0" />
    //         <polygon fill="#AAA" points="270 150 360 0 180 0" />
    //         <polygon fill="#DDD" points="450 150 360 300 540 300" />
    //         <polygon fill="#999" points="450 150 540 0 360 0" />
    //         <polygon points="630 150 540 300 720 300" />
    //         <polygon fill="#DDD" points="630 150 720 0 540 0" />
    //         <polygon fill="#444" points="810 150 720 300 900 300" />
    //         <polygon fill="#FFF" points="810 150 900 0 720 0" />
    //         <polygon fill="#DDD" points="990 150 900 300 1080 300" />
    //         <polygon fill="#444" points="990 150 1080 0 900 0" />
    //         <polygon fill="#DDD" points="90 450 0 600 180 600" />
    //         <polygon points="90 450 180 300 0 300" />
    //         <polygon fill="#666" points="270 450 180 600 360 600" />
    //         <polygon fill="#AAA" points="270 450 360 300 180 300" />
    //         <polygon fill="#DDD" points="450 450 360 600 540 600" />
    //         <polygon fill="#999" points="450 450 540 300 360 300" />
    //         <polygon fill="#999" points="630 450 540 600 720 600" />
    //         <polygon fill="#FFF" points="630 450 720 300 540 300" />
    //         <polygon points="810 450 720 600 900 600" />
    //         <polygon fill="#DDD" points="810 450 900 300 720 300" />
    //         <polygon fill="#AAA" points="990 450 900 600 1080 600" />
    //         <polygon fill="#444" points="990 450 1080 300 900 300" />
    //         <polygon fill="#222" points="90 750 0 900 180 900" />
    //         <polygon points="270 750 180 900 360 900" />
    //         <polygon fill="#DDD" points="270 750 360 600 180 600" />
    //         <polygon points="450 750 540 600 360 600" />
    //         <polygon points="630 750 540 900 720 900" />
    //         <polygon fill="#444" points="630 750 720 600 540 600" />
    //         <polygon fill="#AAA" points="810 750 720 900 900 900" />
    //         <polygon fill="#666" points="810 750 900 600 720 600" />
    //         <polygon fill="#999" points="990 750 900 900 1080 900" />
    //         <polygon fill="#999" points="180 0 90 150 270 150" />
    //         <polygon fill="#444" points="360 0 270 150 450 150" />
    //         <polygon fill="#FFF" points="540 0 450 150 630 150" />
    //         <polygon points="900 0 810 150 990 150" />
    //         <polygon fill="#222" points="0 300 -90 450 90 450" />
    //         <polygon fill="#FFF" points="0 300 90 150 -90 150" />
    //         <polygon fill="#FFF" points="180 300 90 450 270 450" />
    //         <polygon fill="#666" points="180 300 270 150 90 150" />
    //         <polygon fill="#222" points="360 300 270 450 450 450" />
    //         <polygon fill="#FFF" points="360 300 450 150 270 150" />
    //         <polygon fill="#444" points="540 300 450 450 630 450" />
    //         <polygon fill="#222" points="540 300 630 150 450 150" />
    //         <polygon fill="#AAA" points="720 300 630 450 810 450" />
    //         <polygon fill="#666" points="720 300 810 150 630 150" />
    //         <polygon fill="#FFF" points="900 300 810 450 990 450" />
    //         <polygon fill="#999" points="900 300 990 150 810 150" />
    //         <polygon points="0 600 -90 750 90 750" />
    //         <polygon fill="#666" points="0 600 90 450 -90 450" />
    //         <polygon fill="#AAA" points="180 600 90 750 270 750" />
    //         <polygon fill="#444" points="180 600 270 450 90 450" />
    //         <polygon fill="#444" points="360 600 270 750 450 750" />
    //         <polygon fill="#999" points="360 600 450 450 270 450" />
    //         <polygon fill="#666" points="540 600 630 450 450 450" />
    //         <polygon fill="#222" points="720 600 630 750 810 750" />
    //         <polygon fill="#FFF" points="900 600 810 750 990 750" />
    //         <polygon fill="#222" points="900 600 990 450 810 450" />
    //         <polygon fill="#DDD" points="0 900 90 750 -90 750" />
    //         <polygon fill="#444" points="180 900 270 750 90 750" />
    //         <polygon fill="#FFF" points="360 900 450 750 270 750" />
    //         <polygon fill="#AAA" points="540 900 630 750 450 750" />
    //         <polygon fill="#FFF" points="720 900 810 750 630 750" />
    //         <polygon fill="#222" points="900 900 990 750 810 750" />
    //         <polygon fill="#222" points="1080 300 990 450 1170 450" />
    //         <polygon fill="#FFF" points="1080 300 1170 150 990 150" />
    //         <polygon points="1080 600 990 750 1170 750" />
    //         <polygon fill="#666" points="1080 600 1170 450 990 450" />
    //         <polygon fill="#DDD" points="1080 900 1170 750 990 750" />
    //       </g>
    //     </pattern>
    //   </defs>
    //   <rect x="0" y="0" fill="url(#a)" width="100%" height="100%" />
    //   <rect x="0" y="0" fill="url(#b)" width="100%" height="100%" />
    // </svg>
  );
}
