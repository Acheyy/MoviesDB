export const getMoviesBySearch = async (search, dispatch) => {
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=4a3b711b`)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.Response === "True") {
        dispatch({
          type: 'SEARCH_MOVIES_REQUEST_SUCCESS',
          payload: jsonResponse.Search
        });
      }
    });
};

export default getMoviesBySearch;