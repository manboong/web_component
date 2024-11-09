import React from "react";
import RequestProfile, { RequestProfileProps } from "../components/RequestProfile";
import StickyButton, { StickyButtonProps } from "../components/StickyButton";
import { Theme, Grid, Avatar, Box, Card, Flex, Text, Inset, Separator, Container } from '@radix-ui/themes';

export interface PageRequestProfileProps {
    request_profile: RequestProfileProps;
    sticky_button: StickyButtonProps;
}

const PageRequestProfile: React.FC<PageRequestProfileProps> = ({
    request_profile,
    sticky_button
}) => {
    return(
        <Container width={{ initial: "300px", xs: "520px", sm: "768px", md: "1024px"}}>
            <Flex direction="column" align="center" justify="center">
                <RequestProfile
                    title={request_profile.title}
                    subtitle={request_profile.subtitle}
                    head_count={request_profile.head_count}
                    reward_price={request_profile.reward_price}
                    currency={request_profile.currency}
                    content={request_profile.content}
                    are_needed={request_profile.are_needed}
                    are_required={request_profile.are_required}
                    date={request_profile.date}
                    start_time={request_profile.start_time}
                    end_time={request_profile.end_time}
                    address={request_profile.address}
                    address_coordinate={request_profile.address_coordinate}
                    provide_food={request_profile.provide_food}
                    provide_trans_exp={request_profile.provide_trans_exp}
                    prep_material={request_profile.prep_material}
                    created_at={request_profile.created_at}
                />
                <Box width="1024px">
                <Separator my="3" size="4" />
                </Box>
            </Flex>
                <StickyButton
                    viewerType={1}
                    innerText={"신청하기"}
                />
        </Container>
    )
}

export default PageRequestProfile