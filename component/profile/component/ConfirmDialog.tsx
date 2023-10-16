import { useState, useRef } from "react";
import { Formik } from "formik";

// @mui
import { Dialog, DialogContent, Typography, Box } from "@mui/material";
import Styled from "@emotion/styled";

// component
import { FormikTextfield } from "../../commoncomponent/form/FormikTextfield";
import { PrimaryOutlinedButton } from "../../commoncomponent/Button";
import { PrimaryContainedButton } from "../../commoncomponent/Button";

// assets
import CloseIcon from "@mui/icons-material/Close";

// util
import { confirmDialogValidationSchema } from "../util";
import { useTranslation } from "react-i18next";


export const StyledCloseIcon = Styled(CloseIcon)`
    position: absolute;
    top: 24px;
    right: 16px;
    cursor: pointer;
`;

interface IProps {
  isOpen: boolean;
  authProvider: string;
  handleClose: () => void;
  handleDeleteUser: (password?: string) => void;
}

export default function ConfirmDialog({
  isOpen,
  authProvider,
  handleClose,
  handleDeleteUser,
}: IProps) {
  const [show, setShow] = useState(false);

  const passwordRef = useRef();

  const onSubmit = ({ password }) => {
    passwordRef.current = password;
    setShow(true);
  };

  const handleDelete = () => {
    handleDeleteUser(passwordRef.current);
  };
  const { t } = useTranslation("account");

  return (
    <Dialog fullWidth maxWidth="xs" open={isOpen}>
      <DialogContent
        sx={{
          p: 3,
          position: "relative",
        }}
      >
        {authProvider === "password" && !show && (
          <>
            <Typography
              sx={{ fontSize: 16, fontWeight: 700, color: "black", mb: 2 }}
            >
              {t("EnterPwd")}
            </Typography>

            <StyledCloseIcon onClick={handleClose} />

            <Formik
              initialValues={{ password: "" }}
              onSubmit={onSubmit}
              validationSchema={confirmDialogValidationSchema}
            >
              {({ handleSubmit }) => (
                <Box>
                  <FormikTextfield
                    textfieldtype="tertiary"
                    label={"Password"}
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

                  <PrimaryContainedButton
                    onClick={() => handleSubmit()}
                    fullWidth
                    sx={{ mt: 1 }}
                  >
                    {t("EnterPwdButton")}
                  </PrimaryContainedButton>
                </Box>
              )}
            </Formik>
          </>
        )}

        {(authProvider !== "password" || show) && (
          <>
            <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
              {t("DeleteAccMsg")}
            </Typography>
            <Typography sx={{ mt: 2 }} color="text.secondary">
              {t("DeleteAccMsg2")}
              <br />
              {t("DeleteAccMsg3")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 2,
                mt: 3,
              }}
            >
              <PrimaryOutlinedButton
                onClick={handleClose}
                hoverbackground="transparent"
                labelcolor="#000"
                sx={{ py: "10px !important" }}
              >
                {t("CancelDeleteButton")}
              </PrimaryOutlinedButton>
              <PrimaryContainedButton
                sx={{ py: "10px !important" }}
                onClick={handleDelete}
              >
                {t("DeleteButton")}
              </PrimaryContainedButton>
            </Box>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
