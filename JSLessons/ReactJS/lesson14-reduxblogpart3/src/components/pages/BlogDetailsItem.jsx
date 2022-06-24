import React from 'react'

const BlogDetailsItem = ({id,title,desc}) => {
  return (
    <div>
        <p className='text-dark'>blog id: <span className='text-danger'>{id}</span></p>
        <p className='text-primary'>blog title: <span className='text-danger'>{title}</span></p>
        <p className='text-success'>blog description: <span className='text-danger'>{desc}</span></p>
    </div>
  )
}

export default BlogDetailsItem