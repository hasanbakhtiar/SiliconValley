import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';
import photo from './img/img1.jpg';

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello React</h1>
                <img src={photo} width="300" alt="" />
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));
