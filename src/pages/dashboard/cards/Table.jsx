import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  Typography,
  Box,
  Chip,
} from "@mui/material";

const data = [
  {
    NAME: "Sally Quinn",
    POSITION: "Human Resources Assistant",
    EMAIL: "eebsworth2m@sbwire.com",
    DATE: "09/27/2018",
    SALARY: "$19586.23",
    AGE: 27,
    STATUS: "current",
  },
  {
    NAME: "Margaret Bowers",
    POSITION: "Nuclear Power Engineer",
    EMAIL: "kocrevy0@thetimes.co.uk",
    DATE: "09/23/2016",
    SALARY: "$23896.35",
    AGE: 61,
    STATUS: "professional",
  },
  {
    NAME: "Minnie Roy",
    POSITION: "Environmental Specialist",
    EMAIL: "ediehn6@163.com",
    DATE: "10/15/2017",
    SALARY: "$18991.67",
    AGE: 59,
    STATUS: "rejected",
  },
  {
    NAME: "Ralph Leonard",
    POSITION: "Sales Representative",
    EMAIL: "dfalloona@ifeng.com",
    DATE: "06/12/2018",
    SALARY: "$19252.12",
    AGE: 30,
    STATUS: "resigned",
  },
  {
    NAME: "Annie Martin",
    POSITION: "Operator",
    EMAIL: "sganderton2@tuttocitta.it",
    DATE: "03/24/2018",
    SALARY: "$13076.28",
    AGE: 66,
    STATUS: "applied",
  },
  {
    NAME: "Adeline Day",
    POSITION: "Senior Cost Accountant",
    EMAIL: "hnisius4@gnu.org",
    DATE: "08/25/2017",
    SALARY: "$10909.52",
    AGE: 33,
    STATUS: "professional",
  },
  {
    NAME: "Lora Jackson",
    POSITION: "Geologist",
    EMAIL: "ghoneywood5@narod.ru",
    DATE: "06/01/2017",
    SALARY: "$17803.80",
    AGE: 61,
    STATUS: "current",
  },
  {
    NAME: "Rodney Sharp",
    EMAIL: "dcrossman3@google.co.jp",
    DATE: "12/03/2017",
    SALARY: "$12336.17",
    AGE: 22,
    STATUS: "professional",
    POSITION: "cost Accountant",
  },
];

const colors = {
  current: "primary",
  professional: "success",
  rejected: "error",
  resigned: "warning",
  applied: "info",
};

const TableCard = () => {
  return (
    <Card>
      <TableContainer
        component={Paper}
        sx={{
          "& .MuiTableRow-root:hover": {
            backgroundColor: "action.hover",
            cursor: "pointer",
          },
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {["NAME", "EMAIL", "DATE", "SALARY", "AGE", "STATUS"].map((title) => (
                <TableCell key={title}>
                  <Typography fontSize=".75rem" fontWeight="600" variant="inherit">
                    {title}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ "& .MuiTableCell-root": { padding: ".9rem 1rem" } }}>
            {data.map(({ NAME, POSITION, STATUS, ...props }, i) => (
              <TableRow key={i}>
                {/* NAME */}
                <TableCell sx={{ minWidth: "13rem" }}>
                  <Box m="-.5rem 0">
                    <Typography fontSize=".85rem" fontWeight="500">
                      {NAME}
                    </Typography>
                    <Typography fontSize=".8rem" fontWeight="400" color="text.secondary">
                      {POSITION}
                    </Typography>
                  </Box>
                </TableCell>

                {/* OTHER PROPS */}
                {Object.keys(props).map((prop) => (
                  <TableCell key={prop}>
                    <Typography fontSize=".9rem" fontWeight="400" color="text.secondary">
                      {props[prop]}
                    </Typography>
                  </TableCell>
                ))}

                {/* STATUS */}
                <TableCell>
                  <Chip
                    label={STATUS}
                    size="small"
                    color={colors[STATUS]}
                    sx={{ textTransform: "capitalize", color: "white", paddingInline: 0.75 }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default TableCard;
