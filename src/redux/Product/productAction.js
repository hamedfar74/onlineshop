import axios from "axios";
export const getProduct = (id) => async (dispatch, getState) => {
  
  const {data} = getState(id);

  dispatch({
    type: "LOADING_PRODUCT",
    payload: { ...data, loading: true },
  });
  try {
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id ? `${id}`: ""}`);
    
    dispatch({
      type: "SUCCESS_PRODUCT",
      payload: { loading: false, error: "", data: {...data} },
    });
  } catch (error) {
    dispatch({
        type: "ERROR_PRODUCT",
        payload: { ...data ,loading:false ,error: error.message }
    })
  }
};
