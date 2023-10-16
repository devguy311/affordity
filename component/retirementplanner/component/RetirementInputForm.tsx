/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { useRetirementPlanner } from "../hook";
import { InvestmentCalculatorValidationSchema } from "../util";
import FormikSlider from "../../commoncomponent/form/FormikSlider";
import { PrimaryContainedButton } from "../../commoncomponent/Button";
import { getAssetUrl } from "../../../util/SiteUtil";
import InvestmentOption from "./InvestmentOption";
import {
  SaveInvestmentOption,
  SaveMonthInvestmentOption,
} from "../../../constant/siteOptions";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { LabelText2 } from "../../commoncomponent/Style";

const RetirementInputForm = () => {
  const { initialData, fetchData, t, prefferedCurrency } =
    useRetirementPlanner();
  return (
    <Grid>
      <Formik
        initialValues={initialData}
        enableReinitialize
        validationSchema={InvestmentCalculatorValidationSchema}
        onSubmit={fetchData}
      >
        {({ handleSubmit, values }) => (
          <Grid container mt={["5px", "40px"]}>
            <Grid item xs={12} mt={["5px", "40px"]}>
              <InvestmentOption
                question={t("saveAmountQuestion"!)}
                options={SaveInvestmentOption}
                name={"saveAmount"}
                customeFieldName={"customSaveAmount"}
                prefferedCurrency={prefferedCurrency}
              />
            </Grid>
            <Grid item xs={12} mt={"40px"}>
              <InvestmentOption
                question={t("saveEachMonth")!}
                options={SaveMonthInvestmentOption}
                name={"saveEachMonth"}
                customeFieldName={"customSaveEachMonth"}
                prefferedCurrency={prefferedCurrency}
              />
            </Grid>
            <Grid item xs={12} mt={"30px"}>
              <DescriptionText2 textweight={600}>
                {t("ageInput")}
              </DescriptionText2>
              <Box
                mt={"30px"}
                display={"flex"}
                gap={"20px"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box width={"8%"}>
                  <LabelText2 mb={"10px"}>{values.age[0]}  {t("yearOld")!}</LabelText2>
                </Box>
                <Box width={"70%"}>
                  <FormikSlider
                    hideLabel
                    name={"age"}
                  />

                </Box>
                <Box width={"20%"}>
                  <LabelText2 mb={"10px"}>{values.age[1]} {t("yearOld")!}</LabelText2>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid mt={"39px"} container justifyContent={"start"}>
                <Box>
                  <PrimaryContainedButton
                    startIcon={
                      <img
                        src={getAssetUrl("redesign/graphIcon.svg")}
                        alt={"graph"}
                      />
                    }
                    fullWidth
                    onClick={() => handleSubmit()}
                  >
                    {t("resultButton")}
                  </PrimaryContainedButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Formik>
    </Grid>
  );
};

export default RetirementInputForm;
