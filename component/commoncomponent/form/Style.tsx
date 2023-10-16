/* eslint-disable quotes */
import Styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material";

type StyledTextFieldProps = {
  iserror?: number;
};
export const StyledTextField = Styled(Grid) <StyledTextFieldProps>`
    & .MuiInputBase-input {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 1.3rem;
        margin-left: 10px;
        color: ${(props) => (props.iserror ? "#E45152" : "#375A64")} ;
    }

    & .MuiInputBase-root {
      border-radius: 10px;
      height: 60px;
    }

    & .MuiInputBase-input {
      border: 0px !important;
    }
    & .MuiFormLabel-root {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #A8A8A8;
    }
`;

type StyledSwitchProps = {
  isactive?: number;
};
export const StyledSwitch = Styled(Grid) <StyledSwitchProps>`

& .MuiSwitch-thumb {
        box-shadow: none;
        width: 16px;
        height: 16px;
        margin: 2px;
        background-color: #2160CE;
        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-image: ${(props) =>
    props.isactive
      ? 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="white" d="M7.06571 7.31593C7.06571 7.75593 6.94971 8.16393 6.71771 8.53993C6.49371 8.90793 6.15771 9.21193 5.70971 9.45193C5.26971 9.68393 4.74571 9.81193 4.13771 9.83593V10.8079H3.36971V9.82393C2.52171 9.75193 1.83771 9.49993 1.31771 9.06793C0.797707 8.62793 0.521707 8.03193 0.489707 7.27993H2.67371C2.72171 7.75993 2.95371 8.06793 3.36971 8.20393V6.30793C2.74571 6.14793 2.24571 5.99193 1.86971 5.83993C1.50171 5.68793 1.17771 5.44393 0.897707 5.10793C0.617707 4.77193 0.477707 4.31193 0.477707 3.72793C0.477707 2.99993 0.745707 2.41593 1.28171 1.97593C1.82571 1.53593 2.52171 1.28793 3.36971 1.23193V0.259931H4.13771V1.23193C4.97771 1.29593 5.64171 1.53993 6.12971 1.96393C6.61771 2.38793 6.88971 2.97593 6.94571 3.72793H4.74971C4.70171 3.29593 4.49771 3.01593 4.13771 2.88793V4.74793C4.80171 4.93193 5.31371 5.09593 5.67371 5.23993C6.03371 5.38393 6.35371 5.62393 6.63371 5.95993C6.92171 6.28793 7.06571 6.73993 7.06571 7.31593ZM2.64971 3.63193C2.64971 3.83193 2.70971 3.99993 2.82971 4.13593C2.95771 4.27193 3.13771 4.39193 3.36971 4.49593V2.82793C3.14571 2.86793 2.96971 2.95593 2.84171 3.09193C2.71371 3.21993 2.64971 3.39993 2.64971 3.63193ZM4.13771 8.23993C4.37771 8.19993 4.56571 8.10393 4.70171 7.95193C4.84571 7.79993 4.91771 7.61193 4.91771 7.38793C4.91771 7.17993 4.84971 7.01193 4.71371 6.88393C4.58571 6.74793 4.39371 6.63193 4.13771 6.53593V8.23993Z" /></svg>\')'
      : 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="white" d="M0.34844 2.21193C0.34844 1.56393 0.53244 1.06393 0.900441 0.711931C1.27644 0.359931 1.76044 0.183931 2.35244 0.183931C2.94444 0.183931 3.42444 0.359931 3.79244 0.711931C4.16044 1.06393 4.34444 1.56393 4.34444 2.21193C4.34444 2.85993 4.16044 3.35993 3.79244 3.71193C3.42444 4.06393 2.94444 4.23993 2.35244 4.23993C1.76044 4.23993 1.27644 4.06393 0.900441 3.71193C0.53244 3.35993 0.34844 2.85993 0.34844 2.21193ZM8.49644 0.315931L3.87644 8.76393H1.89644L6.51644 0.315931H8.49644ZM2.34044 1.38393C1.95644 1.38393 1.76444 1.65993 1.76444 2.21193C1.76444 2.75593 1.95644 3.02793 2.34044 3.02793C2.52444 3.02793 2.66844 2.95993 2.77244 2.82393C2.87644 2.68793 2.92844 2.48393 2.92844 2.21193C2.92844 1.65993 2.73244 1.38393 2.34044 1.38393ZM6.06044 6.86793C6.06044 6.21993 6.24444 5.71993 6.61244 5.36793C6.98044 5.01593 7.46044 4.83993 8.05244 4.83993C8.64444 4.83993 9.12444 5.01593 9.49244 5.36793C9.86044 5.71993 10.0444 6.21993 10.0444 6.86793C10.0444 7.51593 9.86044 8.01593 9.49244 8.36793C9.12444 8.71993 8.64444 8.89593 8.05244 8.89593C7.46044 8.89593 6.98044 8.71993 6.61244 8.36793C6.24444 8.01593 6.06044 7.51593 6.06044 6.86793ZM8.04044 6.03993C7.85644 6.03993 7.71244 6.10793 7.60844 6.24393C7.51244 6.37993 7.46444 6.58793 7.46444 6.86793C7.46444 7.41193 7.65644 7.68393 8.04044 7.68393C8.22444 7.68393 8.36844 7.61593 8.47244 7.47993C8.57644 7.34393 8.62844 7.13993 8.62844 6.86793C8.62844 6.59593 8.57644 6.39193 8.47244 6.25593C8.36844 6.11193 8.22444 6.03993 8.04044 6.03993Z" /></svg>\')'};
            left: 5px;
            top: ${(props) => (props.isactive ? 4 : 6)}px;
        }
    }
`;

