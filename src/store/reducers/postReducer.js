const initialState={
    post:[],
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_POST':
            return{
                ...state,
                post: action.payload,
            }
        case 'ADD_POST':
            return {
                ...state,
                post: [...state.post,action.payload],

            }
        case 'DELETE_POST':
            return {
                ...state,
                post:state.post.filter((p)=>p.id !== action.payload),

            }
        default:
            return state;
    }
}
export default reducer;