import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid2 as Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import '@fontsource/noto-sans-kr';

export interface UserData {
  username: string;
  email: string;
  nationality: string;
  working_country: string;
  roles: string[];
  image: string;
  isMypage?: boolean;
  onEditClick?: () => void;
}

const UserProfileCard: React.FC<UserData> = ({
  username,
  email,
  nationality,
  working_country,
  roles,
  image,
  isMypage = false,
  onEditClick,
}) => {
  return (
    <Card
      sx={{
        width: '100%',
        margin: 'auto',
        borderRadius: '16px',
        fontFamily: 'Noto Sans KR',
        color: 'rgba(0, 0, 0, 0.7)',
        backgroundColor: '#f5f5f5',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: { size: 'column', md: 'row' },
        transition: 'background-color 0.3s ease',
        '&:hover': isMypage ? { backgroundColor: '#e0e0e0' } : undefined,
        position: 'relative',
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={`${username} profile`}
        sx={{
          width: '160px',
          height: '160px',
          objectFit: 'cover',
          borderRadius: '16px',
          margin: '16px',
        }}
      />

      {isMypage && (
        <IconButton
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
        </IconButton>
      )}

      <CardContent sx={{ padding: 3, fontFamily: 'Noto Sans KR', flex: 1 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontFamily: 'Noto Sans KR', fontSize: '1.5rem', marginBottom: 2 }}
        >
          {username}
        </Typography>

        <Grid container spacing={2}>
          <Grid size={3}>
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{
                fontFamily: 'Noto Sans KR',
                fontSize: '1rem',
                color: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              이메일
            </Typography>
          </Grid>
          <Grid size={9}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Noto Sans KR',
                fontSize: '1rem',
                color: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              {email}
            </Typography>
          </Grid>

          <Grid size={3}>
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{
                fontFamily: 'Noto Sans KR',
                fontSize: '1rem',
                color: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              국적
            </Typography>
          </Grid>
          <Grid size={9}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Noto Sans KR',
                fontSize: '1rem',
                color: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              {nationality}
            </Typography>
          </Grid>

          <Grid size={3}>
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{
                fontFamily: 'Noto Sans KR',
                fontSize: '1rem',
                color: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              근무 국가
            </Typography>
          </Grid>
          <Grid size={9}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Noto Sans KR',
                fontSize: '1rem',
                color: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              {working_country}
            </Typography>
          </Grid>

          <Grid size={3}>
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{
                fontFamily: 'Noto Sans KR',
                fontSize: '1rem',
                color: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              역할
            </Typography>
          </Grid>
          <Grid size={9}>
            {roles.map((role, index) => (
              <Typography
                key={`${role}-${index}`}
                variant="body2"
                sx={{
                  fontFamily: 'Noto Sans KR',
                  fontSize: '1rem',
                  color: 'rgba(0, 0, 0, 0.7)',
                }}
              >
                {role}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
