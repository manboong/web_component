import React from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';
import '@fontsource/noto-sans-kr';

export interface Request {
    request_id: number;
    consumer_id: number;
    title: string;
    subtitle?: object;
    head_count?: number;
    reward_price: number;
    currency: string;
    content: string;
    are_needed?: object;
    are_required?: object;
    start_date?: string;
    end_date?: string;
    address?: string;
    address_coordinate?: any;
    provide_food?: any;
    provide_trans_exp?: any;
    prep_material?: object;
    request_status?: number;
    start_time?: string;
    end_time?: string;
    created_at?: Date;
    updated_at?: Date;
    corp_id?: number;
    orgn_id?: number;
}

interface RequestSideCardProps {
  request: Request;
}

const RequestSideCard: React.FC<RequestSideCardProps> = ({ request }) => {
  return (
    <Card
      sx={{
        maxWidth: 1080,
        margin: 'auto',
        borderRadius: '16px',
        fontFamily: 'Noto Sans KR',
        backgroundColor: '#ffffff',
        padding: '1',
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Noto Sans KR',
            marginBottom: 2,
          }}
        >
          요청 상세 정보
        </Typography>
        <List sx={{ fontFamily: 'Noto Sans KR' }}>
          <ListItem>
            <ListItemText
              primary="참여 인원"
              secondary={request.head_count !== undefined ? `${request.head_count}명` : '정보 없음'}
              sx={{ fontFamily: 'Noto Sans KR' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="보상 금액"
              secondary={`${request.reward_price} ${request.currency}`}
              sx={{ fontFamily: 'Noto Sans KR' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="시작 날짜"
              secondary={request.start_date || '정보 없음'}
              sx={{ fontFamily: 'Noto Sans KR' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="주소"
              secondary={request.address || '정보 없음'}
              sx={{ fontFamily: 'Noto Sans KR' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="식사 제공"
              secondary={request.provide_food ? '예' : '아니오'}
              sx={{ fontFamily: 'Noto Sans KR' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="교통비 지원"
              secondary={request.provide_trans_exp ? '예' : '아니오'}
              sx={{ fontFamily: 'Noto Sans KR' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="시작 시간"
              secondary={request.start_time || '정보 없음'}
              sx={{ fontFamily: 'Noto Sans KR' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="종료 시간"
              secondary={request.end_time || '정보 없음'}
              sx={{ fontFamily: 'Noto Sans KR' }}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default RequestSideCard;
