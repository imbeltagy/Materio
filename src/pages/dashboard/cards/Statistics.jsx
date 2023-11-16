import {
  AttachMoneyOutlined,
  DevicesOutlined,
  MoreVert,
  PersonOutlineOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { CardHeadding, CardSubtitle } from "../components/StyledTypography";
import { useTheme } from "@emotion/react";
import CustomCardHeader from "../components/CustomCardHeader";

const Statistics = () => {
  const palette = useTheme().palette;

  const items = [
    { color: "primary", icon: <TrendingUpOutlined />, caption: "Sales", count: "245k" },
    { color: "success", icon: <PersonOutlineOutlined />, caption: "Customers", count: "12.5k" },
    { color: "warning", icon: <DevicesOutlined />, caption: "Products", count: "1.54k" },
    { color: "info", icon: <AttachMoneyOutlined />, caption: "Revenue  ", count: "$88k" },
  ];
  return (
    <Card>
      <CustomCardHeader
        action
        title="Statistics Card"
        subheader={
          <>
            <Typography variant="inherit" component="span" fontWeight="600" color="text.primary">
              Total 48.5% growth
            </Typography>{" "}
            😎 this month
          </>
        }
      />
      <CardContent sx={{ paddingTop: "0 !important", paddingBottom: ".7rem !important" }}>
        <Stack spacing={1} sx={{ flexDirection: { sm: "row" } }}>
          {items.map(({ icon, color, caption, count }) => (
            <ListItem disablePadding key={caption}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{
                    width: "2.7rem",
                    height: "2.7rem",
                    bgcolor: palette[color].main,
                    boxShadow: "0px 4px 8px -4px rgba(58, 53, 65, 0.42)",
                    "& svg": { fontSize: "1.8rem" },
                  }}
                  alt="sales"
                >
                  {icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="caption" color="text.secondary">
                  {caption}
                </Typography>
                <Typography variant="h6" fontSize="1.125rem">
                  {count}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Statistics;
