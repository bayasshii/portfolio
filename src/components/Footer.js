import React from 'react'

function Icon() {
  return (
    <svg version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 338">
      <g id="Page-1">
        <g id="Desktop">
          <g id="Header">
            <linearGradient id="Rectangle_3_" gradientUnits="userSpaceOnUse" x1="433.5762" y1="296.5683" x2="434.5762" y2="296.5683" gradientTransform="matrix(-1024 0 0 337.5626 445006 -99941.1484)">
              <stop  offset="0" style={{stopColor:'#FD57A3'}}/>
              <stop  offset="0.4308" style={{stopColor:'#7571DB'}}/>
              <stop  offset="1" style={{stopColor:'#AEF779'}}/>
            </linearGradient>
            <path id="Rectangle_2_" fill="url(#Rectangle_3_)" d="M1024,338H0L0,29.938C86.768,10.271,177.445,0.437,272.031,0.437
              c141.879,0,353.036,110.019,477.344,110.019c82.872,0,174.414-16.787,274.626-50.361V338z"/>
            <linearGradient id="Rectangle_4_" gradientUnits="userSpaceOnUse" x1="433.5762" y1="296.5766" x2="434.5762" y2="296.5766" gradientTransform="matrix(-1024 0 0 315 445006 -93241.1172)">
              <stop  offset="0" style={{stopColor:'#FD57A'}}/>
              <stop  offset="0.4308" style={{stopColor:'#7571DB'}}/>
              <stop  offset="1" style={{stopColor:'#49415E'}}/>
            </linearGradient>
            <path id="Rectangle_3_" fill="url(#Rectangle_4_)" d="M1024,338H0L0,77.514C84.55,41.171,180.883,23,288.997,23
              c162.172,0,291.238,68.986,459.361,68.986c112.082,0,203.963-10.77,275.642-32.309V338z"/>
          </g>
        </g>
      </g>
    </svg>
  );
}

const Footer = class extends React.Component {
  render() {
    return (
      <footer style={{marginTop: '50px'}}>
        {Icon()}
      </footer>
    )
  }
}

export default Footer