export const StyledUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M0.34844 2.21193C0.34844 1.56393 0.53244 1.06393 0.900441 0.711931C1.27644 0.359931 1.76044 0.183931 2.35244 0.183931C2.94444 0.183931 3.42444 0.359931 3.79244 0.711931C4.16044 1.06393 4.34444 1.56393 4.34444 2.21193C4.34444 2.85993 4.16044 3.35993 3.79244 3.71193C3.42444 4.06393 2.94444 4.23993 2.35244 4.23993C1.76044 4.23993 1.27644 4.06393 0.900441 3.71193C0.53244 3.35993 0.34844 2.85993 0.34844 2.21193ZM8.49644 0.315931L3.87644 8.76393H1.89644L6.51644 0.315931H8.49644ZM2.34044 1.38393C1.95644 1.38393 1.76444 1.65993 1.76444 2.21193C1.76444 2.75593 1.95644 3.02793 2.34044 3.02793C2.52444 3.02793 2.66844 2.95993 2.77244 2.82393C2.87644 2.68793 2.92844 2.48393 2.92844 2.21193C2.92844 1.65993 2.73244 1.38393 2.34044 1.38393ZM6.06044 6.86793C6.06044 6.21993 6.24444 5.71993 6.61244 5.36793C6.98044 5.01593 7.46044 4.83993 8.05244 4.83993C8.64444 4.83993 9.12444 5.01593 9.49244 5.36793C9.86044 5.71993 10.0444 6.21993 10.0444 6.86793C10.0444 7.51593 9.86044 8.01593 9.49244 8.36793C9.12444 8.71993 8.64444 8.89593 8.05244 8.89593C7.46044 8.89593 6.98044 8.71993 6.61244 8.36793C6.24444 8.01593 6.06044 7.51593 6.06044 6.86793ZM8.04044 6.03993C7.85644 6.03993 7.71244 6.10793 7.60844 6.24393C7.51244 6.37993 7.46444 6.58793 7.46444 6.86793C7.46444 7.41193 7.65644 7.68393 8.04044 7.68393C8.22444 7.68393 8.36844 7.61593 8.47244 7.47993C8.57644 7.34393 8.62844 7.13993 8.62844 6.86793C8.62844 6.59593 8.57644 6.39193 8.47244 6.25593C8.36844 6.11193 8.22444 6.03993 8.04044 6.03993Z" /></svg>')`,
        left: 10,
        top: 8,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#2E76B6",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M7.06571 7.31593C7.06571 7.75593 6.94971 8.16393 6.71771 8.53993C6.49371 8.90793 6.15771 9.21193 5.70971 9.45193C5.26971 9.68393 4.74571 9.81193 4.13771 9.83593V10.8079H3.36971V9.82393C2.52171 9.75193 1.83771 9.49993 1.31771 9.06793C0.797707 8.62793 0.521707 8.03193 0.489707 7.27993H2.67371C2.72171 7.75993 2.95371 8.06793 3.36971 8.20393V6.30793C2.74571 6.14793 2.24571 5.99193 1.86971 5.83993C1.50171 5.68793 1.17771 5.44393 0.897707 5.10793C0.617707 4.77193 0.477707 4.31193 0.477707 3.72793C0.477707 2.99993 0.745707 2.41593 1.28171 1.97593C1.82571 1.53593 2.52171 1.28793 3.36971 1.23193V0.259931H4.13771V1.23193C4.97771 1.29593 5.64171 1.53993 6.12971 1.96393C6.61771 2.38793 6.88971 2.97593 6.94571 3.72793H4.74971C4.70171 3.29593 4.49771 3.01593 4.13771 2.88793V4.74793C4.80171 4.93193 5.31371 5.09593 5.67371 5.23993C6.03371 5.38393 6.35371 5.62393 6.63371 5.95993C6.92171 6.28793 7.06571 6.73993 7.06571 7.31593ZM2.64971 3.63193C2.64971 3.83193 2.70971 3.99993 2.82971 4.13593C2.95771 4.27193 3.13771 4.39193 3.36971 4.49593V2.82793C3.14571 2.86793 2.96971 2.95593 2.84171 3.09193C2.71371 3.21993 2.64971 3.39993 2.64971 3.63193ZM4.13771 8.23993C4.37771 8.19993 4.56571 8.10393 4.70171 7.95193C4.84571 7.79993 4.91771 7.61193 4.91771 7.38793C4.91771 7.17993 4.84971 7.01193 4.71371 6.88393C4.58571 6.74793 4.39371 6.63193 4.13771 6.53593V8.23993Z" /></svg>')`,
      left: 10,
      top: 8,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 22 / 2,
  },
}));

