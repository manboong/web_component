import React from "react";
import StudentProfile, { StudentProfileProps } from "../components/StudentProfile";
import ReviewOfStudent, { ReviewOfStudentProps } from "../components/ReviewOfStudent";
import { Theme, Grid, Avatar, Box, Card, Flex, Text, Inset, Separator, Container } from '@radix-ui/themes';

export interface PageStudentProfileProps {
    student_profile: StudentProfileProps;
    review_of_student: ReviewOfStudentProps[];
}

const PageStudentProfile: React.FC<PageStudentProfileProps> = ({
    student_profile,
    review_of_student,
}) => {
    return(
        <Theme>
                <Flex direction="column" align="center" justify="center">
                    <Box style={{ width: "1024px"}}>
                    <StudentProfile
                        name={student_profile.name}
                        imageUrl={student_profile.imageUrl}
                        nationality={student_profile.nationality}
                        age={student_profile.age}
                        gender={student_profile.gender}
                        academicHistory={student_profile.academicHistory}
                        languageHistory={student_profile.languageHistory}
                        past_activity={student_profile.past_activity}
                    />
                    <Separator my="3" size="4" />
                    <Grid gapY="5">
                    <Text as="div" size="6" weight="bold">Past Activity</Text>
                    <Grid
                        columns={{
                            initial: "1",
                            md: "2"
                        }}
                        gap="3"
                    >
                        {review_of_student.map((review, index) => (
                            <Flex
                                key={index}
                                justify="center"
                                align="center"
                                style={{ width: '100%', height: '100%' }}
                            >
                                <ReviewOfStudent
                                    request_card={review.request_card}
                                    was_late={review.was_late}
                                    was_proactive={review.was_proactive}
                                    was_diligent={review.was_diligent}
                                    commu_ability={review.commu_ability}
                                    lang_fluent={review.lang_fluent}
                                    goal_fulfillment={review.goal_fulfillment}
                                    want_cowork={review.want_cowork}
                                />
                            </Flex>
                        ))}
                    </Grid>
                    </Grid>
                    </Box>
                </Flex>
        </Theme>
    )
}

export default PageStudentProfile