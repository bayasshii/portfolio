import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import styled from 'styled-components'

const BrogRollWrap = styled.div`
  padding-bottom: 50px;
`
const BrogRollItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
const BrogRollItem = styled.article`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0!important;
  }
`
const BrogRollItemLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
const BrogRollItemTextWrap = styled.div`
  padding: 0 0 0 20px;
  width: 450px;
  position: relative;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    padding: 10px 8px 30px;
  }
`
const BrogRollItemTextTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`
const BrogRollItemTextDate = styled.div`
  font-size: 12px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`
const BrogRollItemTextIntro = styled.div`
  color: #ADADAD;
  font-size: 14px;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  padding: 20px 0 0 0;
  line-height: 25px;
  @media screen and (max-width: 768px) {
    padding: 7px 0 0;
    font-size: 12px;
  }
`
const BrogRollItemTextTag = styled.div`
  display: flex;
  padding-left: 20px;
  & div {
    padding-right: 10px;
    font-size: 12px;
    @media screen and (max-width: 768px) {
      font-size: 10px;
    }
  }
`

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <BrogRollWrap>
        <BrogRollItemWrap>
          {posts &&
            posts.map(({ node: post }) => (
              <BrogRollItem key={post.id}>
                <Link to={post.fields.slug}>
                  <BrogRollItemLink>
                    {post.frontmatter.featuredimage ? (
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`,
                        }}
                      />
                    ) : null}
                    <BrogRollItemTextWrap>
                      <BrogRollItemTextTitle>{post.frontmatter.title}</BrogRollItemTextTitle>
                      <div style={{display:'flex', padding:'5px 0 0 0'}}>
                        <BrogRollItemTextDate>{post.frontmatter.date}</BrogRollItemTextDate>
                        <BrogRollItemTextTag>
                          { post.frontmatter.tags.map((tag) => (
                            tag ? (
                              <div>{tag}</div>
                            ) : console.log('エラーだよん')
                          ))}
                        </BrogRollItemTextTag>
                      </div>
                      <BrogRollItemTextIntro>{post.excerpt}</BrogRollItemTextIntro>
                    </BrogRollItemTextWrap>
                  </BrogRollItemLink>

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
                tags
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
