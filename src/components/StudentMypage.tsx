import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import StudentProfileCard from './StudentProfileCard';
import IndexCard from './IndexCard';
import RequestCard, { RequestCardProps } from './RequestCard';

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
                <StudentProfileCard
                    student_name="김철수"
                    nationality="대한민국"
                    age="25"
                    gender="남성"
                    image="https://via.placeholder.com/200"
                    has_car={true}
                    isMypage={true}
                    phone_number="010-1234-5678"
                    emergency_contact="010-8765-4321"
                    onEditClick={() => alert('Edit Student Profile')}
                />

                <Box sx={{ marginTop: '24px' }} id={sections[1]}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>도착 알람을 보내세요!</Typography>
                    {ongoingRequests.map((request, index) => (
                        <Box key={index} sx={{ marginTop: '16px' }}>
                            <RequestCard {...request} />
                        </Box>
                    ))}
                </Box>

                <Box sx={{ marginTop: '24px' }} id={sections[4]}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>신청 요청</Typography>
                    {openRequests.map((request, index) => (
                        <Box key={index} sx={{ marginTop: '16px' }}>
                            <RequestCard {...request} />
                        </Box>
                    ))}
                </Box>

                <Box sx={{ marginTop: '24px' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>과거 요청</Typography>
                    {pastRequests.map((request, index) => (
                        <Box key={index} sx={{ marginTop: '16px' }}>
                            <RequestCard {...request} />
                        </Box>
                    ))}
                </Box>

            </Container>

            <Container                 
                sx={{
                    width: { xs: '100%', md: '344px' }, // 작은 화면에서는 100% 폭
                    padding: '0 !important',
                    position: { xs: 'relative', md: 'sticky' }, // 작은 화면에서는 위치 고정 해제
                    top: { md: '50%' }, // 중간 위치 (데스크톱만)
                    transform: { md: 'translateY(-50%)' }, // 중간 위치 조정 (데스크톱만)
                    order: { xs: -1, md: 1 }, // 모바일에서 위로 이동
                }}>
                <IndexCard roles="student" sections={sections}/>
            </Container>
        </Box>
    );
};

export default StudentMypage;
