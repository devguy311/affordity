import Styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const PrimaryContainedButton = Styled(Button)`
    background: #000000;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.02em;
    text-transform: none;
    padding: 14px 24px;
    color: #FFFFFF;
    &:hover {
        background: rgba(0, 0, 0, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }
    &:disabled {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }
    &:active {
        border: 2px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        background: #fff;
    }
`;

type PrimaryButton1Props = {
    bgcolor?: string;
    labelcolor?: string;
};
export const PrimaryButton1 = Styled(Button) <PrimaryButton1Props>`
    width: 100%;
    height: 45px;
    background: ${(props) => props.bgcolor || "#000"} !important;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 175%;
    
    color: ${(props) => props.labelcolor || "#000"} !important;
    text-transform: none;
`;


type PrimaryButton2Props = {
    textsize?: string;
};

//used for My Finance black button
export const PrimaryButton2 = Styled(Button) <PrimaryButton2Props>`
    border-radius: 80px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.71) 8.40%, #000 100%);
    color: #FFF;
    font-family: Inter;
    font-size: ${(props) => props.textsize || "16px"};
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */
    text-transform: capitalize;
    display: flex;
    padding: 14px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;

    &:hover{
        opacity: 0.8;
        color: #FFF;
        }

`;


type ButtonProps = {
    bordercolor?: string;
    labelcolor?: string;
    hoverbackground?: string;
    disabled?: boolean;
    bgcolor?: string;
};

// use for "Learn more"
export const SecondaryButton1 = Styled(Button) <ButtonProps>`
    border-radius: 80px;
    background: #FFF;
    border: 1px solid rgba(0, 0, 0, 0.25);
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 100%; /* 16px */
    color: ${(props) => props.labelcolor || "#000"};
    text-transform: none;
    padding: 14px 20px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    opacity: ${(props) => (props.disabled === true ? "0.5" : "1")};
    cursor: ${(props) => (props.disabled === true ? "not-allowed" : "pointer")};

    &:hover{
        border-radius: 80px;
        color: #000;
        background: rgba(0, 0, 0, 0.05);
        
        }

`;

//for apps (like "learn more" but black with sqaured edges)
export const SecondaryButton2 = Styled(Button) <ButtonProps>`
    border-radius: 8px;
    background: ${(props) => props.bgcolor || "#000"};
    border: 1px solid rgba(0, 0, 0, 0.25);
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 100%; /* 16px */
    color: ${(props) => props.labelcolor || "#fff"};
    text-transform: none;
    display: flex;
    padding: 14px 20px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    &:hover{
        border-radius: 8px;
        color: #000;
        background: rgba(0, 0, 0, 0.05);
        
        }

`;


export const PrimaryOutlinedButton = Styled(Button) <ButtonProps>`
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-color: ${(props) => props.bordercolor || "rgba(0, 0, 0, 0.5)"};
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-transform: none;
    text-align: center;
    letter-spacing: -0.02em;
    padding: 12px 24px;
    color: ${(props) => props.labelcolor || "#000"};

    

    &:hover {
        background: ${(props) =>
        props.hoverbackground || "rgba(0, 0, 0, 0.7)"}; ;
        border-radius: 8px;
        color: ${(props) => props.labelcolor || "#fff"};
    }
    &:active {
        background: #000000;
        border-radius: 8px;
        color: ${(props) => props.labelcolor || "#fff"};
    }
`;

export const LinkButton = Styled(Button) <ButtonProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    text-transform: capitalize;
    color: ${(props) => props.labelcolor || "#000"};
    border-width: 1px 3px 3px 1px;
    border-style: solid;
    border-color: ${(props) => props.bordercolor || "000000"};
    border-radius: 80px;
    padding: 17px 32px;
    opacity: ${(props) => (props.disabled === true ? "0.5" : "1")};
    cursor: ${(props) => (props.disabled === true ? "not-allowed" : "pointer")};
`;
