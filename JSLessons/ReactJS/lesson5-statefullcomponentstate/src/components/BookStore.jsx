import React, { Component } from 'react'
import img1 from '../assets/img/book1.png'
import img2 from '../assets/img/book2.jpg'

class BookStore extends Component {
    constructor(props){
        super(props);
        this.nextBook = this.nextBook.bind(this);
        this.state={
            bookimg: img1,
            bookname: "Balaca Sahzade",
            auther: "Antuan Dosent",
            pagecount: "120"
        }
    }

    nextBook(){
        this.setState({
            bookimg: img2,
            bookname: "Xez Paltolu Madonna",
            auther: "Sebaheddin Ali",
            pagecount: "400"
        })
    }
  render() {
    return (
      <div>
          <img src={this.state.bookimg} width="150" className='border-img' alt="" />
          <p><span className='text-primary'>Book Name:</span>{this.state.bookname}</p>
          <p><span className='text-primary'>Auther:</span>{this.state.auther}</p>
          <p><span className='text-primary'>Page count:</span>{this.state.pagecount}</p>
          <button className='btn btn-primary' onClick={this.nextBook}>next book</button>
      </div>
    )
  }
}

export default BookStore