import Box from "@mui/material/Box";
import React, { FC } from "react";
import { HeadingText } from "../../commoncomponent/Text";
import { FinanceCardContainer } from "../style";
import NextImage from "../../commoncomponent/component/NextImage";
import { useMediaQuery, useTheme } from "@mui/material";

type FinanceDetailCardProps = {
  title: string;
  subTitle: string;
  icon: string;
  amount: number;
  description: JSX.Element;
  currency: string;
};

const FinanceDetailCard: FC<FinanceDetailCardProps> = ({
  amount,
  description,
  icon,
  subTitle,
  title,
  currency,
}) => {
  const theme = useTheme();
  const isWeb = useMediaQuery(theme.breakpoints.between(900, 1300));
  return (
    <Box width={["313px", "313px", "100%"]} height={"100%"}>
      <HeadingText textsize="24px">
        {title}{" "}
        <span style={{ fontSize: "16px", fontWeight: 300 }}>{subTitle}</span>
      </HeadingText>
      <FinanceCardContainer height={"100%"} mt={"20px"}>
        <NextImage alt="title" height="36px" width="36px" src={icon} />
        <HeadingText textsize={isWeb ? "24px" : "48px"}>
          {currency} {amount.toLocaleString()}
        </HeadingText>
        {description}
      </FinanceCardContainer>
    </Box>
  );
};

export default FinanceDetailCard;
