/* eslint-disable @next/next/no-img-element */
import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import { BlogCardContainer } from "../style";
import { BlogDataType } from "../type";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { ChevronRightSharp } from "@mui/icons-material";
import { useTranslation } from "react-i18next";


const BlogCard: FC<any> = ({ blogInfo, handleReadMoreClick }) => {
  const { t } = useTranslation("blog");
  return (
    <BlogCardContainer height={"100%"} onClick={handleReadMoreClick}>
      <Grid container>
        <Grid item xs={12}>
          <img
            style={{ height: "100%", width: "100%" }}
            src={blogInfo.imageUrl}
            alt={blogInfo.title}
            loading="lazy"
            width={456}
            height={307}
          />
        </Grid>
        <Grid item xs={12} p={"30px"}>
          <Grid container>
            <Grid item xs={12} mt={"15px"}>
              <DescriptionText2 textsize="32px" textweight={600}>
                {blogInfo.title}
              </DescriptionText2>
            </Grid>
            <Grid item xs={12} mt={"15px"}>
              <DescriptionText2
                style={{ lineHeight: "200%" }}
                hideline={3}
                textcolor="rgba(0, 0, 0, 0.5)"
              >
                {blogInfo.description}
              </DescriptionText2>
            </Grid>
            <Grid
              mt={"20px"}
              item
              xs={12}
              display={"flex"}
              justifyContent={"flex-start"}
            >
              <DescriptionText2 style={{ cursor: "pointer" }} textsize="14px">
                {t("readMore")} <ChevronRightSharp style={{ fontSize: "16px" }} />
              </DescriptionText2>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </BlogCardContainer>
  );
};

export default BlogCard;
