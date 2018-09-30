import {
  SUCCESS, FAIL, START, SAVE_USER,
} from '../constants';

export function getFromServer(actionType, url) {
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

export function postToServer(actionType, url, values) {
  return (dispatch) => {
    dispatch({
      type: actionType + START,
    });

    const formData = JSON.stringify(values);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then((response) => {
        if (response.success) {
          dispatch({
            type: SAVE_USER,
            payload: {
              userName: values.username,
              token: response.token,
            },
          });
        }

        return response;
      })
      .then((response) => {
        if (response.success) {
          dispatch({
            type: actionType + SUCCESS,
          });
        }
        return response;
      })
      .catch((error) => {
        dispatch({
          type: actionType + FAIL,
          payload: error.message,
        });
      });
  };
}
