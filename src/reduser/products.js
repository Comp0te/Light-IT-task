import {
  LOAD_ALL_PRODUCTS, START, SUCCESS, FAIL, ACTIVE_PRODUCT,
} from '../constants';

const defaultProductsState = {
  data: [],
  isLoading: false,
  isLoaded: false,
  errorLoadMessage: '',
  activeProduct: null,
};

export default (productsState = defaultProductsState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_ALL_PRODUCTS + START: {
      return {
        ...productsState,
        isLoading: true,
      };
    }

    case LOAD_ALL_PRODUCTS + SUCCESS: {
      return {
        ...productsState,
        data: payload,
        isLoading: false,
        isLoaded: true,
      };
    }

    case LOAD_ALL_PRODUCTS + FAIL: {
      return {
        ...productsState,
        errorLoadMessage: payload,
      };
    }

    case ACTIVE_PRODUCT: {
      return {
        ...productsState,
        activeProduct: payload,
      };
    }

    default:
      return productsState;
  }
};
