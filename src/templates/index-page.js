import React from 'react'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Helmet from 'react-helmet'
import WidthLayout from '../components/WidthLayout'
import PropTypes from 'prop-types'

export const IndexPageTemplate = () => {
  return (
    <WidthLayout>
      <Helmet>
        <title>【きばやしの日常】</title>
        <meta name="twitter:card" content="summary"/>
        <meta property="og:url" content="https://kibamasa.com"/>
        <meta property="og:title" content="【きばやしの日常】"/>
        <meta property="og:description" content="他愛ない日常の様子を綴ります"/>
        <meta property="og:image" content="https://treeethreee.s3-ap-northeast-1.amazonaws.com/twitterCardHome.jpg"/>
      </Helmet>
      <BlogRoll/>
    </WidthLayout>
  )
}

export const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate/>
    </Layout>
  )
}
export default IndexPage
