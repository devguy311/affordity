import React from "react";
import Seo from "../../component/Seo";
import LoginRegister from "../../component/loginregister/LoginRegister";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const LoginInfo = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("home.title")}
        description={t("home.description") as string}
      />
      <Grid bgcolor={"#000"} py={"64px"} minHeight={"100vh"}>
        <LoginRegister />
      </Grid>
    </>
  );
};

export default LoginInfo;
