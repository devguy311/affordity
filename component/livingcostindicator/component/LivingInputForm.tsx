/* eslint-disable @next/next/no-img-element */
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import React from "react";
import { useLivingCostIndicator } from "../hook";
import { comparatorValidationSchema } from "../util";
import { Description1 } from "../../commoncomponent/Style";
import { useAppSelector } from "../../../redux/hooks";
import { selectUser } from "../../../redux/user";
import { useWindowSize } from "../../../hooks";
import FormikSelect from "../../commoncomponent/form/FormikSelect";
import {
  countryOptions,
  genderOptions,
} from "../../../constant/siteOptions";
import { FormikTextfield } from "../../commoncomponent/form/FormikTextfield";
import FormikRadioGroup from "../../commoncomponent/form/FormikRadioGroup";
import { PrimaryContainedButton } from "../../commoncomponent/Button";
import { getAssetUrl } from "../../../util/SiteUtil";

const LivingInputForm = () => {
  const { initialComparatorData, handleFormSubmit, t } =
    useLivingCostIndicator();
  const { mobileView } = useWindowSize();
  const { user } = useAppSelector(selectUser);
  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";
  return (
    <Grid>
      <Formik
        initialValues={initialComparatorData}
        validationSchema={comparatorValidationSchema}
        enableReinitialize
        onSubmit={(values) => {
          handleFormSubmit(values);
        }}
      >
        {({ handleSubmit }) => (
          <Grid container>
            {!mobileView && (
              <Grid
                item
                my={"45px"}
                display={["block", "block", "none"]}
                xs={11}
              >
                <Divider />
              </Grid>
            )}
            <Grid item xs={12}>
              <Description1 style={{ fontWeight: 700, textAlign: "left" }}>
                {t("inputsubTitle")}
              </Description1>
            </Grid>
            <Grid mt={"20px"} item xs={12}>
              <Grid
                container
                rowSpacing={"20px"}
                width={["100%", "100%", "445px"]}
              >
                <Grid item xs={12}>
                  <FormikSelect
                    name={"country"}
                    variant="outlined"
                    fieldType={"primary"}
                    label={t("country")!}
                    options={countryOptions}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextfield
                    id={"age"}
                    textfieldtype="tertiary"
                    name={"age"}
                    label={t("inputAge")!}
                    placeholder={t("enterAge")!}

                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikRadioGroup
                    name={"gender"}
                    label={t("gender")!}
                    options={genderOptions(t)}
                    row
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextfield
                    id={"income"}
                    name={"income"}
                    label={t("income")!}
                    infoText={t("incomeDescription")!}
                    textfieldtype={"tertiary"}
                    fullWidth
                    placeholder={prefferedCurrency}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextfield
                    id={"savings"}
                    name={"savings"}
                    label={t("savings")!}
                    textfieldtype="tertiary"
                    fullWidth
                    infoText={t("savingsDescription")!}
                    placeholder={prefferedCurrency}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextfield
                    id={"health"}
                    name={"health"}
                    label={t("health")!}
                    textfieldtype="tertiary"
                    fullWidth
                    infoText={t("healthDescription")!}
                    placeholder={prefferedCurrency}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextfield
                    id={"carMaintenance"}
                    infoText={t("carmaintenanceDescription")!}
                    name={"carMaintenance"}
                    label={t("carMaintenance")!}
                    textfieldtype="tertiary"
                    fullWidth
                    placeholder={prefferedCurrency}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextfield
                    id={"holidays"}
                    infoText={t("holidaysDescription")!}
                    name={"holidays"}
                    label={t("holidays")!}
                    textfieldtype="tertiary"
                    fullWidth
                    placeholder={prefferedCurrency}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextfield
                    id={"clothing"}
                    infoText={t("clothingDescription")!}
                    name={"clothing"}
                    label={t("clothing")!}
                    textfieldtype="tertiary"
                    fullWidth
                    placeholder={prefferedCurrency}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextfield
                    id={"houseMaintenance"}
                    infoText={t("housemaintenanceDescription")!}
                    name={"houseMaintenance"}
                    label={t("houseMaintenance")!}
                    textfieldtype="tertiary"
                    fullWidth
                    placeholder={prefferedCurrency}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextfield
                    id={"houseRent"}
                    infoText={t("houserentDescription")!}
                    name={"houseRent"}
                    label={t("houseRent")!}
                    textfieldtype="tertiary"
                    fullWidth
                    placeholder={prefferedCurrency}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextfield
                    id={"gasAndElectricity"}
                    infoText={t("gasandelectricityDescription")!}
                    name={"gasAndElectricity"}
                    label={t("gasAndElectricity")!}
                    textfieldtype="tertiary"
                    fullWidth
                    placeholder={prefferedCurrency}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextfield
                    id={"hotelsAndRestaurants"}
                    infoText={t("hotelsandrestaurantsDescription")!}
                    name={"hotelsAndRestaurants"}
                    label={t("hotelsAndRestaurants")!}
                    textfieldtype="tertiary"
                    fullWidth
                    placeholder={prefferedCurrency}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextfield
                    id={"food"}
                    infoText={t("foodDescription")!}
                    name={"food"}
                    label={t("food")!}
                    textfieldtype="tertiary"
                    fullWidth
                    placeholder={prefferedCurrency}
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
                        {t("resultButton")}
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

export default LivingInputForm;
