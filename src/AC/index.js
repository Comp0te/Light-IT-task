import {
  LOAD_ALL_PRODUCTS, ACTIVE_PRODUCT, LOAD_COMMENTS,
  TOGGLE, COMMENT, RESET, REGISTRATION_FORM, SING_IN_FORM,
  POST_FORM_REGISTRATION, POST_FORM_SING_IN, SING_OUT,
} from '../constants';
import { getFromServer, postToServer } from './thunks';

export function loadProducts(url) {
  return getFromServer(LOAD_ALL_PRODUCTS, url);
}

export function loadComments(url) {
  return getFromServer(LOAD_COMMENTS, url);
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

export const postRegistrationForm = (
  url,
  values,
) => postToServer(POST_FORM_REGISTRATION, url, values);

export const postSingInForm = (
  url,
  values,
) => postToServer(POST_FORM_SING_IN, url, values);

export function singOut() {
  return {
    type: SING_OUT,
  };
}
