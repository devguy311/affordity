import React, { FC } from "react";
import { StyledBlogContainer } from "../style";
import { HeadingText } from "../../commoncomponent/Text";
import Grid from "@mui/material/Grid";
import { useWindowSize } from "../../../hooks";

type BlogHeaderProps = {
  bgimage: string[];
  title: string;
  isDetailPage?: boolean;
};
const BlogHeader: FC<BlogHeaderProps> = ({ bgimage, title, isDetailPage }) => {
  const { mobileView } = useWindowSize();
  return (
    <StyledBlogContainer
      alignItems={"center"}
      justifyContent={"center"}
      container
      bgimage={bgimage}
    >
      <Grid item maxWidth={"1104px"}>
        <HeadingText
          textsize={mobileView ? "30px" : undefined}
          style={{ lineHeight: "115%" }}
          textcolor="#fff"
          align={isDetailPage ? "center" : "left"}
        >
          {title}
        </HeadingText>

      </Grid>
    </StyledBlogContainer>
  );
};

export default BlogHeader;
