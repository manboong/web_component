import React from 'react';
import { Card, CardContent, Box, Typography, Grid2 as Grid, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import "@fontsource/noto-sans-kr";

export interface CorpProfileProps {
    corp_name: string;
    nationality: string;
    ceo_name?: string;
    corp_address?: string;
    biz_started_at?: string;
    biz_type?: string;
    logo_image?: string;
    site_url?: string;
}

const CorpProfileCard: React.FC<CorpProfileProps> = ({
    corp_name,
    nationality,
    ceo_name,
    corp_address,
    biz_started_at,
    biz_type,
    logo_image,
    site_url
}) => {
    const handleCopyToClipboard = () => {
        if (site_url) {
            navigator.clipboard.writeText(site_url);
            alert('URL copied to clipboard!');
        }
    };
    return (
        <Card sx={{ maxWidth: "1080px", margin: 'auto', borderRadius: '16px', fontFamily: 'Noto Sans KR', color: 'rgba(0, 0, 0, 0.7)', backgroundColor: '#f5f5f5', boxShadow: "none" }}>
            <CardContent sx={{ padding: 3, fontFamily: 'Noto Sans KR' }}>
                <Box display="flex" alignItems="center" marginBottom="16px">
                    {logo_image && (
                        <Box
                            component="img"
                            src={logo_image}
                            alt={`${corp_name} logo`}
                            sx={{ width: 50, height: 50, marginRight: 2, borderRadius: '4px' }}
                        />
                    )}
                    <Typography variant="h5" component="div" sx={{ fontFamily: 'Noto Sans KR' }}>
                        {corp_name}
                    </Typography>
                </Box>

                <Grid container spacing={1.5}>
                    <Grid size={3}>
                        <Typography variant="body2" fontWeight="bold" sx={{ fontFamily: 'Noto Sans KR', color: 'rgba(0, 0, 0, 0.7)' }}>
                            국적
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <Typography variant="body2" sx={{ fontFamily: 'Noto Sans KR', color: 'rgba(0, 0, 0, 0.7)' }}>{nationality}</Typography>
                    </Grid>

                    {ceo_name && (
                        <>
                            <Grid size={3}>
                                <Typography variant="body2" fontWeight="bold" sx={{ fontFamily: 'Noto Sans KR', color: 'rgba(0, 0, 0, 0.7)' }}>
                                    대표명
                                </Typography>
                            </Grid>
                            <Grid size={9}>
                                <Typography variant="body2" sx={{ fontFamily: 'Noto Sans KR', color: 'rgba(0, 0, 0, 0.7)' }}>{ceo_name}</Typography>
                            </Grid>
                        </>
                    )}

                    {corp_address && (
                        <>
                            <Grid size={3}>
                                <Typography variant="body2" fontWeight="bold" sx={{ fontFamily: 'Noto Sans KR', color: 'rgba(0, 0, 0, 0.7)' }}>
                                    주소
                                </Typography>
                            </Grid>
                            <Grid size={9}>
                                <Typography variant="body2" sx={{ fontFamily: 'Noto Sans KR', color: 'rgba(0, 0, 0, 0.7)' }}>{corp_address}</Typography>
                            </Grid>
                        </>
                    )}

                    {biz_started_at && (
                        <>
                            <Grid size={3}>
                                <Typography variant="body2" fontWeight="bold" sx={{ fontFamily: 'Noto Sans KR', color: 'rgba(0, 0, 0, 0.7)' }}>
                                    설립일자
                                </Typography>
                            </Grid>
                            <Grid size={9}>
                                <Typography variant="body2" sx={{ fontFamily: 'Noto Sans KR', color: 'rgba(0, 0, 0, 0.7)' }}>{biz_started_at}</Typography>
                            </Grid>
                        </>
                    )}

                    {biz_type && (
                        <>
                            <Grid size={3}>
                                <Typography variant="body2" fontWeight="bold" sx={{ fontFamily: 'Noto Sans KR', color: 'rgba(0, 0, 0, 0.7)' }}>
                                    업종
                                </Typography>
                            </Grid>
                            <Grid size={9}>
                                <Typography variant="body2" sx={{ fontFamily: 'Noto Sans KR', color: 'rgba(0, 0, 0, 0.7)' }}>{biz_type}</Typography>
                            </Grid>
                        </>
                    )}

                    {site_url && (
                        <>
                            <Grid size={3}>
                                <Typography variant="body2" fontWeight="bold" sx={{ fontFamily: 'Noto Sans KR', color: 'rgba(0, 0, 0, 0.7)' }}>
                                    웹사이트
                                </Typography>
                            </Grid>
                            <Grid size={9} display="flex" alignItems="center" gap={2}>
                                <Typography variant="body2" sx={{ fontFamily: 'Noto Sans KR', color: 'rgba(0, 0, 0, 0.7)', marginRight: 1 }}>
                                    {site_url}
                                </Typography>
                            </Grid>
                        </>
                    )}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CorpProfileCard;
