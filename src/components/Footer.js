import React from 'react'
import styled from 'styled-components'

const FooterWrap = styled.footer`
  position: relative;
`
const FooterSVG = styled.svg`
`

const FooterTextWrap = styled.div`
  position: absolute;
  bottom: 50px;
  left: 200px;
  @media screen and (max-width: 1000px) {
    bottom: 70px;
    left: 0;
    right: 0;
    margin: auto;
  }
`
const FooterTextUl = styled.ul`
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`
const FooterTextLi = styled.li`
  font-size: 21px;
  padding: 6px 0;
  & a {
    color: #fff;
  }
  @media screen and (max-width: 1000px) {
    padding: 0 10px;
  }
`
const FooterText = styled.div`
  font-size: 12px;
  color: #fff;
  padding: 10px 0 0 0;
  text-align: center;
`

function Icon() {
  return (
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
  );
}

const Footer = class extends React.Component {
  render() {
    return (
      <FooterWrap style={{marginTop: '50px'}}>
        <FooterSVG version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 338">{Icon()}</FooterSVG>
        <FooterTextWrap>
          <FooterTextUl>
            <FooterTextLi>
              <a href="https://twitter.com/cocoa_cigare" target="_blank">Twitter</a>
            </FooterTextLi>
            <FooterTextLi>
              <a href="https://www.facebook.com/profile.php?id=100017301960733" target="_blank">Facebook</a>
            </FooterTextLi>
            <FooterTextLi>
              <a href="https://github.com/bayasshii" target="_blank">GitHub</a>
            </FooterTextLi>
          </FooterTextUl>
          <FooterText>© 2020 Masaya Kibayashi All rights Reserved.</FooterText>
        </FooterTextWrap>
      </FooterWrap>
    )
  }
}

export default Footer
