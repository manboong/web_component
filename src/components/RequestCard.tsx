import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid2 as Grid,
} from "@mui/material";

export interface RequestCardProps {
  title: string;
  reward_price: number;
  currency: "USD" | "KRW" | "JPY" | "";
  address: string;
  start_date: Date;
  renderLogo: boolean;
  logo_image?: string;
  onClick: () => void;
}

const RequestCard = ({
  title,
  reward_price,
  currency,
  address,
  start_date,
  renderLogo,
  logo_image,
  onClick,
}: RequestCardProps) => (
  <Card
    sx={{
      maxWidth: "1080px",
      margin: "auto",
      borderRadius: "16px",
      fontFamily: "Noto Sans KR",
      backgroundColor: renderLogo ? "#ffffff" : "#f5f5f5",
      border: renderLogo ? "1px solid #d3d3d3" : "none",
      cursor: "pointer",
      display: "flex",
      boxShadow: "none",
      alignItems: "stretch",
    }}
    onClick={onClick}
  >
    {renderLogo && logo_image && (
      <CardMedia
        component="img"
        image={logo_image}
        alt="Logo"
        sx={{
          width: "114px",
          borderRadius: "16px",
          marginTop: "14px",
          marginBottom: "14px",
          marginRight: "14px",
          marginLeft: "14px",
          objectFit: "cover",
        }}
      />
    )}
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
        padding: 3,
        fontFamily: "Noto Sans KR",
        gap: "8px",
      }}
    >
      <Grid container spacing={1}>
        <Grid size={12}>
          <Typography variant="h5" component="div" sx={{ fontWeight: "bold", fontFamily: "Noto Sans KR" }}>
            {title}
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="body2" sx={{ fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)" }}>
            {start_date.toDateString()}
          </Typography>
        </Grid>
        <Grid size={10}>
          <Typography variant="body2" sx={{ fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)" }}>
            {address}
          </Typography>
        </Grid>
        <Grid size={2}>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", fontFamily: "Noto Sans KR", color: "rgba(0, 0, 0, 0.7)" }}
          >
            {reward_price} {currency}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default RequestCard;
