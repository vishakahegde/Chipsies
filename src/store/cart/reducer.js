const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART_SIMPLE":
      // expect to get the product in action.payload ===> {product}
      return [...state, action.payload];

    case "ADD_TO_CART":
      // check if it's there
      // if it => increase quantity
      // if it's not => add to cart with quantity 1.
      const product = action.payload;
      const exist = state.find((p) => p.id === product.id);

      if (!exist) {
        // we add it
        return [...state, { ...product, quantity: 1 }];
      } else {
        const updatedCart = state.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
        return updatedCart;
      }

    default:
      return state;
  }
}