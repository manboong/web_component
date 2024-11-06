import React from 'react';
import { Theme, Grid, Avatar, Box, Card, Flex, Text } from '@radix-ui/themes';
import AcademicHistoryCard, { AcademicHistoryCardProps } from './AcademicHistoryCard';
import LanguageCard, { LanguageCardProps } from './LanguageCard';

export interface StudentProfileProps {
  name: string;
  imageUrl: string
  nationality: string;
  age: string;
  gender: string;
  academicHistory: AcademicHistoryCardProps[];
  languageHistory: LanguageCardProps[];
  phone_number: string;
  emergency_contact: string;
}

const StudentProfile: React.FC<StudentProfileProps> = ({
    name,
    imageUrl,
    nationality,
    age,
    gender,
    academicHistory,
    languageHistory,
    phone_number,
    emergency_contact,
  }) => {
    return (
        <Theme>
            <Box style={{ width: '1200px', padding: '24px', margin: '16px 0', gap: '16px' }}>
              <Card>
                <Flex direction="row" gap="7">
                    <Avatar size="7" src={imageUrl} radius="full" fallback={name.charAt(0)} />
                    <Text as="div" size="6" weight="bold">{name}</Text>
                    <Text as="p" size="5" color="gray">{nationality}</Text>
                    <Text as="p" size="5" color="gray">{age}</Text>
                    <Text as="p" size="5" color="gray">{gender}</Text>
                    <Text as="p" size="5" color="gray">{phone_number}</Text>
                    <Text as="p" size="5" color="gray">{emergency_contact}</Text>
                </Flex>
              </Card>
              <Card style={{ padding: '16px' }}>
                <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
                    {academicHistory.map((history, index) => (
                        <AcademicHistoryCard 
                            key={index}
                            degree={history.degree}
                            faculty={history.faculty}
                            school_name={history.school_name}
                            start_date={history.start_date}
                            end_date={history.end_date}
                            status={history.status}
                        />
                    ))}
                </Grid>
              </Card>
              <Card style={{ padding: '16px' }}>
                <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
                    {languageHistory.map((history, index) => (
                        <LanguageCard
                            key={index}
                            level={history.level}
                            exam_result={history.exam_result}
                            exam_name={history.exam_name}
                            language={history.language}
                        />
                    ))}
                </Grid>
              </Card>
            </Box>
      </Theme>
    );
  };
  
  export default StudentProfile;