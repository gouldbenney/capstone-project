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
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
          return {
           ...state,
           basket: [...state.basket, action.item]
          };
        case 'REMOVE_FROM_BASKET':
        // Removing an item from the basket
        let newBasket = [...state.basket] ;

        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
          );
          if (index >= 0) {
            // item exists in basket, remove it
          newBasket.splice(index, 1);

          }
          return { 
            ...state,
             basket: newBasket
            };
        default:
          return state;
          }
    }


export default reducer;