import React from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../hooks";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NextImage from "../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../util/SiteUtil";
import { DescriptionText2 } from "../commoncomponent/Text";
import CarForm from "./Form";
import { carPurchaseHelpData } from "./util";

const CarPurchaseInput = () => {
  const { mobileView } = useWindowSize();
  const { t } = useTranslation("carrule");
  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <Grid container columnSpacing={"80px"}>
          <Grid item xs={12} mt={"35px"} mb={"42px"}>
            <Box display={"flex"} gap={"10px"} alignItems={"center"}>
              <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                <NextImage
                  width="16px"
                  height="20px"
                  alt={"Car purchase rule"}
                  src={getAssetUrl("/redesign/transportindicatorIcon_black.svg")}
                />
                <DescriptionText2 textweight={700}>
                  {t("header")}
                </DescriptionText2>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} px={"24px"} pb={"120px"}>
            <CarForm
              hideShoppingHelp={mobileView}
              helpData={carPurchaseHelpData(t)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CarPurchaseInput;
