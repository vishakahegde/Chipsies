const initialState = 
[
    {
      "id": 1,
      "title": "flowers",
      "categories": "Good",
      "price": "€ 5",
      "popularity": 4
    },
    {
      "id": 2,
      "title": "grasses",
      "categories": "Bad",
      "price": "€ 3",
      "popularity": 2
    },
    {
      "id": 3,
      "title": "spices",
      "categories": "Worse",
      "price": "€ 6",
      "popularity": 5
    },
    {
      "id": 4,
      "title": "gums",
      "categories": "Best",
      "price": "€ 5",
      "popularity": 1
    },
    {
      "id": 5,
      "title": "balsams",
      "categories": "Mediocre",
      "price": "€ 3",
      "popularity": 3
    }
  ],

export default function productPageSliceReducer(state = initialState, action) {
  console.log("action?", action, "state?", state)
  switch (action.type) {
    default: {
      return state;
    }
  }
}