/* eslint-disable @next/next/no-img-element */
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import React from "react";
import { useLivingCostIndicator } from "../hook";
import { validationSchema } from "../util";
import { Description1 } from "../../commoncomponent/Style";
import { useAppSelector } from "../../../redux/hooks";
import { selectUser } from "../../../redux/user";
import { useWindowSize } from "../../../hooks";
import FormikSelect from "../../commoncomponent/form/FormikSelect";
import {
  cityOptions,
  ownershipStatusOptions,
} from "../util";
import { FormikTextfield } from "../../commoncomponent/form/FormikTextfield";
import FormikRadioGroup from "../../commoncomponent/form/FormikRadioGroup";
import { PrimaryContainedButton } from "../../commoncomponent/Button";
import { getAssetUrl } from "../../../util/SiteUtil";

const HousingInputForm = () => {
  const { initialComparatorData, handleFormSubmit, t } =
    useLivingCostIndicator();

  const { mobileView } = useWindowSize();
  const { user } = useAppSelector(selectUser);

  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";

  return (
    <Grid>
      <Formik
        initialValues={initialComparatorData}
        validationSchema={validationSchema}
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
                    id="city"
                    name={"city"}
                    variant="outlined"
                    fieldType={"primary"}
                    label={t("city")!}
                    options={cityOptions}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormikRadioGroup
                    id="ownership_status"
                    name={"ownership_status"}
                    label={t("ownership")!}
                    options={ownershipStatusOptions(t)}
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

export default HousingInputForm;
