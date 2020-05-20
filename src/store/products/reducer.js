const initialState = 
[
    {
      id: 1,
      title: "flowers",
      categories: "Good",
      description: "Some of its medical advantages incorporate ADHD, relief from bloating, stomach infirmities and insomnia. In any case, the individuals who are allergic to ragweed are encouraged to dodge this chips.",
      price: "€ 5",
      popularity: 4
    },
    {
      id: 2,
      title: "grasses",
      categories: "Bad",
      description: "5 health benefits of grass fed beef chips. Extra Omega-3. Grass fed beef contains as much as three times more Omega-3 (good fats found in oily fish) than grain fed beef. ",
      price: "€ 3",
      popularity: 2
    },
    {
      id: 3,
      title: "spices",
      categories: "Worse",
      description: "There’s no need to go on a massive hunt for exotic ingredients — some of the best spices can be found in this chips. ",
      price: "€ 6",
      popularity: 5
    },
    {
      id: 4,
      title: "gums",
      categories: "Best",
      description: "Sugarless mint or ginger gums of all kinds can sooth an upset stomach. If you’re looking for little ways to improve your health, try chewing this chips. You’ll thank yourself later.  ",
      price: "€ 5",
      popularity: 1
    },
    {
      id: 5,
      title: "balsams",
      categories: "Mediocre",
      description: "Essential oil of balsam chips which also contains the healing resin—can be used as massage oil and lotion to help increase blood circulation and promote healing of sore muscles and joints.",
      price: "€ 3",
      popularity: 3
    }
  ];

  export default function productPageSliceReducer(state = initialState, action) {
    switch (action.type) {
      default: {
        return state;
      }
    }
  }