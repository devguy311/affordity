import Styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const MetricCardContainer = Styled(Box)`
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 19px;
`;

export const AmountCard = Styled(Grid)`
    background: #FFFFFF;
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

export const YAxisMonthlySavingsContainer = Styled(Grid)`
    border-right: 1px solid #E8E8E8;
`;

export const SavingGraphContainer = Styled(SavingChartContainer)`
  & .recharts-wrapper {
        top: 13px;
        right: 40px
    }

`;

export const SavingVerticalGraphContainer = Styled(SavingChartContainer)`
  
  & .recharts-wrapper {
        top: 13px;
        right: 40px
    }

& .recharts-surface {
    height: 300px;
}    
`;

type ShoppingTabButtonProps = {
    isactive?: number;
};
export const ShoppingTabButton = Styled(Box) <ShoppingTabButtonProps>`
    
    background: ${(props) => (props.isactive ? "#4B8F8F" : "#fff")} ;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 32px;
    max-width: 331px;
    cursor: pointer;
    &:hover {
        background: rgba(75,143,143, 0.1);
    }}
`;

export const GraphOuter = Styled(Grid)`
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    gap: 46px;
    align-items: flex-end;
`;
