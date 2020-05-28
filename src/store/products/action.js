import axios from "axios";

export function startLoading() {
  return {
    type: "startLoading"
  };
}

export const fetchData = async (dispatch, getState) => {
  dispatch(startLoading());
    const response = await axios.get(
      `https://my-json-server.typicode.com/vishakahegde/Chipsies/products`
    );
    dispatch(fetchDataSuccess(response.data));
    console.log("Action data?", response.data)
  };


export const fetchDataSuccess = (products) => ({
  type: "productsFetched",
  payload: products,
});

