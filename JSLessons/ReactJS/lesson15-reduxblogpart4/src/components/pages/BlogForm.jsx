import React, { Component } from 'react'

export class BlogForm extends Component {
    constructor(props){
        super(props);
        this.onTesdiq = this.onTesdiq.bind(this);
        this.state={
            title: props.blog ? props.blog.title : "",
            desc: props.blog ? props.blog.desc:"",
            error: "",
        }
    }
    onTitleChange=(e)=>{
        const title = e.target.value;
        this.setState(()=>({title}))
    }
    onDescriptionChange=(e)=>{
        const desc = e.target.value;
        this.setState(()=>({desc}))
    }

    onTesdiq=(e)=>{
        e.preventDefault();
        if (!this.state.title || !this.state.desc) {
            this.setState({error:"Xanalari doldurun"});
        }else{
            this.setState({error:""});
            this.props.onFormSubmit({
                basliq:this.state.title,
                aciqlama:this.state.desc,
            })
        }
    }
  render() {
    return (
        <div>
            {this.state.error && (
                <p className='alert alert-danger'>{this.state.error}</p>
            )}
        <form onSubmit={this.onTesdiq}>
        <div className="mb-3">
          <label  className="form-label">Add Title</label>
          <input onChange={this.onTitleChange} value={this.state.title} type="text" className="form-control"   />
        </div>
        <div className="mb-3">
          <label  className="form-label">Add Description</label>
          <input onChange={this.onDescriptionChange} value={this.state.desc} type="text" className="form-control"  />
        </div>
        {/* <p>{this.state.title}</p>
        <p>{this.state.desc}</p> */}
        <button type="submit" className="btn btn-primary">Save</button>
        </form>
        </div>
    )
  }
}

export default BlogForm