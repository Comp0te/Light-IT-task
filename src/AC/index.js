import {
  LOAD_ALL_PRODUCTS, SUCCESS, FAIL, START, ACTIVE_PRODUCT, LOAD_COMMENTS,
} from '../constants';

function GetFromServer(actionType, url) {
  return (dispatch) => {
    dispatch({
      type: actionType + START,
    });

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then((response) => {
        dispatch({
          type: actionType + SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionType + FAIL,
          payload: error.message,
        });
      });
  };
}

export function loadProducts(url) {
  return GetFromServer(LOAD_ALL_PRODUCTS, url);
}

export function loadComments(url) {
  return GetFromServer(LOAD_COMMENTS, url);
}

export function activeProduct(id) {
  return {
    type: ACTIVE_PRODUCT,
    payload: id,
  };
}
