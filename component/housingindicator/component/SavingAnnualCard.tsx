import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { SavingAnnualCardContainer } from "../style";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { DescriptionText2 } from "../../commoncomponent/Text";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import { ComparatorOutputType, QueryType } from "../type";
import ComporatorGraph from "./IndicatorGraph";

type SavingAnnualCardProps = {
  comparatorResult: ComparatorOutputType;
  query: QueryType;
};
const SavingAnnualCard: FC<SavingAnnualCardProps> = ({
  comparatorResult,
  query,
}) => {
  const { t } = useTranslation("housingResult");
  return (
    <SavingAnnualCardContainer p={["24px", "24px", "64px"]}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={3}>
          <DescriptionText2
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
            textsize="12px"
            align="center"
            textweight={700}
            justifyContent={"center"}
            textcolor="#534F59"
          >
            <NextImage
              src={getAssetUrl("redesign/bill.svg")}
              height="24px"
              width={"24px"}
              alt={"bill"}
            />{" "}
            {t("cardTitle")}
          </DescriptionText2>
          <DescriptionText2
            textcolor="#7A7A7A"
            style={{ lineHeight: "150%" }}
            align="center"
            textsize="12px"
            mt={"8px"}
          >
            {t("cardsubTitle")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"90px"}>
          <ComporatorGraph comparatorResult={comparatorResult} />
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <DescriptionText2
                display={"flex"}
                gap={"10px"}
                textcolor="#7A7A7A"
                mt={"20px"}
                alignItems={"center"}
                textsize="12px"
              >
                <NextImage
                  src={getAssetUrl("redesign/wallet_icon.svg")}
                  height="20px"
                  width="26.65px"
                  alt="wallet"
                />
                {comparatorResult.data.description}
              </DescriptionText2>
            </Grid>
            <Grid item>
              <Box display={"flex"} gap={"10px"}>
                <DescriptionText2
                  mt={"10px"}
                  textsize="12px"
                  textcolor="#7A7A7A"
                  textweight={700}
                >
                  {t("incomeRange")}:{" "}
                  <span style={{ fontWeight: 400 }}>{query.incomeRange}</span>
                </DescriptionText2>
              </Box>
              <Box display={"flex"} gap={"10px"}>
                <DescriptionText2
                  mt={"10px"}
                  textsize="12px"
                  textcolor="#7A7A7A"
                  textweight={700}
                >
                  {t("city")}: <span style={{ fontWeight: 400 }}>{query.city}</span>
                </DescriptionText2>
              </Box>
              <Box display={"flex"} gap={"10px"}>
                <DescriptionText2
                  mt={"10px"}
                  textsize="12px"
                  textcolor="#7A7A7A"
                  textweight={700}
                >
                  {t("tenure")}:{" "}
                  <span style={{ fontWeight: 400 }}>{query.tenure}</span>
                </DescriptionText2>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SavingAnnualCardContainer>
  );
};

export default SavingAnnualCard;