export const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  width: "61px",
  height: "35px",
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    backgroundColor: "#EAEAEA !important",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage:
        'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="grey" d="M0.34844 2.21193C0.34844 1.56393 0.53244 1.06393 0.900441 0.711931C1.27644 0.359931 1.76044 0.183931 2.35244 0.183931C2.94444 0.183931 3.42444 0.359931 3.79244 0.711931C4.16044 1.06393 4.34444 1.56393 4.34444 2.21193C4.34444 2.85993 4.16044 3.35993 3.79244 3.71193C3.42444 4.06393 2.94444 4.23993 2.35244 4.23993C1.76044 4.23993 1.27644 4.06393 0.900441 3.71193C0.53244 3.35993 0.34844 2.85993 0.34844 2.21193ZM8.49644 0.315931L3.87644 8.76393H1.89644L6.51644 0.315931H8.49644ZM2.34044 1.38393C1.95644 1.38393 1.76444 1.65993 1.76444 2.21193C1.76444 2.75593 1.95644 3.02793 2.34044 3.02793C2.52444 3.02793 2.66844 2.95993 2.77244 2.82393C2.87644 2.68793 2.92844 2.48393 2.92844 2.21193C2.92844 1.65993 2.73244 1.38393 2.34044 1.38393ZM6.06044 6.86793C6.06044 6.21993 6.24444 5.71993 6.61244 5.36793C6.98044 5.01593 7.46044 4.83993 8.05244 4.83993C8.64444 4.83993 9.12444 5.01593 9.49244 5.36793C9.86044 5.71993 10.0444 6.21993 10.0444 6.86793C10.0444 7.51593 9.86044 8.01593 9.49244 8.36793C9.12444 8.71993 8.64444 8.89593 8.05244 8.89593C7.46044 8.89593 6.98044 8.71993 6.61244 8.36793C6.24444 8.01593 6.06044 7.51593 6.06044 6.86793ZM8.04044 6.03993C7.85644 6.03993 7.71244 6.10793 7.60844 6.24393C7.51244 6.37993 7.46444 6.58793 7.46444 6.86793C7.46444 7.41193 7.65644 7.68393 8.04044 7.68393C8.22444 7.68393 8.36844 7.61593 8.47244 7.47993C8.57644 7.34393 8.62844 7.13993 8.62844 6.86793C8.62844 6.59593 8.57644 6.39193 8.47244 6.25593C8.36844 6.11193 8.22444 6.03993 8.04044 6.03993Z" /></svg>\')',
      left: 12,
      top: 22,
    },
    "&:after": {
      backgroundImage:
        'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="grey" d="M7.06571 7.31593C7.06571 7.75593 6.94971 8.16393 6.71771 8.53993C6.49371 8.90793 6.15771 9.21193 5.70971 9.45193C5.26971 9.68393 4.74571 9.81193 4.13771 9.83593V10.8079H3.36971V9.82393C2.52171 9.75193 1.83771 9.49993 1.31771 9.06793C0.797707 8.62793 0.521707 8.03193 0.489707 7.27993H2.67371C2.72171 7.75993 2.95371 8.06793 3.36971 8.20393V6.30793C2.74571 6.14793 2.24571 5.99193 1.86971 5.83993C1.50171 5.68793 1.17771 5.44393 0.897707 5.10793C0.617707 4.77193 0.477707 4.31193 0.477707 3.72793C0.477707 2.99993 0.745707 2.41593 1.28171 1.97593C1.82571 1.53593 2.52171 1.28793 3.36971 1.23193V0.259931H4.13771V1.23193C4.97771 1.29593 5.64171 1.53993 6.12971 1.96393C6.61771 2.38793 6.88971 2.97593 6.94571 3.72793H4.74971C4.70171 3.29593 4.49771 3.01593 4.13771 2.88793V4.74793C4.80171 4.93193 5.31371 5.09593 5.67371 5.23993C6.03371 5.38393 6.35371 5.62393 6.63371 5.95993C6.92171 6.28793 7.06571 6.73993 7.06571 7.31593ZM2.64971 3.63193C2.64971 3.83193 2.70971 3.99993 2.82971 4.13593C2.95771 4.27193 3.13771 4.39193 3.36971 4.49593V2.82793C3.14571 2.86793 2.96971 2.95593 2.84171 3.09193C2.71371 3.21993 2.64971 3.39993 2.64971 3.63193ZM4.13771 8.23993C4.37771 8.19993 4.56571 8.10393 4.70171 7.95193C4.84571 7.79993 4.91771 7.61193 4.91771 7.38793C4.91771 7.17993 4.84971 7.01193 4.71371 6.88393C4.58571 6.74793 4.39371 6.63193 4.13771 6.53593V8.23993Z" /></svg>\')',
      right: 5,
      top: 22,
    },
  },
}));

