import React from 'react'
import PropTypes from 'prop-types'
import App from '../components/app'

class Home extends React.Component {
  render() {
    return (
      <App name={this.props.name}>
        <p>This is the home page</p>
        <p>
          This is a test project to learn and experiment with react, gulp, sass, css, js, linting,
          express, node, vscode, git, and any other related stuff.
        </p>
      </App>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string
}

export default Home
