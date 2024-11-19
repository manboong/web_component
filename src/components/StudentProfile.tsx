import React from 'react';
import { Theme, Grid, Avatar, Box, Card, Flex, Text, Inset, Separator } from '@radix-ui/themes';
import AcademicHistoryCard, { AcademicHistoryCardProps } from './AcademicHistoryCard';
import LanguageCard, { LanguageCardProps } from './LanguageCard';

export interface StudentProfileProps {
  name: string;
  imageUrl: string;
  nationality: string;
  age: string;
  gender: string;
  academicHistory: AcademicHistoryCardProps[];
  languageHistory: LanguageCardProps[];
  past_activity?: string;
}

const StudentProfile: React.FC<StudentProfileProps> = ({
  name,
  imageUrl,
  nationality,
  age,
  gender,
  academicHistory,
  languageHistory,
  past_activity,
}) => {
  return (
      <Flex align="center" justify="center">
      <Box width={{ xs: "520px", sm: "768px", md: "1024px"}} minWidth="300px">
        <Box>
          <Inset>
            <img
              src={past_activity}
              alt="past_activities"
              style={{
                display: "block",
                width: "100%",
                height: "280px",
                backgroundColor: "var(--gray-5)",
                objectFit: "cover",
              }}
            />
          </Inset>
          <Flex direction="column" gap="4" align="start">
            <Flex direction="row" align="center" gap="4">
              <Box style={{position: 'relative', bottom: "40px", left: "40px"}}>
                <Avatar src={imageUrl} size="7" alt={`${name} logo`} radius="full" fallback={name.charAt(0)}/>
              </Box>
              <Box style={{ position: 'relative', left: "40px"}}>
                <Text as="div" size="5" weight="bold">{name}</Text>
                <Text as="p" color="gray" size="2">{nationality}, {gender}, {age}</Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Separator my="3" size="4" />
        <Text as="div" size="6" weight="bold">Academic History</Text>
        <Box style={{ padding: '16px' }}>
          <Grid columns={{initial: "1", md: "2"}} gap="3" rows="auto" width="auto">
            {academicHistory.map((history, index) => (
              <Flex
                key={index}
                justify="center"
                align="center"
                style={{ width: '100%', height: '100%' }}
              >
                <AcademicHistoryCard 
                  degree={history.degree}
                  faculty={history.faculty}
                  school_name={history.school_name}
                  start_date={history.start_date}
                  end_date={history.end_date}
                  status={history.status}
                  logo={history.logo}
                />
              </Flex>
            ))}
          </Grid>
        </Box>
        <Separator my="3" size="4" />
        <Text as="div" size="6" weight="bold">Language Proficiency</Text>
        <Box style={{ padding: '16px' }}>
          <Grid columns={{initial: "1", xs: "2", sm: "3", md: "6"}} gap="3" rows="auto">
            {languageHistory.map((history, index) => (
              <Flex
                key={index}
                justify="center"
                align="center"
                style={{ width: '100%', height: '100%' }}
              >
                <LanguageCard
                  level={history.level}
                  exam_result={history.exam_result}
                  exam_name={history.exam_name}
                  language={history.language}
                />
              </Flex>
            ))}
          </Grid>
        </Box>
      </Box>
      </Flex>
  );
};

export default StudentProfile;
