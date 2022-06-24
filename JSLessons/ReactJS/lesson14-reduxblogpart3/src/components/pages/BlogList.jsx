import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

const BlogList = (props) => {
  return (
   <div className="row">
    {props.deyer.map(meqale=>{
      return <BlogListItem key={meqale.id} {...meqale}/>
    })}
   </div>
  )
}

const mapStateToProps = (state)=>{
  return{
    deyer: state.item
  }
}

export default connect(mapStateToProps)(BlogList)