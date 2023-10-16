import React, { useState, useEffect } from "react";

// import { useBlogDetail } from "./hook";
import Grid from "@mui/material/Grid";
import BlogHeader from "./component/BlogHeader";
import BlogDescriptionText from "./component/BlogDescriptionText";
import SignupCard from "./component/SignupCard";
import { DescriptionText2 } from "../commoncomponent/Text";
import RelatedBlogs from "./component/RelatedBlog";
import { useTranslation } from "react-i18next";
import ReadyToGetStarted from "../commoncomponent/ReadyToGetStarted";
import { SecondaryButton1 } from "../commoncomponent/Button";
import { useRouter } from "next/router";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";
import { useAppSelector } from "../../redux/hooks";
import { selectAuth } from "../../redux/auth";

import { getBlogList } from "./util";

const promise = getBlogList();

const BlogDetail = ({ blogDetail }) => {
  const router = useRouter();
  const { auth } = useAppSelector(selectAuth);
  const { t } = useTranslation("blog");

  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    promise.then((data) => {
      setBlogList(data);
    });
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <BlogHeader
          title={blogDetail.title}
          isDetailPage
          bgimage={[blogDetail.coverImageUrl, blogDetail.coverImageUrl]}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent={"center"}>
          <Grid px={"20px"} item maxWidth={"1140px"} mt={"50px"}>
            <SecondaryButton1
              onClick={() => router.push("/blog")}
              style={{ display: "flex", gap: 10 }}
            >
              <ChevronLeftSharpIcon />
              {t("backButton")}
            </SecondaryButton1>
            <Grid
              container
              columnSpacing={"64px"}
              mt={"50px"}
              justifyContent="center"
            >
              <Grid item xs={12} display={["none", "none", "block"]}>
                <SignupCard />
              </Grid>
              <Grid item xs={12} md={8}>
                <DescriptionText2
                  style={{ lineHeight: "200%" }}
                  textweight={700}
                  align={"justify"}
                >
                  {blogDetail.description}
                </DescriptionText2>
                <BlogDescriptionText
                  descriptionArray={blogDetail.blogData[0]}
                />
              </Grid>
              <Grid item xs={12} display={["none", "none", "block"]}>
                <RelatedBlogs
                  viewAllBlogs={() => router.push("/blog")}
                  handleBlogClick={(id) => router.push(`/blog/${id}`)}
                  blogsList={blogList.slice(0, 2)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        mt={"120px"}
        px={"24px"}
        bgcolor={"rgba(0, 0, 0, 0.05)"}
      >
        {!auth.authenticated && <ReadyToGetStarted />}
      </Grid>
    </Grid>
  );
};

export default BlogDetail;
