import Styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export const FaqContainer = Styled(Grid)`
    background: #F8FAFF;
`;

export const AccordianContainer = Styled(Box)`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 24px;
    padding-bottom: 0px;
`;

export const HeadingSVG = Styled.img`
    @media screen and (max-width: 900px) {
        display: none;
    }`;
