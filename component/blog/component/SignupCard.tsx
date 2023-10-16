/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import { SignupCardContainer } from "../style";
import { getAssetUrl } from "../../../util/SiteUtil";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { FormikTextfield } from "../../commoncomponent/form/FormikTextfield";
import { PrimaryContainedButton } from "../../commoncomponent/Button";
import va from "@vercel/analytics";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/language";

import { subscription } from "../../../constant/apiConstant";

const SignupCard = () => {
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { lang } = useSelector(selectLanguage);


  const { t } = useTranslation("blog");

  const subscriberHandler = async (event) => {
    event.preventDefault();

    if (email && fullName) {
      setIsLoading(true);
      setErrorMessage("");

      const response: any = await axios.post(
        subscription,
        { email, full_name: fullName, lang },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setIsLoading(false);
        setErrorMessage("");
        setSuccessMessage(t("signupMsg1")!);
        va.track("login");
      } else {
        setIsLoading(false);
        setErrorMessage(t("signupMsg2")!);
      }
    } else {
      setErrorMessage(t("signupMsg3")!);
    }
  };

  return (
    <SignupCardContainer>
      <Box
        sx={{ position: "relative", borderRadius: "16px 16px 0px 0px" }}
        width={"100%"}
      >
        <Image
          src={getAssetUrl("redesign/signupcard-blogs.webp")}
          alt={"calculator"}
          layout="fill"
          objectFit="contain"
        />
      </Box>

      <Box p={"24px"}>
        <DescriptionText2
          style={{ lineHeight: "100%" }}
          textcolor="rgba(0, 0, 0, 0.7)"
          align="center"
        >
          {t("signupCard")}
        </DescriptionText2>
        <Box mt={"16px"}>
          <Formik initialValues={{ email: "" }} onSubmit={subscriberHandler}>
            {() => (
              <Grid container>
                {successMessage ? (
                  <Grid item xs={12} mt={"20px"}>
                    <p
                      style={{
                        fontWeight: 300,
                        color: "#08bb79",
                        fontSize: "18px",
                      }}
                    >
                      {successMessage}
                    </p>
                  </Grid>
                ) : (
                  <>
                    <Grid item xs={12}>
                      <FormikTextfield
                        textfieldtype="tertiary"
                        name={"fullname"}
                        id={"fullname"}
                        fullWidth
                        placeholder={t("field1")!}
                        onChange={({ target }) => setFullName(target.value)}
                        value={fullName}
                      />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "15px" }}>
                      <FormikTextfield
                        textfieldtype="tertiary"
                        name={"email"}
                        id={"email"}
                        fullWidth
                        placeholder={t("field2")!}
                        onChange={({ target }) => setEmail(target.value)}
                        value={email}
                      />
                    </Grid>
                    {errorMessage && (
                      <Grid item xs={12} mt={"20px"}>
                        <p
                          style={{
                            fontWeight: 300,
                            color: "#ff5050",
                            fontSize: "14px",
                            textAlign: "center",
                          }}
                        >
                          {errorMessage}
                        </p>
                      </Grid>
                    )}
                    <Grid item xs={12} mt={"8px"}>
                      {isLoading ? (
                        <PrimaryContainedButton
                          fullWidth
                          style={{
                            cursor: "no-drop",
                          }}
                        >
                          Please Wait...
                        </PrimaryContainedButton>
                      ) : (
                        <PrimaryContainedButton
                          fullWidth
                          onClick={subscriberHandler}
                        >
                          {t("submitButton")}
                        </PrimaryContainedButton>
                      )}
                    </Grid>
                  </>
                )}
              </Grid>
            )}
          </Formik>
        </Box>
      </Box>
    </SignupCardContainer>
  );
};

export default SignupCard;
