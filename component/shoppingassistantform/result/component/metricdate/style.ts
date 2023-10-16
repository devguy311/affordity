import Styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const SliderContainer = Styled(Box)`
    .MuiSlider-thumb:is(:hover, .Mui-active) {
        display: none;
    }

    & .MuiSlider-rail {
        background: #2160CE;
        opacity: 0.15;
        height: 10px;
        border-radius: 100px;
    }

    & .MuiSlider-track {
        background: #2160CE;
        border-radius: 100px;
        height: 10px;
    }

    & .MuiSlider-thumb {
        box-shadow: none;
        width: 0px;
        height: 0px;
    }

    & .MuiSlider-valueLabel {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-size: 12px;
        line-height: 16px;
        background: transparent;
        border-radius: 5px;
        padding: 3px 8px;
        &:before {
            display: none;
        }
    }
`;