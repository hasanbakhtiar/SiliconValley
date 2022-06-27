import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import BlogListPage from '../components/pages/BlogListPage';
import Nav from '../components/Nav';
import BlogDetails from '../components/pages/BlogDetails';
import AddBlogPage from '../components/pages/admin/AddBlogPage';
import EditBlogPage from '../components/pages/admin/EditBlogPage';
import Dashboard from '../components/pages/admin/Dashboard';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container mt-5">
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/blog" exact component={BlogListPage}></Route>
        <Route path="/blog/:id" component={BlogDetails}></Route>
        <Route path="/edit/:id" component={EditBlogPage}></Route>
        <Route path="/addblog" component={AddBlogPage}></Route>
        <Route path="/admin" component={Dashboard}></Route>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter