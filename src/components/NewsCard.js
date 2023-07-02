import React from 'react';
import { Card, Button } from 'react-bootstrap';

const NewsCard = ({ article, isSmall }) => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <Card.Img
        variant="top"
        src={article.urlToImage}
        style={{ height: isSmall ? '150px' : '250px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.description}</Card.Text>
        <Button variant="primary" href={article.url} target="_blank">
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;

