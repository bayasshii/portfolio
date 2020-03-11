import React from 'react'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Helmet from 'react-helmet'
import WidthLayout from '../components/WidthLayout'

export const IndexPageTemplate = () => {
  return(
    <React.Fragment>
        <WidthLayout>
          <BlogRoll/>
        </WidthLayout>
    </React.Fragment>
  )
}

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
