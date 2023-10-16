import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import { DescriptionText2, HeadingText } from "../commoncomponent/Text";
import { getAssetUrl } from "../../util/SiteUtil";
import { useBudgetRuleResult } from "./hook";
import { useWindowSize } from "../../hooks";
import BudgetDistribution from "./component/BudgetDistribution";
import { PrimaryOutlinedButton } from "../commoncomponent/Button";
import { useRouter } from "next/router";


const BudgetRuleResult = () => {
  const { budgetResult, t, navigate, prefferedCurrency } =
    useBudgetRuleResult();
  const { mobileView } = useWindowSize();
  const router = useRouter();
  return (
    <Grid container pt={["0px", "0px", "0px"]} justifyContent={"center"}>
      <Grid px={"24px"} item maxWidth={["100%", "1144px"]}>
        <Grid container columnSpacing={"80px"}>
          <Grid item xs={12} mt={"35px"} mb={"42px"}>
            <Box display={"flex"} gap={"10px"} alignItems={"center"} mt={mobileView ? "0px" : "0px"}>
              <Box width={"24px"} height={"24px"} position={"relative"}>
                <Image
                  alt="50-30-20 rule"
                  src={getAssetUrl("/redesign/piggybank.svg")}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
              <DescriptionText2 textweight={700}>
                {t("header")}
              </DescriptionText2>

              <PrimaryOutlinedButton
                onClick={() => router.push("/budget-rule-input")}
                style={{ display: "flex", gap: 0 }}
              > {t("inputsButton")}
              </PrimaryOutlinedButton>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <HeadingText textsize="32px">
            {t("titleResult")}
          </HeadingText>
        </Box>
        <Grid container mt={"60px"}>
          <Grid item xs={12}>
            <BudgetDistribution prefferedCurrency={prefferedCurrency} budgetResult={budgetResult} />
          </Grid>
        </Grid>
        <Grid item xs={12} mt={"35px"} mb={"0px"}>

        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        px={"24px"}
        mt={"194px"}
        bgcolor={"rgba(0, 0, 0, 0.05)"}
      >
      </Grid>
    </Grid>
  );
};

export default BudgetRuleResult;
