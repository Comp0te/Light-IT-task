import React from 'react';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import ProductsList from './ProductsList';

export default function App() {
  return (
    <div role="presentation">
      <PageHeader />
      <h1>Products of our company</h1>
      <ProductsList />
      <PageFooter />
    </div>
  );
}
