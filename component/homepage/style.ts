import Styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getAssetUrl } from "../../util/SiteUtil";
import { Grid, TextField } from "@mui/material";

export const StyledMotto1 = Styled(Box)`
${() => `
    
    background: url(${getAssetUrl("redesign/guide.webp")})`};
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    /* justify-content: flex-end; */
    border-radius: 16px;display: flex;
    justify-content: center;
    align-items: center;
    padding: 74px 38px 24.5px 38px;
`;

export const StyledMotto1Text = Styled(Typography)`
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 125%;
        text-align: center !important;
        letter-spacing: -0.02em;
        color: transparent;
`;

export const StyledMoto2Container = Styled(Box)`
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    padding: 53px 19px 28.5px 19px;
`;

export const StyledMottoText = Styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 125%;
    text-align: center !important;
    letter-spacing: -0.02em;
    background: linear-gradient(180deg, #6CB7D2 0%, #285D74 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media (max-width: 900px) {
        font-size: 24px;
    }
`;

export const StyledMotto3Container = Styled(Box)`
${() => `
    background: url(${getAssetUrl("redesign/freedom.webp")})
`};
    background-repeat: no-repeat;
    background-size: cover;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.15));
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    /* justify-content: flex-end; */
    padding: 110px 34px 57px 34px;
    p {
        font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 125%;
    text-align: center !important;
    letter-spacing: -0.02em;
    color: #FFFFFF;
}
@media (max-width: 900px) {
    p {
        font-size: 24px;
    }
        
    }
`;

export const StyledMotto4Container = Styled(Box)`
    ${() => `
    background: url(${getAssetUrl("/redesign/interactive.webp")})
`};
background-size: cover;
background-repeat: no-repeat;
min-height: 220px;
padding: 57px 67px 40px 68px;
filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.15));
border-radius: 16px;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const StyledMotto4Text = Styled(Typography)`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 125%;
text-align: center !important;
letter-spacing: -0.02em;
color: #FFFFFF;
@media (max-width: 900px) {
        font-size: 24px;
    }
`;
export const StyledMoto5Container = Styled(Box)`
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    padding: 85px 45px 24px 35px;
    height: 349px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
`;

export const LinearGradientText = Styled(Typography)`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 125%;
text-align: center;
letter-spacing: -0.02em;
background: linear-gradient(180deg, #6CB7D2 0%, #285D74 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
@media (max-width: 900px) {
        font-size: 24px;
    }
`;

type SiteFeatureCardContainerProps = {
    bgimage: string;
};
export const SiteFeatureCardContainer = Styled(
    Grid
) <SiteFeatureCardContainerProps>`
background-image: ${(props) =>
        `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`};
border-radius: 16px;
background-size: cover;
background-repeat: no-repeat;
height: 432px;
cursor:pointer;
&:hover {
    background-image: ${(props) => `url(${props.bgimage})`};
};
`;

export const SubscribeContainer = Styled(Grid)`
background: ${() => `url(${getAssetUrl("redesign/subscribeback.webp")})`};
height: 394px;
@media (max-width: 900px) {
    background: ${() =>
        `url(${getAssetUrl("redesign/subscribemobileback.webp")})`};
    height: 500px;
    background-size: cover;
background-repeat: no-repeat;
    };
`;

export const SubscribeFormCard = Styled(Grid)`
    // background: #FFFFFF;
    border-radius: 16px;
    
`;

export const StyledTextfieldContainer = Styled(Grid)`
 fieldset {
    border: 0px;
 };
 input {
    border: 0px !important;
    font-family: 'Inter' !important;
    font-style: normal !important;
    font-weight: 300 !important;
    font-size: 12px !important;
    line-height: 175% !important;
    color: #000000 !important;
 };
 
    & .MuiInputBase-root {
        border: 1px solid rgba(0, 0, 0, 0.4) !important;
        border-radius: 40px !important;
        height: 37px;
    }


    @media (max-width: 900px) {
        & .MuiInputBase-root {
            border: 1px solid rgba(255, 255, 255, 0.4) !important;
            height: 37px !important;   
        }
        input {
            color: #fff !important;
        }

    };
`;

type ActiveCarouselContainerProps = {
    bgimage: string;
};
export const ActiveCarouselContainer = Styled(
    Grid
) <ActiveCarouselContainerProps>`


    background-image: ${(props) =>
        `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`};
    border-radius: 16px;
    min-height: 450px;
    min-width: 682px;
    padding: 50px;
    background-size: cover;
    background-repeat: no-repeat;
    cursor:pointer;
    &:hover {
        background-image: url(${(props) => props.bgimage});
      }
`;

type StoryMobileCardContainerProps = {
    bgimage: string;
};
export const StoryMobileCardContainer = Styled(
    Grid
) <StoryMobileCardContainerProps>`
background-image: ${(props) =>
        `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`};
      border-radius: 16px;
      min-height: 320px;
      background-size: cover;
    background-repeat: no-repeat;
    &:hover {
        background-image: url(${(props) => props.bgimage});
      }
  `;

export const ScrollBottomText = Styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: -0.03em;
    color: #FFFFFF;
  `;

type LearnMoreTextProps = {
    textcolor?: string;
};
export const LearnMoreText = Styled(Typography) <LearnMoreTextProps>`
    font-family: 'Inter' !important;
    font-style: normal !important;
    font-weight: 700 !important;
    font-size: 16px !important;
    line-height: 125% !important;
    letter-spacing: -0.02em !important;
    color: ${(props) => props.textcolor || "#000"} !important;
    cursor: pointer;
`;