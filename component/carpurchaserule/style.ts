import Styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const CarCardContainer = Styled(Box)`
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    height: 100%;
`;

export const SavingChartContainer = Styled(Grid)`
    & .recharts-wrapper {
        height: 159px !important;
    }
    & .recharts-text {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.15px;
        text-transform: uppercase;
    }
    @media (max-width: 768px) {
        & .recharts-wrapper {
            right: 40px !important;
        }
    }
`;

export const CarGraphContainer = Styled(SavingChartContainer)`
  & .recharts-wrapper {
        right: 20px
    }
`;

export const AreaGraphContainer = Styled(Grid)`
    & .recharts-cartesian-axis-line {
        stroke: rgba(230, 230, 230, 1) !important;
    }

    & .recharts-xAxis {
        & .recharts-text {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;
            text-align: right;
            text-transform: capitalize;

            color: #5B6267;
     
        }
    }
    
    & .recharts-yAxis {
        & .recharts-text {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;
            text-align: right;
            text-transform: capitalize;
            color: #5B6267;

        } 
    }
`;

export const GraphOuter = Styled(Grid)`
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    gap: 46px;
    align-items: flex-end;
`;

type AffordifiedCardContainerProps = {
    isactive: number;
};
export const AffordifiedCardContainer = Styled(
    Box
) <AffordifiedCardContainerProps>`
    background: ${(props) => (props.isactive ? "#F8FAFF" : "#FFFFFF")};
    border: 1px solid ${(props) => (props.isactive ? "#2160CE" : "#54A9E8")};
    border-radius: 20px;
    height: 100%;
    cursor: pointer;
`;

export const StyledAffordifiedList = Styled.ul`
    list-style-type: disc !important;
    padding-left: 0px !important;
    li {
        text-align: left;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: -0.02em;
        color: #333333;
        margin-top: 10px;
    }
`;

export const MetricCardContainer = Styled(Box)`
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 19px;
    height: 100%;
`;

export const AmountCard = Styled(Grid)`
    background: #FFFFFF;
    border: 1px solid #C7CAD8;
    padding: 10px 15px;
    border-radius: 10px;
    width: 250px;
`;

export const CircularProgressContainer = Styled(Grid)`
    & .CircularProgressbar-text {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 32px;
        letter-spacing: 0.15px;
        color: #2160CE;
        transform: translate(-16%, 3px);
    }
`;

export const YAxisMonthlySavingsContainer = Styled(Grid)`
    border-right: 1px rgb(204, 214, 235) solid;
`;

export const SavingGraphContainer = Styled(SavingChartContainer)`
  & .recharts-wrapper {
        top: 13px;
        right: 40px
    }
`;

export const Box1 = Styled(Grid)`
    width: 100px;
    display: flex;
`;

export const ValueContainer = Styled(Grid)`
    flex: 1;
    display: flex;
`;

export const ValueText = Styled(Typography)`
    position: relative;
    margin-right: 25px;
    margin-left: 25px;
    top: -10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-align: right;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
`;

export const ValueDash = Styled(Grid)`
    flex: 1;
    border-top: 1px dashed rgba(58, 53, 65, 0.4);
`;

export const ColumnContainer = Styled(Grid)`
    width: 9px;
    border-radius: 20px;
`;

export const ContainerImage = Styled.img`
    margin-top: 5px;
`;
