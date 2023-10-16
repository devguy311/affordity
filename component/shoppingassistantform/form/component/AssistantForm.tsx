/* eslint-disable @next/next/no-img-element */
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Formik } from "formik";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useShoppingAssistantForm } from "../../hook";
import { validationSchema } from "../../util";
import MySituationForm from "./MySituationForm";
import FinancingForm from "./FinancingForm";
import PruchaseForm from "./PurchaseForm";
import { getAssetUrl } from "../../../../util/SiteUtil";
import { PrimaryContainedButton } from "../../../commoncomponent/Button";

type AssistantFormProps = {
  forExtension?: boolean;
}
const AssistantForm: FC<AssistantFormProps> = ({
  forExtension
}) => {
  const { getDetails, initialData, setSaveToExtensionOnly } =
    useShoppingAssistantForm();
  const { t } = useTranslation("shoppingassistant");

  return (
    <Grid container>
      <Formik
        initialValues={initialData}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values) => {
          getDetails(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Grid item xs={12}>
              <MySituationForm forExtension={forExtension} />
              <FinancingForm />
              <PruchaseForm />
              <Grid mt={"39px"} container justifyContent={"start"}>
                <Box>
                  <PrimaryContainedButton
                    startIcon={<img src={getAssetUrl('redesign/graphIcon.svg')} alt={"graph"} />}
                    fullWidth onClick={() => handleSubmit()}>{t("generateCharts")} </PrimaryContainedButton>
                </Box>
              </Grid>
            </Grid>
          </>
        )}
      </Formik>
    </Grid>
  );
};

export default AssistantForm;
