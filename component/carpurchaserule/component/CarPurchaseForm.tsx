/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { useCarPurchaseRuleForm } from "../hook";
import { PurchaseRulevalidationSchema } from "../util";
import { useWindowSize } from "../../../hooks";
import { Description1 } from "../../commoncomponent/Style";
import { FormikTextfield } from "../../commoncomponent/form/FormikTextfield";
import { getAssetUrl } from "../../../util/SiteUtil";
import FormikDatePicker from "../../commoncomponent/form/FormikDatePicker";
import {
  PrimaryContainedButton,
} from "../../commoncomponent/Button";

const CarPurchaseForm = () => {
  const { initialData, prefferedCurrency, isLoading, getDetails } =
    useCarPurchaseRuleForm();
  const { mobileView } = useWindowSize();
  const { t } = useTranslation("carrule");

  return (
    <Grid>
      <Formik
        initialValues={initialData}
        validationSchema={PurchaseRulevalidationSchema}
        enableReinitialize={true}
        onSubmit={(values) => {
          getDetails(values);
        }}
      >
        {({ handleSubmit }) => (
          <Grid item xs={12}>
            <Grid container justifyContent={"center"}>
              <Grid item xs={12}>
                <Description1 style={{ fontWeight: 700, textAlign: "left" }}>
                  {t("formTitle2")}
                </Description1>
              </Grid>
              <Grid item xs={12}>
                <Grid container width={["100%", "100%", "445px"]}>
                  <Grid item xs={12} mt={"20px"}>
                    <FormikTextfield
                      id={"revenue"}
                      name={"revenue"}
                      label={t("income")!}
                      textfieldtype="tertiary"
                      fullWidth
                      placeholder={prefferedCurrency}
                    />
                  </Grid>
                  <Grid item xs={12} mt={"20px"}>
                    <FormikTextfield
                      id={"savings"}
                      name={"savings"}
                      label={t("savings")!}
                      textfieldtype="tertiary"
                      fullWidth
                      placeholder={prefferedCurrency}
                    />
                  </Grid>
                  <Grid item xs={12} mt={"20px"}>
                    <FormikTextfield
                      id={"startCapital"}
                      infoText={t("capitalInfo")!}
                      name={"startCapital"}
                      label={t("capital")!}
                      textfieldtype="tertiary"
                      fullWidth
                      placeholder={prefferedCurrency}
                    />
                  </Grid>
                  <Grid item xs={12} mt={"20px"}>
                    <FormikTextfield
                      id={"carPrice"}
                      name={"carPrice"}
                      label={t("price")!}
                      textfieldtype="tertiary"
                      fullWidth
                      placeholder={prefferedCurrency}
                    />
                  </Grid>
                  <Grid item xs={12} mt={"20px"}>
                    <FormikDatePicker
                      id={"purchaseDate"}
                      variant={"outlined"}
                      name={"purchaseDate"}
                      fullWidth
                      placeholderText={t("date")!}
                      label={t("date")!}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <img
                              src={getAssetUrl("redesign/calendaricon.svg")}
                              alt={"calendar"}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} mt={"20px"}>
                    <FormikTextfield
                      id={"leasePayment"}
                      name={"leasePayment"}
                      label={t("loanPayment")!}
                      textfieldtype="tertiary"
                      fullWidth
                      placeholder={prefferedCurrency}
                    />
                  </Grid>
                  <Box display={"flex"} justifyContent={'start'} mt={"40px"}>
                    <PrimaryContainedButton onClick={() => {
                      handleSubmit();
                    }} style={{ display: 'flex', gap: 10 }}>
                      <img src={getAssetUrl('redesign/graphIcon.svg')} />
                      {t("buttonResult")}
                    </PrimaryContainedButton>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Formik>
    </Grid>
  );
};

export default CarPurchaseForm;
