import React, { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import {
  HeadingText,
  ColorText,
  DescriptionText2,
} from "../../commoncomponent/Text";
import { useWindowSize } from "../../../hooks";
import CTAMyfinance from "../../dashboard/component";

type FeatureHeaderProps = {
  title_1: string;
  title_2: string;
  description: string;
};

const FeatureHeader: FC<FeatureHeaderProps> = ({
  title_1,
  title_2,
  description,
}) => {
  const { t } = useTranslation("homepage");
  const { mobileView } = useWindowSize();

  return (
    <Grid
      container
      mt={"0px"}
      p={"24px"}
      flexWrap={["wrap", "wrap", "nowrap"]}
      alignItems={mobileView ? "center" : "left"}
      pt={["0px", "0px", "0px"]}
      xs={12}
    >
      <Grid
        item
        flexDirection={"column"}
        alignItems={mobileView ? "center" : "left"}
        xs={12}
      >
        <Grid item xs={12} mt={["00px", "40px", "10px"]}>
          <HeadingText
            textsize={mobileView ? "32px" : "48px"}
            align={mobileView ? "center" : "left"}
            justifyContent={mobileView ? "center" : "left"}
          >

            {title_1}{" "}

            <ColorText
              style={{
                lineHeight: "130%",
                fontWeight: 400,
                background: "var(--comp-grey, linear-gradient(180deg, #C7C7C7 0%, #8F8F8F 100%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              {title_2}
            </ColorText>
          </HeadingText>
        </Grid>
        <Box
          display={"flex"}
          gap="20px"
          mt={"20px"}
          alignSelf={"stretch"}
          alignItems={["center", "center", "flex-start", "center"]}
          justifyContent={mobileView ? "center" : "left"}
          flexDirection={["column", "column", "column", "row"]}
        >
          <DescriptionText2
            align={mobileView ? "center" : "left"}
            textcolor="#838383"
            textsize={"16px"}
            maxWidth={"800px"}
          >
            {description}
          </DescriptionText2>

          <CTAMyfinance />
        </Box>
      </Grid>
    </Grid>
  );
};

export default FeatureHeader;
