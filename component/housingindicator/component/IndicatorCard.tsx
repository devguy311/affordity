/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import { DescriptionText2, HeadingText } from "../../commoncomponent/Text";
import { IndicatorCardContainer } from "../style";

type IndicatorCardProps = {
  title: string;
  amount: string;
  cardIcon: string;
  handleCardClick: () => void;
  isactive: boolean;
  isHide: boolean;
  subDescriptionText: string;
};
const IndicatorCard: FC<IndicatorCardProps> = ({
  cardIcon,
  amount,
  title,
  handleCardClick,
  isactive,
  isHide,
  subDescriptionText,
}) => {
  if (isHide) {
    return <></>;
  }
  return (
    <Grid item xs={12} md={4} mt={"20px"}>
      <IndicatorCardContainer
        px={"10px"}
        onClick={handleCardClick}
        isactive={isactive ? 1 : 0}
        my={"10px"}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            position={"relative"}
            bottom={"35px"}
            display={"flex"}
            justifyContent={"center"}
          >
            <img src={cardIcon} alt={title} />
          </Grid>
          <Grid item xs={12} mt={"24px"} position={"relative"} bottom={"40px"}>
            <Grid container justifyContent={"center"}>
              <Grid item xs={12}>
                <HeadingText
                  textcolor="#5C5963"
                  align={"center"}
                  textsize={"16px"}
                >
                  {title}
                </HeadingText>
              </Grid>
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
              {isactive && (
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
              )}
            </Grid>
          </Grid>
        </Grid>
      </IndicatorCardContainer>
    </Grid>
  );
};

export default IndicatorCard;
