import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Helmet from 'react-helmet'
import WidthLayout from '../components/WidthLayout'

export const IndexPageTemplate = () => ({
  helmet
}) => {
  return(
    <React.Fragment>
        <WidthLayout>
          <BlogRoll/>
        </WidthLayout>
    </React.Fragment>
  )
}

IndexPageTemplate.propTypes = {
  helmet: PropTypes.object
}

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <IndexPageTemplate
          helmet={
            <Helmet>
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
