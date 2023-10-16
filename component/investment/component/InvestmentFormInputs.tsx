/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import React from "react";
import { InvestmentFilterValidationSchema } from "../util";
import { useInvetmentResultForm } from "../hook";
import { Description1 } from "../../commoncomponent/Style";
import { FormikTextfield } from "../../commoncomponent/form/FormikTextfield";
import FormikRadioGroup from "../../commoncomponent/form/FormikRadioGroup";
import {
  ComfortableOptions,
  ImportantOptions,
} from "../../../constant/siteOptions";
import { useAppSelector } from "../../../redux/hooks";
import { selectUser } from "../../../redux/user";
import { PrimaryContainedButton } from "../../commoncomponent/Button";
import { getAssetUrl } from "../../../util/SiteUtil";

const InvestmentInputForm = () => {
  const { initialInvestmentData, fetchData, t } = useInvetmentResultForm();
  const { user } = useAppSelector(selectUser);
  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";

  return (
    <Grid>
      <Formik
        initialValues={initialInvestmentData}
        validationSchema={InvestmentFilterValidationSchema}
        enableReinitialize
        onSubmit={fetchData}
      >
        {({ handleSubmit }) => (
          <Grid container>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <Description1 style={{ fontWeight: 700, textAlign: "left" }}>
                {t("subTitle")}
              </Description1>
            </Grid>
            <Grid item xs={12}>
              <Grid container width={["100%", "100%", "445px"]}>
                <Grid item xs={12} mt={"20px"}>
                  <FormikTextfield
                    id={"initialDeposit"}
                    name={"initialDeposit"}
                    label={t("initialDeposit")!}
                    textfieldtype="tertiary"
                    fullWidth
                    placeholder={prefferedCurrency}
                  />
                </Grid>
                <Grid item xs={12} mt={"20px"}>
                  <FormikTextfield
                    id={"monthlyDeposit"}
                    name={"monthlyDeposit"}
                    label={t("monthlyDeposit")!}
                    textfieldtype="tertiary"
                    fullWidth
                    placeholder={prefferedCurrency}
                  />
                </Grid>
                <Grid item xs={12} mt={"20px"}>
                  <FormikTextfield
                    id={"investmentDuration"}
                    name={"investmentDuration"}
                    label={t("investmentDuration")!}
                    textfieldtype="tertiary"
                    fullWidth
                    placeholder={t("durationYears")!}
                  />
                </Grid>
                <Grid item xs={12} mt={"20px"}>
                  <FormikRadioGroup
                    label={t("riskComfort")!}
                    // tooltipText="How comfortable are you with risk?"
                    name={"riskType"}
                    options={ComfortableOptions(t)}
                    row
                  />
                </Grid>
                <Grid item xs={12} mt={"20px"}>
                  <FormikRadioGroup
                    label={t("importance")!}
                    name={"importanceType"}
                    options={ImportantOptions(t)}
                    row
                  />
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
                        {t("submit")}
                      </PrimaryContainedButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Formik>
    </Grid>
  );
};

export default InvestmentInputForm;
