import Styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { getAssetUrl } from "../../util/SiteUtil";

type StyledBlogContainerProps = {
  bgimage?: string[];
};

const getImage = (img: string) => {
  if (img.includes("https://")) {
    return img;
  }
  return getAssetUrl(img || "redesign/girl_money.webp");
};
export const StyledBlogContainer = Styled(Grid) <StyledBlogContainerProps>`
    height: 50vh;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(
  props
) => getImage(props.bgimage![1] || "")});
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 900px) {
        padding: 24px;
        height: 250px;

        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(
  props
) => getImage(props.bgimage![0] || "")});
        background-size: cover;
        background-repeat: no-repeat;

  
 }
`;

export const BlogCardContainer = Styled(Box)`
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    cursor: pointer;

`;

export const QuoteContainer = Styled(Box)`
    background: #F8FAFF;
    border-radius: 10px;
    border-left: 7px solid #2160CE;
    padding: 34px;
`;

export const SignupCardContainer = Styled(Box)`
  width: 100%;
  max-width: 700px;

  margin-inline: auto;
  margin-bottom: 40px;
  display: flex;

  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  overflow: hidden;
  // position:sticky;
  // top:100px;
`;

export const RelatedBlogContainer = Styled(Grid)`
background: #F8FAFF;
`;

export const LinkWrapper = Styled("a")`

  display: flex;
  align-items: center;
  gap: 16px;
  color: #000000;

  span {
    font-size: 16px;
    font-weight: 600;
  }
`;
