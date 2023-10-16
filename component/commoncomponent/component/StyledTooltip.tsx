import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import React, { FC } from "react";
import { DescriptionText2 } from "../Text";
import { styled } from "@mui/material/styles";

type StyledTooltipProps = {
  description: string;
};

export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "inherit",
  },
}));

const StyledTooltip: FC<StyledTooltipProps> = ({ description }) => {
  return (
    <Box bgcolor={"#f4f9fd"} borderRadius={"16px"} px={"32px"} py={"24px"}>
      <DescriptionText2
        style={{ lineHeight: "150%" }}
        textsize="12px"
        textcolor="#2884D8"
      >
        {description}
      </DescriptionText2>
    </Box>
  );
};

export default StyledTooltip;
