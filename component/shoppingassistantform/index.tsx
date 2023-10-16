import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ShoppingHeader from "./overview/ShoppingHeader";
import Feature from "./overview/component/OverviewFeature";
import { getAssetUrl } from "../../util/SiteUtil";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ReadyToGetStarted from "../commoncomponent/ReadyToGetStarted";
import { useWindowSize } from "../../hooks";
import { useRouter } from "next/router";
import ImageDescription from "../commoncomponent/component/ImageDescription";
import { ColorText, HeadingText } from "../commoncomponent/Text";
import { SecondaryButton1 } from "../commoncomponent/Button";
import { useAppSelector } from "../../redux/hooks";
import { selectAuth } from "../../redux/auth";
import { selectLanguage } from "../../redux/language";

const ShoppingAssistantOverview = () => {
  const { mobileView } = useWindowSize();
  const navigate = useRouter();
  const { auth } = useAppSelector(selectAuth);
  const { t } = useTranslation("shoppingassistantoverview");
  const { lang } = useSelector(selectLanguage);

  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <ShoppingHeader />
        <Feature />
        <ImageDescription
          info={{
            description:
              t("description1"),
            image:
              lang === "en"
                ? getAssetUrl("redesign/current_monthly_saving.webp")
                : getAssetUrl("redesign/current_monthly_saving_fr.webp"),
            subTitle: (
              <HeadingText
                style={{ lineHeight: "46px", textAlign: "center" }}
                align="center"
                textsize={mobileView ? "32px" : "40px"}
              >
                {mobileView ? (
                  t("title1Mobile")
                ) : (
                  <>
                    {t("title1")} <ColorText>{t("title1_color")}</ColorText>
                  </>
                )}
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
                ? getAssetUrl("redesign/savings_price.webp")
                : getAssetUrl("redesign/savings_price_fr.webp"),
            subTitle: (
              <HeadingText
                style={{ lineHeight: "46px", textAlign: "center" }}
                align="center"
                textsize={mobileView ? "32px" : "40px"}
              >
                {mobileView ? (
                  t("title2Mobile")
                ) : (
                  <>
                    {t("title2")}  <ColorText>{t("title2_color")}</ColorText> {t("title2b")}
                  </>
                )}
              </HeadingText>
            ),
            title: t("header2"),
            imgDirection: "right",
          }}
        />
        <ImageDescription
          info={{
            description:
              t("description3"),
            image:
              lang === "en"
                ? getAssetUrl("redesign/current_monthly.webp")
                : getAssetUrl("redesign/current_monthly_fr.webp"),
            subTitle: (
              <HeadingText
                style={{ lineHeight: "46px", textAlign: "center" }}
                align="center"
                textsize={mobileView ? "32px" : "40px"}
              >
                {mobileView ? (
                  t("title3Mobile")
                ) : (
                  <>
                    {t("title3")} <ColorText>{t("title3_color")}</ColorText> {t("title3b")}
                  </>
                )}
              </HeadingText>
            ),
            title: t("header3"),
            imgDirection: "left",
          }}
        />
        <Box my={"80px"} display={"flex"} justifyContent={"center"}>
          <Box width={["100%", "100%", "682px"]}>
            <HeadingText
              maxWidth={"682px"}
              textsize={mobileView ? "32px" : "56px"}
              style={{ textAlign: "center", lineHeight: !mobileView ? '64px' : '37px' }}
              align="center"
            >
              {t("largeText")}
            </HeadingText>
            <Box mt={"40px"}>
              <SecondaryButton1
                style={{
                  background: "#4B8F8F",
                  color: "#fff",
                }}
                onClick={() => navigate.push("/shopping-assistant")}
              >
                {t("button_2")} <ChevronRightSharpIcon />
              </SecondaryButton1>
            </Box>
          </Box>
        </Box>

        <ImageDescription
          info={{
            description:
              t("description4"),
            image:
              lang === "en"
                ? getAssetUrl("redesign/price.webp")
                : getAssetUrl("redesign/price_fr.webp"),
            subTitle: (
              <HeadingText
                style={{ lineHeight: "46px", textAlign: "center" }}
                align="center"
                textsize={mobileView ? "32px" : "40px"}
              >
                {mobileView ? (
                  t("title4Mobile")
                ) : (
                  <>
                    <ColorText>{t("title4_color")}</ColorText> {t("title4")}
                  </>
                )}
              </HeadingText>
            ),
            title: t("header4"),
            imgDirection: "right",
          }}
        />
        <ImageDescription
          info={{
            description: t("description5"),
            image:
              lang === "en"
                ? getAssetUrl("redesign/optimal_purchase.webp")
                : getAssetUrl("redesign/optimal_purchase_fr.webp"),
            subTitle: (
              <HeadingText
                style={{ lineHeight: "46px", textAlign: "center" }}
                align="center"
                textsize={mobileView ? "32px" : "40px"}
              >
                {mobileView ? (
                  t("title5Mobile")
                ) : (
                  <>
                    {t("title5")} <ColorText>{t("title5_col")}</ColorText> {t("title5b")}
                  </>
                )}
              </HeadingText>
            ),
            title: t("header5"),
            imgDirection: "left",
          }}
        />
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

export default ShoppingAssistantOverview;
