import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import { BlogDataType } from "../../blog/type";
import BlogCard from "./BlogCard";
import { HeadingText } from "../../commoncomponent/Text";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/language";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

type RelatedBlogsProps = {
  blogsList: BlogDataType[];
  handleBlogClick: (blogId: number) => void;
  viewAllBlogs: () => void;
};

const RelatedBlogs: FC<RelatedBlogsProps> = ({
  blogsList,
  handleBlogClick,
  viewAllBlogs,
}) => {
  const { lang } = useSelector(selectLanguage);
  const router = useRouter();
  const locale = router?.locale ?? "en";
  const { t } = useTranslation("blog");

  return (
    <Grid justifyContent={"center"} pt={"50px"} container>
      <Grid item xs={12}>
        <Grid container>
          <Grid
            item
            maxWidth={["100%", "100%", "1200px"]}
            xs={12}
            gap={"20px"}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <HeadingText
              textsize="40px"
              style={{ lineHeight: "60px" }}
              textweight={700}
            >
              {t("readMore")}
            </HeadingText>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={"40px"}>
        <Grid
          flexDirection={"row"}
          container
          flexWrap={"nowrap"}
          alignItems={"stretch"}
          columnSpacing={"25px"}
        >
          {blogsList.map((item) => (
            <Grid key={item[locale].blogId} item width={"496px"}>
              <BlogCard
                handleReadMoreClick={() => handleBlogClick(item[locale].blogId)}
                blogInfo={item[locale]}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RelatedBlogs;
