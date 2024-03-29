export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_INITIAL_MOVIES":
     return {
       ...state,
       loading: false,
       movies: action.payload
     }

    case "SEARCH_MOVIES_REQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};



export default reducer;
