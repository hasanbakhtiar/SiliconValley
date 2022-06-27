import React from 'react'
import { connect } from 'react-redux'
import { addBlog } from '../../../action/actionBlog'
import BlogForm from '../BlogForm'

const AddBlogPage = props => {
  return (
    <div>
        <h3 className='text-center'>Add Blog Page</h3>
        <BlogForm onFormSubmit={(blog)=>{
            props.dispatch(addBlog(blog));
            props.history.push('/admin');
        }}/>

    </div>
  )
}

export default connect()(AddBlogPage)