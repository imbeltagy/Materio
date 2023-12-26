import { Box, Container, CssBaseline, Grid, Stack, ThemeProvider, createTheme } from "@mui/material";
import { Suspense, lazy, useMemo, useState } from "react";
import "./scrollbar.css";
import "./global.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Index";
import Header from "./components/header/Index";
const Dashboard = lazy(() => import("./pages/dashboard/Index"));
const AccountSettings = lazy(() => import("./pages/accountSettings/Index"));

const Layout = ({ setMode, sidebarOpen, setSidebarOpen }) => {
  return (
    <Stack direction="row" position="relative">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Container maxWidth="xl">
        <Header setMode={setMode} setSidebarOpen={setSidebarOpen} />
        <Box marginBlock={3}>
          <Outlet />
        </Box>
      </Container>
    </Stack>
  );
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [mode, setMode] = useState("light");
  const theme = useMemo(() => {
    const modifiedTheme = createTheme({
      typography: {
        fontFamily: "Inter, sans-serif",
      },
      palette: {
        mode,
        primary: {
          light: "rgb(198, 167, 254)",
          main: "rgb(145, 85, 253)",
        },
        secondary: {
          light: "rgba(58, 53, 65, 0.1)",
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
                light: "rgba(58, 53, 65, 0.38)",
              },
              divider: "rgba(58, 53, 65, 0.1)",
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
                light: "#605c75",
              },
              action: {
                active: "#fff",
                hover: "rgba(231, 227, 252, 0.04)",
              },
              divider: "#605c7560",
            }),
      },
      spacing: (i) => `${i * 0.5}rem`,
    });
    modifiedTheme.shadows[1] = "0px 2px 10px 0px rgba(58, 53, 65, 0.1)";
    return modifiedTheme;
  }, [mode]);

  const routes = {
    withSidebar: [
      { element: <Dashboard />, path: "/" },
      { element: <AccountSettings />, path: "/account-settings" },
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
          <Route
            path="/"
            element={<Layout mode={mode} setMode={setMode} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
          >
            {routes.withSidebar.map(({ path, element }) => (
              <Route path={path} element={<Suspense>{element}</Suspense>} key={path} />
            ))}
          </Route>
          {/* Pages Without Sidebar and Header */}
          {routes.withoutSidebar.map(({ path, element }) => (
            <Route path={path} element={<Suspense fallback="Loading...">{element}</Suspense>} key={path} />
          ))}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
