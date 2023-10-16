import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import InvetmentHeader from "./component/InvetmentHeader";
import InvestmentFeature from "./component/InvestmentFeature";
import ImageDescription from "../commoncomponent/component/ImageDescription";
import { getAssetUrl } from "../../util/SiteUtil";
import { HeadingText } from "../commoncomponent/Text";
import { useWindowSize } from "../../hooks";
import { useRouter } from "next/router";
import { SecondaryButton1 } from "../commoncomponent/Button";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ReadyToGetStarted from "../commoncomponent/ReadyToGetStarted";
import InvestmentForm from "./component/InvestmentForm";
import { investmentFormHelpData } from "./util";
import { useAppSelector } from "../../redux/hooks";
import { selectAuth } from "../../redux/auth";
import { selectLanguage } from "../../redux/language";



const InvestmentOverview = () => {
  const { mobileView } = useWindowSize();
  const navigate = useRouter();
  const { auth } = useAppSelector(selectAuth);
  const { t } = useTranslation("investmentviewoverview");
  const { lang } = useSelector(selectLanguage);
  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <InvetmentHeader />
        <InvestmentFeature />
        <Box mt={"80px"}>
          <ImageDescription
            info={{
              description:
                t("description1"),
              image:
                lang === "en"
                  ? getAssetUrl("redesign/input_budget.webp")
                  : getAssetUrl("redesign/input_invest-fr.webp"),
              subTitle: (
                <HeadingText
                  style={{ lineHeight: "46px", textAlign: "center" }}
                  align="center"
                  textsize={mobileView ? "32px" : "40px"}
                >
                  {t("title1")}
                </HeadingText>
              ),
              title: t("header1"),
              imgDirection: "left",
            }}
          />
          <ImageDescription
            info={{
              description:
                t("description2"),
              image:
                lang === "en"
                  ? getAssetUrl("redesign/investment_summarised.webp")
                  : getAssetUrl("redesign/investment_summarised-fr.webp"),
              subTitle: (
                <HeadingText
                  style={{ lineHeight: "46px", textAlign: "center" }}
                  align="center"
                  textsize={mobileView ? "32px" : "40px"}
                >
                  {t("title2")}
                </HeadingText>
              ),
              title: t("header2"),
              imgDirection: "right",
            }}
          />
        </Box>
        <Box my={"80px"} display={"flex"} justifyContent={"center"}>
          <Box width={["100%", "100%", "682px"]}>
            <HeadingText
              maxWidth={"682px"}
              textsize={mobileView ? "32px" : "56px"}
              style={{
                textAlign: "center",
                lineHeight: !mobileView ? "64px" : "37px",
              }}
              align="center"
            >
              {t("bitText")}
            </HeadingText>
            <Box mt={"40px"}>
              <SecondaryButton1
                style={{
                  background: "#207754",
                  color: "#fff",
                }}
                onClick={() => navigate.push("/investment-view-input")}
              >
                {t("button2")} <ChevronRightSharpIcon />
              </SecondaryButton1>
            </Box>
          </Box>
        </Box>
        <ImageDescription
          info={{
            description:
              t("description3"),
            image: getAssetUrl("redesign/visualise.webp"),
            subTitle: (
              <HeadingText
                style={{ lineHeight: "46px", textAlign: "center" }}
                align="center"
                textsize={mobileView ? "32px" : "40px"}
              >
                {t("title3")}
              </HeadingText>
            ),
            title: t("header3"),
            imgDirection: "left",
          }}
        />
        <ImageDescription
          info={{
            description:
              t("description4"),
            image:
              lang === "en"
                ? getAssetUrl("redesign/InvestmentView-5.webp")
                : getAssetUrl("redesign/InvestmentView_5_fr.webp"),
            subTitle: (
              <HeadingText
                style={{ lineHeight: "46px", textAlign: "center" }}
                align="center"
                textsize={mobileView ? "32px" : "40px"}
              >
                {t("title4")}
              </HeadingText>
            ),
            title: t("header4"),
            imgDirection: "right",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        px={"24px"}
        mt={"80px"}
        py={"120px"}
        bgcolor={"rgba(40, 132, 216, 0.05)"}
      >
        <InvestmentForm helpData={investmentFormHelpData(t)} />
      </Grid>
      <Grid
        item
        xs={12}
        px={"24px"}
        mt={"80px"}
        bgcolor={"rgba(0, 0, 0, 0.05)"}
      >
        {!auth.authenticated && (
          <ReadyToGetStarted />
        )}
      </Grid>
    </Grid>
  );
};

export default InvestmentOverview;
