// src/component/ListView.jsx
import React, { useEffect, useState } from 'react';
import { fetchItems, fetchTotalItems } from '../dataFetcher/list.ts';
import '../styles/listView.css'; // Importing the CSS file for styles

const ListView = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5; // Adjust the number of items per page

  const loadItems = async (page) => {
    setLoading(true);
    const fetchedItems = await fetchItems(page, itemsPerPage);
    setItems(fetchedItems);
    const totalItems = await fetchTotalItems();
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
    setLoading(false);
  };

  useEffect(() => {
    loadItems(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="list-container">
      <div className="list">
        {items.map((item) => (
          <div key={item.id} className="card">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-body">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ListView;
