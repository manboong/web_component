import React from 'react';
import './studentcard.css';

export interface StudentCardProps {
  name: string;
  nationality: string;
  school: string;
  major: string;
  languages: string[];
  imageUrl: string;
  onBookmarkClick?: () => void;
}

export const StudentCard = ({
  name,
  nationality,
  school,
  major,
  languages,
  imageUrl,
  onBookmarkClick,
}: StudentCardProps) => (
  <div className="student-card-container">
    <div className="student-card-bookmark" onClick={onBookmarkClick}>
      <img src="/bookmark-icon.png" alt="Bookmark" />
    </div>
    <div className="student-card-image">
      <img src={imageUrl} alt={name} />
    </div>
    <div className="student-card-content">
      <h2 className="student-card-name">{name}</h2>
      <p className="student-card-nationality"><strong>Nationality:</strong> {nationality}</p>
      <p className="student-card-school"><strong>School:</strong> {school}</p>
      <p className="student-card-major"><strong>Major:</strong> {major}</p>
      <p className="student-card-languages"><strong>Languages:</strong> {languages.join(', ')}</p>
    </div>
  </div>
);
