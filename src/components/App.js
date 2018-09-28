import React from 'react';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import ProductsList from './ProductsList';

export default function App() {
  return (
    <div role="presentation">
      <PageHeader />
      <main className="container">
        <section className="products">
          <h1 className="products__heading">Products of our company</h1>
          <ProductsList />
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
