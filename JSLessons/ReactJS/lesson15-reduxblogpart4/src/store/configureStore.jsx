import { combineReducers, createStore } from 'redux'
import BlogReduser from '../reducer/reducerBlog';
// Store
export default()=>{
    const store  = createStore(
    combineReducers({
        item: BlogReduser
    })
);
return store;
}



