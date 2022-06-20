
// Reducer Start
const blogState = [];

const BlogReduser = (state = blogState, action)=>{
    switch (action.type) {
        case "ADD_BLOG":
                return[
                   ...state,
                    action.blog    
                ]        
                case "REMOVE_BLOG":
                    return state.filter(({id})=>{
                        return id != action.id;
                    })
        case "EDIT_BLOG":
                return state.map((blog)=>{
                    return{
                        ...blog,
                        ...action.update
                    }
                })
        default:
            return state;
    }
}
// Reducer End
export default BlogReduser;