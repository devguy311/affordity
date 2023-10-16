import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Formik } from "formik";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useShoppingAssistantForm } from "../../shoppingassistantform/hook";
import { validationSchema } from "../util";
import MySituationForm from "../../shoppingassistantform/form/component/MySituationForm";
import { SecondaryButton2, PrimaryContainedButton } from "../../commoncomponent/Button";
import { getAssetUrl } from "../../../util/SiteUtil";
import { useRouter } from "next/router";

type ExtensionAssistantFormProps = {
  forExtension?: boolean;
};
const ExtensionAssistantForm: FC<ExtensionAssistantFormProps> = ({
  forExtension,
}) => {
  const { getDetails, initialData, setSaveToExtensionOnly } =
    useShoppingAssistantForm();
  const navigate = useRouter();
  const { t } = useTranslation("extension");

  return (
    <Grid container>
      <Formik
        initialValues={initialData}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values: any) => {
          getDetails(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Grid item xs={12}>
              <MySituationForm forExtension={forExtension} />
              <Box
                display={"flex"}
                justifyContent={"start"}
                mt={"40px"}
                gap={2}
              >
                <SecondaryButton2 bgcolor="#fff" labelcolor="#000"
                  onClick={() => {
                    setSaveToExtensionOnly(true);
                    handleSubmit();
                  }}
                  style={{ display: "flex", gap: 10 }}
                >
                  <img src={getAssetUrl("redesign/save.svg")} />
                  {t("saveToExtension")}
                </SecondaryButton2>
                <PrimaryContainedButton
                  onClick={() => {
                    window.open(
                      "https://chrome.google.com/webstore/detail/affordifyio/jeeiomakpbchggoojembgjdkngmeefnn",
                      "_blank"
                    );
                  }}
                  style={{ display: "flex", gap: 10 }}
                >
                  {t("downloadChromeExtension")}
                </PrimaryContainedButton>
              </Box>
            </Grid>
          </>
        )}
      </Formik>
    </Grid>
  );
};

export default ExtensionAssistantForm;
