import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { BadgeText, CardHeadding } from "../components/StyledTypography";
import React from "react";
import styled from "@emotion/styled";

const CustomListItem = ({ avatar, title, subtitle, amount, color }) => (
  <ListItem disablePadding>
    <ListItemAvatar>
      <Avatar src={avatar} alt={title} sx={{ "& img": { objectFit: "contain", width: "70%" } }} />
    </ListItemAvatar>
    <ListItemText primary={<Typography fontWeight="600">{title}</Typography>} secondary={subtitle} />
    <BadgeText big bold color={color}>
      {amount}
    </BadgeText>
  </ListItem>
);

const CustomDivider = styled(Divider)(({ theme }) => ({
  margin: "1.25rem 0",
  [theme.breakpoints.up("md")]: { height: "auto", width: "1px", borderLeftWidth: "thin", margin: "0 1.25rem" },
}));

const Deposit = () => {
  const items = {
    deposit: [
      { avatar: "/images/logos/gumroad.png", title: "Gumroad Account", subtitle: "Sell UI Kit", amount: "+$4,650" },
      {
        avatar: "/images/logos/mastercard-label.png",
        title: "Mastercard",
        subtitle: "Wallet deposit",
        amount: "+$92,705",
      },
      { avatar: "/images/logos/stripe.png", title: "tripe Account", subtitle: "IOS Application", amount: "+$957" },
      {
        avatar: "/images/logos/american-bank.png",
        title: "American Bank",
        subtitle: "Bank Transfer",
        amount: "+$6,837",
      },
      { avatar: "/images/logos/citi-bank.png", title: "Bank Account", subtitle: "Wallet deposit", amount: "+$446" },
    ],
    withdraw: [
      { avatar: "/images/logos/google.png", title: "Google Adsense", subtitle: "View All", amount: "-$145" },
      { avatar: "/images/logos/github.png", title: "Github Enterprise", subtitle: "Paypal deposit", amount: "-$1870" },
      {
        avatar: "/images/logos/slack.png",
        title: "Upgrade Slack Plan",
        subtitle: "Security & compliance",
        amount: "-$450",
      },
      {
        avatar: "/images/logos/digital-ocean.png",
        title: "Digital Ocean",
        subtitle: "Debit card deposit",
        amount: "-$540",
      },
      { avatar: "/images/logos/aws.png", title: "AWS Account", subtitle: "Cloud Hosting", amount: "-$21" },
    ],
  };

  return (
    <Card>
      <CardContent sx={{ height: "100%" }}>
        <Stack sx={{ flexDirection: { md: "row" } }} height="100%">
          {[
            { listName: "deposit", title: "Deposit", color: "success.main" },
            { listName: "withdraw", title: "Withdraw", color: "error.main" },
          ].map(({ listName, title, color }, i) => (
            <React.Fragment key={listName}>
              {i > 0 && <CustomDivider flexItem /* sx={{ marginInline: "1.25rem" }} */ />}
              <List disablePadding sx={{ flexGrow: 1 }}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <CardHeadding>{title}</CardHeadding>
                  <BadgeText color="text.secondary">View All</BadgeText>
                </Box>
                {items[listName].map(({ avatar, title, subtitle, amount }, i) => (
                  <CustomListItem
                    avatar={avatar}
                    title={title}
                    subtitle={subtitle}
                    amount={amount}
                    color={color}
                    key={i}
                  />
                ))}
              </List>
            </React.Fragment>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Deposit;
