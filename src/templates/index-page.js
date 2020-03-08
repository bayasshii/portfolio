import React from 'react'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import styled from 'styled-components'
import WidthLayout from '../components/WidthLayout'

export const IndexPageTemplate = () => (
  <React.Fragment>
      <WidthLayout>
        <BlogRoll/>
      </WidthLayout>
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
