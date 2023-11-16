import { AttachMoney, BarChart, BusinessCenterOutlined, HelpOutline, MoreVert } from "@mui/icons-material";
import { Avatar, Badge, Box, Card, CardContent, CardHeader, Grid, IconButton, Stack, Typography } from "@mui/material";
import { BadgeText, SmallHeadding } from "../components/StyledTypography";

const SmCards = () => {
  const items = [
    {
      icon: <BarChart />,
      color: "success.main",
      title: "Total Profit",
      value: "$25.6k",
      profit: "+42%",
      time: "Weekly Profit",
    },
    {
      icon: <AttachMoney />,
      color: "secondary.main",
      title: "Refunds",
      value: "$78",
      profit: "-15%",
      time: "Past Month",
    },
    {
      icon: <BusinessCenterOutlined />,
      color: "primary.main",
      title: "New Project",
      value: "862",
      profit: "-18%",
      time: "Yearly Project",
    },
    {
      icon: <HelpOutline />,
      color: "warning.main",
      title: "Sales Queries",
      value: "15",
      profit: "-18%",
      time: "Last Week",
    },
  ];

  return (
    <Grid mt={0} container spacing={3}>
      {items.map(({ icon, color, title, value, profit, time }, i) => (
        <Grid pt={i < 2 && "0 !important"} item xs={6} key={title}>
          <Card sx={{ "& .MuiSvgIcon-root path": { color: "white" } }}>
            <CardContent>
              <CardHeader
                action={
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                }
                title={
                  <Avatar sx={{ backgroundColor: color, boxShadow: "0px 4px 8px -4px rgba(58, 53, 65, 0.42)" }}>
                    {icon}
                  </Avatar>
                }
              />
              <Stack mt={3} spacing={1}>
                <SmallHeadding>{title}</SmallHeadding>
                <Box display="flex">
                  <Typography variant="h6" mr={0.8}>
                    {value}
                  </Typography>
                  <BadgeText color={`${parseFloat(profit) > 0 ? "success" : "error"}.main`}>{profit}</BadgeText>
                </Box>
                <Typography fontSize=".8rem" color={`text.secondary`}>
                  {time}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SmCards;
