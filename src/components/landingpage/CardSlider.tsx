import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

export interface RequestCard {
  request_id: number;
  title: string;
  reward_price: number;
  currency: string;
  address?: string;
  start_date: string;
  request_status?: number;
  logo_image?: string;
}

interface CardSliderProps {
  requests: RequestCard[];
  step?: number;
  interval?: number;
  slideWidth?: number | string;
  slideHeight?: number | string;
}

const CardSlider: React.FC<CardSliderProps> = ({
  requests,
  step = 0.3,
  interval = 20,
  slideWidth = 480,
  slideHeight = 600,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (requests.length < 2) return;

    const timerId = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + step;
        if (newOffset >= 100) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % requests.length);
          return 0;
        }
        return newOffset;
      });
    }, interval);

    return () => clearInterval(timerId);
  }, [requests, step, interval]);

  const translateX = -((activeIndex * 100) + offset);

  if (requests.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 2 }}>
        요청할 카드가 없습니다.
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: '100%',
        margin: 'auto',
        overflow: 'hidden',
        border: '1px solid #ddd',
        height: slideHeight,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          width: `calc(${slideWidth} * ${requests.length})`,
          transform: `translateX(${translateX}%)`,
          transition: 'transform 0.2s linear',
        }}
      >
        {requests.map((req) => (
          <Box
            key={req.request_id}
            sx={{
              width: slideWidth,
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              sx={{
                margin: 2,
                borderRadius: 4,
                width: 400,
                height: '80%',
              }}
            >
              <CardContent>
                {req.logo_image && (
                  <Box
                    component="img"
                    src={req.logo_image}
                    alt={req.title}
                    sx={{
                      width: 50,
                      height: 50,
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto 8px auto',
                    }}
                  />
                )}

                <Typography variant="h6" gutterBottom>
                  {req.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  보상: {req.reward_price} {req.currency}
                </Typography>

                {req.address && (
                  <Typography variant="body2" color="text.secondary">
                    주소: {req.address}
                  </Typography>
                )}

                <Typography variant="body2" color="text.secondary">
                  시작일: {req.start_date}
                </Typography>

                {req.request_status !== undefined && (
                  <Typography variant="body2" color="text.secondary">
                    상태: {req.request_status}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CardSlider;
