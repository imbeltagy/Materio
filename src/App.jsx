import { Container, CssBaseline, Stack, ThemeProvider, createTheme } from "@mui/material";
import "./assets/fonts.css";
import Sidebar from "./components/sidebar/Index";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/header/Index";
import { useState } from "react";

const Layout = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Sidebar />
      <Container>
        <Header />
        <Outlet />
      </Container>
    </Stack>
  );
};

function App() {
  const [mode, setMode] = useState("dark");

  const theme = useMemo(
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
              },
            }),
      },
    }),
    [mode]
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {/* Pages With Sidebar and Header */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<>Dashboard</>} />
            <Route path="messages" element={<>Messages</>} />
          </Route>
          {/* Pages Without Sidebar and Header */}
          <Route path="signin" element={<>signin</>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