export const StyledSlider = Styled(Grid)`
& .MuiSlider-valueLabelOpen {
    background: #2160CE;
    border-radius: 5px;
    color: #fff;
    padding: 3px 7px 4px 7px;
}
    & .MuiSlider-track {
        background: #000 !important;   
        height: 4px;
    }
    & .MuiSlider-thumb {
        background: #000 !important;
    }
    & .MuiSlider-rail {
        background: rgba(0, 0, 0, 0.2) !important;
        height: 4px;
    }
    & .MuiSlider-root {
        color: rgba(40, 132, 216, 0.2) !important;
    }

    & .MuiSlider-valueLabel {
        background: #000;
        
    }
& .MuiSlider-valueLabel {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;
  color: #FFFFFF;
  background: #2160CE;
  border-radius: 5px;
  padding: 3px 8px;
    &:before {
        display: none;
    }
}

 @media (max-width: 900px) {
  & .MuiSlider-valueLabel {
    font-size: 12px;
  }
 }
`;

export const StyledRadioForm = Styled(FormControl)`

    & .MuiFormControl-root {
    width: 100%;
}

margin-top: 10px;
& .MuiTypography-root {
    font-family: 'Inter' !important;
    font-style: normal !important;
    font-weight: 300 !important;
    font-size: 14px !important;
    line-height: 175% !important;
    letter-spacing: -0.02em !important;
    color: #000000 !important;
}

svg {
    height: 22px;
    width: 22px;
    color: #000;
}
`;

