import styled from "@emotion/styled";
import {
  DarkModeOutlined,
  Menu,
  MenuOutlined,
  NotificationsOutlined,
  Search,
  WbSunnyOutlined,
} from "@mui/icons-material";
import { Avatar, Badge, IconButton, InputBase, Stack, Toolbar } from "@mui/material";
import React, { useCallback } from "react";

const Header = ({ setMode, setSidebarOpen }) => {
  const SearchBar = styled(Stack)(({ theme }) => ({
    gap: ".5rem",
    borderRadius: "10rem",
    border: `2px solid ${theme.palette.text.disabled}`,
    "&:hover": { borderColor: theme.palette.text.secondary },
    "& path": { fill: theme.palette.text.secondary },
    "&:has(*:focus)": { borderColor: theme.palette.primary.main },
  }));

  const StyledIconButton = styled(IconButton)(({ theme }) => ({ "& path": { fill: theme.palette.text.primary } }));

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-dot": {
      top: "auto",
      bottom: "-5%",
      right: "14%",
      outline: `2px solid ${theme.palette.background.default}`,
    },
  }));

  const LightIcon = styled(WbSunnyOutlined)(({ theme }) => ({ display: theme.palette.mode === "light" && "none" }));
  const DarkIcon = styled(DarkModeOutlined)(({ theme }) => ({ display: theme.palette.mode === "dark" && "none" }));

  const handleChangeMode = useCallback(() => {
    setTimeout(() => setMode((prev) => (prev === "light" ? "dark" : "light")), 400);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  return (
    <Toolbar sx={{ justifyContent: "space-between", paddingInline: "0 !important" }}>
      <Stack direction="row" alignItems="center">
        {/* Open SideBar */}
        <IconButton edge="start" onClick={handleSidebarOpen} sx={{ display: { lg: "none" }, marginRight: "1rem" }}>
          <Menu />
        </IconButton>

        {/* Search Bar */}
        <SearchBar direction="row" alignItems="center" p=".15rem .8rem">
          <Search sx={{ width: "1.4rem" }} />
          <InputBase />
        </SearchBar>
      </Stack>

      {/* Icons */}
      <Stack direction="row" alignItems="center">
        {/* Mode */}
        <StyledIconButton onClick={handleChangeMode}>
          <LightIcon />
          <DarkIcon />
        </StyledIconButton>
        {/* Notification */}
        <StyledIconButton>
          <NotificationsOutlined />
        </StyledIconButton>
        {/* Avatar */}
        <IconButton>
          <StyledBadge variant="dot" color="success">
            <Avatar src="/images/avatars/1.png" alt="User Avatar" />
          </StyledBadge>
        </IconButton>
      </Stack>
    </Toolbar>
  );
};

export default Header;
