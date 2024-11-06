import React from 'react';
import { Theme, Box, Card, Flex, Text } from '@radix-ui/themes';
import styled from 'styled-components';
import "@radix-ui/themes/styles.css";

export interface AcademicHistoryCardProps {
  degree: string;
  faculty: string;
  school_name: string;
  start_date: string;
  end_date: string;
  status: 'Graduated' | 'In Progress' | 'Withdrawn';
}

const ResponsiveBox = styled(Box)`
  width: 600px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.3s ease, height 0.3s ease;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ResponsiveCard = styled(Card)`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const RowFlex = styled(Flex)`
  flex-direction: row;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const AcademicHistoryCard: React.FC<AcademicHistoryCardProps> = ({
  degree,
  faculty,
  school_name,
  start_date,
  end_date,
  status,
}) => (
  <Theme>
    <ResponsiveBox>
      <ResponsiveCard>
        <Flex direction="column" gap="4" style={{ width: '100%', alignItems: 'center' }}>
          <Text as="div" size="4" weight="bold" style={{ marginBottom: '8px', textAlign: 'center' }}>
            {school_name}
          </Text>

          <RowFlex>
            <Text as="p" color="gray">
              <strong>Degree:</strong> {degree}
            </Text>
            <Text as="p" color="gray">
              <strong>Faculty:</strong> {faculty}
            </Text>
          </RowFlex>

          <RowFlex>
            <Text as="p" color="gray">
              <strong>Start Date:</strong> {new Date(start_date).toLocaleDateString()}
            </Text>
            <Text as="p" color="gray">
              <strong>End Date:</strong> {new Date(end_date).toLocaleDateString()}
            </Text>
            <Text as="p" color="gray">
              <strong>Status:</strong> {status}
            </Text>
          </RowFlex>
        </Flex>
      </ResponsiveCard>
    </ResponsiveBox>
  </Theme>
);

export default AcademicHistoryCard;
