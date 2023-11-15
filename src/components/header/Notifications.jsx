import styled from "@emotion/styled";
import { NotificationsOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

const StyledIconButton = styled(IconButton)(({ theme }) => ({ "& path": { fill: theme.palette.text.primary } }));

const StyledMenuItem = styled(MenuItem)({
  paddingTop: ".75rem",
  paddingBottom: ".75rem",
});

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: "0 !important",
  color: theme.palette.divider,
  opacity: 0.4,
}));

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Fake API
  useEffect(() => {
    setTimeout(() => {
      const ApiNots = [
        {
          avatar: "/images/avatars/4.png",
          alt: "Imy",
          title: "Congratulation Flora! 🎉",
          brief: "Won the monthly best seller badge",
          date: "Today",
        },
        { avatar: "", alt: "VU", title: "New user registered.", brief: "5 hours ago", date: "Yesterday" },
        {
          avatar: "/images/avatars/5.png",
          alt: "Ali",
          title: "New message received 👋🏻",
          brief: "You have 10 unread messages",
          date: "11 Aug",
        },
        {
          avatar: "/images/misc/paypal.png",
          alt: "Paypal",
          title: "Paypal",
          brief: "Received Payment",
          date: "25 May",
        },
        {
          avatar: "/images/avatars/3.png",
          alt: "Yaeesr",
          title: "Revised Order 📦",
          brief: "New order revised from john",
          date: "19 Mar",
        },
        {
          avatar: "/images/misc/chart.png",
          alt: "Chart",
          title: "Finance report has been generated",
          brief: "25 hrs ago",
          date: "27 Dec",
        },
      ];
      setNotifications(ApiNots);
    }, 500);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? "notifications-menu" : undefined;

  return (
    <>
      <StyledIconButton
        id="notifications-menu-button"
        aria-label="Notifications menu"
        aria-controls={open ? "notifications-menu-button" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : "undefined"}
        onClick={handleClick}
      >
        <NotificationsOutlined />
      </StyledIconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "notifications-menu-button",
        }}
        // Position
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        // Style
        sx={{
          marginTop: "1rem",
          "& .MuiPaper-root": { backgroundImage: "none", width: "24rem" },
          "& .MuiList-root": { padding: 0 },
        }}
      >
        {/* Header */}
        <StyledMenuItem disableRipple>
          <ListItemText primary="Notifications" sx={{ "& span": { fontWeight: 600 } }} />
          <ListItemSecondaryAction>
            <Chip color="primary" label="8 New" size="small" />
          </ListItemSecondaryAction>
        </StyledMenuItem>
        <StyledDivider />

        {/* Items */}
        <Box overflow="auto" maxHeight="21.58rem" height="auto">
          {notifications.map(({ avatar, alt, title, brief, date }, i) => (
            <React.Fragment key={i}>
              <StyledMenuItem onClick={handleClose}>
                <ListItemAvatar>
                  <Avatar src={avatar} alt={alt}>
                    {alt}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={title}
                  secondary={brief}
                  sx={{ "& span, & p": { textOverflow: "ellipsis", width: "80%", overflow: "hidden" } }}
                />
                <ListItemSecondaryAction>
                  <Typography variant="caption" color="secondary">
                    {date}
                  </Typography>
                </ListItemSecondaryAction>
              </StyledMenuItem>
              <StyledDivider />
            </React.Fragment>
          ))}
        </Box>

        {/* Button */}
        <StyledMenuItem disableRipple>
          <Button variant="contained" fullWidth onClick={handleClose}>
            READ ALL NOTIFICATIONS
          </Button>
        </StyledMenuItem>
      </Menu>
    </>
  );
};

export default Notifications;
