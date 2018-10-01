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
      mode: 'cors',
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
      mode: 'cors',
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
        } else {
          throw new Error(response.message);
        }

        return response;
      })
      .then((response) => {
        dispatch({
          type: actionType + SUCCESS,
        });

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

export function postComment(actionType, url, values, token) {
  return (dispatch) => {
    dispatch({
      type: actionType + START,
    });

    const formData = JSON.stringify(values);
    const commentHeaders = new Headers();
    commentHeaders.append('Content-Type', 'application/json; charset=utf-8');
    commentHeaders.append('Authorization', `Token ${token}`);

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: commentHeaders,
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
            type: actionType + SUCCESS,
          });
        } else {
          throw new Error(response.message);
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
