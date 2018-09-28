import {
  LOAD_ALL_PRODUCTS, START, SUCCESS, FAIL,
} from '../constants';

const defaultProductsState = {
  data: [],
  loading: false,
  loaded: false,
  errorLoadMessage: '',
};

export default (productsState = defaultProductsState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_ALL_PRODUCTS + START: {
      return {
        ...productsState,
        loading: true,
      };
    }

    case LOAD_ALL_PRODUCTS + SUCCESS: {
      return {
        ...productsState,
        data: payload,
        loading: false,
        loaded: true,
      };
    }

    case LOAD_ALL_PRODUCTS + FAIL: {
      return {
        ...productsState,
        errorLoadMessage: payload,
      };
    }

    default:
      return productsState;
  }
};
