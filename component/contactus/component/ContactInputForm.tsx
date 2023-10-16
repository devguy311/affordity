import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  contactUsInitial,
  contactUsValidationSchema,
} from "../util";
import { FormikTextfield } from "../../commoncomponent/form/FormikTextfield";
import FormikTextarea from "../../commoncomponent/form/FormikTextarea";
import FormikCheckbox from "../../commoncomponent/form/FormikCheckbox";
import { PrimaryContainedButton } from "../../commoncomponent/Button";
import { useContactUs } from "../hook";

const ContactInputForm = () => {
  const { submitMessage, isLoading, message } = useContactUs();

  const { t } = useTranslation("contact");

  return (
    <Grid>
      <Formik
        initialValues={contactUsInitial}
        validationSchema={contactUsValidationSchema}
        onSubmit={submitMessage}
      >
        {({ handleSubmit }) => (
          <Grid container rowSpacing={"32px"} maxWidth={"506px"}>
            <Grid item xs={12}>
              <FormikTextfield
                name={"fullName"}
                id={"fullName"}
                label={t("fullname")!}
                textfieldtype="tertiary"
                fullWidth
                placeholder={t("fullnamePlaceholder")!}
              />
            </Grid>
            <Grid item xs={12}>
              <FormikTextfield
                name={"email"}
                id={"email"}
                label={t("email")!}
                placeholder={t("emailPlaceholder")!}
                textfieldtype="tertiary"
                fullWidth
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormikRadioGroup
                label="How did you hear about us?"
                options={hearOptions}
                name="hearAboutUs"
              />
            </Grid> */}
            <Grid item xs={12}>
              <FormikTextarea
                name={"message"}
                id={"message"}
                label={t("message")!}
                placeholder={t("messagePlaceholder")!}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormikCheckbox
                name="notify"
                id="notify"
                label={t("checkbox")!}
              />
            </Grid>
            <Grid item xs={12}>
              <Box width={"107px"}>
                <PrimaryContainedButton
                  fullWidth
                  onClick={() => handleSubmit()}
                >
                  {!isLoading ? t("submitButton") : "Submitting..."}
                </PrimaryContainedButton>
              </Box>
            </Grid>

            <Grid item xs={12}>
              {message && <p>{message}</p>}
            </Grid>
          </Grid>
        )}
      </Formik>
    </Grid>
  );
};

export default ContactInputForm;
