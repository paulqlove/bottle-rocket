export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url){

  return (dispatch) => {
        dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
          if (!response.ok) {
              throw Error(response.statusText);
          }

          dispatch(itemsIsLoading(false));

          return response;
        })
        .then((resp) => resp.json())
        .then((items) => dispatch(itemsFetchDataSuccess(items)))
        .catch(() => dispatch(itemsHasErrored(true)));
      };
}

export function showBackBtn(bool) {
  console.log("aCTION FIRED ACTION FIRED", bool)
  const action = {
    type: 'HEADER_SHOW_BACK_BTN',
    showBackBtn: bool
  };
  return action;
}
