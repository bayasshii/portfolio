import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
  position: absolute !important;
  top: 0;
  right: 0;
`
const NavWrap = styled.nav`
  margin-left: auto;
  padding-right: 100px;
`
const NavList = styled.nav`
  display: flex;
  & a {
    color: #fff;
    padding: 30px 10px;
  }
`

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <Nav>
        <NavWrap>
          <NavList>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/contact">Contact</Link>
          </NavList>
        </NavWrap>
      </Nav>
    )
  }
}

export default Navbar
