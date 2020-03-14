import styled from 'styled-components'

export const BlogPostWrap = styled.div`
`

export const BlogPostHeader = styled.div`
  margin-top: -100px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0px 30px 3px -3px rgba(0,0,0,0.1);
  -webkit-box-shadow: 0px 9px 3px -3px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 9px 3px -3px rgba(0,0,0,0.1);
  @media screen and (max-width: 768px){
    padding-bottom: 0;
    margin-top: -30px;
  }
  & h1 {
    font-size: 36px;
    @media screen and (max-width: 767px) {
      font-size: 24px;
    }
  }
`

export const BtnWrap = styled.div`
  text-align: center;
  & a {
  }
`
