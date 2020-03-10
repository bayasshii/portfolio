import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import styled from 'styled-components'

const BrogRollWrap = styled.div`
  padding-bottom: 50px;
`
const BrogRollTitle = styled.h1`
`
const BrogRollItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const BrogRollItem = styled.article`
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 30px;
  &:nth-child(odd) {
    padding-right: 15px;
  }
  &:nth-child(even) {
    padding-left: 15px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0!important;
  }
`
const BrogRollItemTextWrap = styled.div`
`
const BrogRollItemTextTitle = styled.h2`
  font-size: 18px
`
const BrogRollItemTextDate = styled.div`
  color: #ADADAD;
`

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <BrogRollWrap>
        <BrogRollTitle style={{paddingBottom: '20px'}}>最新投稿</BrogRollTitle>
        <BrogRollItemWrap>
          {posts &&
            posts.map(({ node: post }) => (
              <BrogRollItem key={post.id}>
                <Link to={post.fields.slug}>
                  {post.frontmatter.featuredimage ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.title}`,
                      }}
                    />
                  ) : null}
                  <BrogRollItemTextWrap>
                    <BrogRollItemTextDate style={{paddingTop: '10px'}}>{post.frontmatter.date}</BrogRollItemTextDate>
                    <BrogRollItemTextTitle style={{paddingTop: '5px'}}>{post.frontmatter.title}</BrogRollItemTextTitle>
                  </BrogRollItemTextWrap>
                </Link>
              </BrogRollItem>
            ))}
          </BrogRollItemWrap>
      </BrogRollWrap>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
