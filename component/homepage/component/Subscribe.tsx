import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/language";
import {
  StyledTextfieldContainer,
  SubscribeContainer,
  SubscribeFormCard,
} from "../style";
import {
  Description1,
  Heading1,
  SecondaryButton1,
} from "../../commoncomponent/Style";
import { useWindowSize } from "../../../hooks";
import axios from "axios";

import { subscription } from "../../../constant/apiConstant";

const Subscribe = () => {
  const { mobileView } = useWindowSize();
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const [successMessage, setSuccessMessage] = useState<string | null>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation("subscribe");
  const { lang } = useSelector(selectLanguage);


  const subscriberHandler = async (event) => {
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

      if (response.data === "error") {

        setIsLoading(false);
        setErrorMessage(t("subscribeMessage2"));


      } else {

        setIsLoading(false);
        setErrorMessage("");
        setSuccessMessage(t("subscribeMessage1"));

      }
    } else {
      setErrorMessage(t("subscribeMessage3"));
    }
  };

  return (
    <SubscribeContainer
      px={["0px", "0px", "64px"]}
      py={["0px", "0px", "98px"]}
      container
    >
      <Grid item xs={12}>
        <SubscribeFormCard
          justifyContent={"space-between"}
          container
          alignItems={"center"}
          py={["62px"]}
          px={["20px", "80px"]}
          sx={{ backgroundColor: !mobileView ? "#FFFFFF" : "" }}
        >
          <Grid item xs={12} md={6}>
            <Heading1 textcolor={mobileView ? "#fff" : ""} textsize="24px">
              {t("title")}
            </Heading1>
            <Description1
              mt={"10px"}
              textcolor={mobileView ? "#fff" : ""}
              textsize="12px"
              style={{ fontWeight: 300 }}
            >
              {t("description")}
            </Description1>
          </Grid>
          {successMessage ? (
            <Grid item xs={12} mt={"20px"}>
              <Description1
                textcolor={mobileView ? "#4cff4c" : ""}
                textsize="18px"
                style={{ fontWeight: 300 }}
              >
                {successMessage}
              </Description1>
            </Grid>
          ) : (
            <Grid item xs={12} md={5} mt={["12px", "12px", "0px"]}>
              <Grid container spacing={"16px"} alignItems={"center"}>
                <StyledTextfieldContainer item xs={12} md={4}>
                  <TextField
                    onChange={({ target }) => setFullName(target.value)}
                    value={fullName}
                    placeholder={t("fullname")!}
                    fullWidth
                  />
                </StyledTextfieldContainer>
                <StyledTextfieldContainer item xs={12} md={5}>
                  <TextField
                    style={{ marginTop: "" }}
                    onChange={({ target }) => setEmail(target.value)}
                    value={email}
                    placeholder={t("email")!}
                    fullWidth
                  />
                </StyledTextfieldContainer>

                {errorMessage && (
                  <Grid item xs={12}>
                    <Description1
                      textcolor={mobileView ? "#ff5050" : ""}
                      textsize="13px"
                      style={{ fontWeight: 300 }}
                    >
                      {errorMessage}
                    </Description1>
                  </Grid>
                )}
                <Grid item xs={12} md={3}>
                  {isLoading ? (
                    <SecondaryButton1
                      style={{
                        height: mobileView ? 40 : 37,
                        background: mobileView ? "#000" : "#000",
                        color: mobileView ? "#000" : "#000",
                        cursor: "no-drop",
                      }}
                      fullWidth
                    >
                      {t("pleasewaitMessage")}
                    </SecondaryButton1>
                  ) : (
                    <SecondaryButton1
                      style={{
                        height: mobileView ? 40 : 37,
                        background: mobileView ? "#000" : "#000",
                        color: mobileView ? "#fff" : "#fff",
                      }}
                      fullWidth
                      onClick={subscriberHandler}
                    >
                      {t("signupButton")}
                    </SecondaryButton1>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Description1
                    textcolor={mobileView ? "#fff" : ""}
                    textsize="12px"
                    style={{ fontWeight: 300 }}
                  >
                    {t("terms")}
                  </Description1>
                </Grid>
              </Grid>
            </Grid>
          )}
        </SubscribeFormCard>
      </Grid>
    </SubscribeContainer>
  );
};

export default Subscribe;
