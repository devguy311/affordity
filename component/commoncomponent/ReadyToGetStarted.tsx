/* eslint-disable @next/next/no-img-element */
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  ColorLinkText,
  Description1,
  Description3,
  Heading1,
  PrimaryRoundButton,
} from "./Style";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { getAssetUrl } from "../../util/SiteUtil";
import { toggleSignupModal } from "../../redux/auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const ReadyToGetStarted = () => {
  const navigate = useRouter();
  const { t } = useTranslation("getstarted");
  const dispatch = useDispatch();
  return (
    <Grid container justifyContent={"center"}>
      <Grid item maxWidth={"1140px"}>
        <Grid container py={"120px"} columnSpacing={"80px"}>
          <Grid item xs={12} md={5}>
            <Heading1 style={{ textAlign: 'left' }} textsize="24px">{t("title")}</Heading1>
            <Description3 mt={"10px"} style={{ textAlign: 'left' }}>
              {t("description")}
            </Description3>
            <Box mt={"24px"} display={"flex"} justifyContent={"flex-start"}>
              <PrimaryRoundButton
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  width: 148,
                }} onClick={() => {
                  if (window.dataLayer) {
                    window.dataLayer.push({ event: "click-sign-up" });
                  }
                  dispatch(toggleSignupModal());
                }}
              >
                {t("startNow")} <ChevronRight />
              </PrimaryRoundButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} mt={["60px", "60px", "0px"]}>
            <Description1 style={{ textAlign: 'left' }} mt={"10px"}>{t("faqTitle")}</Description1>
            <Description1
              style={{ fontWeight: 300, textAlign: 'left' }}
              textsize="14px"
              mt={"10px"}

            >
              {t("faqDescription")}
            </Description1>
            <Box mt={"20px"}>
              <ColorLinkText display={"flex"} alignItems={"center"} gap={"10px"} onClick={() => navigate.push("/faq")}>{t("learnMore")} <img src={getAssetUrl('redesign/arrow_right_color.svg')} alt={'right'} /> </ColorLinkText>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} mt={["60px", "60px", "0px"]}>
            <Description1 style={{ textAlign: 'left' }} mt={"10px"}>
              {t("otherTitle")}
            </Description1>
            <Description1
              style={{ fontWeight: 300, textAlign: 'left' }}
              textsize="14px"
              mt={"10px"}
            >
              {t("otherDescription")}
            </Description1>
            <Box mt={"20px"}>
              <ColorLinkText display={"flex"} alignItems={"center"} gap={"10px"} onClick={() => navigate.push("/contact")} >{t("contactus")}  <img src={getAssetUrl('redesign/arrow_right_color.svg')} alt={'right'} /> </ColorLinkText>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReadyToGetStarted;
