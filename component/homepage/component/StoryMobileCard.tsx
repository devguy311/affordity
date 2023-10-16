import React, { FC } from "react";
import Link from "next/link";
import { StoryMobileCardContainer } from "../style";
import Grid from "@mui/material/Grid";
import { Description1, Heading1 } from "../../commoncomponent/Style";

type StoryMobileCardProps = {
  story: any;
};

const StoryMobileCard: FC<StoryMobileCardProps> = ({ story }) => {
  return (
    <Link href={`/blog/${story.blogId}`} passHref>
      <StoryMobileCardContainer
        p={"50px"}
        pt={["121px", "121px", "50px"]}
        mt={"16px"}
        bgimage={story.imageUrl}
      >
        <Grid item xs={12}>
          <Description1 textAlign={"left"} textcolor="#fff">
            {story["sub-header"]}
          </Description1>
          <Heading1
            textAlign={"left"}
            mt={"24px"}
            textcolor="#fff"
            textsize="32px"
          >
            {story.title}
          </Heading1>
          <Description1 textAlign={"left"} mt={"8px"} textcolor="#fff">
            {/* {moment(story.date).format("MMM dd, YYYY")}{" "} */}
            {story.postedOn}
          </Description1>
        </Grid>
      </StoryMobileCardContainer>
    </Link>
  );
};

export default StoryMobileCard;
