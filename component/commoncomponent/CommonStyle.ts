import Styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export const HeadingTitle = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${(props) => props.textweight || 700};
    font-size: ${(props) => props.textsize || "4rem"};
    line-height: 75px;
    text-align: ${(props) => props.align || "center"} !important;
    letter-spacing: -0.01em;
    color: ${(props) => props.textcolor || "#fff"};

    @media (max-width: 900px) {
        font-size: 40px;
        line-height: 50px;
    }
`;

export const PrimaryButton = Styled(Button)`    
    height: 52px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #333333;
    border-radius:100px;
    background: #fff;
    padding: 18px 37px 17px 30px;
    text-transform: none;
    &:hover {
        color: #fff;
        background: #2160CE;
        opacity: 0.8;

    }
`;

export const NavigationButton = Styled(Button)`
    background: #54A9E8;
    border-radius: 100px;
    padding: 16px 20px 16px 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 15px;
    color: #FFFFFF;
    text-transform: none;
    &:hover {
        background: #2160CE;
        opacity: 1;
    }
    @media (max-width: 900px) {
        font-size: 16px; 
    }
`;

type TextProps = {
    textweight?: number | string;
    textsize?: string;
    align?: string;
    textcolor?: string;
    hideline?: number;
    textheight?: string;
}
export const Heading1 = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${(props) => props.textweight || 600};
    font-size: ${(props) => props.textsize || "31px"};
    line-height: 42px;
    text-align: ${(props) => props.align || "left"} !important;
    letter-spacing: -0.0em;
    color: ${(props) => props.textcolor || "#333333"};
`;

export const Heading2 = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${(props) => props.textweight || 400};
    font-size: ${(props) => props.textsize || "1.9rem"};
    line-height: 4rem;
    letter-spacing: -0.01em;
    color: ${(props) => props.textcolor || "#333333"};
    text-align: ${(props) => props.align || "left"} !important;

    @media (max-width: 900px) {
        line-height: 36px;
    }
`;

export const DescriptionText = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${(props) => props.textweight || 500};
    font-size: ${(props) => props.textsize || "1.1rem"};
    line-height: ${(props) => props.textheight || "28px"};
    text-align: ${(props) => props.align || "left"} !important;
    letter-spacing: -0.02em;
    color: ${(props) => props.textcolor || "#333333"};
    ${(props) => props.hideline && `
         overflow: hidden;
         text-overflow: ellipsis;
         display: -webkit-box;
         -webkit-line-clamp: ${props.hideline};
         -webkit-box-orient: vertical;
     `};

    @media (max-width: 900px) {
        font-size: 16px;
    }
`;

export const DescriptionText2 = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${(props) => props.textweight || 500};
    font-size: ${(props) => props.textsize || "1.8rem"};
    line-height: 21px;
    text-align: ${(props) => props.align || "justify"} !important;
    color: ${(props) => props.textcolor || "#54A9E8"};
`;

export const DescriptionText3 = Styled(Typography) <TextProps>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${(props) => props.textweight || 400};
    font-size: ${(props) => props.textsize || "1.2rem"};
    line-height: ${(props) => props.textheight || "21px"};
    text-align: ${(props) => props.align || "justify"} !important;
    color: ${(props) => props.textcolor || "#333"};
`;

export const AuthButton = Styled(Button)`
    background: #2160CE;
    border-radius: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    height: 45px;
    width: 70%;
    text-transform: none;
    &:hover {
        background: #54A9E8;
        opacity: 0.8;
    }
`;

export const SocialLoginButton = Styled(Button)`
    height: 100%;
    width: 100%;

`;

export const FormSubmitButton = Styled(Button)`
    background: #2160CE;
    border-radius: 10px;  
    height: 3rem;
    min-width: 134px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #FFFFFF;
    padding: 18px;
    text-transform: none;
    &:hover {
        background: #2160CE;
        opacity: 0.8;
    }
`;

export const MandatorySign = Styled.sup`
    color: #ED4141;
    line-height: 30px;
`;

type OrDividerProps = {
    textcolor?: string;
    linecolor?: string;
}
export const OrDivider = Styled.div<OrDividerProps>`
  max-width: 312px;
  margin: .8rem auto;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  position: relative;
  p {
    color: ${(props) => props.textcolor || "#fff"};
    text-align: center !important;
  }  
  &:before, &:after {
    content: "";
    background-color: ${(props) => props.linecolor || "hsl(0 0% 100% / 0.2)"} ;
    position: absolute;
    height: 1px;
    width: 125px;
    top: 50%;
    transform: translateY(-50%);
  }
  &::before {
    left: 3px;
  }
  &::after {
    right: 3px;
  }
  @media (min-width: 60em) {
    margin: min(1vw, .9rem) auto;
    p {
        margin-bottom: 0;
        font-size: min(3vw, 12px);
    } 
  }
`;
