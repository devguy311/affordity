import React from "react";
import { useTranslation } from "react-i18next";
import { CardContainer } from "../style";
import { Grid } from "@mui/material";
import { Description1 } from "../../commoncomponent/Style";

const InvestmentLearnMore = () => {
  const { t } = useTranslation("investmentview");
  return (
    <CardContainer p={"50px"} height={"100%"}>
      <Grid item xs={12}>
        <Description1 textAlign={"left"} textweight={"700"}>
          {t("learnMore")}
        </Description1>
      </Grid>
      <Grid item xs={12} mt={"25px"}>
        <Description1 textAlign={"left"}>{t("learnTitle1")}</Description1>
        <Description1 textAlign={"left"} textsize="12px">
          {t("learnDescription1")}
        </Description1>
      </Grid>
      <Grid item xs={12} mt={"25px"}>
        <Description1 textAlign={"left"}>{t("learnTitle2")} </Description1>
        <Description1 textAlign={"left"} textsize="12px">
          {t("learnDescription2")}
        </Description1>
      </Grid>
      <Grid item xs={12} mt={"25px"}>
        <Description1 textAlign={"left"}>{t("learnTitle3")}</Description1>
        <Description1 textAlign={"left"} textsize="12px">
          {t("learnDescription3")}
        </Description1>
      </Grid>
    </CardContainer>
  );
};

export default InvestmentLearnMore;
