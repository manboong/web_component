import React from 'react';
import { Theme, Box, Card, Flex, Avatar, Text, Button } from '@radix-ui/themes';
import styled from 'styled-components';
import "@radix-ui/themes/styles.css";

export interface RequestCardProps {
  title: string;
  subtitle: string;
  salary: string;
  location: string;
  date: string;
  imageURL: string;
  onBookmarkClick?: () => void;
}


const ResponsiveBox = styled(Box)`
  width: 600px;
  height: 200px;
  padding: 16px;
  transition: width 0.3s ease, height 0.3s ease;

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

const ResponsiveText = styled(Text).attrs({
  as: 'p',     
  color: 'gray' 
})`
  font-size: 1rem;     
  margin: 2px 0;       
`;

const LocationText = styled(Text).attrs({
  as: 'p',
  color: 'gray'
})`
  display: block;
  margin: 2px 0;
  font-size: 1rem;

  @media (max-width: 400px) {
    display: none;
  }
`;

const SalaryText = styled(Text).attrs({
  as: 'p',
  color: 'gray'
})`
  display: block;
  margin: 2px 0;
  font-size: 1rem;

  @media (max-width: 400px) {
    display: none;
  }
`;
const RequestCard = ({
  title,
  subtitle,
  salary,
  location,
  date,
  imageURL,
  onBookmarkClick,
}: RequestCardProps) => (
  <Theme>
    <ResponsiveBox>
      <Card style={{ width: '100%', height: '100%', padding: '20px' }}>
        <Flex direction="row" gap="7" align="center" justify="center" style={{ width: '100%', height: '100%' }}>
          {/* Avatar Section */}
          <ResponsiveAvatar size="7" src={imageURL} radius="medium" fallback={title.charAt(0)} />

          {/* Content Section */}
          <Box style={{ flex: 1 }}>
            <Text as="div" size="4" weight="bold">
              {title}
            </Text>
            <ResponsiveText>
              <strong>subtitle:</strong> {subtitle}
            </ResponsiveText>
            <SalaryText>
              <strong>salary:</strong> {salary}
            </SalaryText>
            <LocationText>
              <strong>location:</strong> {location}
            </LocationText>
            <ResponsiveText>
              <strong>date:</strong> {date}
            </ResponsiveText>
          </Box>

          {/* Bookmark Button with Icon */}
          <Button onClick={onBookmarkClick} variant="ghost" color="gray" size="2">
          <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2.5C3 2.22386 3.22386 2 3.5 2H11.5C11.7761 2 12 2.22386 12 2.5V13.5C12 13.6818 11.9014 13.8492 11.7424 13.9373C11.5834 14.0254 11.3891 14.0203 11.235 13.924L7.5 11.5896L3.765 13.924C3.61087 14.0203 3.41659 14.0254 3.25762 13.9373C3.09864 13.8492 3 13.6818 3 13.5V2.5ZM4 3V12.5979L6.97 10.7416C7.29427 10.539 7.70573 10.539 8.03 10.7416L11 12.5979V3H4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </Button>
        </Flex>
      </Card>
    </ResponsiveBox>
  </Theme>
);


export default RequestCard;