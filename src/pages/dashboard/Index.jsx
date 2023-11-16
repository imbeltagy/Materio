import { Grid } from "@mui/material";
import "./style.css";
import Statistics from "./cards/Statistics";
import Sales from "./cards/Sales";
import WeeklyOverview from "./cards/WeeklyOverview";
import TotalEarning from "./cards/TotalEarning";
import SmCards from "./cards/SmCards";
import SalesByCounties from "./cards/SalesByCounties";
import Deposit from "./cards/Deposit";
import TableCard from "./cards/Table";

const Dashboard = () => {
  return (
    <>
      {/* Item 1 ===================== */}
      <Grid item xs={12} md={4}>
        <Sales />
      </Grid>
      {/* Item 2 ===================== */}
      <Grid item xs={12} md={8}>
        <Statistics />
      </Grid>
      {/* Item 3 ===================== */}
      <Grid item xs={12} md={6} lg={4}>
        <WeeklyOverview />
      </Grid>
      {/* Item 4 ===================== */}
      <Grid item xs={12} md={6} lg={4}>
        <TotalEarning />
      </Grid>
      {/* Item 5 ===================== */}
      <Grid item xs={12} md={6} lg={4}>
        <SmCards />
      </Grid>
      {/* Item 6 ===================== */}
      <Grid item xs={12} md={6} lg={4}>
        <SalesByCounties />
      </Grid>
      {/* Item 7 ===================== */}
      <Grid item xs={12} lg={8}>
        <Deposit />
      </Grid>
      {/* Table ===================== */}
      <Grid item xs={12}>
        <TableCard />
      </Grid>
    </>
  );
};

export default Dashboard;
