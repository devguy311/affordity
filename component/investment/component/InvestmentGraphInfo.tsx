import React, { FC } from "react";
import { IndicatorCardContainer } from "../../livingcostindicator/style";
import Grid from "@mui/material/Grid";
import { DescriptionText2, HeadingText } from "../../commoncomponent/Text";

type InvestmentGraphInfoProps = {
  amount: string;
  subDescriptionText: string;
  cardIcon: string;
};
const InvestmentGraphInfo: FC<InvestmentGraphInfoProps> = ({
  amount,
  subDescriptionText,
  cardIcon,
}) => {
  return (
    <IndicatorCardContainer px={"10px"} isactive={0} my={"10px"}>
      <Grid container>
        <Grid
          item
          xs={12}
          position={"relative"}
          bottom={"35px"}
          display={"flex"}
          justifyContent={"center"}
        >
          <img src={cardIcon} alt={"icon"} />
        </Grid>
        <Grid item xs={12} mt={"24px"} position={"relative"} bottom={"40px"}>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} mt={"8px"}>
              <HeadingText
                align={"center"}
                textsize={"32px"}
                textweight={700}
                textcolor="#5C5963"
              >
                {amount}
              </HeadingText>
            </Grid>

            <Grid mt={"16px"} item xs={10}>
              <DescriptionText2
                style={{ lineHeight: "150%" }}
                textsize={"12px"}
                align={"center"}
                textcolor="#7A7A7A"
              >
                {subDescriptionText}
              </DescriptionText2>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </IndicatorCardContainer>
  );
};

export default InvestmentGraphInfo;
