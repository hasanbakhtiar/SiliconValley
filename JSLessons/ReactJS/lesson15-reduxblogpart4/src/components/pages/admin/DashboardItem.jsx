import React from 'react'
import { Link } from 'react-router-dom'

const DashboardItem = ({ id, title, desc }) => {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{desc}</td>
            <td> <Link to={`/edit/${id}`} className="btn btn-warning ms-3">Edit</Link></td>
        </tr>


    )
}

export default DashboardItem