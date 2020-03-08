import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import styled from 'styled-components'

const BlogWrap = styled.div`
  width: 1000px;
  margin: auto;
`

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <BlogWrap>
          <BlogRoll />
        </BlogWrap>
      </Layout>
    )
  }
}
