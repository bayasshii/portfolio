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
        <IndexPageTemplate
          helmet={
            <Helmet titleTemplate="%s | Blog">
              <meta name="twitter:card" content="summary"/>
              <meta property="og:url" content="https:kibamasa.com"/>
              <meta property="og:title" content="きばやしのブログ"/>
              <meta property="og:description" content="なんでも日記です"/>
              <meta property="og:image" content="https://treeethreee.s3-ap-northeast-1.amazonaws.com/twitterCardHome.jpg"/>
            </Helmet>
          }
        />
      </Layout>
    )
  }
}
export default IndexPage
