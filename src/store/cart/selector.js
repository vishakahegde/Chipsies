export const amountOfItemsInCart = (state) => {
    // return state.cart.reduce((acc, item) => acc + item.quantity, 0);
  };
  
  export const uniqueItemsInCart = (state) => {
    return state.cart.length;
  };