import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";
import { useTranslation } from "react-i18next";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import { DescriptionText2, HeadingText } from "../../commoncomponent/Text";
import { useWindowSize } from "../../../hooks";
import { useShoppingAssistantResult } from "../hook";
import ShoppingResultSaving from "./component/shoppingresultmonthlysaving/ShoppingResultSaving";
import ShoppingResultTab from "./component/ShoppingResultTab";
import PriceView from "./component/priceview/PriceView";
import MetricDateView from "./component/metricdate";
import { PrimaryOutlinedButton } from "../../commoncomponent/Button";

import { useRouter } from "next/router";

const ShoppingAssistantResult = () => {
  const { mobileView } = useWindowSize();
  const { detailedGraphData, selectedMetric, setSelectedMetric } =
    useShoppingAssistantResult();
  const router = useRouter();
  const renderView = () => {
    if (!detailedGraphData) {
      return <></>;
    }
    if (selectedMetric === "SAVINGS") {
      return <ShoppingResultSaving detailedGraphData={detailedGraphData} />;
    }
    if (selectedMetric === "PRICE") {
      return <PriceView detailedGraphData={detailedGraphData} />;
    }
    return <MetricDateView detailedGraphData={detailedGraphData} />;
  };
  const { t } = useTranslation("shoppingassistantresult");

  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <Grid container columnSpacing={"80px"}>
          <Grid item xs={12} mb={"32px"}>

            <Box display={"flex"} gap={"10px"} alignItems={"center"} mt={"35px"}>
              <NextImage
                height="20px"
                width="16px"
                alt="Shopping-assistant"
                src={getAssetUrl("/redesign/shopping_black.svg")}
              />
              <DescriptionText2 textweight={700}>
                Shopping Assistant
              </DescriptionText2>
              <PrimaryOutlinedButton
                onClick={() => router.push("/shopping-assistant")}
                style={{ display: "flex", gap: 1 }}
              > inputs
              </PrimaryOutlinedButton>
            </Box>
            <Box mt={"32px"}>
              <HeadingText
                style={{ textAlign: "left" }}
                textsize={mobileView ? "24px" : "32px"}
              >
                {t("title")}
              </HeadingText>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <ShoppingResultTab
              setSelecteTab={setSelectedMetric}
              selectedTab={selectedMetric}
            />

          </Grid>

          <Grid item xs={12} md={7} mt={"20px"}>
            {renderView()}
          </Grid>

        </Grid>
      </Grid>
      <Grid
        item
        mt={"130px"}
        xs={12}
        px={"24px"}
        bgcolor={"rgba(0, 0, 0, 0.05)"}
      >
      </Grid>
    </Grid>
  );
};

export default ShoppingAssistantResult;
