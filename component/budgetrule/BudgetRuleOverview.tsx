import { Box, Grid } from '@mui/material';
import React from 'react';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import BudgetHeader from './component/BudgetHeader'
import BudgetInfoCard from './component/BudgetInfoCard'
import ImageDescription from '../commoncomponent/component/ImageDescription'
import { getAssetUrl } from '../../util/SiteUtil'
import { ColorText, HeadingText } from '../commoncomponent/Text'
import { useWindowSize } from '../../hooks'
import { LinkButton } from '../commoncomponent/Button'
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import { useRouter } from "next/router";
import ReadyToGetStarted from '../commoncomponent/ReadyToGetStarted'
import BudgetForm from './component/BudgetForm'
import { budgetFormHelpData } from './util'
import { useAppSelector } from "../../redux/hooks";
import { selectAuth } from "../../redux/auth";
import { selectLanguage } from "../../redux/language";


const BudgetRuleOverview = () => {
  const { mobileView } = useWindowSize();
  const navigate = useRouter();
  const { auth } = useAppSelector(selectAuth);
  const { t } = useTranslation("budgetrule");
  const { lang } = useSelector(selectLanguage);
  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <BudgetHeader />
        <BudgetInfoCard />
        <Box mt={"80px"}>
          <ImageDescription
            info={{
              description:
                t("description1"),
              image:
                lang === "en"
                  ? getAssetUrl("redesign/budget_rule_output.webp")
                  : getAssetUrl("redesign/budget_rule_output-fr.webp"),
              subTitle: (
                <HeadingText
                  style={{ lineHeight: "46px" }}
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
        </Box>
        <Box my={["80px", "80px", "0px"]}>
          <ImageDescription
            info={{
              description:
                t("description2"),
              image: getAssetUrl("redesign/women_searching.webp"),
              subTitle: (
                <HeadingText
                  style={{ lineHeight: "46px" }}
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

        <Box my={["120px", "120px", "120px"]}>
          <Box display={"flex"} justifyContent={"center"}>
            <HeadingText
              maxWidth={"682px"}
              textsize={mobileView ? "32px" : "56px"}
              align="center"
            >
              {t("bigText")}
            </HeadingText>
          </Box>
          <Box mt={"40px"}>
            <LinkButton
              style={{
                background: "#4B8F8F",
                color: "#fff",
              }}
              onClick={() => navigate.push("/budget-rule-input")}
            >
              {t("button2")} <ChevronRightSharpIcon />
            </LinkButton>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        px={"24px"}
        mt={"80px"}
        py={"120px"}
        bgcolor={"rgba(40, 132, 216, 0.05)"}
      >
        <BudgetForm helpData={budgetFormHelpData(t)} />
      </Grid>
      <Grid item xs={12} px={"24px"} bgcolor={"rgba(0, 0, 0, 0.05)"}>
        {!auth.authenticated && (
          <ReadyToGetStarted />
        )}
      </Grid>
    </Grid>
  )
}

export default BudgetRuleOverview