import React from 'react'
import { Theme, Box, Flex, Grid, Separator, Container, Text } from '@radix-ui/themes'
import SearchBar, { SearchBarProps } from '../components/SearchBar'
import RequestCard, { RequestCardProps } from '../components/RequestCard'
import styled from 'styled-components';

export interface PageRequestListProps {
    searchbar: SearchBarProps;
    request_card: RequestCardProps[];
}

const PageRequestList: React.FC<PageRequestListProps> = ({
    searchbar,
    request_card,
}) =>  {
    return (
        <Theme>
            <Box width="100%" height="100%" minWidth="300px">
                <Flex direction="column" align="center" justify="center" gap="3">
                  
                    <SearchBar 
                        placeholder={searchbar.placeholder}
                        onSearch={searchbar.onSearch}
                    />
                    <Container>
                    <Separator my="3" size="4" />

                      <Text as="div" size="6" weight="bold">요청 리스트</Text>
                      <Separator my="3" size="4" />
                      <Grid 
                        columns={{
                          initial: "1",
                          md: "2"
                        }}
                        gap="2"
                        rows="auto" 
                        width="auto"
                        >
                        {request_card.map((card, index) => (
                          <Flex
                            key={index}
                            justify="center"
                            align="center"
                            style={{ width: '100%', height: '100%' }}
                          >
                            <RequestCard 
                              title={card.title}
                              subtitle={card.subtitle}
                              reward_price={card.reward_price}
                              currency={card.currency}
                              address={card.address}
                              start_date={card.start_date}
                              logo_image={card.logo_image}
                              link={card.link}
                            />
                          </Flex>
                        ))}
                      </Grid>
                    </Container>
                </Flex>
            </Box>
        </Theme>
    )
}

export default PageRequestList