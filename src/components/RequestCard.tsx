import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

export interface RequestCardProps {
  title: string;
  subtitle: string;
  reward_price: number;
  currency: "USD" | "KRW" | "JPY" | "";
  address: string;
  start_date: Date;
  logo_image?: string;
  link: string;
}

const RequestCard = ({
  title,
  subtitle,
  reward_price,
  currency,
  address,
  start_date,
  logo_image,
  link,
}: RequestCardProps) => (
    <Card
    component={Link}
    to={link}
    sx={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      textDecoration: "none",
      cursor: "pointer",
      padding: "10px",
      overflow: "hidden",
      height: { xs: "100px", sm: "120px" }, 
      width: "100%", 
    }}
  >
    {/* 로고 */}
    <Avatar
      alt={title}
      src={logo_image}
      sx={{
        width: 50,
        height: 50,
        marginRight: "15px",
        display: { xs: "none", sm: "block" }, 
      }}
    >
      {title.charAt(0)}
    </Avatar>

    <CardContent
      sx={{
        flex: 1,
        padding: 0,
        overflow: "hidden",
      }}
    >
      {/* 제목 */}
      <Box
        sx={{
          display: "block",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#2c3e50",
          }}
        >
          {title}
        </Typography>
      </Box>
      {/* 부제목 */}
      <Box
        sx={{
          display: "block",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            marginBottom: "6px",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
      {/* 주소 */}
      <Box
        sx={{
          display: "block",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Typography
          variant="caption"
          color="textSecondary"
          sx={{
            fontSize: "0.8rem",
          }}
        >
          {address}
        </Typography>
      </Box>
    </CardContent>

    {/* 리워드와 날짜 */}
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end",
        height: "100%",
      }}
    >
      <Typography
        variant="caption"
        color="textSecondary"
        sx={{
          fontSize: "0.7rem",
          marginBottom: "auto",
        }}
      >
        {start_date.toDateString()}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bold",
          color: "#e67e22",
          fontSize: "0.8rem",
        }}
      >
        {reward_price} {currency}
      </Typography>
    </Box>
  </Card>
);

export default RequestCard;
