import React from 'react'
import { Theme, Box, Flex, Grid } from '@radix-ui/themes'
import SearchBar, { SearchBarProps } from '../components/SearchBar'
import RequestCard, { RequestCardProps } from '../components/RequestCard'

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
                <Flex direction="column" align="center" justify="center">
                    <SearchBar 
                        placeholder={searchbar.placeholder}
                        onSearch={searchbar.onSearch}
                    />
                    <Grid columns="2" gap="3" rows="auto" width="auto">
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
                            location={card.location}
                            date={card.date}
                            imageURL={card.imageURL}
                          />
                        </Flex>
                      ))}
                    </Grid>
                </Flex>
            </Box>
        </Theme>
    )
}

export default PageRequestList