import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const fetchPrices = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:3000/product/${productId}`);
      setPrices(response.data);
      setSelectedProduct(productId);
    } catch (error) {
      console.error('Error fetching prices:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Termékek</h1>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card h-100 text-center">
              <img
                src={product.img_url}
                alt={product.name}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => fetchPrices(product.id)}
                >
                  Ár
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="mt-5">
          <h2 className="text-center">Árlista</h2>
          <ul className="list-group">
            {prices.map((price) => (
              <li
                key={price.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                Méret: {price.size}
                <span className="badge bg-primary rounded-pill">{price.price} Ft</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}