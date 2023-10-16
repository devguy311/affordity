import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import BlogHeader from "./component/BlogHeader";
import BlogList from "./component/BlogList";
import ReadyToGetStarted from "../commoncomponent/ReadyToGetStarted";
import { useAppSelector } from "../../redux/hooks";
import { selectAuth } from "../../redux/auth";

const BlogListing = ({ blogs }: any) => {
  const { auth } = useAppSelector(selectAuth);
  const { t } = useTranslation("blog");

  return (
    <Grid container>
      <Grid item xs={12}>
        <BlogHeader
          title={t("pageTitle")}
          bgimage={[
            "redesign/girl_money_mobile.webp",
            "redesign/girl_money.webp",
          ]}
        />
        <Grid container justifyContent={"center"}>
          <Grid px={"20px"} item maxWidth={"1140px"}>
            <BlogList list={blogs} />
          </Grid>
          <Grid
            item
            xs={12}
            mt={"80px"}
            px={"24px"}
            bgcolor={"rgba(0, 0, 0, 0.05)"}
          >
            {!auth.authenticated && <ReadyToGetStarted />}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogListing;
