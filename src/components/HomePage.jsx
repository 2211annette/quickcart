import React from 'react';
import ProductList from './ProductList';

function HomePage({ products, searchTerm }) {
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      
      {searchTerm && (
        <p>{filtered.length} product(s) found</p>
      )}

      {filtered.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ProductList products={filtered} />
      )}
      
    </div>
  );
}

export default HomePage;