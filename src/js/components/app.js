import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Navbar from './navbar'
import Content from './content'
import Footer from './footer'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Navbar />
        <Content>
          {this.props.children}
          {this.props.name ? <p>{this.props.name}</p> : <></>}
        </Content>
        <Footer />
      </>
    )
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  name: PropTypes.string
}

export default App
