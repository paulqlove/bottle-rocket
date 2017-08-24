export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}
export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}

export function showBackBtn(state = false, action) {
  switch(action.type) {
    case 'HEADER_SHOW_BACK_BTN':
      return action.showBackBtn;

      default:
        return state;
  }
}
