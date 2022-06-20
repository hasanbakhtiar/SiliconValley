import React from 'react';
import ReactDOM from 'react-dom/client';
import configureStore from './store/configureStore'
import { addBlog, removeBlog, updateBlog } from './action/actionBlog';

const store = configureStore();
// Dispatch
store.subscribe(()=>{
  console.log(store.getState());
})

const meqale = store.dispatch(addBlog({basliq:"hello", aciqlama:"desk"}));
const meqale2 = store.dispatch(addBlog({basliq:"hello1", aciqlama:"desk1"}));
console.log(meqale.blog.id);
store.dispatch(removeBlog({id:meqale.blog.id}))
store.dispatch(updateBlog(meqale2.blog.id,{title:"update"}))
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


