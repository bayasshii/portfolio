import React from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'

const AboutWrap = styled.div`
  width: 1000px;
  margin: auto;
`

export default class AboutIndexPage extends React.Component {
  render() {
    return (
      <Layout>　
        <AboutWrap>
          木林について
        </AboutWrap>
      </Layout>
    )
  }
}
