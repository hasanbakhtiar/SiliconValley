import { combineReducers, createStore } from 'redux'
import BlogReduser from '../reducer/blog';
// Store
export default()=>{
    const store  = createStore(
    combineReducers({
        item: BlogReduser
    })
);
return store;
}



