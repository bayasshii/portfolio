import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div>
          <Link to="/" className="navbar-item" title="Logo">
            Home
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
        </div>
      </footer>
    )
  }
}

export default Footer
