import Styled from "@emotion/styled";
import { Box, Tab } from "@mui/material";

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
    padding: 16px;
    line-height: 1.2;
    /* identical to box height, or 20px */

    letter-spacing: -0.02em;

    color: #000000 !important;
    svg {
        margin-bottom: 0px !important;
    }
    @media (max-width: 500px) {
        padding: 8px 8px;
        min-width: 60px;
    }
        
}
`;

type StyledTabProps = {
    isactive?: number | boolean;
};
export const StyledTab = Styled(Tab) <StyledTabProps>`
   ${(props) =>
        props.isactive &&
        `
   background: #EDF4F4;
   border-radius: 16px;

}
   `};
   
`;

export const ProfileCardContainer = Styled(Box)`
background: #FFFFFF;
box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.15);
border-radius: 16px;
padding: 64px;

@media (max-width: 900px) {
    padding: 32px;
}
`;
