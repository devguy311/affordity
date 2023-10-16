import Styled from "@emotion/styled";
import { Box, Button, Tab } from "@mui/material";
import Grid from "@mui/material/Grid";


export const InvestmentGraphContainer = Styled(Box)`
    & .recharts-cartesian-axis-line {
        stroke: rgba(230, 230, 230, 1) !important;
    }

    background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.2);
/* Long Shadow */

box-shadow: 0px 100px 80px rgba(204, 203, 224, 0.37), 0px 64.8148px 46.8519px rgba(204, 203, 224, 0.280926), 0px 38.5185px 25.4815px rgba(204, 203, 224, 0.224741), 0px 20px 13px rgba(204, 203, 224, 0.185), 0px 8.14815px 6.51852px rgba(204, 203, 224, 0.145259), 0px 1.85185px 3.14815px rgba(204, 203, 224, 0.0890741);
border-radius: 24px;

    & .recharts-xAxis {
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
            text-align: center;
            text-transform: capitalize;
            color: #7A7A7A;
        } 
    }
`;

export const CardContainer = Styled(Grid)`
    filter: drop-shadow(0px 0px 32px rgba(0, 0, 0, 0.15));
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;


type TabButtonProps = {
    isactive?: number;
};
export const TabButton = Styled(Button) <TabButtonProps>`
    border-radius: 16px;
    background-color: ${(props) =>
        props.isactive ? "rgba(40, 132, 216, 0.05)" : "#fff"};
    color: #000;
    font-size: 14px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: -0.28px;
    padding: 16px 24px;
    text-transform: capitalize;
`;

export const GoalCardContainer = Styled(Box)`
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    background: #FFF;
    box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.15);
    padding: 27px 30px;
    height: 100%;

& .MuiTabs-root {
    border: 0px !important;
}

& .MuiTabs-indicator {
    display: none !important;
}

& .MuiTabs-flexContainer {
    gap: 1rem;
}

& .MuiButtonBase-root {
    min-height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: flex-start;
    text-transform: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding: 16px 24px;
    line-height: 1.2;

    letter-spacing: -0.02em;

    color: #000000;
    

    svg {
        margin-bottom: 0px !important;
        font-size: 24px;
    }
}
`;

type StyledTabProps = {
    isactive?: number;
};

export const StyledTab = Styled(Tab) <StyledTabProps>`
   ${(props) =>
        props.isactive &&
        `
    background: rgba(40, 132, 216, 0.05);
    border-radius: 16px;
   `}
`;

export const StyleTabContainer = Styled(Box)`

& .MuiTabs-root {
    border: 0px !important;
}

& .MuiTabs-indicator {
    display: none !important;
}

& .MuiTabs-flexContainer {
    gap: 1rem;
}

& .MuiButtonBase-root {
    min-height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: flex-start;
    text-transform: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding: 16px 24px;
    line-height: 1.2;

    letter-spacing: -0.02em;

    color: #000000;
    

    svg {
        margin-bottom: 0px !important;
        font-size: 24px;
    }
}
`