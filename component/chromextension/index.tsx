import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ExtensionHeader from "./component/ExtensionHeader";
import ExtensionInfoCard from "./component/ExtensionInfoCard";
import ImageDescription from "../commoncomponent/component/ImageDescription";
import { getAssetUrl } from "../../util/SiteUtil";
import { ColorText, HeadingText } from "../commoncomponent/Text";
import { SecondaryButton1 } from "../commoncomponent/Button";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ReadyToGetStarted from "../commoncomponent/ReadyToGetStarted";
import ExtensionForm from "./component/ExtensionForm";
import { useWindowSize } from "../../hooks";
import { useRouter } from "next/router";
import { extensionFormHelpData } from "./util";
import { useAppSelector } from "../../redux/hooks";
import { selectAuth } from "../../redux/auth";
import { selectLanguage } from "../../redux/language";


const ChromeExtension = () => {
  const { mobileView } = useWindowSize();
  const navigate = useRouter();
  const { auth } = useAppSelector(selectAuth);
  const { t } = useTranslation("extension");
  const { lang } = useSelector(selectLanguage);
  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <ExtensionHeader />
        <ExtensionInfoCard />
        <Box mt={"80px"}>
          <ImageDescription
            info={{
              description:
                t("description1"),
              image: getAssetUrl("redesign/current_saving.webp"),
              subTitle: (
                <HeadingText
                  style={{ lineHeight: "46px", textAlign: "center" }}
                  align="center"
                  textsize={mobileView ? "32px" : "40px"}

                >
                  {mobileView ? (
                    "Simply highlight the price"
                  ) : (
                    <>
                      {t("title1a")} <ColorText>{t("title1Color")}</ColorText> {t("title1b")}
                    </>
                  )}
                </HeadingText>
              ),
              title: t("header1"),
              imgDirection: "left",
            }}
          />
        </Box>

        <ImageDescription
          info={{
            description:
              t("description2"),
            image: getAssetUrl("redesign/purchase.webp"),
            subTitle: (
              <HeadingText
                style={{ lineHeight: "46px", textAlign: "center" }}
                align="center"
                textsize={mobileView ? "32px" : "40px"}
              >
                {mobileView ? (
                  "Get suggestions & updates right away"
                ) : (
                  <>
                    {t("title2a")} <ColorText>{t("title2Color")}</ColorText> {t("title2b")}
                  </>
                )}
              </HeadingText>
            ),
            title: t("header2"),
            imgDirection: "right",
          }}
        />
        <Box my={["120px", "120px", "80px"]}>
          <Box display={"flex"} justifyContent={"center"}>
            <HeadingText
              align="center"
              maxWidth={"682px"}
              textsize={mobileView ? "32px" : "40px"}
              style={{ textAlign: "center" }}

            >
              {t("bigText")}
            </HeadingText>
          </Box>
          <Box mt={"40px"}>
            <SecondaryButton1
              style={{
                background: "#4B8F8F",
                color: "#fff",
              }}
              onClick={() => navigate.push("/extension-inputs")}
            >
              {t("button")} <ChevronRightSharpIcon />
            </SecondaryButton1>
          </Box>
        </Box>
        <ImageDescription
          info={{
            description:
              t("description3"),
            image:
              lang === "en"
                ? getAssetUrl("redesign/optimal_extension.webp")
                : getAssetUrl("redesign/optimal_extension_fr.webp"),
            subTitle: (
              <HeadingText
                style={{ lineHeight: "46px", textAlign: "center" }}
                align="center"
                textsize={mobileView ? "32px" : "40px"}
              >
                {
                  <>
                    {t("title3a")} <ColorText>{t("title3Color")}</ColorText> {t("title3b")}
                  </>
                }
              </HeadingText>
            ),
            title: t("header3"),
            imgDirection: "left",
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
        <ExtensionForm helpData={extensionFormHelpData(t)} />
      </Grid>
      <Grid item xs={12} px={"24px"} bgcolor={"rgba(0, 0, 0, 0.05)"}>
        {!auth.authenticated && (
          <ReadyToGetStarted />
        )}
      </Grid>
    </Grid>
  );
};

export default ChromeExtension;
