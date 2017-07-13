export const ENTER_SEARCHTERM = "ENTER_SEARCHTERM";

export const enteredSearchTerm = (dispatch, searchTerm) => {
  dispatch(requestedSuggestions(dispatch, searchTerm));

  return {
    type: ENTER_SEARCHTERM,
    searchTerm
  };
};