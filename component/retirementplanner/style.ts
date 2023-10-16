import Styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

type StyledOptionProps = {
  isactive: number;
};
export const StyledOption = Styled(Grid) <StyledOptionProps>`
    width: 94px;
    height: 60px;
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
display: flex;
align-items: center;
justify-content: center;
line-height: 16px;
text-align: center;
letter-spacing: -0.02em;
color: #000000;
    cursor: pointer;
    align-items: center;
    color: ${(props) => (props.isactive ? "#fff" : "#000")};
    
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
    ${(props) =>
    !props.isactive
      ? `
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    `
      : `
        background: #000;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    `};
    img {
        position: relative;
        top: -20px;
        left: 28px;
        position: absolute;
        margin-left: 117px;
        margin-top: -33px;
    }
    & .MuiInputBase-input {
        font-weight: 400 !important;
        font-size: 16px !important;
        text-align: center !important;
        color: #8a868f !important;
        line-height: 28px !important;        
        letter-spacing: 0.4px !important;
    }
`;

export const GraphCard = Styled(Box)`
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.15);
box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.15);
border-radius: 8px;

`;

export const GraphContainer = Styled(Grid)`
    & .recharts-text {
        font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;

color: #7A7A7A;
    }
    & .recharts-cartesian-axis-line {
        stroke: #E6E6E6 !important;
    }

    & .recharts-responsive-container {
        position: relative;
    }
    @media (max-width: 768px) and (min-width: 600px) {
      width: 300px;
      position: relative;
      right: 35%;
    }
    @media (max-width: 768px) and (min-width: 700px) {
      width: 400px;
      position: relative;
      right: 20%;
    }
    @media (max-width: 486px) {
      width: 450px;
      position: relative;
      right: 15%;
    }
    @media (max-width: 472px) {
      width: 300px;
      position: relative;
      right: 30%;
    }
`;
