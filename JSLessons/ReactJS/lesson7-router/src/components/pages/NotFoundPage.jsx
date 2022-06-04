import React, { Component } from 'react'
import img from '../../img/404.gif'

export class NotFoundPage extends Component {
  render() {
    return (
      <div><img style={{"width":"100%"}} src={img} alt="" /></div>
    )
  }
}

export default NotFoundPage