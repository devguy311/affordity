import Styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const CardContainer = Styled(Grid)`
    background: #FFFFFF;
    box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    padding: 50px;
`;

type TextProps = {
    textcolor?: string;
    textsize?: string;
    textweight?: string;
};



export const LabelText = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: ${(props) => props.textcolor || "#000000"};
`;


export const DescriptionText = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: ${(props) => props.textsize || "16px"};    
    line-height: 22px;
    letter-spacing: 0.15px;
    color: ${(props) => props.textcolor || "#544F5A"};
`;

export const DescriptionText2 = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: ${(props) => props.textsize || "18px"};
    line-height: 22px;
    letter-spacing: 0.15px;
    color: ${(props) => props.textcolor || "#544F5A"};
`;

type ProgressCardContainerProps = {
    type: "error" | "success" | "warning";
};
export const ProgressCardContainer = Styled(Box) <ProgressCardContainerProps>`
    ${(props) =>
        props.type === "error" &&
        `
        background: #fceeee;
    `};
    ${(props) =>
        props.type === "success" &&
        `
        background: #e9f4e8;
    `};
    ${(props) =>
        props.type === "warning" &&
        `
        background: #f5f4e8;
    `};
    background: ${(props) => props.type} #289117;
    border-radius: 20px;
    padding: 25px;
`;

export const GraphColumn = Styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #534F59;
`;

export const ContainerImage = Styled.img`
    margin-top: 5px;
`;


export const PrimaryButton = Styled(Button)`
    background: #2E76B6;
    border-radius: 20px;
    max-width: 531px;
    height: 83px;
    color: #fff;
    padding: 25px 35px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;

    &:hover {
        background: #2E76B6;
        color: #FFFFFF;
    } 
`;

export const LinkText = Styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.02em;
    text-decoration-line: underline;
    color: #54A9E8;
    cursor: pointer;
`;

export const ErrorMessage = Styled.span`
  font-size: 12px;
  color: #f00;
  margin: 0;
  text-align: left;  
`;


export const RelatedBlogContainer = Styled(Grid)`
background: #F8FAFF;
`;

export const SubscribeForm = Styled.div`
  width: 100%;
  height: 200px;
  display: inline-flex;
  justify-content: center;
`;

// Text
// New
// with gradient
export const HomepageHeader = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => props.textsize || "52px"};
    line-height: 130%; /* 83.2px */
    letter-spacing: -0.64px;
    color: ${(props) => props.textcolor || "#000"};
    text-align: ${(props) => props.align || "left"}!important;
    // background: linear-gradient(180deg, #C0C0C0 0%, #1C1C1C 56.77%);
    // background-clip: text;
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
`;

// used for title description 
export const Description1 = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    text-align: ${(props) => props.align || "left"} !important;
    font-weight: ${(props) => props.textweight || 400};
    font-size: ${(props) => props.textsize || "16px"};
    line-height: 175%;
    color: ${(props) => props.textcolor || "#000"};
    @media (max-width: 900px) {
        line-height: 130%; /* 83.2px */
`;



export const Heading1 = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: ${(props) => props.textsize || "52px"};
    line-height: 115%;
    letter-spacing: -0.01em;
    color: ${(props) => props.textcolor || "#000"};
    @media (max-width: 900px) {
        font-size: ${(props) => props.textsize || "40px"};
    }
`;


export const Description3 = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 200%;
    color: ${(props) => props.textcolor || "#000"};
`;

// Buttons
type PrimaryButton1Props = {
    bgcolor?: string;
    labelcolor?: string;
};
export const PrimaryButton1 = Styled(Button) <PrimaryButton1Props>`
    width: 100%;
    height: 45px;
    background: ${(props) => props.bgcolor || "#000"} !important;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 175%;
    
    color: ${(props) => props.labelcolor || "#000"} !important;
    text-transform: none;
`;

type PrimaryButton2Props = {
    textsize?: string;
};

//used for My Finance black button
export const PrimaryButton2 = Styled(Button) <PrimaryButton2Props>`
    border-radius: 80px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.71) 0%, #000 100%);
    color: #FFF;
    font-family: Inter;
    font-size: ${(props) => props.textsize || "16px"};
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */
    text-transform: capitalize;
    display: flex;
    padding: 14px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;

    &:hover{
        opacity: 0.9;
        color: #FFF;
        }

`;

// use for "Learn more"
export const SecondaryButton1 = Styled(Button)`
    border-radius: 80px;
    background: #FFF;
    border: 1px solid rgba(0, 0, 0, 0.25);
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 100%; /* 16px */
    color: #000;
    text-transform: none;
    display: flex;
    padding: 14px 20px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    &:hover{
        border-radius: 80px;
        color: #000;
        background: rgba(0, 0, 0, 0.05);
        
        }

`;

//for apps (like "learn more" but black with sqaured edges)
export const SecondaryButton2 = Styled(Button)`
    border-radius: 8px;
    background: #000;
    border: 1px solid rgba(0, 0, 0, 0.25);
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 100%; /* 16px */
    color: #fff;
    text-transform: none;
    display: flex;
    padding: 14px 20px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    &:hover{
        border-radius: 80px;
        color: #000;
        background: rgba(0, 0, 0, 0.05);
        
        }

`;


export const PrimaryRoundButton = Styled(Button)`
    border: 2px solid #000000;
    border-radius: 80px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    text-transform: capitalize;
    color: #000000;
    height: 40px;
    width: 100%;
`;

export const PrimaryMobileButton = Styled(Button)`
    background: #285D74;
    border-radius: 8px;
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    text-transform: none;
    padding: 16px 32px;
`;

export const LabelText2 = Styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: #000000;
`;

export const SocialLoginButton = Styled(Button)`
    height: 100%;
    width: 100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    display: flex;
    gap: 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    height: 48px;
    text-transform: none;
`;

export const ColorLinkText = Styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: -0.03em;
    background: linear-gradient(180deg, #BE22FF 0%, #FF279C 48.96%, #FF981F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    cursor: pointer;
`;

