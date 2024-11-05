import React from 'react';

import './requestcard.css';
export interface CardProps {
    title: string;
    subtitle: string;
    salary: string;
    location: string;
    date: string;
    imageUrl: string;
    onBookmarkClick?: () => void;
  }
  
  export const Card = ({ title, subtitle, salary, location, date, imageUrl, onBookmarkClick }: CardProps) => (
    <div className="card-container">
      <div className="card-bookmark" onClick={onBookmarkClick}>
        <img src="/bookmark-icon.png" alt="Bookmark" />
      </div>
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <div className="card-title-date">
          <h2 className="card-title">{title}</h2>
          <span className="card-date">{date}</span>
        </div>
        <p className="card-subtitle">{subtitle}</p>
        <p className="card-salary">{salary}</p>
        <p className="card-location">{location}</p>
      </div>
    </div>
  );