import {
  ENTER_SEARCHTERM
} from "../actions/search";

const search = (
  state = {
    suggestions: [],
    searchTerm: ""
  },
  action
) => {
  switch (action.type) {
    case ENTER_SEARCHTERM:
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    default: {
      return state;
    }
  }
};

export default search;