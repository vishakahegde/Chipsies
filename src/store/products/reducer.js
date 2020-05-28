const initialState = {
  loading: true,
  data: []
};


export default function productPageSliceReducer(state = initialState, action) {
  switch (action.type) {
      case "startLoading": {
          return state
      }
      case "productsFetched": {
        // console.log("Reducer data?")
          return { 
              ...state,
              loading: false,
              data: [...state.data, ...action.payload]
          }
      }
      default: {
          return state
      }   
  }
}