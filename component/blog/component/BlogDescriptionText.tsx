/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { List } from "@mui/material";
import { FC } from "react";
import { LinkWrapper } from "../style";
import { getAssetUrl } from "../../../util/SiteUtil";
import { DescriptionText2 } from "../../commoncomponent/Text";
import Image from "next/image";
import { useTranslation } from "react-i18next";



export type BlogDescriptionParaType = {
  title?: string;
  description?: string[];
  image?: string;
  quoteText?: QuoteType;
  blogLinks?: {
    title: string;
    url: string;
  }[];
};

type QuoteType = {
  quote?: string;
  name?: string;
  designation?: string;
};

type BlogDescriptionTextProps = {
  descriptionArray: BlogDescriptionParaType[];
};
const BlogDescriptionText: FC<BlogDescriptionTextProps> = ({
  descriptionArray,
}) => {
  const { t } = useTranslation("blog");
  return (
    <Grid>
      {descriptionArray.map((item) => (
        <Box mt={"50px"} key={Math.random()}>
          {item.title && (
            <DescriptionText2
              style={{ lineHeight: "200%" }}
              textsize="24px"
              textweight={700}
            >
              {item.title}
            </DescriptionText2>
          )}
          {item.description &&
            item.description?.map((descr) => (
              <Box mt={"10px"} key={`${Math.random()}`}>
                <DescriptionText2 style={{ lineHeight: "200%" }}>
                  {descr}
                </DescriptionText2>
              </Box>
            ))}
          {item.blogLinks && (
            <>
              <DescriptionText2
                textweight={600} sx={{ mt: 3 }}
              >
                {t("linkblogsTitle")}
              </DescriptionText2>
              <Box mt={"20px"}>
                <List disablePadding >
                  {item.blogLinks.map((link, i) => (

                    <span
                      onClick={() => window.open(`/blog/${link?.url}`, "_blank")}
                      style={{ cursor: "pointer" }}>
                      <Box mt={"20px"}>
                        <LinkWrapper >
                          <span >
                            <DescriptionText2
                              textweight={400}
                              textcolor="#787777">
                              {link?.title}
                            </DescriptionText2>
                          </span>
                          <Box
                            position={"relative"}
                            height={"16px"}
                            width={"16px"}
                          >
                            <Image
                              alt="logo"
                              src={getAssetUrl("redesign/newtab.svg")}
                              layout="fill"
                              objectFit="contain"
                            />
                          </Box>
                        </LinkWrapper>
                      </Box>
                    </span>

                  ))}
                </List>
              </Box>
            </>
          )
          }
        </Box >
      ))
      }
    </Grid >
  );
};

export default BlogDescriptionText;

