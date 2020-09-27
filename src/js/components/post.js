import React from 'react'
import PropTypes from 'prop-types'

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <div className="post-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="post-author">{this.props.author}</div>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    )
  }
}

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string
}

export default Post
