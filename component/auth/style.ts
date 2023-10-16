import Styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";

export const AuthContainer = Styled(Grid)`
    position: relative;

    background: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
`;

type CarouselContainerProps = {
    bgimage: string;
};
export const CarouselContainer = Styled(Box) <CarouselContainerProps>`
    background-image: url(${(props) => props.bgimage});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0px 16px 16px 0px;

    @media (max-width: 900px) {
      border-radius: 16px 16px 0px 0px;
 }
`;

export const StyledDialog = Styled(Dialog)`

    border-radius: 15px;
    overflow: hidden;

    & .MuiDialog-container > .MuiPaper-root {
        margin: 0;
        width:100%;
        background: transparent !important;
        box-shadow: none !important;
        // padding-top: 60px;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    & .MuiPaper-root {
      margin-top: 4rem;
    }
    
`;

export const StyledCloseIcon = Styled(CloseIcon)`
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;

    @media (min-width: 640px) {
        right: auto;
        left: 16px;
    }
`;
