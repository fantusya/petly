import React from 'react';

const NewsItem = ({ title, description, date, url }) => {
  const handleReadMore = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="news-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{date}</p>
      <button onClick={handleReadMore}>Read More</button>
    </div>
  );
};

export default NewsItem;
