const initialState = {
  product: {},
  loading: false,
  error: "",
};
const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOADING_PRODUCT":
      return payload;

    case "SUCCESS_PRODUCT":
      return payload;

    case "ERROR_PRODUCT":
      return payload;

    default:
      return state;
  }
};
export default productReducer;
