import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import axios from 'axios';
import './App.css';
import Footer from './Components/Footer';

export default function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const skip = (currentPage - 1) * itemsPerPage;
    axios.get(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`)
      .then(response => {
        setData(response.data.products); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [currentPage]);

  const totalItems = 194;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="App">
      <Navbar />
      <div className="CardContainer">
        {data.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.thumbnail}
            description={product.description}
          />
        ))}
      </div>

      <div className="pagination">
        {[...Array(totalPages).keys()].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <Footer />
    </div>
  );
}
