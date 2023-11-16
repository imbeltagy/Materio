import { MoreVert } from "@mui/icons-material";
import { CardHeader, IconButton, Typography } from "@mui/material";
import React from "react";
import { CardHeadding, CardSubtitle } from "./StyledTypography";

const CustomCardHeader = ({ action, title, subheader }) => {
  return (
    <CardHeader
      action={
        action && (
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        )
      }
      title={title && <CardHeadding>{title}</CardHeadding>}
      subheader={subheader && <CardSubtitle>{subheader}</CardSubtitle>}
    />
  );
};

export default CustomCardHeader;
