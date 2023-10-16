import React from "react";
import { useTranslation } from "react-i18next";
import FeatureCarousel from "../auth/component/Carousel";
import { Box, Grid } from "@mui/material";
import { AuthContainer } from "../auth/style";
import { getAssetUrl } from "../../util/SiteUtil";
import {
  Description1,
  Heading1,
  PrimaryButton1,
} from "../commoncomponent/Style";
import { Formik } from "formik";
import { FormikTextfield } from "../commoncomponent/form/FormikTextfield";
import { loginRegiterInitialValue } from "./util";
import { RegisterFormSchema } from "./util";
import { useRouter } from "next/router";
import { useWindowSize } from "../../hooks";
import { useLoginRegister } from "./hook";
import Image from "next/image";

const LoginRegister = () => {
  const router = useRouter();
  const { mobileView } = useWindowSize();
  const { handleRegisterUser } = useLoginRegister();
  const { t } = useTranslation("signup");

  return (
    <Grid container justifyContent={"center"}>
      <AuthContainer item xs={10}>
        <Grid container>
          <Grid
            order={[2, 2, 1]}
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
              <Grid container justifyContent={"center"}>
                <Grid
                  item
                  xs={12}
                  px={["25px", "25px", "0px"]}
                  mt={"12px"}
                  md={9}
                >
                  <Heading1
                    textsize={mobileView ? "24px" : "32px"}
                    style={{ textAlign: "center" }}
                    width={"100%"}
                  >
                    {t("infoTitle")}
                  </Heading1>
                  <Description1
                    align={"center"}
                    textcolor="rgba(0, 0, 0, 0.5)"
                  >
                    {t("infoDescription")}
                  </Description1>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Formik
                  initialValues={loginRegiterInitialValue}
                  onSubmit={handleRegisterUser}
                  validationSchema={RegisterFormSchema(t)}
                >
                  {({ handleSubmit }) => (
                    <Grid
                      container
                      spacing={"5px"}
                      px={["16px", "40px", "40px"]}
                      justifyContent={"center"}
                    >
                      <Grid item xs={12} md={8}>
                        <Box mt={"20px"}>
                          <FormikTextfield
                            name={"salary"}
                            id={"salary"}
                            label={t("income")!}
                            variant={"outlined"}
                            fullWidth
                            textfieldtype="tertiary"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <Box mt={"5px"}>
                          <FormikTextfield
                            name={"savings"}
                            id={"savings"}
                            label={t("savings")!}
                            variant={"outlined"}
                            fullWidth
                            textfieldtype="tertiary"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <Box mt={"5 px"}>
                          <FormikTextfield
                            name={"capital"}
                            id={"capital"}
                            label={t("capital")!}
                            variant={"outlined"}
                            fullWidth
                            textfieldtype="tertiary"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} mt={"30px"} md={8}>
                        <PrimaryButton1
                          style={{ borderRadius: 8 }}
                          fullWidth
                          labelcolor="#fff"
                          onClick={() => handleSubmit()}
                        >
                          {t("saveButton")}
                        </PrimaryButton1>
                        <Grid item xs={12} mt={"20px"} md={12}>

                          <Description1
                            textsize="14px"
                            style={{ textAlign: "center" }}
                          >
                            <span
                              style={{
                                fontWeight: 700,
                                cursor: "pointer",
                                marginRight: 5,
                              }}
                              onClick={() => router.push("/")}
                            >
                              {t("clickhere")}
                            </span>
                            {t("skipText")}
                          </Description1>
                        </Grid>

                      </Grid>
                    </Grid>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} order={[1, 1, 2]} height={"680px"}>
            <FeatureCarousel carouselHeight={!mobileView ? "680px" : "214px"} />
          </Grid>
        </Grid>
      </AuthContainer>
    </Grid>
  );
};

export default LoginRegister;
