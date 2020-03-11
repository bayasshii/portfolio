import React from 'react'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import styled from 'styled-components'
import Helmet from 'react-helmet'
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
        <IndexPageTemplate
          helmet={
            <Helmet titleTemplate="%s | Blog">
              <meta name="twitter:card" content="summary"/>
              <meta property="og:url" content="https:kibamasa.com"/>
              <meta property="og:title" content="きばやしのブログ"/>
              <meta property="og:description" content="きばやしの日常の雑多を書きます"/>
              <meta property="og:image" content="https://treeethreee.s3-ap-northeast-1.amazonaws.com/twitterCardHome.jpg"/>
            </Helmet>
          }
        />
      </Layout>
    )
  }
}
export default IndexPage