export const SecondaryStyledTextField = Styled(Box)`
& .MuiInputBase-root {
  background: #FAFBFF;
  border: 1px solid #DEE4FF;
  border-radius: 100px;
}
input:focus {
  border: 0px !important;
}
& .MuiInputLabel-root {
  display: none;
  
}

fieldset {
  border: 0px;
}
  
`;

type TertiaryStyledTextFieldProps = {
  iserror?: number;
};
export const TertiaryStyledTextField = Styled(
  Box
) <TertiaryStyledTextFieldProps>`
& .MuiInputBase-root {
height: 48px;
border: 1px solid rgba(0, 0, 0, 0.2);

filter: drop-shadow(0px 2px 4px rgba(40, 132, 216, 0.15));
border-radius: 8px;
${(props) =>
    props.iserror &&
    `
  border: 1px solid rgba(255, 79, 91, 0.2);
  box-shadow: 0px 2px 4px rgba(40, 132, 216, 0.15);
`};
}

& .Mui-error {
  text-align: end !important;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-top: 8px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #FF4F5B;
}
input:focus {
  border: 0px !important;
}
& .MuiInputLabel-root {
  display: none;
  
}

input::placeholder {
  font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
/* identical to box height */

text-align: left;
letter-spacing: -0.02em;
color: ${(props) =>
    props.iserror ? "rgba(255, 79, 91, 0.5)" : " rgba(0, 0, 0, 0.5)"} ;

}
fieldset {
  border: 0px;
}
  
`;
export const StyledSecondarySelectForm = Styled(FormControl)`
& .MuiInputBase-root  {
  height: 48px;
}
& .MuiOutlinedInput-notchedOutline {
  border: 1px solid rgba(0, 0, 0, 0.2);
filter: drop-shadow(0px 2px 4px rgba(40, 132, 216, 0.15));
border-radius: 8px;
}

& .MuiFormLabel-root {
  font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
/* identical to box height */

text-align: center;
letter-spacing: -0.02em;

color: rgba(0, 0, 0, 0.5);
}
`;

export const StyledCheckboxContainer = Styled(Box)`
  & .MuiButtonBase-root {
    width: 50px;
    padding: 0px;
  }
`;

export const StyledTextArea = Styled(Box) <StyledTextFieldProps>`

  & .MuiInputBase-root {
    background: #FFFFFF;
    border: ${(props) =>
    props.iserror
      ? "1px solid rgba(255, 79, 91, 0.2)"
      : "1px solid rgba(0, 0, 0, 0.1)"} !important;
    border-radius: 8px;
  }

  & .MuiOutlinedInput-input {
    border: 0 !important;
  }

  & .Mui-error {
    text-align: end !important;
  }

  & .MuiInputBase-input {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    letter-spacing: -0.02em;
  }
`;
