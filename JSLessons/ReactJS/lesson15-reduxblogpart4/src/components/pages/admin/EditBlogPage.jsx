import React from 'react'
import { connect } from 'react-redux'
import { removeBlog, updateBlog } from '../../../action/actionBlog'
import BlogForm from '../BlogForm'

const EditBlogPage = props => {
  return (
    <div>
        <h3 className='text-center'>Edit Page</h3>
        <BlogForm blog = {props.deyer}
            onFormSubmit={(update)=>{
           props.dispatch(updateBlog({id:props.deyer.id}, update));
           console.log(update);
           props.history.push('/blog');
        }}
        />
         <button c onClick={()=>{
             props.dispatch(removeBlog({id: props.deyer.id}))
             props.history.push('/admin');
            }} className='mt-3 btn btn-danger'>Delete</button>
         {/* console.log({props.deyer.id}); */}
    
    </div>
    
  )
}

const mapStateToProps = (state,props)=>{
    return{
        deyer: state.item.find((b)=>{
            return b.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditBlogPage)