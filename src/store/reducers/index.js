import { combineReducers } from "redux";
import reducer from "./postReducer";
const rootReducer=combineReducers({
    myPosts: reducer
})
export default rootReducer;

