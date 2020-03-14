import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import WidthLayout from '../components/WidthLayout'
import Tags from '../components/Tags'
import { Link } from 'gatsby'
import {BlogPostWrap, BlogPostHeader, BtnWrap} from '../components/BlogPost.js'

class BlogPostTemplate extends React.Component {
  render() {
    const PostContent = this.props.contentComponent || Content
    return (
      <BlogPostWrap>
        {this.props.helmet || ''}
        <BlogPostHeader className='postHeader'>
          <WidthLayout className='widthlayout'>
            <p style={{padding: 0}}>{this.props.date}</p>
            <h1 style={{padding: 0}}>{this.props.title}</h1>
            <Tags tags={this.props.tags} />
          </WidthLayout>
        </BlogPostHeader>

        <WidthLayout style={{maxWidth: '750px'}} className='widthlayout'>
          <PostContent content={this.props.content} />
          <Tags tags={this.props.tags} />
          <BtnWrap className='btnWrap'><Link to="/">ブログ一覧に戻る</Link></BtnWrap>
        </WidthLayout>

      </BlogPostWrap>
    )
  }
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
  date: PropTypes.string
}

class BlogPost extends React.Component {
  render() {
    const { markdownRemark: post } = this.props.data
    return (
      <Layout>
        <BlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          helmet={
            <Helmet titleTemplate="きばやしの日常 | %s">
              <title>{`${post.frontmatter.title}`}</title>
              <meta name="twitter:card" content="summary"/>
              <meta property="og:url" content="https:kibamasa.com"/>
              <meta property="og:title" content={post.frontmatter.title}/>
              <meta property="og:description" content="[きばやしの日常]"/>
              <meta property="og:image" content="https://treeethreee.s3-ap-northeast-1.amazonaws.com/twitterCardHome.jpg"/>
            </Helmet>
          }
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
          date={post.frontmatter.date}
        />
      </Layout>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`
