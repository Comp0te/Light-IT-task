import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import ProductsList from './ProductsList';
import Product from './Product';
import Modals from './Modals';

function App(props) {
  const { activeProduct, productsData } = props;

  const getActiveProductData = (data, id) => data.find(
    elem => `${elem.id}` === id,
  );

  const getBody = (activeElem) => {
    if (!activeElem) {
      return (
        <section className="products">
          <h1 className="products__heading">Products of our company</h1>
          <ProductsList />
        </section>
      );
    }

    return (
      <Product data={getActiveProductData(productsData, activeProduct)} />
    );
  };

  return (
    <div role="presentation">
      <PageHeader />
      <main className="container">
        {getBody(activeProduct)}
      </main>
      <PageFooter />
      <Modals />
    </div>
  );
}

App.propTypes = {
  activeProduct: PropTypes.string,
  productsData: PropTypes.arrayOf(PropTypes.any).isRequired,
};

App.defaultProps = {
  activeProduct: null,
};

const mapStateToProps = state => ({
  activeProduct: state.products.activeProduct,
  productsData: state.products.data,
});

export default connect(mapStateToProps)(App);
