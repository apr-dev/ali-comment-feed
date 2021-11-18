import React from 'react';
 
export default (state, action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
           return {
                comments: [action.payload, ...state.shoppingList]
           }
        case 'REMOVE_COMMENT':
           return {
               comments: state.shoppingList.filter(item => item !== action.payload)
           }
        default:
           return state;
   }
}