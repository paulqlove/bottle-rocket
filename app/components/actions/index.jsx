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
  // const url = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json';

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
// return (dispatch) => {
//       dispatch(itemsIsLoading(true));
//
//       fetch(url)
//             .then((resp) => resp.json())
//             .then((data) => {
//                this.setStaturle({
//                   restaurants: data.restaurants
//                 });
//             })
//             .catch(function(err) {
//               console.log('there was an error' + err);
//           });
// }
// }
