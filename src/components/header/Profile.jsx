import styled from "@emotion/styled";
import {
  AttachMoneyOutlined,
  ChatBubbleOutlineOutlined,
  EmailOutlined,
  ExitToAppOutlined,
  HelpOutlineOutlined,
  PersonOutlineOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useCallback, useState } from "react";

// Styled Components
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-dot": {
    top: "auto",
    bottom: "-5%",
    right: "14%",
    outline: `2px solid ${theme.palette.background.default}`,
  },
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  marginBottom: ".5rem",
  color: theme.palette.divider,
  opacity: 0.4,
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  "& path": { fill: theme.palette.text.secondary },
}));

const ListHeaderText = styled(ListItemText)({
  "& span": { fontWeight: 600, letterSpacing: ".3px" },
  "& p": { fontWeight: 300, letterSpacing: ".3px", fontSize: ".8rem", opacity: 0.8 },
});

// Components
const ProfilePic = () => (
  <StyledBadge variant="dot" color="success">
    <Avatar src="/images/avatars/1.png" alt="User Avatar" />
  </StyledBadge>
);

const Profile = () => {
  const menuItems = [
    { type: "header", icon: <ProfilePic />, primary: "John Doe", secondary: "Admin" },
    { type: "divider" },
    { type: "item", icon: <PersonOutlineOutlined />, text: "Profile" },
    { type: "item", icon: <EmailOutlined />, text: "Inbox" },
    { type: "item", icon: <ChatBubbleOutlineOutlined />, text: "Chat" },
    { type: "divider" },
    { type: "item", icon: <SettingsOutlined />, text: "Settings" },
    { type: "item", icon: <AttachMoneyOutlined />, text: "Pricing" },
    { type: "item", icon: <HelpOutlineOutlined />, text: "FAQ" },
    { type: "divider" },
    { type: "item", icon: <ExitToAppOutlined />, text: "Logout" },
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? "profile-settings-menu" : undefined;

  return (
    <>
      <IconButton
        id="profile-settings-button"
        aria-label="profile settings menu"
        aria-controls={open ? "profile-settings-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : "undefined"}
        onClick={handleClick}
        sx={{ padding: 0, marginLeft: "6px" }}
      >
        <ProfilePic />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "profile-settings-button",
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
          "& .MuiPaper-root": { backgroundImage: "none" },
          "& .MuiList-root": { minWidth: "14rem" },
        }}
      >
        {menuItems.map((e, i) =>
          e.type === "header" ? (
            <ListItem key={i} sx={{ marginBottom: ".25rem" }}>
              <ListItemIcon>{e.icon}</ListItemIcon>
              <ListHeaderText primary={e.primary} secondary={e.secondary} />
            </ListItem>
          ) : e.type === "item" ? (
            <MenuItem onClick={handleClose} key={i} sx={{ padding: ".5rem 1rem" }}>
              <StyledListItemIcon>{e.icon}</StyledListItemIcon>
              <ListItemText>{e.text}</ListItemText>
            </MenuItem>
          ) : (
            e.type === "divider" && <StyledDivider key={i} />
          )
        )}
      </Menu>
    </>
  );
};

export default Profile;
