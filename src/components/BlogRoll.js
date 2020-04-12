import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import styled from 'styled-components'

const BrogRollWrap = styled.div`
`
const BrogRollItemWrap = styled.div`
`
const BrogRollItem = styled.article`
`
const BrogRollItemLink = styled.div`
`
const BrogRollItemTextWrap = styled.div`
`
const BrogRollItemTextTitle = styled.div`
`
const BrogRollItemTextDate = styled.div`
`
const BrogRollItemTextIntro = styled.div`
`
const BrogRollItemTextTag = styled.div`
`

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <BrogRollWrap className="brogRollWrap">
        <BrogRollItemWrap className="brogRollItemWrap">
          {posts &&
            posts.map(({ node: post }) => (
              <BrogRollItem key={post.id} className="brogRollItem">
                <Link to={post.fields.slug}>
                  <BrogRollItemLink className="brogRollItemLink">
                    {post.frontmatter.featuredimage ? (
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`,
                        }}
                      />
                    ) : null}
                    <BrogRollItemTextWrap className="brogRollItemTextWrap">
                      <BrogRollItemTextTitle className="brogRollItemTextTitle">{post.frontmatter.title}</BrogRollItemTextTitle>
                      <div style={{display:'flex', padding:'5px 0 0 0'}}>
                        <BrogRollItemTextDate className="brogRollItemTextDate">{post.frontmatter.date}</BrogRollItemTextDate>
                        <BrogRollItemTextTag className="brogRollItemTextTag">
                          { post.frontmatter.tags.map((tag) => (
                            tag ? (
                              <div>{tag}</div>
                            ) : console.log('エラーだよん')
                          ))}
                        </BrogRollItemTextTag>
                      </div>
                      <BrogRollItemTextIntro className="brogRollItemTextIntro">{post.excerpt}</BrogRollItemTextIntro>
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
