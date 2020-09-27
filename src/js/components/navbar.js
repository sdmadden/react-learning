import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class NavBarLinks extends React.Component {
  render() {
    return (
      <ul>
        <NavBarLink to="/" name="Home" />
        {this.props.links.map((link, i) => {
          return <NavBarLink key={i} to={'/posts/' + link.to} name={link.name} />
        })}
      </ul>
    )
  }
}

NavBarLinks.propTypes = {
  links: PropTypes.array
}

class NavBarLink extends React.Component {
  render() {
    return (
      <li>
        <Link to={this.props.to}>{this.props.name}</Link>
      </li>
    )
  }
}

NavBarLink.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string
}

class Navbar extends React.Component {
  constructor() {
    super()
    this.links = [
      {
        to: 1,
        name: 'Link 1'
      },
      {
        to: 2,
        name: 'Link 2'
      },
      {
        to: 3,
        name: 'Link 3'
      },
      {
        to: 4,
        name: 'Link 4'
      }
    ]
  }

  render() {
    return (
      <div className="navbar">
        <NavBarLinks links={this.links} />
      </div>
    )
  }
}

export default Navbar
