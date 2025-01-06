import React, { useState } from "react";
import {
    Box,
    Container,
    Tab,
    Tabs,
    Typography,
    Grid2 as Grid,
    Modal,
    Card,
    CardContent,
} from "@mui/material";
import CorpIndexCard from "./corporation/CorpIndexCard"
import RequestCard from "./request/RequestCard"
import CorpProfileCard from "./corporation/CorpProfileCard"
import ReviewOfCorpCard from "./corporation/ReviewOfCorpCard"
import ReviewOfCorpInput from "./input/ReviewOfCorpInput"

import { useForm } from "react-hook-form";

const CorpMypage = () => {
    const [open, setOpen] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);

    const { control, handleSubmit } =
        useForm({
            defaultValues: {
                review_text: "",
                prep_requirement: "",
                work_atmosphere: "",
                sense_of_achive: -1,
            },
        });

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    const dummyData = {
        corp: {
            corp_id: 1,
            corp_name: "테스트 회사",
            nationality: "대한민국",
            corp_domain: "testcorp.com",
            ceo_name: "홍길동",
            corp_address: "서울특별시 강남구",
            phone_number: "02-1234-5678",
            corp_num: 1234567890,
            biz_num: 987654321,
            biz_started_at: "2010-01-01",
            corp_status: 1,
            biz_type: "IT 서비스",
            logo_image: "https://via.placeholder.com/100",
            site_url: "https://testcorp.com",
        },
        requests: [
            {
                request_id: 1,
                title: "진행 중인 요청",
                reward_price: 100,
                currency: "KRW",
                address: "서울특별시 강남구",
                start_date: "2023-12-01",
                request_status: 3,
                renderLogo: false,
                onClick: () => alert("request clicked")
            },
            {
                request_id: 2,
                title: "신청 요청",
                reward_price: 150,
                currency: "USD",
                address: "부산광역시 해운대구",
                start_date: "2023-11-15",
                request_status: 0,
                renderLogo: false,
                onClick: () => alert("request clicked")
            },
            {
                request_id: 3,
                title: "과거 요청",
                reward_price: 200,
                currency: "KRW",
                address: "서울특별시 송파구",
                start_date: "2023-10-10",
                request_status: 4,
                renderLogo: false,
                onClick: () => alert("request clicked")
            },
        ],
        reviews: [
            {
                review_text: "협력 과정이 매우 원활했습니다.",
                prep_requirement: "준비물 완벽",
                sense_of_achive: 5,
                work_atmosphere: "좋은 협업 분위기",
            },
            {
                review_text: "응답 시간이 조금 느렸습니다.",
                prep_requirement: "준비물 부족",
                sense_of_achive: 3,
                work_atmosphere: "개선 필요",
            },
        ],
    };

    const ongoingRequests = dummyData.requests.filter(
        (req) => req.request_status === 3,
    );
    const openRequests = dummyData.requests.filter(
        (req) => req.request_status === 0,
    );
    const pastRequests = dummyData.requests.filter(
        (req) => req.request_status === 4 || req.request_status === 5,
    );

    const onSubmit = async (data: any) => {
        console.log("Submitted Review:", data);
        setOpen(false);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "24px",
                maxWidth: "1080px",
                margin: "auto",
                padding: "16px",
                minHeight: "100vh",
            }}
        >
            <Container
                sx={{
                    width: { xs: "100%", md: "712px" },
                    padding: "0 !important",
                }}
            >
                <CorpProfileCard {...dummyData.corp} />

                <Box sx={{ marginTop: "24px" }}>
                    <Tabs
                        value={tabIndex}
                        onChange={handleTabChange}
                        centered
                        variant="fullWidth"
                    >
                        <Tab label="의뢰" />
                        <Tab label="리뷰" />
                    </Tabs>
                </Box>

                {tabIndex === 0 && (
                    <>
                        <Box sx={{ marginTop: "24px" }}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", marginBottom: "16px" }}
                            >
                                진행 중인 요청
                            </Typography>
                            {ongoingRequests.map((request, index) => (
                                <Box key={index} sx={{ marginTop: "16px" }}>
                                    <RequestCard {...request} />
                                </Box>
                            ))}
                        </Box>

                        <Box sx={{ marginTop: "24px" }}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", marginBottom: "16px" }}
                            >
                                신청 요청
                            </Typography>
                            {openRequests.map((request, index) => (
                                <Box key={index} sx={{ marginTop: "16px" }}>
                                    <RequestCard {...request} />
                                </Box>
                            ))}
                        </Box>

                        <Box sx={{ marginTop: "24px" }}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", marginBottom: "16px" }}
                            >
                                과거 요청
                            </Typography>
                            {pastRequests.map((request, index) => (
                                <Box key={index} sx={{ marginTop: "16px" }}>
                                    <RequestCard {...request} />
                                </Box>
                            ))}
                        </Box>
                    </>
                )}

                {tabIndex === 1 && (
                    <Box sx={{ marginTop: "16px" }}>
                        <Grid container spacing={3}>
                            {dummyData.reviews.map((review, index) => (
                                <Grid size={6} key={index}>
                                    <ReviewOfCorpCard {...review} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}
            </Container>

            <Container
                sx={{
                    width: { xs: "100%", md: "344px" },
                    padding: "0 !important",
                    position: { xs: "relative", md: "sticky" },
                    top: { md: "50%" },
                    transform: { md: "translateY(-50%)" },
                    order: { xs: -1, md: 1 },
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                }}
            >
                <CorpIndexCard />
                <Card
                    sx={{
                        borderRadius: "16px",
                        backgroundColor: "#ff7961",
                    }}
                >
                    <CardContent
                        sx={{
                            textAlign: "center",
                            padding: "8px !important",
                        }}
                    >
                        <Typography>의뢰하기</Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default CorpMypage;
