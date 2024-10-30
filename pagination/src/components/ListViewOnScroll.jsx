import React, { useEffect, useState, useCallback } from 'react';
import { fetchItems, fetchTotalItems } from '../dataFetcher/list.ts';
import '../styles/listView.css';

const ListViewOnScroll = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;

  const loadItems = async (page) => {
    setLoading(true);
    const fetchedItems = await fetchItems(page, itemsPerPage);
    const totalItems = await fetchTotalItems();
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
    setItems((prevItems) => [...prevItems, ...fetchedItems]); // Append new items
    setLoading(false);
  };

  const handleScroll = useCallback(() => {

    if (

      window.innerHeight + document.documentElement.scrollTop + 1 >= // Added a small buffer

      document.documentElement.offsetHeight && !loading // Check if not loading

    ) {

      setCurrentPage((prev) => prev + 1);

    }

  }, [loading]);

  useEffect(() => {
    loadItems(currentPage);
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    loadItems(currentPage); // Load items when current page changes
  }, [currentPage]);

  if (loading && items.length === 0) return <div className="loading">Loading...</div>;

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
      {loading && <div className="loading">Loading more items...</div>}
    </div>
  );
};

export default ListViewOnScroll;
