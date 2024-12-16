import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import StudentProfileCard from './StudentProfileCard';
import IndexCard from './IndexCard';
import RequestCard, { RequestCardProps } from './RequestCard';
import CorpProfileCard, { CorpProfileProps } from './CorpProfileCard';

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

const corpProfileDummyData: CorpProfileProps = {
    corp_name: "OpenAI Tech Solutions",
    nationality: "USA",
    ceo_name: "Sam Altman",
    corp_address: "123 AI Lane, San Francisco, CA 94110",
    biz_started_at: "2015-12-01",
    biz_type: "Artificial Intelligence",
    logo_image: "https://via.placeholder.com/150",
    site_url: "https://openai.com",
    isMypage: true,
    corp_domain: "openai.com",
    phone_number: "+1-800-123-4567",
    corp_num: 12345678,
    biz_num: 98765432,
    corp_status: "Active",
    onEditClick: () => {
        console.log("Edit button clicked!");
    },
};

const CorpMypage = () => {
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
                <CorpProfileCard
                    corp_name={corpProfileDummyData.corp_name}
                    nationality={corpProfileDummyData.nationality}
                    ceo_name={corpProfileDummyData.ceo_name}
                    corp_address={corpProfileDummyData.corp_address}
                    biz_started_at={corpProfileDummyData.biz_started_at}
                    biz_type={corpProfileDummyData.biz_type}
                    logo_image={corpProfileDummyData.logo_image}
                    site_url={corpProfileDummyData.site_url}
                    isMypage={corpProfileDummyData.isMypage}
                    corp_domain={corpProfileDummyData.corp_domain}
                    phone_number={corpProfileDummyData.phone_number}
                    corp_num={corpProfileDummyData.corp_num}
                    biz_num={corpProfileDummyData.biz_num}
                    corp_status={corpProfileDummyData.corp_status}
                    onEditClick={corpProfileDummyData.onEditClick}
                />

                <Box sx={{ marginTop: '24px' }} id={sections[1]}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>진행 중인 요청</Typography>
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

            <Container sx={{ width: '344px', padding: '0 !important', position: 'sticky', top: '50%', transform: 'translateY(-50%)' }}>
                <IndexCard roles= "corp" sections={sections}/>
            </Container>
        </Box>
    );
};

export default CorpMypage;
