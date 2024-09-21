import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    fetch("http://localhost:4000/products")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        alert("Unable to get products");
      });
  }

  return (
    <div className='container my-4'>
      <h2 className='text-center mb-4'>Products</h2>
      <div className='row mb-3'>
        <div className='col'>
          <Link className='btn btn-primary me-1' to='/admin/products/create' role='button'>Create Product</Link>
          <button type='button' className='btn btn-outline-primary' onClick={getProducts}>Refresh</button>
        </div>
        <div className='col'>
          {/* Additional content here if needed */}
        </div>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Image</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.brand || 'N/A'}</td>
              <td>{product.category || 'N/A'}</td>
              <td>{product.price || 'N/A'}</td>
              <td>
                <img width="100" src={"http://localhost:4001/images/" + product.imageFilename }/>
              </td>
              <td>{product.createdAt.slice(0, 10)}</td>
              <td style={{ width: '10px', whiteSpace: 'nowrap' }}>
                <Link className='btn btn-primary btn-sm me-1' to={"/admin/products/edit/" + product.id}>Edit</Link>
                <button type='button' className='btn btn-danger btn-sm' onClick={getProducts}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
