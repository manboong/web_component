import React from 'react';

import './requestcard.css';

export interface CardProps {
  title: string;
  subtitle: string;
  salary: string;
  location: string;
  imageUrl: string;
  onBookmarkClick?: () => void;
}

export const Card = ({ title, subtitle, salary, location, imageUrl, onBookmarkClick }: CardProps) => (
  <div className="card-container">
    <div className="card-bookmark" onClick={onBookmarkClick}>
      <img src="/bookmark-icon.png" alt="Bookmark" />
    </div>
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-subtitle">{subtitle}</p>
      <p className="card-salary">{salary}</p>
      <p className="card-location">{location}</p>
    </div>
    <div className="card-image">
      <img src={imageUrl} alt={title} />
    </div>
  </div>
);
