import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configureStore'
import { addBlog, removeBlog, updateBlog } from './action/actionBlog';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

const generalSystem = configureStore();
// Dispatch
generalSystem.subscribe(()=>{
  console.log(generalSystem.getState());
})

const meqale = generalSystem.dispatch(addBlog({basliq:"hello", aciqlama:"desk"}));
const meqale2 = generalSystem.dispatch(addBlog({basliq:"hello1", aciqlama:"desk1"}));
console.log(meqale.blog.id);
generalSystem.dispatch(removeBlog({id:meqale.blog.id}))
generalSystem.dispatch(updateBlog(meqale2.blog.id,{title:"update",desc:"yeni"}))
generalSystem.dispatch(addBlog({basliq:"Meqale yeni1",aciqlama:"Meqalenin aciqlamasi1"}))
generalSystem.dispatch(addBlog({basliq:"Meqale yeni2",aciqlama:"Meqalenin aciqlamasi2"}))
const Blog = ()=>{
  return(
    <h1>Blog</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={generalSystem}>
    <AppRouter />
    </Provider>
  </React.StrictMode>
);


