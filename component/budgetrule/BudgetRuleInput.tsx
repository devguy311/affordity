import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { getAssetUrl } from "../../util/SiteUtil";
import { DescriptionText2 } from "../commoncomponent/Text";
import BudgetForm from "./component/BudgetForm";
import { useWindowSize } from "../../hooks";
import { budgetFormHelpData } from "./util";

const BudgetRuleInput = () => {
  const { mobileView } = useWindowSize();
  const { t } = useTranslation("budgetrule");

  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <Grid container columnSpacing={"80px"}>
          <Grid item xs={12} mt={"35px"} mb={"42px"}>
            <Box display={"flex"} gap={"10px"} alignItems={"center"} mt={"0px"}>
              <Box width={"24px"} height={"24px"} position={"relative"}>
                <Image
                  alt="Budget RUle"
                  src={getAssetUrl("/redesign/piggybank.svg")}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
              <DescriptionText2 textweight={700}>
                {t("header")}
              </DescriptionText2>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            px={"24px"}
            pb={"120px"}
          >
            <BudgetForm hideShoppingHelp={mobileView} helpData={budgetFormHelpData(t)} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BudgetRuleInput;
