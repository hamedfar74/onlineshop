const initialState = {
    data: [],
    loading: false,
    error: ""
}
const dataReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case "LOADING_DATA":    
            return payload;
    
        case "SUCCESS_DATA":
            return payload;

        case "ERROR_DATA":
            return payload;
    
        default:
            return state;
    }
}
export default dataReducer;