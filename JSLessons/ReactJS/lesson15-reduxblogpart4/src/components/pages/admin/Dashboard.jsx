import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import DashboardItem from './DashboardItem'

const Dashboard = props => {
    return (
        <div>
            <Link to="/addblog" className='btn btn-primary'>Add Blog</Link>
            <h3 className='text-center'>Blog List</h3>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {props.deyer.map(meqale => {
                        return <DashboardItem key={meqale.id} {...meqale} />
                    })}

                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
      deyer: state.item
    }
  }
  
  export default connect(mapStateToProps)(Dashboard)


