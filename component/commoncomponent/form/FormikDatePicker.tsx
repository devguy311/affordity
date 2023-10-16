/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useField } from "formik";
import { TextFieldProps } from "@mui/material/TextField";
import { StyledTextField, TertiaryStyledTextField } from "./Style";
import { getAssetUrl } from "../../../util/SiteUtil";
import { Box } from "@mui/material";
import { LabelText2 } from "../Style";
import StyledTooltip, { HtmlTooltip } from "../component/StyledTooltip";
import NextImage from "../component/NextImage";

type FormikDateFieldProps = {
  id: string;
  name: string;
  label?: string;
  showError?: boolean;
  datepickerView?: "primary" | "secondary";
  infoText?: string;
  placeholderText?: string;
} & TextFieldProps;

const FormikDatePicker: FC<FormikDateFieldProps> = ({
  name,
  label,
  datepickerView = "secondary",
  showError = true,
  infoText,
  placeholderText,
  ...rest
}) => {
  const [_, { error, touched, value }, { setValue }] = useField(name);

  return (
    <Box>
      {label && (
        <Box display={"flex"} justifyContent={"space-between"}>
          <LabelText2 style={{ textAlign: "left" }} mb={"10px"}>
            {label}
          </LabelText2>
          {infoText && (
            <HtmlTooltip
              placement="left-start"
              title={<StyledTooltip description={infoText} />}
            >
              <NextImage
                height="20px"
                width="20px"
                alt="info"
                src={getAssetUrl("redesign/round_question.svg")}
              />
            </HtmlTooltip>
          )}
        </Box>
      )}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          views={["year", "month"]}
          label={label}
          value={value}
          // inputFormat="DD/MM/YYYY"
          openTo="year"
          disablePast
          onChange={(newValue) => {
            if (!newValue) {
              setValue(null);
              return;
            }
            setValue(new Date(newValue));
          }}
          renderInput={(params) => (
            <TertiaryStyledTextField iserror={!!error && !!touched ? 1 : 0}>
              <TextField
                {...params}
                inputProps={{
                  ...params.inputProps,
                  placeholder: placeholderText,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <img
                        src={getAssetUrl("redesign/calendar.svg")}
                        style={{ cursor: "pointer" }}
                        height={"20px"}
                        width={"20px"}
                        alt={"calendar-icon"}
                      />
                    </InputAdornment>
                  ),
                }}
                variant={"standard"}
                helperText={null}
                {...rest}
              />
            </TertiaryStyledTextField>
          )}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default FormikDatePicker;
