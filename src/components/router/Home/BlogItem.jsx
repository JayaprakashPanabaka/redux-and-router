import React from 'react'

const BlogItem = (props) => {
    const {blogItem} = props 
    // console.log(blogItem);
    const {id, author, avatarUrl, imageUrl, title, topic} = blogItem
    // console.log(author);
  return (
    <div className='blog-item-container'>
      <div>
        <img src={imageUrl} alt={author} className='blog-image' />
      </div>

      <div className="blog-item-details">
        <span className="blog-topic">{topic}</span>
        <h3 className="blog-title">{title}</h3>
        <div className="blog-author-details">
            <img className='blog-author-avatar' src={avatarUrl} alt={author} />
            <span className="blog-author">{author}</span>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
