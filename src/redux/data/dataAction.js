import axios from "axios";
export const getData = () => async (dispatch, getState) => {
  const data = getState().data;
  
  dispatch({
    type: "LOADING_DATA",
    payload: { ...data, loading: true },
  });
  try {
    const {data} = await axios.get("https://fakestoreapi.com/products");
    
    dispatch({
      type: "SUCCESS_DATA",
      payload: { loading: false, error: "", data: [...data] },
    });
  } catch (error) {
    dispatch({
        type: "ERROR_DATA",
        payload: { ...data ,loading:false ,error: error.message }
    })
  }
};
