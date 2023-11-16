import {
  Avatar,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import CustomCardHeader from "../components/CustomCardHeader";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { BadgeText } from "../components/StyledTypography";

const SalesByCounties = () => {
  const items = [
    {
      amount: "$8,656k",
      profit: "25.8%",
      country: "USA",
      color: "success.main",
      sucess: true,
      sales: "894k",
    },
    {
      amount: "$2,415k",
      profit: "6.2%",
      country: "UK",
      color: "error.main",
      sucess: false,
      sales: "645k",
    },
    {
      amount: "$865k",
      profit: "12.4%",
      country: "India",
      color: "warning.main",
      sucess: true,
      sales: "148k",
    },
    {
      amount: "$745k",
      profit: "11.9%",
      country: "Japan",
      color: "secondary.main",
      sucess: false,
      sales: "86k",
    },
    {
      amount: "$45k",
      profit: "16.2%",
      country: "Korea",
      color: "error.main",
      sucess: true,
      sales: "42k",
    },
  ];

  return (
    <Card>
      <CardContent>
        <CustomCardHeader title="Sales by Countries" action />
        <List disablePadding>
          {items.map(({ amount, profit, country, color, sucess, sales }, i) => (
            <ListItem disablePadding key={i}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: color, color: "white" }}>
                  <Typography variant="inherit" fontSize="1rem">
                    {country[0] + country[1].toUpperCase()}
                  </Typography>
                </Avatar>
              </ListItemAvatar>
              {/* Amount */}
              <ListItemText
                primary={
                  <Box display="flex" alignItems="center">
                    <Typography fontWeight="600">{amount}</Typography>
                    {sucess ? <KeyboardArrowUp color="success" /> : <KeyboardArrowDown color="error" />}
                    <BadgeText bold color={sucess ? "success.main" : "error.main"}>
                      {profit}
                    </BadgeText>
                  </Box>
                }
                secondary={country}
              />
              {/* Sales */}
              <ListItemText
                sx={{ textAlign: "right" }}
                primary={<Typography fontWeight="600">{sales}</Typography>}
                secondary="Sales"
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default SalesByCounties;
