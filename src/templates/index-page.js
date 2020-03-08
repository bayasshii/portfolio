import React from 'react'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import styled from 'styled-components'

const IndexWrap = styled.div`
  width: 1000px;
  margin: auto;
`

export const IndexPageTemplate = () => (
  <React.Fragment>
      <IndexWrap>
        <BlogRoll/>
      </IndexWrap>
  </React.Fragment>
)

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <IndexPageTemplate/>
      </Layout>
    )
  }
}

export default IndexPage
