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

const BlogPostWrap = styled.div`
`
const BlogPostHeader = styled.div`
  width: 100%;
  box-shadow: 0px 30px 3px -3px rgba(0,0,0,0.1);
  -webkit-box-shadow: 0px 9px 3px -3px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 9px 3px -3px rgba(0,0,0,0.1);
  & h1 {
    font-size: 36px;
    @media screen and (max-width: 767px) {
      font-size: 24px;
    }
  }
`

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  date,
  featuredimage
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
            {featuredimage ? (
              <PreviewCompatibleImage
                imageInfo={{
                  image: featuredimage,
                  alt: `featured image thumbnail for post ${title}`,
                }}
              />
            ) : null}
          </WidthLayout>
        </BlogPostHeader>
        <WidthLayout>
          <PostContent content={content} />
          <Tags tags={tags}/>
        </WidthLayout>
      </BlogPostWrap>
    </React.Fragment>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  date: PropTypes.string,
  featuredimage: PropTypes.shape
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        featuredimage={post.frontmatter.featuredimage}
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
        description
        tags
      }
    }
  }
`
