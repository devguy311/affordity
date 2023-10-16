/* eslint-disable @next/next/no-img-element */
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { GradientColorLinkText } from "../../commoncomponent/Text";
import { DescriptionText2 } from "../../commoncomponent/Text";
import NextImage from "../../commoncomponent/component/NextImage";
import Image from "next/image";
import { getAssetUrl } from "../../../util/SiteUtil";

const CaontactFaq = () => {
  const { t } = useTranslation("contact");
  return (
    <Grid container pl={["0px", "0px", "80px"]}>
      <Grid item xs={12}>
        <DescriptionText2>FAQs</DescriptionText2>
        <DescriptionText2
          mt={"8px"}
          textweight={300}
          textsize="14px"
          style={{ lineHeight: "175%" }}
        >
          {t("faqText")}
        </DescriptionText2>
        <GradientColorLinkText
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          mt={"20px"}
        >
          {t("learnmore")}{" "}
          <NextImage
            src={getAssetUrl("redesign/arrow_right_gradient.webp")}
            alt={"arrow_right"}
            height="8px"
            width="4.93px"
          />
        </GradientColorLinkText>
      </Grid>
      <Grid item xs={12} mt={"40px"}>
        <Image
          src={getAssetUrl("redesign/workspace.webp")}
          alt={"workspace"}
          layout="fill"
          objectFit="contain" />
      </Grid>
      <Grid item xs={12} mt={"24px"}>
        <DescriptionText2 textsize="14px">{t("emailaffordify")}</DescriptionText2>
        <DescriptionText2 mt={"4px"} textweight={300} textsize="14px">
          info@affordify.io
        </DescriptionText2>
      </Grid>
    </Grid>
  );
};

export default CaontactFaq;
