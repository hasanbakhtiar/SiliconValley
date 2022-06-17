
// Reducer Start
const blogState = [];

const BlogReduser = (state = blogState, action)=>{
    switch (action.type) {
        case "ADD_BLOG":
                return[
                   ...state,
                    action.blog    
                ]        
        case "EDIT_BLOG":
        case "REMOVE_BLOG":

        default:
            return state;
    }
}
// Reducer End
export default BlogReduser;