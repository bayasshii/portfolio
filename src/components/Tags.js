import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'
import styled from 'styled-components'

const TagWrap = styled.div`
`
const TagUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 0 0;
`
const TagLi = styled.li`
  padding: 7px 10px;
  margin: 10px 10px 10px 0;
  border: 1px solid #aaa;
  border-radius: 5px;
  font-size: 12px;
  line-height: 12px;
  color: #aaa;
`

const Tags = class extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.tags && this.props.tags.length ? (
          <TagWrap>
            <TagUl>
              {this.props.tags.map(tag => (
                <TagLi key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </TagLi>
              ))}
            </TagUl>
          </TagWrap>
        ) : null}
      </React.Fragment>
    )
  }
}

export default Tags
