/* eslint-disable @next/next/no-img-element */
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";
import { useTranslation } from "react-i18next";
import { getAssetUrl } from "../../../util/SiteUtil";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import Image from "next/image";
import { useWindowSize } from "../../../hooks";
import { useRouter } from "next/router";
import {
  ColorText,
  DescriptionText,
  DescriptionText2,
  HeadingText,
} from "../../commoncomponent/Text";
import { SecondaryButton1 } from "../../commoncomponent/Button";

const ShoppingHeader = () => {
  const { mobileView } = useWindowSize();
  const navigate = useRouter();
  const { t } = useTranslation("shoppingassistantoverview");
  return (
    <Grid container columnSpacing={"80px"}>
      <Grid item xs={12} mt={"35px"} mb={"42px"}>
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <Box width={"16px"} height={"20px"} position={"relative"}>
            <Image
              alt="Shopping Assistant"
              src={getAssetUrl("/redesign/shopping_black.svg")}
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
          textsize={mobileView ? "32px" : "56px"}
        >
          {t("titleA")} <ColorText>{t("titleB")} </ColorText> {t("titleC")}
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
                background: "#4B8F8F",
                color: "#fff",
              }}
              onClick={() => {
                navigate.push("/shopping-assistant");
              }}
            >
              {t("button")}<ChevronRightSharpIcon />
            </SecondaryButton1>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={7} order={[1, 1, 2]}>
        <img
          style={{ width: "100%" }}
          src={getAssetUrl("/redesign/shoppingHeader.webp")}
          alt={"header"}
        />
      </Grid>
    </Grid>
  );
};

export default ShoppingHeader;
