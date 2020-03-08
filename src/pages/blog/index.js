import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import WidthLayout from '../../components/WidthLayout'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <WidthLayout>
          <BlogRoll />
        </WidthLayout>
      </Layout>
    )
  }
}
