/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { getAssetUrl } from "../../../util/SiteUtil";
import {
  ColorText,
  DescriptionText,
  DescriptionText2,
  HeadingText,
} from "../../commoncomponent/Text";
import { useWindowSize } from "../../../hooks";
import { useRouter } from "next/router";
import { SecondaryButton1 } from "../../commoncomponent/Button";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";

const HousingHeader = () => {
  const { mobileView } = useWindowSize();
  const navigate = useRouter();
  const { t } = useTranslation("housing");

  return (
    <Grid container columnSpacing={"80px"}>
      <Grid item xs={12} mt={"35px"} mb={"42px"}>
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <Box width={"24px"} height={"24px"} position={"relative"}>
            <Image
              alt={"Housing cost indicator"}
              src={getAssetUrl("/redesign/realestateindicator_32_black.svg")}
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <DescriptionText2 textweight={700}>
            {t("header")}
          </DescriptionText2>
        </Box>
      </Grid>
      <Grid item mt={["32px", "32px", "0px"]} xs={12} md={5} order={[2, 2, 1]}>
        <HeadingText
          style={{ textAlign: "left" }}
          textsize={mobileView ? "40px" : "56px"}
        >
          {t("titleA")} <ColorText textcolor="#2E86A1">{t("titleColor")} </ColorText> {t("titleB")}
        </HeadingText>
        <Box mt={["8px", "8px", "32px"]}>
          <DescriptionText style={{ textAlign: "left" }}>
            {t("description")}
          </DescriptionText>
        </Box>
        <Box mt={"32px"} display={"flex"} justifyContent={"flex-start"}>
          <Box>
            <SecondaryButton1
              style={{
                background: "#2E86A1",
                color: "#fff",
              }}
              onClick={() => {
                if (window.dataLayer) {
                  window.dataLayer.push({ event: "click-try" });
                }

                navigate.push("/housing-indicator-input");
              }}
            >
              {t("button")} <ChevronRightSharpIcon />
            </SecondaryButton1>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={7} order={[1, 1, 2]}>
        <img
          style={{ width: "100%" }}
          src={getAssetUrl("/redesign/housing.webp")}
          alt={"header"}
        />
      </Grid>
    </Grid>
  );
};

export default HousingHeader;
