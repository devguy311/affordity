import React, { FC } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ActiveCarouselContainer } from "../style";
import Image from "next/image";
import { Description1, Heading1 } from "../../commoncomponent/Style";
import Grow from "@mui/material/Grow";

type CarouselStoriesProps = {
  story: any;
  isActive: boolean;
};
const CarouselStories: FC<CarouselStoriesProps> = ({ isActive, story }) => {
  if (isActive) {
    return (
      <Link href={`/blog/${story.blogId}`} passHref>
        <a>
          <Grow in style={{ transitionDelay: "0ms" }}>
            <ActiveCarouselContainer bgimage={story.imageUrl} container>
              <Grid item xs={12}>
                <Description1 textcolor="#fff">
                  {story["sub-header"]}{" "}
                </Description1>
                <Heading1 mt={"24px"} textcolor="#fff" textsize="32px">
                  {story.title}
                </Heading1>
                <Description1 mt={"8px"} textcolor="#fff">
                  {story.postedOn}
                </Description1>
                <Description1
                  mt={"24px"}
                  textsize="14px"
                  textweight="500"
                  textcolor="#fff"
                >
                  {story.description}
                </Description1>
              </Grid>
            </ActiveCarouselContainer>
          </Grow>
        </a>
      </Link>
    );
  }
  return (
    <Link href={`/blog/${story.blogId}`} passHref>
      <a>
        <Grid container>
          <Grid item xs={12}>
            <Box position={"relative"} height={"249px"} width={"331px"}>
              <Image
                src={story.imageUrl}
                alt={story.title}
                layout="fill"
                objectFit="contain"
              />
            </Box>
            <Heading1 mt={"24px"} textsize="16px">
              {story.title}
            </Heading1>
            <Description1 textsize="14px" mt={"8px"}>
              {story.postedOn}
            </Description1>
          </Grid>
        </Grid>
      </a>
    </Link>
  );
};

export default CarouselStories;
