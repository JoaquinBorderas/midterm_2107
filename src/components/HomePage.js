import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import axios from 'axios';

import { NewsContext } from './NewsContext.js'; // Update the import path based on the actual directory structure


import businessImage from './images/business.jpg';
import entertainmentImage from './images/entertainment.jpg';
import generalImage from './images/general.jpg';
import healthImage from './images/health.jpg';
import scienceImage from './images/science.jpg';
import sportsImage from './images/sports.jpg';
import technologyImage from './images/technology.jpg';

const HomePage = () => {
  const categories = [
    { name: 'Business', image: businessImage },
    { name: 'Enter', image: entertainmentImage },
    { name: 'General', image: generalImage },
    { name: 'Health', image: healthImage },
    { name: 'Science', image: scienceImage },
    { name: 'Sports', image: sportsImage },
    { name: 'Tech', image: technologyImage },
  ];

  const featuredArticle = useContext(NewsContext); // Access the value from the NewsContext

  return (
    <Container>
      <div className={styles['header']}>
        <h1 className={styles['main-title']}>MyNews</h1>
        <h2 className={styles['sub-title']}>The News That Matter To You</h2>
        <hr className={styles['header-line']} />
      </div>
      
      {featuredArticle && (
        <div className={`${styles['featured-article']} ${styles['featured-article-styling']}`}>
          <h3 className={styles['featured-article-title']}>Featured Article</h3>
          <h4 className={styles['featured-article-header']}>{featuredArticle.title}</h4>
          <div className={styles['featured-article-content']}>
            <a href={featuredArticle.url} target="_blank" rel="noopener noreferrer">
              <img 
                src={featuredArticle.urlToImage} 
                alt={featuredArticle.title} 
                className={styles['featured-article-image']}
              />
            </a>
            <div className={styles['featured-article-description']}>
              <p>{featuredArticle.description}</p>
              <a href={featuredArticle.url} target="_blank" rel="noopener noreferrer" className={styles['featured-article-link']}>
                Read more
              </a>
            </div>
          </div>
        </div>
      )}
      
      <Row>
        {categories.map((category, index) => (
          <Col sm={6} md={4} lg={3} className={styles['category-col']} key={index}>
            <Link to={`/category/${category.name}`} style={{ textDecoration: 'none' }}>
              <div
                className={styles['category-card']}
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className={styles['category-name']}>
                  {category.name}
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
