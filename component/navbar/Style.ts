import { keyframes } from "@emotion/react";
import Styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const NavbarContainer = Styled(Grid)`
    /* background: #fff; */
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
`;

const rotateLeft = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(180deg);
  }
`;

const rotateRight = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

type StyledNavTitleProps = {
  isactive?: number;
  textcolor?: string;
};
export const StyledNavTitle = Styled(Typography) <StyledNavTitleProps>`

    font-family: 'Inter';
    font-style: normal;
    font-weight: ${(props) => (props.isactive ? 500 : 400)};
    display: flex;
    font-size: 16px;
    gap: 20px;
    line-height: 130%;
    letter-spacing: -0.03em;
    color: ${(props) => props.textcolor || "#000"};
    cursor: pointer;
    path {
      ${(props) =>
    props.isactive &&
    `
        fill: ${(props) => props.textcolor || "#000"}
      `}
    }
    @media(min-width: 65em) {
    margin-bottom: 0;
    cursor: pointer;
    /* position: absolute; */
    z-index: 200;
    align-items: center;
    gap: 8px;
    transition: .25s ease;
    path {
      transition: .25s ease;
      fill: ${(props) => props.textcolor || "#000"}
    }

    &:hover {
      color: ${(props) => props.textcolor || "#000"}
      svg {
        fill: ${(props) => props.textcolor || "#000"}
      }
      path {
        fill: ${(props) => props.textcolor || "#000"}
      }
    }
    svg {
      width: 13px;
      transform: ${(props) =>
    props.isactive ? "rotate(180deg)" : "rotate(0deg)"} ;
      animation: ${(props) =>
    props.isactive ? rotateLeft : rotateRight} 0.3s ease-in-out;
    }
}
`;

type SolutionMenuProps = {
  isdatavisible?: number;
};
export const SolutionMenu = Styled.div<SolutionMenuProps>`
      position: absolute;
      background: #FFFFFF;
     
      max-height: 100vh;
      overflow: auto;
      box-shadow: 0px 4px 64px 0px hsla(0, 0%, 0%, 0.1);
      left: 0;
      top: 62px;
      z-index: 100;
      right: 0;
      padding: 10px;
      opacity: 0;
      ${(props) =>
    props.isdatavisible
      ? `
        max-height: fit-content;
        opacity: 1;
      `
      : `
      pointer-events: none;
      `}
  `;

export const SolutionGrid = Styled.ul`
  display: grid;
  list-style: none;
  grid-auto-flow: row;

  a {
    text-decoration: none;
    color: hsl(0 0% 0% / .6);
  }
  @media(min-width: 65em) {
    column-gap: 82px;
  }
  @media(min-width: 45em) {
    /* grid-template-columns: 1fr 1fr; */
    column-gap: 30px;

    li:nth-of-type(2) {
      grid-column: 1;
    }

    li:nth-of-type(3) {
      grid-column: 1;
      grid-row: 3;
    }
    li:nth-of-type(4) {
      grid-column: 2;
      grid-row: 1;
    }
  }
`;

type NavContainerProps = {
  isactive?: number;
  mobileview?: number;
};
export const NavContainer = Styled(Box) <NavContainerProps>`
    background: ${(props) => (props.isactive ? "#EDF4F4" : "#fff")} ;
    
    padding: 8px 8px;
    border-radius: 16px;
    cursor: pointer;
    &:hover {
        background: rgba(75, 143, 143, 0.1);
    }
  
    @media (max-width: 768px) {
      padding: 16px 16px;
      
    }

    ${(props) =>
    props.mobileview &&
    `
        background: inherit;
        
        
        margin-top: 24px;
        p {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 150%;
            /* identical to box height, or 18px */
            

            text-align: center;

            color: #000;
        };
        & .descriptionText {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #000;
        };
    
    `}
  `;

type ImageContainerProps = {
  isactive: number;
};
export const ImageContainer = Styled(Box) <ImageContainerProps>`
    height: 30px;
    width: 30px;
    padding: 1px;
    border-radius: 10px;
  `;

export const SoonTag = Styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #007474;
  padding: 3px 7px;
  background: rgba(75, 143, 143, 0.1);
  border-radius: 100px;
`;

type AuthLinkProps = {
  textcolor?: string;
};
export const AuthLink = Styled(Typography) <AuthLinkProps>`


    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -0.03em;
    color: ${(props) => props.textcolor || "#000"};
    cursor: pointer;
`;

export const MobileAuthLink = Styled(AuthLink)`
    line-height: 16px;
    text-align: justify;
    color: #FFF;
`;

type StyledLanguageSelectorProps = {
  variant?: "primary" | "secondary";
  textcolor?: string;
};
export const StyledLanguageSelector = Styled(Grid) <StyledLanguageSelectorProps>`
    position: absolute;
    top: 17px;
    left: 10px;

    @media (min-width: 900px) {
      position: static;
    }

   & .MuiSelect-select{
    /* font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: -0.03em;
    color: #000000;
    cursor: pointer;   */
    
      padding: 0px !important;
   }

   & .MuiTypography-root {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: -0.03em;
    cursor: pointer;
    color: black;

    @media (min-width: 900px) {
      font-size: 14px;
      color: ${(props) => props.textcolor || "#000"};
    }
   }
   
   & .MuiSvgIcon-root {
     display: none;
   }
   & .MuiInput-input {
    padding-right: 0px !important;
   }

  `;

export const AccordianContainer = Styled(Grid)`
    // border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    
    display: flex;
    justify-content: space-between;
    padding:  21px 0px;
    align-items: center;
    
  `;

export const MobileLinkTitle = Styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 10px;
    color: #000;
  `;

type NavSimpleTextProps = {
  isactive: number;
};
export const NavSimpleText = Styled(Typography) <NavSimpleTextProps>`
  border-radius: 32px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.71) 8.40%, #000 100%);
  color: #FFF; 
  cursor: pointer;
  padding: 10px 16px;
  ${(props) =>
    props.isactive &&
    `
      color: #FFF;
      border-radius: 32px;
      padding: 14px 16px;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.71) 8.40%, #000 100%);
     
  `};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
  &:hover{
  opacity: 0.8;
  color: #FFF;
  }
`;