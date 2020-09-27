import React from 'react'
import PropTypes from 'prop-types'
import App from '../components/app'
import Post from '../components/post'

class Posts extends React.Component {
  constructor() {
    super()
    this.posts = [
      {
        title: 'Post 0',
        content: 'This is the secret 0th post',
        author: 'Smadden'
      },
      {
        title: 'Post 1',
        content: 'This is the 1st post',
        author: 'Smadden'
      },
      {
        title: 'Post 2',
        content: `<p>This is the 2nd post</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nulla id tortor sed dolor ultrices tristique quis nec quam.
                     Nullam sed ipsum sed est vestibulum bibendum quis sit amet justo.
                     Donec pharetra suscipit magna, nec mollis tortor.
                     Nullam sit amet tincidunt turpis. Phasellus gravida diam felis.
                     Cras eu lacus sed libero rhoncus scelerisque. Nam lacinia dapibus ligula.
                     Duis risus felis, ullamcorper id condimentum id, pharetra eget leo.
                     Quisque in lacus vulputate, hendrerit ligula in, auctor quam.
                     Suspendisse augue libero, pellentesque non lobortis in, faucibus at nunc.</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nulla id tortor sed dolor ultrices tristique quis nec quam.
                     Nullam sed ipsum sed est vestibulum bibendum quis sit amet justo.
                     Donec pharetra suscipit magna, nec mollis tortor.
                     Nullam sit amet tincidunt turpis. Phasellus gravida diam felis.
                     Cras eu lacus sed libero rhoncus scelerisque. Nam lacinia dapibus ligula.
                     Duis risus felis, ullamcorper id condimentum id, pharetra eget leo.
                     Quisque in lacus vulputate, hendrerit ligula in, auctor quam.
                     Suspendisse augue libero, pellentesque non lobortis in, faucibus at nunc.</p>`,
        author: 'Smadden'
      }
    ]
  }

  render() {
    var { id } = this.props.match.params
    id = parseInt(id)

    if (id === undefined) {
      return (
        <App>
          <h2>This is the posts page, please enter an id</h2>
        </App>
      )
    }

    if (!Number.isInteger(id) || id >= this.posts.length || id < 0) {
      return (
        <App>
          <h2>That ({id}) is an invalid Id</h2>
        </App>
      )
    }

    const post = this.posts[id]

    return (
      <App>
        <Post {...post} />
      </App>
    )
  }
}

Posts.propTypes = {
  match: PropTypes.object
}

export default Posts
