import React from 'react';
import { Box, Card, Flex, Avatar, Text, Button, Separator, IconButton } from '@radix-ui/themes';
import { StarIcon, StarFilledIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

interface langWithLevelProps {
  language: string;
  level: number;
}

export interface StudentCardProps {
  student_id: number;
  name: string;
  nationality: string;
  school: string;
  major: string;
  languageWithLevel: langWithLevelProps[];
  imageUrl: string;
  link: string;
  isBookmarked: boolean;
  onBookmarkClick: (newState: boolean) => void;
}

const renderLanguages = (langWithProps: langWithLevelProps[]) => {
  return langWithProps.map((val) => {
    let color: 'purple' | 'cyan' | 'crimson' = 'purple';
    switch (val.level) {
      case 0:
        color = 'purple';
        break;
      case 1:
        color = 'cyan';
        break;
      default:
        color = 'crimson';
        break;
    }
    return (
      <div key={val.language}>
        <Text as="span" color={color}>
          {val.language}
        </Text>
        <Separator orientation="vertical" />
      </div>
    );
  });
};

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

const StudentCard = ({
  student_id,
  name,
  nationality,
  school,
  major,
  languageWithLevel,
  imageUrl,
  link,
  isBookmarked,
  onBookmarkClick,
}: StudentCardProps) => {
  const handleCardClick = () => {
    window.location.href = link;
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBookmarkClick(!isBookmarked);
  };

  return (
    <ResponsiveBox>
      <Card asChild>
        <div onClick={handleCardClick} style={{ cursor: 'pointer', height: '100%' }}>
          <Flex
            direction="row"
            gap="7"
            align="center"
            justify="center"
            style={{ width: '100%', height: '100%' }}
          >
            <Avatar size="7" src={imageUrl} radius="full" fallback={name.charAt(0)} />
            <Box style={{ flex: 1 }}>
              <Text as="div" size="4" weight="bold">
                {name}
              </Text>
              <Text as="p" color="gray">
                <strong>Nationality:</strong> {nationality}
              </Text>
              <Text as="p" color="gray">
                <strong>School:</strong> {school}
              </Text>
              <Text as="p" color="gray">
                <strong>Major:</strong> {major}
              </Text>
              <Flex gap="3" align="center">
                {renderLanguages(languageWithLevel)}
              </Flex>
            </Box>
            <IconButton
              onClick={handleBookmarkClick}
              variant="ghost"
              color={isBookmarked ? 'yellow' : 'gray'}
              size="2"
            >
              {isBookmarked ? <StarIcon/> : <StarFilledIcon/> }
            </IconButton>
          </Flex>
        </div>
      </Card>
    </ResponsiveBox>
  );
};

export default StudentCard;
