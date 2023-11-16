import { Typography } from "@mui/material";

const CardHeadding = ({ children, mb, component }) => (
  <Typography variant="h6" fontSize="1.25rem" mb={mb ? mb : 1} component={component ? component : "h2"}>
    {children}
  </Typography>
);
const CardSubtitle = ({ children, ...props }) => (
  <Typography variant="subtitle2" color="text.secondary" fontWeight="400" {...props}>
    {children}
  </Typography>
);
const SmallHeadding = ({ children, ...props }) => (
  <Typography fontWeight="600" fontSize=".9rem" {...props}>
    {children}
  </Typography>
);
const BadgeText = ({ children, big, fontWeight, bold, ...props }) => (
  <Typography fontSize={big ? ".9rem" : ".75rem"} fontWeight={fontWeight ? fontWeight : bold && 500} {...props}>
    {children}
  </Typography>
);

export { CardHeadding, CardSubtitle, SmallHeadding, BadgeText };
