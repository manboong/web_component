import React from "react";
import CorpProfile, { CorpProfileProps } from "../components/CorpProfile";
import ReviewOfCorp, { ReviewOfCorpProps } from "../components/ReviewOfCorp";
import { Theme, Grid, Avatar, Box, Card, Flex, Text, Inset, Separator, Container } from '@radix-ui/themes';

export interface PageCorpProfileProps {
    corp_profile: CorpProfileProps;
    review_of_corp: ReviewOfCorpProps[];
}

const PageCorpProfile: React.FC<PageCorpProfileProps> = ({
    corp_profile,
    review_of_corp,
}) => {
    return(
        <Theme>
                <Flex direction="column" align="center" justify="center">
                    <Box style={{ width: "1024px"}}>
                    <CorpProfile
                        name={corp_profile.name}
                        nationality={corp_profile.nationality}
                        corp_address={corp_profile.corp_address}
                        biz_type={corp_profile.biz_type}
                        review_count={corp_profile.review_count}
                        logo_image={corp_profile.logo_image}
                        homepage_url={corp_profile.homepage_url}
                        corp_num={corp_profile.corp_num}
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
                        {review_of_corp.map((review, index) => (
                            <Flex
                                key={index}
                                justify="center"
                                align="center"
                                style={{ width: '100%', height: '100%' }}
                            >
                                <ReviewOfCorp
                                    request_card={review.request_card}
                                    review_text={review.review_text}
                                    prep_requirement={review.prep_requirement}
                                    work_atmosphere={review.work_atmosphere}
                                    sense_of_achive={review.sense_of_achive}
                                    work_intensity={review.work_intensity}
                                    pay_satisfaction={review.pay_satisfaction}
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

export default PageCorpProfile