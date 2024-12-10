import React from "react";
import {
  Box,
  Card,
  Typography,
  Divider,
} from "@mui/material";
import RequestCard, { RequestCardProps } from "./RequestCard";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

export interface CorporationReviewProps {
  consumer_id: number;
  student_id: number;
  corp_id: number;
  request_id: number;
  request_url: string;
  review_text?: string;
  prep_requirement?: string;
  work_atmosphere?: string;
  sense_of_achive: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface ReviewOfCorpProps extends CorporationReviewProps {
  request_card: RequestCardProps;
}

// 별점 렌더링 함수
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating); // 정수 부분
  const halfStar = rating % 1 >= 0.5; // 반별 여부
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // 빈 별 개수

  return (
    <>
      {Array.from({ length: fullStars }, (_, i) => (
        <StarIcon key={`full-${i}`} color="primary" />
      ))}
      {halfStar && <StarHalfIcon color="primary" />}
      {Array.from({ length: emptyStars }, (_, i) => (
        <StarBorderIcon key={`empty-${i}`} color="primary" />
      ))}
    </>
  );
};

const ReviewOfCorp: React.FC<ReviewOfCorpProps> = ({
  request_card,
  review_text,
  prep_requirement,
  work_atmosphere,
  sense_of_achive,
}) => {
  return (
    <Box
      sx={{
        width: { xs: "300px", sm: "480px" },
        margin: "auto",
      }}
    >
      <Card sx={{ padding: 2 }}>
        {/* Request Card */}
        <RequestCard {...request_card} />

        {/* Divider */}
        <Divider sx={{ marginY: 2 }}>리뷰</Divider>

        {/* Review Text */}
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          {review_text}
        </Typography>

        {/* Divider */}
        <Divider sx={{ marginY: 2 }}>준비물</Divider>

        {/* Preparation Requirement */}
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          {prep_requirement}
        </Typography>

        {/* Divider */}
        <Divider sx={{ marginY: 2 }}>분위기</Divider>

        {/* Work Atmosphere */}
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          {work_atmosphere}
        </Typography>

        {/* Divider */}
        <Divider sx={{ marginY: 2 }}>총평</Divider>

        {/* Sense of Achievement */}
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          {renderStars(sense_of_achive / 2)} {/* 0.5~5.0 스케일로 변환 */}
        </Box>
      </Card>
    </Box>
  );
};

export default ReviewOfCorp;
