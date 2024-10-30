// src/datafetcher/list.ts
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchItems = async (page: number, limit: number) => {
  const response = await axios.get(API_URL, {
    params: { _page: page, _limit: limit },
  });
  return response.data;
};

export const fetchTotalItems = async () => {
  const response = await axios.get(API_URL);
  return response.data.length; // Adjusted to return the total length of items
};
