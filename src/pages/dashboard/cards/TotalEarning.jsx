import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import CustomCardHeader from "../components/CustomCardHeader";
import { ArrowDropUp } from "@mui/icons-material";
import { BadgeText, CardSubtitle, SmallHeadding } from "../components/StyledTypography";

const TotalEarning = () => {
  const items = [
    {
      avatar: "/images/cards/logo-zipcar.png",
      title: "Zipcar",
      subtitle: "Vuejs, React & HTML",
      value: "$24,895.65",
      progress: 80,
      color: "primary",
    },
    {
      avatar: "/images/cards/logo-bitbank.png",
      title: "Bitbank",
      subtitle: "Sketch, Figma & XD",
      value: "$8,650.20",
      progress: 50,
      color: "info",
    },
    {
      avatar: "/images/cards/logo-aviato.png",
      title: "Aviato",
      subtitle: "HTML & Angular",
      value: "$1,245.80",
      progress: 20,
      color: "secondary",
    },
  ];

  return (
    <Card>
      <CardContent>
        <CustomCardHeader title="Total Earning" action />
        <Box mt={2.5} mb={0.5} display="flex" alignItems="center">
          <Typography variant="h4" fontWeight="600">
            $24,895
          </Typography>
          <ArrowDropUp color="success" />
          <BadgeText big bold color="success.main">
            10%
          </BadgeText>
        </Box>
        <CardSubtitle>Compared to $84,325 last year</CardSubtitle>

        {/* Progresses */}
        <List sx={{ marginTop: 4.5 }} disablePadding>
          {items.map(({ avatar, title, subtitle, value, progress, color }) => (
            <ListItem sx={{ marginTop: 2.5 }} disablePadding key={title}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "secondary.light" }} variant="rounded">
                  <img src={avatar} alt={title} width="50%" height="auto" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="inherit" fontWeight="600" fontSize=".9rem">
                    {title}
                  </Typography>
                }
                secondary={
                  <Typography variant="inherit" color="text.secondary" fontSize=".8rem">
                    {subtitle}
                  </Typography>
                }
              />
              <Box>
                <SmallHeadding mb={1}>{value}</SmallHeadding>
                <LinearProgress variant="determinate" color={color} value={progress} />
              </Box>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TotalEarning;
