import { Container, CssBaseline, Stack, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import "./assets/fonts.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Index";
import Header from "./components/header/Index";

const Layout = ({ mode, setMode }) => {
  return (
    <Stack direction="row">
      <Sidebar />
      <Container>
        <Header mode={mode} setMode={setMode} />
        <Outlet />
      </Container>
    </Stack>
  );
};

function App() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Inter, sans-serif",
        },
        palette: {
          primary: {
            light: "rgb(198, 167, 254)",
            main: "rgb(145, 85, 253)",
          },
          secondary: {
            main: "rgb(138, 141, 147)",
          },
          success: {
            main: "rgb(86, 202, 0)",
          },
          error: {
            main: "rgb(255, 76, 81)",
          },
          warning: {
            main: "rgb(255, 180, 0)",
          },
          info: {
            main: "rgb(22, 177, 255)",
          },

          ...(mode === "light"
            ? {
                background: {
                  paper: "#fff",
                  default: "#f4f5fa",
                },
                text: {
                  primary: "rgba(58, 53, 65, 0.87)",
                  secondary: "rgba(58, 53, 65, 0.68)",
                  disabled: "#dddee3",
                },
              }
            : {
                background: {
                  paper: "rgb(49, 45, 75)",
                  default: "rgb(40, 36, 61)",
                },
                text: {
                  primary: "rgba(231, 227, 252, 0.87)",
                  secondary: "rgba(231, 227, 252, 0.68)",
                  disabled: "#444059",
                },
                action: {
                  active: "#fff",
                },
              }),
        },
      }),
    [mode]
  );

  const routes = {
    withSidebar: [
      { element: <>Dashboard</>, path: "/" },
      { element: <>Account Settings</>, path: "/account-settings" },
      { element: <>Typography</>, path: "/typography" },
      { element: <>Icons</>, path: "/icons" },
      { element: <>Cards</>, path: "/cards" },
      { element: <>Tables</>, path: "/tables" },
      { element: <>Form Layouts</>, path: "/form-layouts" },
    ],
    withoutSidebar: [
      { element: <>Login</>, path: "/login" },
      { element: <>Register</>, path: "/register" },
      { element: <>Error</>, path: "/error" },
    ],
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {/* Pages With Sidebar and Header */}
          <Route path="/" element={<Layout mode={mode} setMode={setMode} />}>
            {routes.withSidebar.map(({ path, element }) => (
              <Route path={path} element={element} key={path} />
            ))}
          </Route>
          {/* Pages Without Sidebar and Header */}
          {routes.withoutSidebar.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
