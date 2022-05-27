import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/sass/style.css'
import BookStore from './components/BookStore';
import Counter from './components/Counter';
import Mode from './components/Mode';

class App extends Component{
    render(){
        return(
            <div className='container mt-3'>
                {/* <BookStore /> */}
                {/* <Counter /> */}
                <Mode />
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));