import { axiosInstance } from "../../utils";
export const getPost = () => async (dispatch) => {
  try {
    const reponse = await axiosInstance.get("?_limit=10");
    dispatch({
      type: "GET_POST",
      payload: reponse.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const addPost = (newPost) => (dispatch) => {
  dispatch({
    type: "ADD_POST",
    payload: newPost,
  });
};
export const deletePost = (id) => (dispatch) => {
  dispatch({
    type: "DELETE_POST",
    payload: id,
  });
};
