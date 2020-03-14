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

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  helmet,
  date
}) => {
  const PostContent = contentComponent || Content

  return (
    <BlogPostWrap>
      {helmet || ''}
      <BlogPostHeader>
        <WidthLayout>
          <p style={{padding: 0}}>{date}</p>
          <h1 style={{padding: 0}}>{title}</h1>
          <Tags tags={tags} />
        </WidthLayout>
      </BlogPostHeader>

      <WidthLayout style={{maxWidth: '750px'}}>
        <PostContent content={content} />
        <Tags tags={tags} />
        <BtnWrap><Link to="/">ブログ一覧に戻る</Link></BtnWrap>
      </WidthLayout>

    </BlogPostWrap>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
  date: PropTypes.string
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

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
