import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
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

  showSettings (event) {
    event.preventDefault()
  }

  render() {
    var isMenuOpen = function(state) {
      return state.isOpen;
    };
    return (
      <React.Fragment>
        {/*
        <Menu pageWrapId={ "page-wrap" } onStateChange={ isMenuOpen }/>
        <main id="page-wrap">
          <Link to="/">HOME</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/about">ABOUT</Link>
        </main>
        /*}]

        {/*
        <Link to="/contact">Contact</Link>
        */}
      </React.Fragment>
    )
  }
}

export default Navbar
