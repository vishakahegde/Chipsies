import axios from "axios";
import store from "..";

export const fetchData = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `https://my-json-server.typicode.com/vishakahegde/Chipsies/products`
    );
    console.log("Data:", response);
    dispatch(fetchDataSuccess(response));
  };
};

export const fetchDataSuccess = (products) => ({
  type: "FETCH_PRODUCT",
  payload: products,
});
