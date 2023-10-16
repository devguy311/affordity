import React from "react";
import { useTranslation } from "react-i18next";
import { useHousingCostIndicatorResult } from "./hook";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import { getAssetUrl } from "../../util/SiteUtil";
import { DescriptionText2, HeadingText } from "../commoncomponent/Text";
import IndicatorCard from "./component/IndicatorCard";
import { formatAmountWithGap } from "../../helpers/currencyHelper";
import SavingAnnualCard from "./component/SavingAnnualCard";
import { PrimaryOutlinedButton } from "../commoncomponent/Button";
import { useRouter } from "next/router";

const HousingCostIndicatorResult = () => {
  const { selectedItem, setSelectedItem, transformOutput, transformQuery } =
    useHousingCostIndicatorResult();

  const router = useRouter();
  const { t } = useTranslation("housingResult");

  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <Grid container columnSpacing={"80px"}>
          <Grid item xs={12} mt={"35px"} mb={"42px"}>
            <Box display={"flex"} gap={"10px"} alignItems={"center"}>
              <Image
                width="24px"
                height="24px"
                alt={"living cost indicator"}
                src={getAssetUrl("/redesign/livingcostindicator_32_black.svg")}
              />
              <DescriptionText2 textweight={700}>
                {t("header")}
              </DescriptionText2>

              <PrimaryOutlinedButton
                onClick={() => router.push("/housing-indicator-input")}
                style={{ display: "flex", gap: 1 }}
              >
                {" "}
                {t("inputsButton")}
              </PrimaryOutlinedButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <HeadingText textsize="32px">
              {t("title")}
            </HeadingText>
          </Grid>
          <Grid item xs={12} mt={"60px"}>
            {selectedItem && (
              <SavingAnnualCard
                comparatorResult={selectedItem}
                query={transformQuery}
              />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            width={"100%"}
            mt={"64px"}
            display="flex"
            justifyContent={["center"]}
          >
            <Grid
              container
              spacing={"30px"}
              justifyContent={["center", "initial"]}
              maxWidth="1200px"
            >
              {transformOutput.map((item) => (
                <IndicatorCard
                  key={item.name}
                  subDescriptionText={item.data.description}
                  title={item.data.name}
                  isactive={selectedItem?.name === item.name}
                  handleCardClick={() => setSelectedItem(item)}
                  amount={`${formatAmountWithGap(item.data.median || 0)}`}
                  isHide={!item.data.median}
                  cardIcon={getAssetUrl("redesign/costindicatorincome.svg")}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        mt={"176px"}
        px={"24px"}
        bgcolor={"rgba(0, 0, 0, 0.05)"}
      ></Grid>
    </Grid>
  );
};

export default HousingCostIndicatorResult;
