import Styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

type TextProps = {
    textcolor?: string;
    textsize?: string;
    textweight?: number;
    align?: string;
    hideline?: number;
};

export const GradientText = Styled.span`
    background: linear-gradient(180deg, #48C0A3 0%, #2783D8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-right: 10px;
`;

export const ColorText = Styled.span<TextProps>`
    color: ${(props) => props.textcolor || "#4B8F8F"};
`;

export const HeadingText = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => props.textsize || "52px"};
    line-height: 105%;
    letter-spacing: -0.02em;
    color: ${(props) => props.textcolor || "#000"};
    text-align: ${(props) => props.align || "left"};
`;



export const DescriptionText = Styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 200%;
    color: #000000;
`;

export const DescriptionText2 = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${(props) => props.textweight || 400};
    font-size: ${(props) => props.textsize || "16px"};
    line-height: 125%;
    letter-spacing: -0.02em;
    font-size: ${(props) => props.textsize || "16px"};
    color: ${(props) => props.textcolor || "#000"};
    text-align: ${(props) => props.align || "left"} !important;
    ${(props) =>
        props.hideline &&
        `
         overflow: hidden;
         text-overflow: ellipsis;
         display: -webkit-box;
         -webkit-line-clamp: ${props.hideline};
         -webkit-box-orient: vertical;
     `};

`;

export const GradientColorLinkText = Styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    cursor: pointer;
    /* or 18px */

    letter-spacing: -0.03em;

    background: linear-gradient(180deg, #BE22FF 0%, #FF279C 48.96%, #FF981F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;

export const DataGridColumnText = Styled(Typography)`
    color: #4F5459;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 17.5px */
    letter-spacing: -0.28px;
`;