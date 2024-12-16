import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import StudentProfileCard from './StudentProfileCard';
import IndexCard from './IndexCard';
import RequestCard, { RequestCardProps } from './RequestCard';
import RequestDataCard from './RequestDataCard';

const mockRequests: RequestCardProps[] = [
    {
        title: '진행 중인 요청',
        reward_price: 100,
        currency: 'KRW',
        address: '서울특별시 강남구',
        start_date: new Date(),
        renderLogo: true,
        logo_image: 'https://via.placeholder.com/100',
        request_status: 3,
        onClick: () => alert('진행 중인 요청 클릭'),
    },
    {
        title: '모집 중인 요청',
        reward_price: 150,
        currency: 'KRW',
        address: '서울특별시 송파구',
        start_date: new Date(),
        renderLogo: true,
        logo_image: 'https://via.placeholder.com/100',
        request_status: 0,
        onClick: () => alert('모집 중인 요청 클릭'),
    },
    {
        title: '과거 요청',
        reward_price: 200,
        currency: 'USD',
        address: '부산광역시 해운대구',
        start_date: new Date(),
        renderLogo: true,
        logo_image: 'https://via.placeholder.com/100',
        request_status: 4,
        onClick: () => alert('과거 요청 클릭'),
    },
    {
        title: '과거 요청',
        reward_price: 200,
        currency: 'USD',
        address: '부산광역시 해운대구',
        start_date: new Date(),
        renderLogo: true,
        logo_image: 'https://via.placeholder.com/100',
        request_status: 4,
        onClick: () => alert('과거 요청 클릭'),
    },
    {
        title: '과거 요청',
        reward_price: 200,
        currency: 'USD',
        address: '부산광역시 해운대구',
        start_date: new Date(),
        renderLogo: true,
        logo_image: 'https://via.placeholder.com/100',
        request_status: 4,
        onClick: () => alert('과거 요청 클릭'),
    },
    {
        title: '과거 요청',
        reward_price: 200,
        currency: 'USD',
        address: '부산광역시 해운대구',
        start_date: new Date(),
        renderLogo: true,
        logo_image: 'https://via.placeholder.com/100',
        request_status: 4,
        onClick: () => alert('과거 요청 클릭'),
    },
    {
        title: '과거 요청',
        reward_price: 200,
        currency: 'USD',
        address: '부산광역시 해운대구',
        start_date: new Date(),
        renderLogo: true,
        logo_image: 'https://via.placeholder.com/100',
        request_status: 4,
        onClick: () => alert('과거 요청 클릭'),
    },
];

const requestDataExample = {
    title: "신규 개발 프로젝트 요청",
    content: "AI 기반 개발 프로젝트에 대한 상세 요구 사항입니다.",
    are_needed: ["React 경험", "TypeScript 사용 능력"],
    are_required: ["Redux 사용 경험", "MUI 스타일링"],
    address: "서울특별시 강남구 테헤란로",
    address_coordinate: {
      type: "Point",
      coordinates: [37.507728, 127.062205],
    },
    prep_material: ["노트북", "개발 환경 세팅"],
    request_status: 1,
    created_at: new Date(),
    updated_at: new Date(),
};

const corpProfileExample = {
    corp_name: "OpenAI Corp",
    logo_image: "https://via.placeholder.com/50",
    nationality: "USA",
    ceo_name: "Sam Altman",
    corp_address: "123 AI Lane, San Francisco, CA",
    biz_started_at: "2023-01-01",
    biz_type: "AI Development",
    past_requests: mockRequests
};
    

const StudentMypage = () => {
    const ongoingRequests = mockRequests.filter((req) => req.request_status === 3);
    const openRequests = mockRequests.filter((req) => req.request_status === 0);
    const pastRequests = mockRequests.filter((req) => req.request_status === 4 || req.request_status === 5);

    const sections = ["0", "1", "2", "3", "4"]

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '24px',
                maxWidth: '1080px',
                margin: 'auto',
                padding: '16px',
            }}
            id={sections[0]}
        >
            <Container sx={{ width: '712px', padding: '0 !important' }}>
                <RequestDataCard requestData={requestDataExample} corpProfile={corpProfileExample}/>
            </Container>

            <Container sx={{ width: '344px', padding: '0 !important', position: 'sticky', top: '50%', transform: 'translateY(-50%)' }}>

            </Container>
        </Box>
    );
};

export default StudentMypage;
