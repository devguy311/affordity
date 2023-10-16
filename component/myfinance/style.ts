import Styled from "@emotion/styled";
import { Accordion, Box, Button, TextField, Typography } from "@mui/material";

export const SidebarContainer = Styled(Box)`
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.15);
    padding: 20px;
`;

export const StyledAccordian = Styled(Accordion)`
    border: 0;
    box-shadow: none;

    & .MuiAccordionSummary-root {
        padding: 0;
        height: 40px;
    }
    &::before {
        display: none;
    }

    & .MuiAccordionSummary-content {
        margin: 0
    }
`;

export const StyledSearchTextfield = Styled(TextField)`
    border-radius: 16px;
border: 1px solid #EDEDED;
background: #FAFAFA;

& .MuiInputBase-root {
    outline: none !important;
}
input {
    color: #989EA4;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: -0.28px;
    border: 0 !important;
}
& .MuiOutlinedInput-notchedOutline {
    border: 0px !important;
    outline: none;
}
`;

export const SwitcherContainer = Styled(Box)`
    border-radius: 8px;
    border: 1px solid #EDEDED;
    background: #FAFAFA;
    display: flex;
    padding: 4px;
    align-items: flex-start;
    gap: 8px;
    flex-shrink: 0;
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.10);
`;

type SwitchButtonTabProps = {
    isactive: number;
};
export const SwitchButtonTab = Styled(Button) <SwitchButtonTabProps>`
    border-radius: 8px;
    font-family: Inter;
    font-size: 14px;
    text-transform: none;
    font-style: normal;
    font-weight: 400;
    padding: 4px;
    width: 
    line-height: 125%; /* 17.5px */
    letter-spacing: -0.28px;
    ${(props) =>
        props.isactive
            ? `
        background:  #000 !important;
        color: #FFF;
        `
            : `
            background: inherit;
            color: #4F5459;
    `};
    
`;

export const FinanceCardContainer = Styled(Box)`
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    background: #FFF;
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const GraphLabelText = Styled.p`
color: #FFF;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 125%; /* 17.5px */
letter-spacing: -0.28px;
text-align: center;
`;

export const LineChartContainer = Styled(Box)`
border-radius: 16px;
background: #FFF;
padding: 35px;
box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.10);
`;

export const AddBankButton = Styled(Box)`
  border-radius: 8px;
  background: #ffff;
  color: #ffff; 
  cursor: pointer;
  padding: 8px 16px;
`;