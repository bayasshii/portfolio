import React from 'react'
import styled from 'styled-components'

const HeaderWrap = styled.header`
`

const HeaderSVG= styled.svg`
`

const HeaderText = styled.div`
  position: absolute;
  top: 180px;
  right: 200px;
  font-size: 26px;
  font-weight: 700;
  color: #FFF;
  text-align: right;
  & span {
    font-size: 18px;
    color: #FFF;
    opacity: 0.8;
    font-weight: 400;
  }
  @media screen and (max-width: 1000px) {
    top: 25px;
    font-size: 16px;
    right: 20px;
    & span {
      font-size: 12px;
      color: #FFF;
      opacity: 0.8;
      font-weight: 400;
    }
  }
`

function GradientBackground() {
  return (
    <HeaderSVG version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 338"  preserveAspectRatio="none">
      <g id="Page-1">
        <g id="Desktop">
          <g id="Header">
            <linearGradient id="Rectangle_1_" gradientUnits="userSpaceOnUse" x1="433.5762" y1="296.5683" x2="434.5762" y2="296.5683" gradientTransform="matrix(1024 0 0 -337.5626 -443982 100279.1484)">
              <stop offset="0" style={{stopColor:'#FD57A3'}}/>
              <stop offset="0.4308" style={{stopColor:'#7571DB'}}/>
              <stop offset="1" style={{stopColor:'#AEF779'}}/>
            </linearGradient>
            <path id="Rectangle" fill="url(#Rectangle_1_)" d="M0,0h1024v308.062c-86.768,19.667-177.445,29.501-272.031,29.501
              c-141.879,0-353.036-110.019-477.344-110.019c-82.872,0-174.414,16.787-274.626,50.361V0z"/>
            <linearGradient id="Rectangle_2_" gradientUnits="userSpaceOnUse" x1="433.5762" y1="296.5766" x2="434.5762" y2="296.5766" gradientTransform="matrix(1024 0 0 -315 -443982 93579.1172)">
              <stop offset="0" style={{stopColor:'#FD57A3'}}/>
              <stop offset="0.4308" style={{stopColor:'#7571DB'}}/>
              <stop offset="1" style={{stopColor:'#49415E'}}/>
            </linearGradient>
            <path id="Rectangle_1_" fill="url(#Rectangle_2_)" d="M0,0h1024v260.486C939.45,296.829,843.117,315,735.003,315
              c-162.172,0-291.238-68.986-459.361-68.986c-112.082,0-203.963,10.77-275.642,32.309V0z"/>
          </g>
        </g>
      </g>
    </HeaderSVG>
  );
}

const Header = class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderWrap>
          {GradientBackground()}
          <HeaderText>
            きばやしのブログ<br/>
            <span>aikoをこよなく愛するデザイナー</span>
          </HeaderText>

        </HeaderWrap>
      </React.Fragment>
    )
  }
}

export default Header
