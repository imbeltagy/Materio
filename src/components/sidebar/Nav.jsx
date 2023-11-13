import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  CreditCardOffOutlined,
  CreditCardOutlined,
  ErrorOutlineOutlined,
  FormatSizeOutlined,
  HomeOutlined,
  LoginOutlined,
  ManageAccountsOutlined,
  PersonAddOutlined,
  SpokeOutlined,
  ViewInArOutlined,
  WindowOutlined,
} from "@mui/icons-material";
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

const RouteLink = ({ to, icon, text }) => {
  return (
    <NavLink to={to} style={{ color: "inherit", textDecoration: "none" }}>
      <ListItem sx={{ mt: 0.75 }} disablePadding>
        <ListItemButton
          sx={{
            borderRadius: "0 100rem 100rem 0",
            pt: ".35rem",
            pb: ".35rem",
            pl: "1.3rem",
          }}
        >
          <ListItemIcon sx={{ minWidth: "2rem" }}>{icon}</ListItemIcon>
          <ListItemText>{text}</ListItemText>
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
};

const Nav = () => {
  const items = [
    { type: "link", text: "Dashboard", icon: <HomeOutlined />, to: "/" },
    { type: "link", text: "Account Settings", icon: <ManageAccountsOutlined />, to: "/account-settings" },
    { type: "divider", text: "PAGES" },
    { type: "link", text: "Login", icon: <LoginOutlined />, to: "/login" },
    { type: "link", text: "Register", icon: <PersonAddOutlined />, to: "/register" },
    { type: "link", text: "Error", icon: <ErrorOutlineOutlined />, to: "/error" },
    { type: "divider", text: "USER INTERFACE" },
    { type: "link", text: "Typography", icon: <FormatSizeOutlined />, to: "/typography" },
    { type: "link", text: "Icons", icon: <SpokeOutlined />, to: "/icons" },
    { type: "link", text: "Cards", icon: <CreditCardOutlined />, to: "/cards" },
    { type: "link", text: "Tables", icon: <WindowOutlined />, to: "/tables" },
    { type: "link", text: "Form Layouts", icon: <ViewInArOutlined />, to: "/form-layouts" },
  ];

  const StyledList = styled(List)(({ theme }) => ({
    "& path": { fill: theme.palette.text.primary },
    "& .active .MuiListItemButton-root": {
      backgroundImage: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
      color: theme.palette.primary.contrastText,
      "& path": { fill: theme.palette.primary.contrastText },
      boxShadow: "0px 4px 8px -4px rgba(58, 53, 65, 0.42)",
    },
  }));

  const StyledDivider = styled(Divider)(({ theme }) => ({
    marginTop: "1.85rem",
    marginBottom: "1rem",
    fontSize: ".75rem",
    fontWeight: 500,
    color: theme.palette.divider,
    "&::before, &::after": { opacity: 0.4 },
  }));

  return (
    <StyledList>
      {items.map((item, i) =>
        item.type === "link" ? (
          <RouteLink text={item.text} to={item.to} icon={item.icon} key={i} />
        ) : (
          <StyledDivider textAlign="left" key={i}>
            {item.text}
          </StyledDivider>
        )
      )}
    </StyledList>
  );
};

export default Nav;
