import React from 'react'

function Icon() {
  return (
    <svg version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 338">
      <g id="Page-1">
      	<g id="Desktop">
      		<g id="Header">
    				<linearGradient id="Rectangle_3_" gradientUnits="userSpaceOnUse" x1="867.1523" y1="0.2689" x2="868.1523" y2="0.2689" gradientTransform="matrix(-1024 0 0 -337.5626 888988 259.9942)">
      				<stop offset="0" style={{stopColor:'#FD57A3'}}/>
      				<stop offset="0.4308" style={{stopColor:'#7571DB'}}/>
      				<stop offset="1" style={{stopColor:'AEF779'}}/>
      			</linearGradient>
      			<path id="Rectangle_3_" fill="url(#Rectangle_3_)" d="M1024,338H0L0,29.9C86.8,10.3,177.4,0.4,272,0.4c141.9,0,353,110,477.3,110
      				c82.9,0,174.4-16.8,274.6-50.4L1024,338L1024,338z"/>
    				<linearGradient id="Rectangle_4_" gradientUnits="userSpaceOnUse" x1="867.1523" y1="0.2524" x2="868.1523" y2="0.2524" gradientTransform="matrix(-1024 0 0 -315 888988 260.0017)">
      				<stop offset="0" style={{stopColor:'#FD57A3'}}/>
      				<stop offset="0.4308" style={{stopColor:'#7571DB'}}/>
      				<stop offset="1" style={{stopColor:'#49415E'}}/>
      			</linearGradient>
      			<path id="Rectangle_4_" fill="url(#Rectangle_4_)" d="M1024,338H0L0,77.5C84.5,41.2,180.9,23,289,23c162.2,0,291.2,69,459.4,69
      				c112.1,0,204-10.8,275.6-32.3L1024,338z"/>
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
