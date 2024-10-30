import { useState } from 'react';
import './App.css';
import ListView from './components/ListView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListViewOnScroll from './components/ListViewOnScroll';


function App() {

  useState();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="/onscrollpagination" element={<ListViewOnScroll/>} />
      </Routes>
    </Router>
  );
}

export default App;
