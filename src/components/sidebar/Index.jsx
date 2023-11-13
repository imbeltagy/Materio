import { Box, Drawer, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
import Nav from "./Nav";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Content = () => {
  const scrollShadow = useRef();

  const ScrollShadow = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "0",
    zIndex: 120,
    "&::before": {
      content: '""',
      display: "block",
      width: "calc(100% - 20px)",
      transition: "opacity .3s, height .3s",
      opacity: 0,
      height: 0,
      backgroundImage:
        theme.palette.mode === "light"
          ? "linear-gradient(#F4F5FA 40%,rgba(244, 245, 250, 0.1) 95%,rgba(244, 245, 250, 0.05));"
          : "linear-gradient(rgb(40, 36, 61) 40%, rgba(40, 36, 61, 0.1) 95%, rgba(40, 36, 61, 0.05))",
    },
    "&.show::before": {
      opacity: 1,
      height: "4rem",
    },
  }));

  return (
    <>
      {/* Brand */}
      <Stack direction="row" spacing={1.5} p="1rem 1.3rem">
        <img src="/images/apple-touch-icon.png" alt="Materio Logo" width="33" height="33" />
        <Typography fontWeight="600" letterSpacing=".5px" variant="h6" component="span">
          MATERIO
        </Typography>
      </Stack>
      <ScrollShadow ref={scrollShadow}></ScrollShadow>
      {/* List */}
      <Stack
        minWidth="16rem"
        pr={1.5}
        overflow="auto"
        onScroll={(e) => {
          e.target.scrollTop > 0
            ? scrollShadow.current.classList.add("show")
            : scrollShadow.current.classList.remove("show");
        }}
        sx={{
          position: "relative",
        }}
      >
        <Nav />
      </Stack>
    </>
  );
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const { breakpoints } = useTheme();
  const isMdScreen = useMediaQuery(breakpoints.up("lg"));

  if (isMdScreen) {
    return (
      <Stack height="100svh">
        <Content />
      </Stack>
    );
  } else {
    const StyledDrawer = styled(Drawer)(({ theme }) => ({ backgroundColor: theme.palette.background.default }));

    return (
      <StyledDrawer anchor="left" open={sidebarOpen} onClose={handleSidebarClose}>
        <Content />
      </StyledDrawer>
    );
  }
};

export default Sidebar;
