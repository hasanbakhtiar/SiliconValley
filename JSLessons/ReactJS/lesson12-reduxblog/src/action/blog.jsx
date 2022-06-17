import { v4 as uuid } from 'uuid';
 // Action Start
 export const addBlog = ({basliq,aciqlama})=>({
    type: "ADD_BLOG",
    blog:{
        id:uuid(),
        title: basliq,
        description: aciqlama
    }
})

// Action End