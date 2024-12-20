import React from 'react';
import {
  Box,
  Container,
} from '@mui/material';

interface PageContainerProps {
  main: React.ReactNode;
  side: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ main, side }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '24px',
        maxWidth: '1080px',
        margin: 'auto',
        padding: '16px',
      }}
    >
      <Container 
        sx={{
          width: { xs: '100%', md: '712px' },
          padding: '0 !important',
        }}
      >
        {main}
      </Container>

      <Container
        sx={{
          width: { xs: '100%', md: '344px' },
          padding: '0 !important',
          position: { xs: 'relative', md: 'sticky' },
          top: { md: '50%' },
          transform: { md: 'translateY(-50%)' },
          order: { xs: -1, md: 1 },
        }}
      >
        {side}
      </Container>
    </Box>
  );
};

export default PageContainer;
