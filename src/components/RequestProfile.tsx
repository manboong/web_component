import React from 'react';
import { Theme, Box, Card, Flex, Text, Checkbox } from '@radix-ui/themes';

interface RequestProfileProps {
  title: string;
  subtitle: string;
  head_count: number;
  reward_price: number;
  currency: 'krw' | 'jpy' | 'usd';
  content: string;
  are_needed: string;
  are_required: string;
  start_date: Date;
  end_date: Date;
  address: string;
  address_coordinate: { lat: number; lng: number };
  provide_food: boolean;
  provide_trans_exp: boolean;
  prep_material: string;
  created_at: Date;
}

const RequestProfile: React.FC<RequestProfileProps> = ({
    title,
    subtitle,
    head_count,
    reward_price,
    currency,
    content,
    are_needed,
    are_required,
    start_date,
    end_date,
    address,
    address_coordinate,
    provide_food,
    provide_trans_exp,
    prep_material,
    created_at,
  }) => {
    return (
        <Theme>
            <Box style={{ width: '800px', padding: '24px', margin: '16px 0', gap: '16px' }}>
              {/* 타이틀과 서브타이틀 카드 */}
              <Card style={{ padding: '16px' }}>
                <Text as="div" size="6" weight="bold">{title}</Text>
                <Text as="div" size="4" color="gray">{subtitle}</Text>
              </Card>
              {/* 인원수와 보상 카드 */}
              <Card style={{ padding: '16px' }}>
                <Flex direction="row" gap="2" align="center">
                  <Text>Head Count: {head_count}</Text>
                  <Text>Reward: {reward_price} {currency.toUpperCase()}</Text>
                </Flex>
              </Card>
              {/* 요청 내용 카드 */}
              <Card style={{ padding: '16px' }}>
                <Text as="p">{content}</Text>
              </Card>
              <Card style={{ padding: '16px' }}>
                <Flex direction="row" gap="4" style={{ marginTop: '8px' }}>
                  <Text as="p"><strong>Needed:</strong> {are_needed}</Text>
                  <Text as="p"><strong>Required:</strong> {are_required}</Text>
                </Flex>
              </Card>
              {/* 날짜 카드 */}
              <Card style={{ padding: '16px' }}>
                <Flex direction="row" gap="2" align="center">
                  <Text>Start Date: {start_date.toLocaleDateString()}</Text>
                  <Text>End Date: {end_date.toLocaleDateString()}</Text>
                </Flex>
              </Card>
              {/* 주소 카드 */}
              <Card style={{ padding: '16px' }}>
                <Text as="p"><strong>Address:</strong> {address}</Text>
              </Card>
              {/* 제공 여부 체크박스 카드 */}
              <Card style={{ padding: '16px' }}>
                <Flex gap="3">
                  <Text as="label" size="3">
                    <Flex as="span" gap="2">
                      <Checkbox size="2" checked={provide_food} /> "Provide Food"
                    </Flex>
                  </Text>
                  <Text as="label" size="3">
                    <Flex as="span" gap="2">
                      <Checkbox size="2" checked={provide_trans_exp} /> "Transport Expenses"
                    </Flex>
                  </Text>
                </Flex>
              </Card>
              {/* 준비물 카드 */}
              <Card style={{ padding: '16px' }}>
                <Text as="p"><strong>Preparation Materials:</strong> {prep_material}</Text>
              </Card>
              {/* 생성일 카드 */}
              <Card style={{ padding: '16px' }}>
                <Text as="p" style={{ fontSize: '0.875rem', color: 'gray' }}>
                  Created At: {created_at.toLocaleDateString()} {created_at.toLocaleTimeString()}
                </Text>
              </Card>
            </Box>
      </Theme>
    );
  };
  
  export default RequestProfile;