import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import WidthLayout from '../components/WidthLayout'
import Tags from '../components/Tags'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import styled from 'styled-components'
import { Link } from 'gatsby'

const BlogPostWrap = styled.div`
`
const BlogPostHeader = styled.div`
  margin-top: -100px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0px 30px 3px -3px rgba(0,0,0,0.1);
  -webkit-box-shadow: 0px 9px 3px -3px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 9px 3px -3px rgba(0,0,0,0.1);
  @media screen and (max-width: 768px){
    padding-bottom: 0;
    margin-top: -30px;
  }
  & h1 {
    font-size: 36px;
    @media screen and (max-width: 767px) {
      font-size: 24px;
    }
  }
`
const BtnWrap = styled.div`
  text-align: center;
  & a {
  }
`

function BackBtn() {
  return (
    <BtnWrap><Link to="/">ブログ一覧に戻る</Link></BtnWrap>
  );
}

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
    <React.Fragment>
      {helmet || ''}
      <BlogPostWrap>
        <BlogPostHeader>
          <WidthLayout>
            <p>{date}</p>
            <h1>{title}</h1>
            <Tags tags={tags}/>
          </WidthLayout>
        </BlogPostHeader>
        <WidthLayout>
          <PostContent content={content} />
          <Tags tags={tags}/>
          <BackBtn/>
        </WidthLayout>
      </BlogPostWrap>
    </React.Fragment>
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
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="twitter:card" content="summary"/>
            <meta property="og:url" content="https:kibamasa.com"/>
            <meta property="og:title" content="きばやしの雑多なブログ"/>
            <meta property="og:description" content="きばやしの雑多なブログです。"/>
            <meta property="og:image" content="https://treeethreee.s3-ap-northeast-1.amazonaws.com/kibatan.jpg"/>
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
