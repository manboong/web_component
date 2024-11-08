import React from 'react';
import { Theme, Box, Card, Flex, Avatar, Text } from '@radix-ui/themes';
import styled from 'styled-components';
import "@radix-ui/themes/styles.css";

export interface RequestCardProps {
  title: string;
  subtitle: string;
  reward_price: string;
  currency: 'USD' | 'JPY' | 'KRW';
  location: string;
  date: string;
  imageURL: string;
}

const ResponsiveBox = styled(Box)`
  width: 600px;
  height: 200px;
  padding: 16px;
  position: relative;
  transition: width 0.3s ease, height 0.3s ease;
  min-width: 300px;

  @media (max-width: 600px) {
    width: 100%;
    height: 200px;
  }
`;

const ResponsiveAvatar = styled(Avatar)`
  display: block;

  @media (max-width: 600px) {
    display: none;
  }
`;

const TitleText = styled(Text)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 4px;
`;

const SubtitleText = styled(Text)`
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 6px;
`;

const RewardText = styled(Text)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #e67e22;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

const LocationText = styled(Text)`
  font-size: 1rem;
  color: #34495e;
  margin: 0 4px;
`;

const DateText = styled(Text)`
  font-size: 0.9rem;
  color: #7f8c8d;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const RequestCard = ({
  title,
  subtitle,
  reward_price,
  currency,
  location,
  date,
  imageURL,
}: RequestCardProps) => (
  <Theme>
    <ResponsiveBox>
      <Card style={{ width: '100%', height: '100%', padding: '20px', position: 'relative' }}>
        <DateText>{date}</DateText>
        <Flex direction="row" gap="7" align="center" justify="center" style={{ width: '100%', height: '100%' }}>
          <ResponsiveAvatar size="7" src={imageURL} radius="medium" fallback={title.charAt(0)} />
          <Box style={{ flex: 1 }}>
            <Flex direction="column">
              <TitleText>{title}</TitleText>
              <SubtitleText>{subtitle}</SubtitleText>
              <LocationText>{location}</LocationText>
            </Flex>
          </Box>
        </Flex>
        <RewardText>
          {reward_price} {currency}
        </RewardText>
      </Card>
    </ResponsiveBox>
  </Theme>
);

export default RequestCard;
