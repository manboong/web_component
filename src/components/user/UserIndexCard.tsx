import React from 'react';
import { Box, Card, CardContent, List, ListItemText, ListItemButton, Button } from '@mui/material';
import '@fontsource/noto-sans-kr';

interface UserIndexCardProps {
  student_id?: string;
  corp_id?: string;
  onButtonClick?: (type: 'student' | 'corp' | 'addRole') => void;
}

const UserIndexCard: React.FC<UserIndexCardProps> = ({
  student_id,
  corp_id,
  onButtonClick,
}) => {
  return (
    <Box sx={{ p: 0, width: '100%' }}>
      <Card
        sx={{
          width: '100%',
          borderRadius: '16px',
          fontFamily: 'Noto Sans KR',
          backgroundColor: '#ffffff',
        }}
      >
        <CardContent sx={{ p: 2 }}>
          <List>
            {student_id && (
              <ListItemButton onClick={() => onButtonClick?.('student')}>
                <ListItemText
                  primary="학생 마이페이지"
                  sx={{ fontFamily: 'Noto Sans KR' }}
                />
              </ListItemButton>
            )}

            {corp_id && (
              <ListItemButton onClick={() => onButtonClick?.('corp')}>
                <ListItemText
                  primary="기업 마이페이지"
                  sx={{ fontFamily: 'Noto Sans KR' }}
                />
              </ListItemButton>
            )}
          </List>
        </CardContent>
      </Card>

      <Box sx={{ mt: 3, width: '100%' }}>
        <Button
          variant="text"
          fullWidth
          onClick={() => onButtonClick?.('addRole')}
          sx={{
            borderRadius: 16,
            fontFamily: 'Noto Sans KR',
            color: '#000',
            backgroundColor: '#f5f5f5',
            textTransform: 'none',
            py: 1,
          }}
        >
          Add role
        </Button>
      </Box>
    </Box>
  );
};

export default UserIndexCard;
