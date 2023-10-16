/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";
import React from "react";
import { useTranslation } from "react-i18next";
import { AuthContainer } from "./style";
import { loginInitialValue, loginValidationSchema } from "./util";
import {
  Description1,
  PrimaryButton1,
  SocialLoginButton,
} from "../commoncomponent/Style";
import { Heading1 } from "../commoncomponent/Style";
import Image from "next/image";
import { getAssetUrl } from "../../util/SiteUtil";
import FeatureCarousel from "./component/Carousel";
import { Formik } from "formik";
import { FormikTextfield } from "../commoncomponent/form/FormikTextfield";
import { useLogin } from "./hook";
import Visibility from "@mui/icons-material/Visibility";
import { useWindowSize } from "../../hooks";
import { StyledCloseIcon } from "./style";

interface IProps {
  canClose?: boolean;
  handleClose?: () => void;
}

const Login = ({ canClose, handleClose }: IProps) => {
  const {
    showPassword,
    router,
    error,
    setShowPassword,
    googleLogin,
    handleLoginUser,
  } = useLogin();

  const { mobileView } = useWindowSize();

  const { t } = useTranslation("login");

  return (
    <Grid container justifyContent={"center"}>
      <AuthContainer item xs={12} md={9}>
        {canClose && <StyledCloseIcon onClick={handleClose} />}

        <Grid container>
          <Grid
            // order={[2, 2, 1]}
            item
            xs={12}
            md={6}
            pb={mobileView ? "30px" : "0px"}
          >
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
              <Grid item xs={12} px={["25px", "25px", "0px"]} mt={"24px"}>
                <Heading1
                  textsize="32px"
                  style={{ textAlign: "center" }}
                  width={"100%"}
                >
                  {t("loginTitle")}
                </Heading1>
                <Description1 align={"center"} textcolor="rgba(0, 0, 0, 0.5)">
                  {t("logingsubTitle")}
                </Description1>
              </Grid>

              <Grid item xs={12}>
                <Formik
                  initialValues={loginInitialValue}
                  onSubmit={handleLoginUser}
                  validationSchema={loginValidationSchema}
                >
                  {({ handleSubmit }) => (
                    <Grid
                      container
                      spacing={"5px"}
                      px={"40px"}
                      justifyContent={"center"}
                    >
                      <Grid item xs={12} lg={8}>
                        <Box mt={"24px"}>
                          <FormikTextfield
                            name={"email"}
                            id={"email"}
                            type={"email"}
                            label={t("email")!}
                            variant={"outlined"}
                            fullWidth
                            textfieldtype="tertiary"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <Box mt={"5px"}>
                          <FormikTextfield
                            name={"password"}
                            id={"password"}
                            label={t("password")!}
                            variant={"outlined"}
                            textfieldtype="tertiary"
                            fullWidth
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      setShowPassword((prev) => !prev)
                                    }
                                  >
                                    {showPassword ? (
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
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        mt={"1px"}
                        md={8}
                        justifyContent={"center"}
                      >
                        <Description1
                          textsize={"10px"}
                          onClick={() => {
                            router.push("/reset-password");
                            setShowPassword(false);
                          }}
                          textcolor="#000"
                          align={"right"}
                          textweight="600"
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          {t("forgotPwd")}
                        </Description1>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        mt={"30px"}
                        md={8}
                        justifyContent={"center"}
                      >
                        {error && (
                          <Description1 textcolor="red" textsize="14px">
                            {error}
                          </Description1>
                        )}
                        <PrimaryButton1
                          style={{ borderRadius: 8 }}
                          fullWidth
                          labelcolor="#fff"
                          onClick={() => handleSubmit()}
                        >
                          {t("loginButton")}
                        </PrimaryButton1>

                        <Box mt={"12px"}>
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
                            {t("googleLogin")}
                          </SocialLoginButton>
                        </Box>
                      </Grid>
                      {/* <Grid item xs={12} mt={"30px"}>
                        <Description1 textsize="14px" align={"center"}>
                          {t("noAccountButton")}{" "}
                          <span
                            style={{ fontWeight: 700, cursor: "pointer" }}
                            onClick={() => router.push("/signup")}
                          >
                            {t("signUp")}
                          </span>
                        </Description1>
                      </Grid> */}
                    </Grid>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Grid>
          {/* order={[1, 1, 2]} */}
          <Grid item xs={12} md={6} display={["none", "none", "block"]}>
            <FeatureCarousel carouselHeight={!mobileView ? "560px" : "214px"} />
          </Grid>
        </Grid>
      </AuthContainer>
    </Grid>
  );
};

export default Login;
