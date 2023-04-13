const addItem = data => {
    return {
        type:"ADD_ITEM",
        payload: data,
    }
}
const increase = (data) => {
    return {
        type:"INCREASE",
        payload: data
    }
}   
const removeItem = (data) => {
    return {
        type:"REMOVE_ITEM",
        payload: data
    }
}
const decrease = (data) => {
    return {
        type:"DECREASE",
        payload: data
    }
}
const checkout = () => {
    return {
        type:"CHECK_OUT",
    }
}
const clear = () => {
    return {
        type:"CLEAR",
    }
}

export {addItem,increase,removeItem,decrease,checkout,clear};