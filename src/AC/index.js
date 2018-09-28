import {
  LOAD_ALL_PRODUCTS, SUCCESS, FAIL, START,
} from '../constants';

export default function loadProducts(url) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ALL_PRODUCTS + START,
    });

    fetch(url, {
      method: 'GET',
      mode: 'same-origin',
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
          type: LOAD_ALL_PRODUCTS + SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: LOAD_ALL_PRODUCTS + FAIL,
          payload: error.message,
        });
      });
  };
}
