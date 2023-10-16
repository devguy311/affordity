/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik } from "formik";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { FormikTextfield } from "../../../commoncomponent/form/FormikTextfield";
import { Description1 } from "../../../commoncomponent/Style";
import FormikRadioGroup from "../../../commoncomponent/form/FormikRadioGroup";
import { PrimaryContainedButton } from "../../../commoncomponent/Button";
import { useDetailForm } from "./hook";
import { DetailFormValidation } from "./utils";
import {
  financialRisks,
  riskyAssets,
  investmentConcepts,
  investmentProducts,
  stockMarkets,
  actions,
} from "./options";
import { getAssetUrl } from "../../../../util/SiteUtil";
import { GoalTab } from "./style";
import { GraphIcon, PlusIcon } from "../../../icons";

const DetailedForm = () => {
  const {
    t,
    goalFormData,
    riskFormData,
    currentTab,
    prefferedCurrency,
    isLoading,
    handleChangeTab,
    handleAddGoal,
    handleFieldChange,
    handleRiskFieldChange,
    fetchData,
  } = useDetailForm();

  const formData = {
    ...goalFormData[currentTab - 1]?.data,
    ...riskFormData,
  };

  return (
    <Grid>
      <Stack direction="row" spacing={1} mb={4}>
        {goalFormData.map((item) => (
          <GoalTab
            key={item.goal}
            isactive={currentTab === item.goal}
            onClick={() => handleChangeTab(item.goal)}
          >
            <GraphIcon />
            <span>{t("goal")} {item.goal}</span>
          </GoalTab>
        ))}

        {goalFormData.length < 3 && (
          <GoalTab isactive={false} istransparent onClick={handleAddGoal}>
            <PlusIcon />
            <span>{t("newgoal")}</span>
          </GoalTab>
        )}
      </Stack>

      <Formik
        initialValues={formData}
        validationSchema={DetailFormValidation}
        enableReinitialize
        onSubmit={fetchData}
      >
        {({ handleSubmit }) => (
          <Grid container>
            <Grid item xs={12} />

            <Grid item xs={12}>
              <Description1 style={{ fontWeight: 700, textAlign: "left" }}>
                {t("title")}
              </Description1>
            </Grid>

            <Grid item xs={12}>
              <Grid container width={["100%", "100%", "445px"]}>
                {goalFormData.map(
                  (item) =>
                    currentTab === item.goal && (
                      <Grid key={currentTab} item xs={12}>
                        <Grid item xs={12} mt={"20px"}>
                          <FormikTextfield
                            id={`initialDeposit`}
                            name={`initialDeposit`}
                            label={t("initialDeposit")!}
                            textfieldtype="tertiary"
                            fullWidth
                            placeholder={prefferedCurrency}
                            value={
                              goalFormData[currentTab - 1].data.initialDeposit
                            }
                            onChange={(e) => {
                              const value = e.target.value;
                              handleFieldChange(
                                currentTab - 1,
                                "initialDeposit",
                                value
                              );
                            }}
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
                            value={
                              goalFormData[currentTab - 1].data.monthlyDeposit
                            }
                            onChange={(e) => {
                              const value = e.target.value;
                              handleFieldChange(
                                currentTab - 1,
                                "monthlyDeposit",
                                value
                              );
                            }}
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
                            value={
                              goalFormData[currentTab - 1].data
                                .investmentDuration
                            }
                            onChange={(e) => {
                              const value = e.target.value;
                              handleFieldChange(
                                currentTab - 1,
                                "investmentDuration",
                                value
                              );
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} mt={"20px"}>
                          <FormikTextfield
                            id={"targetAmount"}
                            name={"targetAmount"}
                            label={t("target")!}
                            infoText={t("targetDescription")!}
                            textfieldtype="tertiary"
                            fullWidth
                            placeholder={prefferedCurrency}
                            value={
                              goalFormData[currentTab - 1].data.targetAmount
                            }
                            onChange={(e) => {
                              const value = e.target.value;
                              handleFieldChange(
                                currentTab - 1,
                                "targetAmount",
                                value
                              );
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} mt={"20px"}>
                          <FormikTextfield
                            id={"liquidity"}
                            name={"liquidity"}
                            label={t("liquidity")!}
                            infoText={t("liquidityDescription")!}
                            textfieldtype="tertiary"
                            fullWidth
                            placeholder={prefferedCurrency}
                            value={goalFormData[currentTab - 1].data.liquidity}
                            onChange={(e) => {
                              const value = e.target.value;
                              handleFieldChange(
                                currentTab - 1,
                                "liquidity",
                                value
                              );
                            }}
                          />
                        </Grid>
                      </Grid>
                    )
                )}

                <Grid item xs={12} mt={10}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    {t("qTitle")}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    {t("qSubtitle")}
                  </Typography>
                </Grid>

                <Grid item xs={12} mt={5}>
                  <FormikRadioGroup
                    label={t("q1")!}
                    name={"financialRisk"}
                    options={financialRisks(t)}
                    row
                    showError
                    value={riskFormData.financialRisk}
                    onChange={(e) => {
                      const value = e.target.value;
                      handleRiskFieldChange("financialRisk", value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} mt={"20px"}>
                  <FormikRadioGroup
                    label={t("q2")!}
                    name={"riskyAssets"}
                    options={riskyAssets(t)}
                    row
                    showError
                    value={riskFormData.riskyAssets}
                    onChange={(e) => {
                      const value = e.target.value;
                      handleRiskFieldChange("riskyAssets", value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} mt={"20px"}>
                  <FormikRadioGroup
                    label={t("q3")!}
                    name={"investmentConcept"}
                    options={investmentConcepts(t)}
                    row
                    showError
                    value={riskFormData.investmentConcept}
                    onChange={(e) => {
                      const value = e.target.value;
                      handleRiskFieldChange("investmentConcept", value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} mt={"20px"}>
                  <FormikRadioGroup
                    label={t("q4")!}
                    name={"investmentProduct"}
                    options={investmentProducts(t)}
                    row
                    showError
                    value={riskFormData.investmentProduct}
                    onChange={(e) => {
                      const value = e.target.value;
                      handleRiskFieldChange("investmentProduct", value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} mt={"20px"}>
                  <FormikRadioGroup
                    label={t("q5")!}
                    name={"stockMarket"}
                    options={stockMarkets(t)}
                    row
                    showError
                    value={riskFormData.stockMarket}
                    onChange={(e) => {
                      const value = e.target.value;
                      handleRiskFieldChange("stockMarket", value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} mt={"20px"}>
                  <FormikRadioGroup
                    label={t("q6")!}
                    name={"action"}
                    options={actions(t)}
                    row
                    showError
                    value={riskFormData.action}
                    onChange={(e) => {
                      const value = e.target.value;
                      handleRiskFieldChange("action", value);
                    }}
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
                        disabled={isLoading}
                      >
                        {!isLoading ? t("seeresultButton") : "Loading..."}
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

export default DetailedForm;
