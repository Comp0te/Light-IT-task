import {
  LOAD_ALL_PRODUCTS, SUCCESS, FAIL, START, ACTIVE_PRODUCT, LOAD_COMMENTS,
  TOGGLE, COMMENT, RESET, REGISTRATION_FORM, SING_IN_FORM,
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

export function toggleCommentsVisibility() {
  return {
    type: TOGGLE + COMMENT,
  };
}

export function resetCommentsData() {
  return {
    type: RESET + COMMENT,
  };
}

export function toggleSingInFormVisibility() {
  return {
    type: TOGGLE + SING_IN_FORM,
  };
}

export function toggleRegistrationFormVisibility() {
  return {
    type: TOGGLE + REGISTRATION_FORM,
  };
}
