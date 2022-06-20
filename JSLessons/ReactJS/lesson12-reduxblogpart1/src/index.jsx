import React from 'react';
import ReactDOM from 'react-dom/client';
import configureStore from './store/configureStore'
import { addBlog } from './action/blog';

const store = configureStore();
// Dispatch
store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(addBlog({basliq:"hello", aciqlama:"desk"}));
store.dispatch(addBlog({basliq:"hello1", aciqlama:"desk1"}));

const Blog = ()=>{
  return(
    <h1>Blog</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Blog />
  </React.StrictMode>
);


