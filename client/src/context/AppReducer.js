const Reducer = (state, action) => {
   switch(action.type) {
      case 'ADD_COMMENT':
         return {
               comments: [action.payload, ...state.comments]
         }
      case 'REMOVE_COMMENT':
         return {
               comments: state.comments.filter(comment => comment !== action.payload)
         }
      case 'FETCH_COMMENTS':
         return {
               comments: action.payload
         }
      default:
         return state;
   }
}

export default Reducer