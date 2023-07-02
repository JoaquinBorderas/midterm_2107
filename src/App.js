import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewsContext } from './components/NewsContext.js'; // Update the import statement

const App = () => {
  const [featuredArticle, setFeaturedArticle] = useState(null);

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/everything?q=important&apiKey=6c6917689503411380dd1226f355814f')
      .then((res) => setFeaturedArticle(res.data.articles[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <NewsContext.Provider value={featuredArticle}>
      {/* Provide the value of featuredArticle */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </NewsContext.Provider>
  );
};

export default App;

