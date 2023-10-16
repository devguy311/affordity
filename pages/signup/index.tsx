import { Grid } from '@mui/material'
import React from 'react'
import Seo from "../../component/Seo";
import Register from '../../component/auth/Register'
import { useTranslation } from "react-i18next";

const SignupPage = () => {
  const { t } = useTranslation("seo");

  return (
    <>
      <Seo
        title={t("home.title")}
        description={t("home.description") as string}
      />

      <Grid bgcolor={"#000"} py={"64px"} minHeight={"100vh"}>
        <Register />
      </Grid>
    </>
  )
}

export default SignupPage