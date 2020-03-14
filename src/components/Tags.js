import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'
import styled from 'styled-components'

const TagWrap = styled.div`
`
const TagUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
const TagLi = styled.li`
  padding: 7px 10px;
  margin: 10px 10px 0 0;
  border: 1px solid #aaa;
  border-radius: 5px;
  font-size: 12px;
  line-height: 12px;
  @media screen and (max-width: 767px) {
    padding:5px 8px;
    font-size: 10px;
    line-height: 10px;
  }
  & a {
    color: #aaa;
  }
`
class Tags extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.tags && this.props.tags.length ? (
          <TagWrap>
            <TagUl className='tagUl'>
              {this.props.tags.map(tag => (
                <TagLi key={tag + `tag`} className='tagLi'>
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
