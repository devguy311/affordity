import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { getAssetUrl } from "../../util/SiteUtil";
import Image from "next/image";
import { useWindowSize } from "../../hooks";
import RetirementForm from "./component/RetirementForm";
import { retirementFormHelpData } from "./util";
import { DescriptionText2 } from "../commoncomponent/Text";

const RetirementPlannerInput = () => {
  const { mobileView } = useWindowSize();
  const { t } = useTranslation("retirementplanneroverview");
  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <Grid container columnSpacing={"80px"}>
          <Grid item xs={12} mt={"35px"} mb={"42px"}>
            <Box display={"flex"} gap={"10px"} alignItems={"center"}>
              <Box width={"24px"} height={"24px"} position={"relative"}>
                <Image

                  alt={"Retirement Planner"}
                  src={getAssetUrl("/redesign/chess.svg")}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
              <DescriptionText2 textweight={700}>
                {t("header")}
              </DescriptionText2>

            </Box>
          </Grid>
          <Grid item xs={12} px={"24px"} pb={"120px"}>
            <RetirementForm
              hideShoppingHelp={mobileView}
              helpData={retirementFormHelpData(t)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RetirementPlannerInput;
