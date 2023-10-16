import Styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const BudgetColumn = Styled(Box)`
    border-radius: 10px;
    padding: 18px;
    min-width: 110px;

    @media (max-width: 900px) {
        min-width: 40px;
    }
`;