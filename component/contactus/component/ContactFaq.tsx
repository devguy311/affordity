/* eslint-disable @next/next/no-img-element */
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { GradientColorLinkText } from "../../commoncomponent/Text";
import { DescriptionText2 } from "../../commoncomponent/Text";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import { useRouter } from "next/router";

const CaontactFaq = () => {
  const router = useRouter();
  const { t } = useTranslation("faq");
  return (
    <Grid container pl={["0px", "0px", "80px"]}>
      <Grid item xs={12}>
        <DescriptionText2>{t("faq")}</DescriptionText2>
        <DescriptionText2
          mt={"8px"}
          textweight={300}
          textsize="14px"
          style={{ lineHeight: "175%" }}
        >
          {t("faqDescription")}
        </DescriptionText2>
        <GradientColorLinkText
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          mt={"20px"}
          onClick={() => router.push("/faq")}
        >
          {t("learnMore")}{" "}
          <NextImage
            src={getAssetUrl("redesign/arrow_right_gradient.webp")}
            alt={"arrow_right"}
            height="8px"
            width="4.93px"
          />
        </GradientColorLinkText>
      </Grid>
      <Grid item xs={12} mt={"40px"}>
        <img src={getAssetUrl("redesign/workspace.webp")} alt={"workspace"} />
      </Grid>
      <Grid item xs={12} mt={"24px"}>
        <DescriptionText2 textsize="14px">Email</DescriptionText2>
        <DescriptionText2 mt={"4px"} textweight={300} textsize="14px">
          info@affordify.io
        </DescriptionText2>
      </Grid>
    </Grid>
  );
};

export default CaontactFaq;
