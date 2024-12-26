import React from "react";
import {
  Card,
  Flex,
  Avatar,
  Text,
  IconButton,
  Separator,
} from "@radix-ui/themes";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

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

const renderLanguages = (langWithLevel: langWithLevelProps[]) => {
  const sortedLanguages = langWithLevel
    .sort((a, b) => b.level - a.level)
    .slice(0, 3);
  const languageSlots = Array.from({ length: 3 }, (_, i) =>
    sortedLanguages[i]?.language || "-"
  );

  return (
    <Flex direction="row" align="center" style={{ width: "100%" }}>
      {languageSlots.map((lang, index) => (
        <Flex
          key={index}
          align="center"
          justify="center"
          style={{
            flex: 1,
            textAlign: "center",
            position: "relative",
          }}
        >
          <Text as="span" color={lang === "-" ? "gray" : "crimson"}>
            {lang}
          </Text>
          {index < 2 && (
            <Separator
              orientation="vertical"
              size="3"
              style={{
                position: "absolute",
                right: 0,
                height: "30px",
                backgroundColor: "#ccc",
              }}
            />
          )}
        </Flex>
      ))}
    </Flex>
  );
};

const ResponsiveCard = styled(Card)`
  width: 300px;
  height: 340px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
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
    <ResponsiveCard>
      <div onClick={handleCardClick} style={{ width: "100%", height: "100%" }}>
        <Flex
          direction="column"
          align="center"
          gap="0.5"
          style={{ height: "100%" }}
        >
          {/* Profile Image */}
          <Avatar
            size="9"
            src={imageUrl}
            radius="full"
            fallback={name.charAt(0)}
            style={{ marginBottom: "12px" }}
          />

          {/* Name */}
          <Text as="div" size="5" weight="bold" align="center">
            {name}
          </Text>

          {/* Nationality */}
          <Text as="p" color="gray" size="3" align="center" style={{ marginTop: "-4px" }}>
            {nationality}
          </Text>

          {/* School */}
          <Text as="p" color="gray" size="3" align="center" style={{ marginTop: "-4px" }}>
            {school}
          </Text>

          {/* Major */}
          <Text as="p" color="gray" size="3" align="center" style={{ marginTop: "-4px" }}>
            {major}
          </Text>

          {/* Separator */}
          <Separator size="3" style={{ margin: "12px 0", width: "100%" }} />

          {/* Languages */}
          {renderLanguages(languageWithLevel)}

          {/* Bookmark Button */}
          <IconButton
            onClick={handleBookmarkClick}
            radius="full" 
            variant="ghost"
            color={isBookmarked ? "red" : "gray"}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              width: "48px",
              height: "48px",
            }}
          >
            {isBookmarked ? <HeartFilledIcon width="30" height="30"/> : <HeartIcon width="30" height="30"/>}
          </IconButton>
        </Flex>
      </div>
    </ResponsiveCard>
  );
};

export default StudentCard;
