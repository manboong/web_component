import React from 'react';
import { Theme, Box, Card, Flex, Text, Avatar, Separator } from '@radix-ui/themes';
import styled from 'styled-components';
import "@radix-ui/themes/styles.css";

export interface LanguageCardProps {
  level: number;
  exam_result: string;
  exam_name: string;
  language: string;
}

type LevelColorProps = 'purple' | 'cyan' | 'crimson'

const level_to_color = (level: number): LevelColorProps =>  {
  switch (level) {
    case 1:
      return 'purple'
    case 2:
      return 'cyan'
    case 3:
      return 'crimson'
    default:
      return 'purple'
  }
}

const ResponsiveBox = styled(Box)`
  width: 300px;
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
  gap: 10px;
  height: 100%;
`;


const LanguageCard: React.FC<LanguageCardProps> = ({
  level,
  exam_result,
  exam_name,
  language
}) => (
  <Theme>
    <ResponsiveBox>
      <ResponsiveCard>
        <Avatar size="7" variant="solid" color={level_to_color(level) ?? 'purple'} highContrast fallback={
          <Text size="6" weight="bold">
            {exam_result}
          </Text>
        } />
        <Flex direction="column" gap="4" align="center" justify="center" width="100%">
          <Text as="div" size="4" weight="bold" style={{ marginBottom: '8px', textAlign: 'center' }}>
            {language}
          </Text>
          <Separator orientation="horizontal" size="4"/>
          <Flex direction={{initial: "column", md: "row"}} gap={{initial: "8px", md: "16px"}} >
            <Text as="p">
              <strong>{exam_name}</strong>: {exam_result}
            </Text>
          </Flex>
        </Flex>
      </ResponsiveCard>
    </ResponsiveBox>
  </Theme>
);

export default LanguageCard;
