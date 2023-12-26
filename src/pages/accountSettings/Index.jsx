import { Box, Card, CardContent, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import SecurityPanel from "./panels/SecurityPanel";
import InfoPanel from "./panels/InfoPanel";
import { useState } from "react";
import AccountPanel from "./panels/accountPanel/Index";
import { InfoOutlined, LockOpenOutlined, Person2Outlined } from "@mui/icons-material";

function a11yProps(tabName) {
  const theme = useTheme();
  const mdUP = useMediaQuery(theme.breakpoints.up("md"));

  return {
    label: mdUP ? tabName : " ",
    id: `tab-${tabName}`,
    "aria-controls": `tabpanel-${tabName}`,
  };
}

const panels = [<AccountPanel />, <SecurityPanel />, <InfoPanel />];

const AccountSettings = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main>
      <Card>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="settings tabss">
            <Tab icon={<Person2Outlined />} iconPosition="start" sx={{ minHeight: "3rem" }} {...a11yProps("Account")} />
            <Tab
              icon={<LockOpenOutlined />}
              iconPosition="start"
              sx={{ minHeight: "3rem" }}
              {...a11yProps("Security")}
            />
            <Tab icon={<InfoOutlined />} iconPosition="start" sx={{ minHeight: "3rem" }} {...a11yProps("Info")} />
          </Tabs>
        </Box>

        {/* Pannels */}
        <CardContent>{panels[value]}</CardContent>
      </Card>
    </main>
  );
};

export default AccountSettings;
