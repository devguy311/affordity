import { Grid } from "@mui/material";
import React from "react";
import Seo from "../../component/Seo";
import Login from "../../component/auth/Login";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("home.title")}
        description={t("home.description") as string}
      />
      <Grid bgcolor={"#000"} py={"64px"} minHeight={"100vh"}>
        <Login />
      </Grid>
    </>
  );
};
export default LoginPage;
