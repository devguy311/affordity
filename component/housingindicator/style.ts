import Styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

type IndicatorCardContainerProps = {
    isactive: number;
};
export const IndicatorCardContainer = Styled(Box) <IndicatorCardContainerProps>`
    cursor: pointer;
    background: #FFFFFF;
    border: ${(props) =>
        props.isactive ? "2px solid #2E86A1" : "1px solid rgba(0, 0, 0, 0.15)"} ;
    box-shadow: 0px 100px 80px rgba(204, 203, 224, 0.37), 0px 64.8148px 46.8519px rgba(204, 203, 224, 0.280926), 0px 38.5185px 25.4815px rgba(204, 203, 224, 0.224741), 0px 20px 13px rgba(204, 203, 224, 0.185), 0px 8.14815px 6.51852px rgba(204, 203, 224, 0.145259), 0px 1.85185px 3.14815px rgba(204, 203, 224, 0.0890741);
    border-radius: 8px;
`;

export const SavingAnnualCardContainer = Styled(Box)`
    background: #FFFFFF;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 32px rgba(0, 0, 0, 0.15));
`;

export const SliderRail = Styled.div`
    height: 10px;
    border-radius: 12px;
    cursor: pointer;
    width: 100%;
    background-color: #EAF1F8;
    z-index: 1;
    position: relative;
    top: 14px;

    @media (max-width: 768px) {
        top: 16px;
    }
`;

type CustomStyleThumbProps = {
    backgroundcolor: string;
    transformTooltip: number;
};

type CustomTooltipContainerProps = {
    isshowfirstactive?: number;
    transformTooltip?: number;
};

export const CustomTooltipContainer = Styled(Grid) <CustomTooltipContainerProps>`
    & .MuiSlider-root {
        color: #48B3D4;
        height: 10px;
        opacity: 1;
    }

    & .MuiSlider-rail {
        opacity: 1;
    }
    & .MuiSlider-track {
        color: #48B3D4;
    }
    & .MuiSlider-thumb {
        z-index: 2;
        background: transparent !important;
        &:nth-of-type(4) {
            background: transparent !important;
            :before {
                background: transparent;
                display: none;
            }
            & .MuiSlider-valueLabelOpen {
        background: transparent;
        text-align: center;
        border-radius: 10px;
        height: 65px;
        ${(props) =>
        props.transformTooltip &&
        `
        & :before {
            bottom: 65px;
            display: none;
        }`}
        }
    }
    ${(props) =>
        props.isshowfirstactive
            ? `
        &:nth-of-type(3) {
            & .MuiSlider-valueLabelOpen {
        background: #fff;
        padding: 15px;
        width: 112px;
        height: 65px;
        text-align: center;
        border-radius: 10px; 
        :before {
         display: none;
            
        }
    }
            :before {
                background: transparent;
                
            }
        }
        `
            : ` 
        &:nth-of-type(3) {
            & .MuiSlider-valueLabelOpen {
                visibility: hidden !important;
            }
            
            :before {
                visibility: hidden !important;
            } 
        }
        `};
}
    
`;

export const CustomStyleThumb = Styled.div<CustomStyleThumbProps>`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${(props) => props.backgroundcolor};
    position: absolute;
    margin-top: ${(props) => (!props.transformTooltip ? "-38px" : "70px")};
`;

export const CustomTooltipTextContainer = Styled(
    Box
) <CustomTooltipContainerProps>`
    ${(props) =>
        !props.transformTooltip &&
        `
        position: relative;
        top: 107px;
    `}
`;

type ThumbContainerProps = {
    bgcolor: string;
    transformTooltip?: number;
};
export const ThumbContainer = Styled.div<ThumbContainerProps>`
    height: 20px;
    width: 20px;
    border-radius: 30px;
    position: absolute;
    background: ${(props) => props.bgcolor};
    margin-top: ${(props) => (!props.transformTooltip ? "-46px" : "60px")};
`;

export const SavingsInfoCard = Styled(Grid)`
    border-radius: 10px;
    height: 100%;
    border: 1px #6C6C6C solid;
`;
