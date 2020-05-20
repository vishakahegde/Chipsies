export function showProducts(reduxState) {
  return reduxState.homePage;
}

function sortProductsByPopularity(reduxState) {
  console.log("Sate", reduxState);
  // return [...reduxState.pizzas].sort((pizzaA, pizzaB) => {
  //   return pizzaB.bought - pizzaA.bought;
  // });
}
