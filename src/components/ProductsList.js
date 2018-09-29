import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadProducts } from '../AC';
import ProductItem from './ProductItem';
import Loader from './Loader';
import { URL } from '../constants';

class ProductsList extends Component {
  static propTypes = {
    loadAllProducts: PropTypes.func.isRequired,
    products: PropTypes.shape({
      data: PropTypes.array,
      isLoading: PropTypes.bool,
      isLoaded: PropTypes.bool,
      errorLoadMessage: PropTypes.string,
    }),
  }

  static defaultProps = {
    products: {
      productData: [],
      isLoading: false,
      isLoaded: false,
    },
  }

  componentDidMount() {
    const { loadAllProducts, products } = this.props;

    if (!products.isLoaded && !products.isLoading) {
      loadAllProducts(URL.LOAD_ALL_PRODUCTS);
    }
  }

  render() {
    const { products } = this.props;
    const productElements = products.data.map(product => (
      <ProductItem
        key={product.id}
        id={`${product.id}`}
        title={product.title}
        imgSrc={product.img}
      />
    ));

    if (products.isLoading) {
      return (
        <Loader
          message="Wait a second, the products are downloaded..."
        />
      );
    }

    return (
      <ul className="products__list">
        {productElements}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => (
  {
    loadAllProducts: (url) => {
      dispatch(loadProducts(url));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
