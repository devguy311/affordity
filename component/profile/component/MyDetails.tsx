import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ProfileCardContainer } from "../style";
import { Formik } from "formik";
import { changeUserNameValidationSchema } from "../util";
import { IUserState } from "../../../redux/user";
import { MyDetailType } from "../type";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import { FormikTextfield } from "../../commoncomponent/form/FormikTextfield";
import { PrimaryOutlinedButton } from "../../commoncomponent/Button";
import { PrimaryContainedButton } from "../../commoncomponent/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { HeadingText } from "../../commoncomponent/Text";

import { useUserProfile } from "../hook";

import ConfirmDialog from "./ConfirmDialog";

type MyDetailsProps = {
  user: IUserState;
  handleChangeInfo: (detailInfo: MyDetailType) => void;
  alertMessage: {
    severity: string;
    message: string;
  } | null;
};

const MyDetails: FC<MyDetailsProps> = ({
  user,
  alertMessage,
  handleChangeInfo,
}) => {
  const { t } = useTranslation("account");

  const { isOpen, authProvider, handleClose, handleOpen, handleDeleteUser } =
    useUserProfile();

  const [initialData, setInitialData] = useState<MyDetailType>({
    displayName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      setInitialData({
        displayName: user.displayName,
        email: user.email,
        password: "",
      });
    }
  }, [user]);

  return (
    <>
      <ProfileCardContainer>
        <HeadingText textsize="32px" mb={4}>
          {t("detailsTitle")}
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
          initialValues={initialData}
          onSubmit={handleChangeInfo}
          enableReinitialize
          validationSchema={changeUserNameValidationSchema}
        >
          {({ handleSubmit }) => (
            <Grid container rowSpacing={"24px"}>
              <Grid item xs={12}>
                <FormikTextfield
                  textfieldtype="tertiary"
                  label={t("fullname")!}
                  fullWidth
                  name={"displayName"}
                  id={"displayName"}
                />
              </Grid>
              <Grid item xs={12}>
                <FormikTextfield
                  textfieldtype="tertiary"
                  label={t("email")!}
                  fullWidth
                  name={"email"}
                  id={"email"}
                />
              </Grid>
              <Grid item xs={12}>
                <FormikTextfield
                  textfieldtype="tertiary"
                  label={t("password")!}
                  fullWidth
                  type={"password"}
                  name={"password"}
                  id={"password"}
                  inputProps={{
                    autocomplete: "new-password",
                    form: {
                      autocomplete: "off",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <PrimaryContainedButton
                  onClick={() => handleSubmit()}
                  fullWidth
                >
                  {t("save")}
                </PrimaryContainedButton>
              </Grid>
            </Grid>
          )}
        </Formik>
      </ProfileCardContainer>

      <Grid container justifyContent={"flex-end"}>
        <Grid item mt={"40px"}>
          <PrimaryOutlinedButton
            labelcolor="#FF4F5B"
            bordercolor="#FF4F5B"
            hoverbackground="#ff4f5b12"
            startIcon={<DeleteOutlineIcon />}
            fullWidth
            onClick={handleOpen}
          >
            {t("deleteAccount")}
          </PrimaryOutlinedButton>
        </Grid>
      </Grid>

      {isOpen && (
        <ConfirmDialog
          isOpen={isOpen}
          authProvider={authProvider}
          handleClose={handleClose}
          handleDeleteUser={handleDeleteUser}
        />
      )}
    </>
  );
};

export default MyDetails;
