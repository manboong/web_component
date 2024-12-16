import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Link } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import ReviewsIcon from '@mui/icons-material/Reviews';
import HistoryIcon from '@mui/icons-material/History';
import '@fontsource/noto-sans-kr';

interface IndexCardProps {
    sections: string[];
}

const IndexCard: React.FC<IndexCardProps> = ({ sections }) => {
    return (
        <Card
            sx={{
                maxWidth: 1080,
                margin: 'auto',
                borderRadius: '16px',
                fontFamily: 'Noto Sans KR',
                backgroundColor: '#ffffff',
                padding: '1',
            }}
        >
            <CardContent>
                <List>
                    <ListItemButton component="a" href={`#${sections[0]}`}>
                        <ListItemIcon>
                            <InfoIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="기본 정보" sx={{ fontFamily: 'Noto Sans KR' }} />
                    </ListItemButton>

                    <ListItemButton component="a" href={`#${sections[1]}`}>
                        <ListItemIcon>
                            <ReviewsIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="종합 리뷰" sx={{ fontFamily: 'Noto Sans KR' }} />
                    </ListItemButton>

                    <ListItemButton component="a" href={`#${sections[2]}`}>
                        <ListItemIcon>
                            <SchoolIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="학력" sx={{ fontFamily: 'Noto Sans KR' }} />
                    </ListItemButton>

                    <ListItemButton component="a" href={`#${sections[3]}`}>
                        <ListItemIcon>
                            <LanguageIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="언어 능력" sx={{ fontFamily: 'Noto Sans KR' }} />
                    </ListItemButton>

                    <ListItemButton component="a" href={`#${sections[4]}`}>
                        <ListItemIcon>
                            <HistoryIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="상세 이력 및 리뷰" sx={{ fontFamily: 'Noto Sans KR' }} />
                    </ListItemButton>
                </List>
            </CardContent>
        </Card>
    );
};

export default IndexCard;
