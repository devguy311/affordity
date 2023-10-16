import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { ProfileCardContainer } from "../style";
import { HeadingText } from "../../commoncomponent/Text";
import { Formik } from "formik";
import { PasswordChangeType } from "../type";
import { changePasswordValidationSchema } from "../util";
import Grid from "@mui/material/Grid";
import { FormikTextfield } from "../../commoncomponent/form/FormikTextfield";
import { PrimaryContainedButton } from "../../commoncomponent/Button";
import Alert from "@mui/material/Alert";

type ChangePasswordProps = {
  handleChangePassword: (passwordInfo: PasswordChangeType) => void;
  alertMessage: {
    severity: string;
    message: string;
  } | null;
};
const ChangePassword: FC<ChangePasswordProps> = ({
  alertMessage,
  handleChangePassword,
}) => {
  const { t } = useTranslation("account");

  return (
    <ProfileCardContainer>
      <HeadingText textsize="32px" mb={"40px"}>
        {t("passwordTitle")}
      </HeadingText>

      {alertMessage && (
        <Alert
          severity={alertMessage.severity as any}
          variant="filled"
          sx={{
            mb: 2,
          }}
        >
          {alertMessage.message}
        </Alert>
      )}

      <Formik
        initialValues={{ oldPassword: "", newPassword: "" }}
        onSubmit={handleChangePassword}
        validationSchema={changePasswordValidationSchema}
      >
        {({ handleSubmit }) => (
          <Grid container rowSpacing={"24px"}>
            <Grid item xs={12}>
              <FormikTextfield
                textfieldtype="tertiary"
                label={t("oldpwd")!}
                fullWidth
                name={"oldPassword"}
                id={"oldPassword"}
              />
            </Grid>
            <Grid item xs={12}>
              <FormikTextfield
                textfieldtype="tertiary"
                label={t("newpwc")!}
                fullWidth
                name={"newPassword"}
                id={"newPassword"}
              />
            </Grid>
            <Grid item xs={12}>
              <PrimaryContainedButton onClick={() => handleSubmit()} fullWidth>
                {t("changepwd")}
              </PrimaryContainedButton>
            </Grid>
          </Grid>
        )}
      </Formik>
    </ProfileCardContainer>
  );
};

export default ChangePassword;
