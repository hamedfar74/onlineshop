const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};
const sumItems = (items) => {
  
  const itemsCounter = items.reduce((total, data) => total + data.quantity , 0);
  
  let total = items
  .reduce((total, data) =>  total + data.price * data.quantity, 0)
  .toFixed(2);
  return { itemsCounter, total };
};

const basketReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id )) {
        // console.log(!state.selectedItems.find((item) => item.id === action.payload.id ))
        
        state.selectedItems.push(
          {
            ...action.payload,
            quantity : 1
          }
        );
      }

      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;

      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;

      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "CHECK_OUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };

    default:
      return state;
  }
};

export default basketReducer;
