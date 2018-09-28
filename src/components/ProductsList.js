import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadProducts } from '../AC';
import Product from './Product';
import Loader from './Loader';

class ProductsList extends Component {
  static propTypes = {
    loadAllProducts: PropTypes.func.isRequired,
    products: PropTypes.shape({
      data: PropTypes.array,
      loading: PropTypes.bool,
      loaded: PropTypes.bool,
      errorLoadMessage: PropTypes.string,
    }),
  }

  static defaultProps = {
    products: {
      productData: [],
      loading: false,
      loaded: false,
    },
  }

  loadingMessage = 'Wait a second, the products are downloaded...'

  componentDidMount() {
    const { loadAllProducts, products } = this.props;

    if (!products.loaded && !products.loading) {
      loadAllProducts('http://smktesting.herokuapp.com/api/products');
    }
  }

  render() {
    const { products } = this.props;
    const productElements = products.data.map(product => (
      <Product
        key={product.id}
        title={product.title}
        imgSrc={product.img}
      />
    ));

    if (products.loading) {
      return (
        <ul>
          <li>
            <Loader message={this.loadingMessage} />
          </li>
        </ul>
      );
    }

    return (
      <ul>
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
