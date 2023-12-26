import { Box, Drawer, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useCallback, useRef } from "react";
import Nav from "./Nav";
import styled from "@emotion/styled";
import Brand from "/src/common/Brand";

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

const Content = () => {
  const scrollShadowRef = useRef();

  return (
    <>
      <Brand />

      <ScrollShadow ref={scrollShadowRef}></ScrollShadow>
      {/* List */}
      <Stack
        minWidth="16rem"
        pr={1.5}
        overflow="auto"
        onScroll={(e) => {
          e.target.scrollTop > 0
            ? scrollShadowRef.current.classList.add("show")
            : scrollShadowRef.current.classList.remove("show");
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
      <Stack position="sticky" top="0" height="100svh">
        <Content />
      </Stack>
    );
  } else {
    return (
      <Drawer
        sx={{ "& .MuiPaper-root": { backgroundColor: "background.default" } }}
        anchor="left"
        open={sidebarOpen}
        onClose={handleSidebarClose}
      >
        <Content />
      </Drawer>
    );
  }
};

export default Sidebar;
