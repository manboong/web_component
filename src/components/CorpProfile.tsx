import React from 'react';
import { Theme, Avatar, Box, Card, Flex, Text } from '@radix-ui/themes';

export interface CorpProfileProps {
  name: string;
  nationality: string;
  ceo_name: string;
  corp_address: string;
  corp_num: string;
  biz_started_at: Date;
  biz_type: string;
  logo_image: string;
}

const CorpProfile: React.FC<CorpProfileProps> = ({
  name,
  nationality,
  ceo_name,
  corp_address,
  corp_num,
  biz_started_at,
  biz_type,
  logo_image,
}) => {
  return (
    <Theme>
      <Box style={{ width: '800px', padding: '24px', margin: '16px 0' }}>
        <Card>
          <Flex direction="column" gap="4" align="start">
            <Flex direction="row" align="center" gap="4">
              <Avatar src={logo_image} size="7" alt={`${name} logo`} radius="full" fallback={name.charAt(0)}/>
              <Box>
                <Text as="div" size="5" weight="bold">
                  {name}
                </Text>
                <Text as="p" color="gray" size="2">
                  {biz_type}
                </Text>
                <Text as="p" color="gray" size="2">
                  {nationality}
                </Text>
              </Box>
            </Flex>
            <Flex direction="row" gap="6" style={{ marginTop: '16px' }}>
              <Box>
                <Text as="p" size="3" weight="bold">CEO</Text>
                <Text as="p" size="3">{ceo_name}</Text>
              </Box>
              <Box>
                <Text as="p" size="3" weight="bold">Address</Text>
                <Text as="p" size="3">{corp_address}</Text>
              </Box>
              <Box>
                <Text as="p" size="3" weight="bold">Corp Number</Text>
                <Text as="p" size="3">{corp_num}</Text>
              </Box>
              <Box>
                <Text as="p" size="3" weight="bold">Biz Started At</Text>
                <Text as="p" size="3">{biz_started_at.toLocaleDateString()}</Text>
              </Box>
            </Flex>
          </Flex>
        </Card>
      </Box>
    </Theme>
  );
};

export default CorpProfile;
