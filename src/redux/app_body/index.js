
const actions = {};

actions.searchForRecipes = function(data) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      // - this is not working because recipePuppy doesnt allow
      //   cors
      fetch(
        'http://www.recipepuppy.com/api/?q=' + data,
        {
          medtho: 'GET',
          mode: 'cors',
          headers: new Headers({
            'Content-Type': 'application/json',
          })
        }
      ).then(
        (res) => res.json()
      ).then((res) => {
        console.log(res);
      }).catch((err) => {

      });
    });
  };
};

actions.searchForRecipesComplete = function(data) {
  return {
    type: 'SEARCH_FOR_RECIPES_COMPLETE',
    data
  };
};

export { actions };

const initialState = {
  searchResults: ['no results'],
};

export default function appBody(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_FOR_RECIPES_COMPLETE':
      return {
        searchResults: action.data,
      };

    default: return state;
  }
}
