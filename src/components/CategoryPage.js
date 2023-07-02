import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NewsCard from './NewsCard';

const CategoryPage = () => {
  const [articles, setArticles] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6c6917689503411380dd1226f355814f`);
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <Container>
      <h1>{category} News</h1>
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </Container>
  );
};

export default CategoryPage;
