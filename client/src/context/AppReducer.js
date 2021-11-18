const reducer = (state, action) => {
   switch(action.type) {
      case 'ADD_COMMENT':
         return {
               comments: [action.payload, ...state.comments]
         }
      case 'REMOVE_COMMENT':
         return {
               comments: state.comments.filter(comment => comment !== action.payload)
         }
      default:
         return state;
   }
}

export default reducer