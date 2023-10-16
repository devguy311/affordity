/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../hooks";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import { getAssetUrl } from "../../../util/SiteUtil";
import {
  ColorText,
  DescriptionText,
  DescriptionText2,
  HeadingText,
} from "../../commoncomponent/Text";
import { SecondaryButton1 } from "../../commoncomponent/Button";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";

const BudgetHeader = () => {
  const { mobileView } = useWindowSize();
  const navigate = useRouter();
  const { t } = useTranslation("budgetrule");

  return (
    <Grid container columnSpacing={"80px"}>
      <Grid item xs={12} mt={"35px"} mb={"42px"}>
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <Box width={"24px"} height={"24px"} position={"relative"}>
            <Image
              alt="50-30-20 rule"
              src={getAssetUrl("/redesign/piggybank.svg")}
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <DescriptionText2 textweight={700}>{t("header")}</DescriptionText2>
        </Box>
      </Grid>
      <Grid item mt={["32px", "32px", "0px"]} xs={12} md={5} order={[2, 2, 1]}>
        <HeadingText
          style={{
            textAlign: "left",
            lineHeight: mobileView ? "115%" : undefined,
          }}
          textsize={mobileView ? "32px" : "48px"}
        >
          {mobileView ? (
            t("titleMobile")
          ) : (
            <>
              {t("title")} <ColorText>{t("title_color")}</ColorText> {t("title_2")}
            </>
          )}
        </HeadingText>
        <Box mt={["8px", "8px", "16px"]}>
          <DescriptionText style={{ textAlign: "left" }}>
            {t("description")}
          </DescriptionText>
        </Box>
        <Box mt={"32px"} display={"flex"} justifyContent={"flex-start"}>
          <Box>
            <SecondaryButton1 style={{
              background: "#4B8F8F",
              color: "#fff",
            }}
              onClick={() => {
                navigate.push("/budget-rule-input");
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
          src={getAssetUrl("/redesign/girl_saving.webp")}
          alt={"header"}
        />
      </Grid>
    </Grid>
  );
};

export default BudgetHeader;
