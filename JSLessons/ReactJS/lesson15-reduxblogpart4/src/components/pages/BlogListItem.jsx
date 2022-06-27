import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({ id, title }) => {
    return (

        <div className="card col-12 col-sm-12 col-md-4">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{id}</p>
                <Link to={`/blog/${id}`} className="btn btn-primary">Read More</Link>
            </div>
        </div>

    )
}

export default BlogListItem