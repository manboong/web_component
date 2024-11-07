import React from 'react';
import { Theme, Card, Text, Inset, Box } from '@radix-ui/themes';
import styled from 'styled-components';

export interface AcademicHistoryCardProps {
  degree: string;
  faculty: string;
  school_name: string;
  start_date: string;
  end_date: string;
  status: 'Graduated' | 'In Progress' | 'Withdrawn';
  logo?: string;
}

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AcademicHistoryCard: React.FC<AcademicHistoryCardProps> = ({
  degree,
  faculty,
  school_name,
  start_date,
  end_date,
  status,
  logo,
}) => (
  <Theme>
    <StyledCard>
      <Inset clip="padding-box" side="top" pb="current" style={{ width: '100%', height: '150px', overflow: 'hidden' }}>
        {logo && (
          <Box style={{ width: '100%', height: '100%' }}>
            <img
              src={logo}
              alt={`${school_name} logo`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        )}
      </Inset>
      
      <Text size="5" weight="bold" style={{ color: '#2c3e50', fontSize: '1.5em' }}>
        {school_name}
      </Text>
      <Text size="4" style={{ color: '#34495e', fontStyle: 'italic', fontSize: '1.1em' }}>
        {degree} in {faculty}
      </Text>
      <Text size="3" style={{ color: '#7f8c8d', fontSize: '0.9em' }}>
        {new Date(start_date).toLocaleDateString()} - {end_date ? new Date(end_date).toLocaleDateString() : 'Present'}
      </Text>
      <Text
        size="3"
        weight="bold"
        style={{
          color: status === 'Graduated' ? 'indigo' : status === 'In Progress' ? 'jade' : 'tomato',
          backgroundColor: '#ecf0f1',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '0.95em'
        }}
      >
        {status}
      </Text>
    </StyledCard>
  </Theme>
);

export default AcademicHistoryCard;
