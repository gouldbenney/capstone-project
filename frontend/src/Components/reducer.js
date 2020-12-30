// Adding items to the basket

export const initialState = {
    basket: [
      {
      id:'1270',
                title:'Cucumber',
                price:1.5,
                rating:4,
                image:
                  'http://react.pixelstrap.com/assets/images/vegetables/pro/5.jpg',
    },
  ],
    user: null,

};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
          return {
           ...state,
           basket: [...state.basket, action.item]
          };
        case 'REMOVE_FROM_BASKET':
          return { state };
        default:
          return state;
          }
    }


export default reducer;