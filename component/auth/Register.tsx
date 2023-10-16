/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";
import React from "react";
import { getAssetUrl } from "../../util/SiteUtil";
import {
  Heading1,
  SocialLoginButton,
  SecondaryButton1,
} from "../commoncomponent/Style";
import { Description1 } from "../commoncomponent/Style";
import { AuthContainer } from "./style";
import Image from "next/image";
import FeatureCarousel from "./component/Carousel";
import { Formik } from "formik";
import {
  Questionaries,
  SignUpInitialValue,
  SignUpValidationSchema,
} from "./util";
import { useSignUp } from "./hook";
import { FormikTextfield } from "../commoncomponent/form/FormikTextfield";
import Visibility from "@mui/icons-material/Visibility";
import FormikCheckbox from "../commoncomponent/form/FormikCheckbox";
import { PrimaryContainedButton } from "../commoncomponent/Button";
import { useWindowSize } from "../../hooks";
import { StyledCloseIcon } from "./style";

interface IProps {
  canClose?: boolean;
  handleClose?: () => void;
}

const Register = ({ canClose, handleClose }: IProps) => {
  const {
    t,
    error,
    showPassword,
    showQuestionary,
    questionaries,
    googleLogin,
    handleSignup,
    setShowPassword,
    handleQuestionary,
    handleFormSubmit,
  } = useSignUp();

  const { mobileView } = useWindowSize();

  return (
    <Grid container justifyContent={"center"}>
      <AuthContainer item xs={12} md={9}>
        {canClose && <StyledCloseIcon onClick={handleClose} />}

        <Grid container>
          <Grid item xs={12} md={6} pb={mobileView ? "30px" : "0px"}>
            <Grid container pt={"46px"}>
              <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                <Box position={"relative"} height={"24px"} width={"104px"}>
                  <Image
                    alt="logo"
                    src={getAssetUrl("redesign/logo.svg")}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} px={["16px", "25px", "0px"]} mt={"24px"}>
                {!showQuestionary && (
                  <Heading1
                    textsize={mobileView ? "24px" : "32px"}
                    style={{ textAlign: "center" }}
                    width={"100%"}
                  >
                    {t("signupTitle")}
                  </Heading1>
                )}
                {showQuestionary && (
                  <Heading1
                    textsize={mobileView ? "24px" : "32px"}
                    style={{
                      textAlign: "center",
                      maxWidth: "380px",
                      marginInline: "auto",
                    }}
                    width={"100%"}
                  >
                    {t("optionTitle")}
                  </Heading1>
                )}
                {!showQuestionary && (
                  <Description1 align={"center"} textcolor="rgba(0, 0, 0, 0.5)">
                    {t("signupSubTitle")}
                  </Description1>
                )}
              </Grid>
              {!showQuestionary && (
                <Grid item xs={12}>
                  <Formik
                    initialValues={SignUpInitialValue}
                    onSubmit={handleFormSubmit}
                    validationSchema={SignUpValidationSchema(t)}
                  >
                    {({ handleSubmit }) => (
                      <Grid
                        container
                        spacing={"5px"}
                        px={["16px", "40px", "40px"]}
                        justifyContent={"center"}
                      >
                        <Grid item xs={12} mt={"20px"} md={8}>
                          <FormikTextfield
                            name={"email"}
                            id={"email"}
                            label={t("email")!}
                            variant={"outlined"}
                            fullWidth
                            textfieldtype="tertiary"
                          />
                        </Grid>
                        {/* <Grid item xs={12} mt={"5px"} md={8}>
                        <FormikTextfield
                          name={"fullName"}
                          id={"fullName"}
                          label={t("fullname")!}
                          variant={"outlined"}
                          fullWidth
                          textfieldtype="tertiary"
                        />
                      </Grid> */}
                        <Grid item xs={12} mt={"5px"} md={8}>
                          <FormikTextfield
                            type={showPassword.password ? "text" : "password"}
                            name={"password"}
                            id={"password"}
                            label={t("password")!}
                            variant={"outlined"}
                            fullWidth
                            textfieldtype="tertiary"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      setShowPassword((prev) => ({
                                        ...prev,
                                        password: !prev.password,
                                      }))
                                    }
                                  >
                                    {showPassword.password ? (
                                      <img
                                        src={getAssetUrl(
                                          "redesign/hidepassword.svg"
                                        )}
                                        alt={"hide password"}
                                      />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} mt={"10px"} md={8}>
                          <FormikCheckbox
                            name="getNotification"
                            label={<>{t("updateSelector")} </>}
                          />
                        </Grid>

                        <Grid item xs={12} mt={"20px"} md={8}>
                          {error && (
                            <Description1 textcolor="red" textsize="14px">
                              {error}
                            </Description1>
                          )}

                          <Description1
                            style={{ fontWeight: 400 }}
                            textsize="10px"
                          >
                            {t("termsMsg")}
                          </Description1>
                          <PrimaryContainedButton
                            style={{ borderRadius: 8 }}
                            fullWidth
                            onClick={() => handleSubmit()}
                          >
                            {t("createAccountButton")}
                          </PrimaryContainedButton>
                          <Box display={"flex"} justifyContent={"center"}>
                            <Description1
                              my={"12px"}
                              textsize="14px"
                              textcolor="rgba(0, 0, 0, 0.4)"
                            >
                              {t("signupText2")}{" "}
                            </Description1>
                          </Box>
                          <Box>
                            <SocialLoginButton onClick={googleLogin} fullWidth>
                              <Box
                                position={"relative"}
                                height={"16px"}
                                width={"15.2px"}
                              >
                                <Image
                                  alt="logo"
                                  src={getAssetUrl("redesign/googlelogo.svg")}
                                  layout="fill"
                                  objectFit="contain"
                                />
                              </Box>
                              {t("signupGoogleButton")}
                            </SocialLoginButton>
                          </Box>
                        </Grid>
                      </Grid>
                    )}
                  </Formik>
                </Grid>
              )}

              {showQuestionary && (
                <Grid container justifyContent={"center"}>
                  <Grid item xs={10} >
                    <Stack rowGap={1.25} maxWidth="380px" mx="auto" mt={2}>
                      {Questionaries(t).map((item, index) => (
                        <SecondaryButton1
                          key={index}

                          style={{
                            borderRadius: 8,
                            justifyContent: "flex-start",
                            background: questionaries.includes(item)
                              ? "rgba(0, 0, 0, 0.1)"
                              : "#FFFFFF",
                          }}
                          onClick={() => handleQuestionary(item)}
                        >
                          {item}
                        </SecondaryButton1>
                      ))}

                      <PrimaryContainedButton
                        style={{
                          marginTop: 8,
                        }}
                        onClick={handleSignup}
                      >
                        {t("finish")}
                      </PrimaryContainedButton>
                    </Stack>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            height={"610px"}
            display={["none", "none", "block"]}
          >
            <FeatureCarousel carouselHeight="610px" />
          </Grid>
        </Grid>
      </AuthContainer>
    </Grid>
  );
};

export default Register;
