import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import CustomCardHeader from "../components/CustomCardHeader";
import Chart from "react-apexcharts";
import { useTheme } from "@emotion/react";
import { CardSubtitle } from "../components/StyledTypography";

const WeeklyOverview = () => {
  const theme = useTheme();

  const chart = {
    series: [
      {
        name: "Sales",
        data: [37, 57, 45, 75, 57, 45, 65],
      },
    ],
    options: {
      theme: { mode: theme.palette.mode },
      chart: {
        type: "bar",
        height: 350,
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: false,
          columnWidth: 13,
          borderRadius: 6.5,
          endingShape: "rounded",
          opacity: 0,
        },
      },
      colors: [
        function ({ value }) {
          if (value >= 70) {
            return theme.palette.primary.main;
          } else {
            return theme.palette.mode == "light" ? "rgba(244, 245, 250, 0.85)" : "rgba(40, 36, 61, 0.85)";
          }
        },
      ],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"],
        labels: {
          show: false,
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        tickAmount: 4,
        labels: {
          formatter: function (value) {
            return value + "k";
          },
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "k";
          },
        },
      },
      legend: { show: false },
      grid: {
        strokeDashArray: 6,
      },
    },
  };

  return (
    <Card>
      <CardContent
        // Disable Bars Hover Effect && Tooltip backgroundColor
        sx={{
          "& .apexcharts-xcrosshairs": { display: "none" },
          "& .apexcharts-bar-area": { filter: "none" },
        }}
      >
        <CustomCardHeader action title="Weekly Overview" />
        <Chart options={chart.options} series={chart.series} type="bar" height={205} style={{ marginLeft: "-15px" }} />

        {/* text */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="h6" component="span" m=".8rem 0" fontSize="1.5rem" fontWeight="medium">
            45%
          </Typography>
          <CardSubtitle>Your sales performance is 45% 😎 better compared to last month</CardSubtitle>
        </Stack>
        <Button variant="contained" sx={{ mt: 3 }} fullWidth>
          DETAILS
        </Button>
      </CardContent>
    </Card>
  );
};

export default WeeklyOverview;
