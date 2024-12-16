import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid2 as Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import '@fontsource/noto-sans-kr';

export interface StudentAttributes {
    student_name: string;
    nationality: string;
    age: string;
    phone_number?: string;
    emergency_contact?: string;
    gender: string;
    image?: string;
    has_car?: boolean;
    isMypage?: boolean;
    onEditClick?: () => void;
}

const StudentProfileCard: React.FC<StudentAttributes> = ({
    student_name,
    nationality,
    age,
    phone_number,
    emergency_contact,
    gender,
    image,
    has_car,
    isMypage = false,
    onEditClick,
}) => {
    return (
        <Card
            sx={{
                maxWidth: '1080px',
                margin: 'auto',
                borderRadius: '16px',
                fontFamily: 'Noto Sans KR',
                color: 'rgba(0, 0, 0, 0.7)',
                backgroundColor: '#f5f5f5',
                boxShadow: 'none',
                display: 'flex',
                transition: 'background-color 0.3s ease',
                '&:hover': isMypage ? { backgroundColor: '#e0e0e0' } : undefined,
                position: 'relative',
            }}
        >
            <CardMedia
                component="img"
                image={image}
                alt={`${student_name} profile`}
                sx={{
                    width: '160px',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    margin: '16px',
                }}
            />
            
            {isMypage && (<IconButton
                onClick={onEditClick}
                sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: '#f5f5f5',
                    '&:hover': {
                        backgroundColor: '#e0e0e0',
                    },
                }}
            >
                <EditIcon />
            </IconButton>)}

            <CardContent sx={{ padding: 3, fontFamily: 'Noto Sans KR', flex: 1 }}>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: 'Noto Sans KR', fontSize: '1.5rem', marginBottom: 2 }}
                >
                    {student_name}
                </Typography>

                <Grid container spacing={2}>
                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                        >
                            국적
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <Typography
                            variant="body2"
                            sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                        >
                            {nationality}
                        </Typography>
                    </Grid>

                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                        >
                            나이
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <Typography
                            variant="body2"
                            sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                        >
                            {age}
                        </Typography>
                    </Grid>

                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                        >
                            성별
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <Typography
                            variant="body2"
                            sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                        >
                            {gender}
                        </Typography>
                    </Grid>

                    {isMypage && phone_number && (
                        <>
                            <Grid size={3}>
                                <Typography
                                    variant="body2"
                                    fontWeight="bold"
                                    sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                                >
                                    전화번호
                                </Typography>
                            </Grid>
                            <Grid size={9}>
                                <Typography
                                    variant="body2"
                                    sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                                >
                                    {phone_number}
                                </Typography>
                            </Grid>
                        </>
                    )}

                    {isMypage && emergency_contact && (
                        <>
                            <Grid size={3}>
                                <Typography
                                    variant="body2"
                                    fontWeight="bold"
                                    sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                                >
                                    긴급 연락처
                                </Typography>
                            </Grid>
                            <Grid size={9}>
                                <Typography
                                    variant="body2"
                                    sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                                >
                                    {emergency_contact}
                                </Typography>
                            </Grid>
                        </>
                    )}

                    <Grid size={3}>
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                        >
                            차량 소유 여부
                        </Typography>
                    </Grid>
                    <Grid size={9}>
                        <Typography
                            variant="body2"
                            sx={{ fontFamily: 'Noto Sans KR', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.7)' }}
                        >
                            {has_car ? '예' : '아니오'}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default StudentProfileCard;
