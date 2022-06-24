import { v4 as uuid } from 'uuid';
 // Action Start
 export const addBlog = ({basliq,aciqlama})=>({
    type: "ADD_BLOG",
    blog:{
        id:uuid(),
        title: basliq,
        desc: aciqlama
    }
})

export const removeBlog = ({id})=>({
    type: "REMOVE_BLOG",
    id:id
})

export const updateBlog = (id,update)=>({
    type: "EDIT_BLOG",
    id,
    update
})
// Action End