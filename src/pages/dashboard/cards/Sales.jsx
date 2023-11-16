import { Button, Card, CardContent, Typography } from "@mui/material";
import { CardHeadding, CardSubtitle } from "../components/StyledTypography";
import { useTheme } from "@emotion/react";

const Sales = () => {
  const mode = useTheme().palette.mode;

  return (
    <Card
      sx={{
        backgroundImage: `url("/images/misc/trophy.png"),url("/images/misc/triangle-${mode}.png") !important`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 2.5rem bottom 1.25rem,right bottom",
        backgroundSize: "5rem ,contain",
      }}
    >
      <CardContent>
        <CardHeadding mb="0" component="h1">
          Congratulations John! 🥳
        </CardHeadding>
        <CardSubtitle>Best seller of the month</CardSubtitle>
        <Typography variant="h6" color="primary" fontSize="1.5rem" fontWeight="medium" m=".8rem 0">
          $42.8k
        </Typography>
        <Button variant="contained" size="small" sx={{ width: "fit-content", paddingInline: ".9rem" }}>
          VIEW SALES
        </Button>
      </CardContent>
    </Card>
  );
};

export default Sales;
