import React from 'react';
import { Theme, Progress, Box, Card, Flex, Text, Inset, Strong } from '@radix-ui/themes';
import RequestCard, { RequestCardProps } from './RequestCard';
import { StarIcon } from '@radix-ui/react-icons'

export interface ReviewOfCorpProps {
    request_card: RequestCardProps;
    review_text: string;
    prep_requirement: string;
    work_atmosphere: string;
    sense_of_achive: number;
}

const ReviewOfCorp: React.FC<ReviewOfCorpProps> = ({
    request_card,
    review_text,
    prep_requirement,
    work_atmosphere,
    sense_of_achive,
}) => {
    return (
        <Theme>
            <Box width={{ initial: "300px", xs: "480px" }}>
                <Card>
                    <Flex direction="column" gap="2" align="stretch" justify="center">
                        <Inset>
                            <RequestCard
                                title={request_card.title}
                                subtitle={request_card.subtitle}
                                reward_price=""
                                currency=""
                                location={request_card.location}
                                date=""
                                imageURL={request_card.imageURL}
                            />
                        </Inset>
                        <Text as="p" size="4" style={{ marginTop: '16px' }}>
                            <Strong>Review: </Strong>{review_text}
                        </Text>
                        <Text as="p" size="4" style={{ marginTop: '8px' }}>
                            <Strong>Preparation Required: </Strong>{prep_requirement}
                        </Text>
                        <Text as="p" size="4" style={{ marginTop: '8px' }}>
                            <Strong>Work Atmosphere: </Strong>{work_atmosphere}
                        </Text>
                        <Box>
                            <Flex align="center" justify="center" direction="column" gap="2">
                                <StarIcon/>
                                <Progress value={sense_of_achive * 10} style={{ width: '100%' }} />
                            </Flex>
                        </Box>
                    </Flex>
                </Card>
            </Box>
        </Theme>
    );
};

export default ReviewOfCorp;
