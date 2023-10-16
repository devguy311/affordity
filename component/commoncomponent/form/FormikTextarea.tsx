import React, { FC } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LabelText2 } from "../Style";
import StyledTooltip, { HtmlTooltip } from "../component/StyledTooltip";
import NextImage from "../component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import { useField } from "formik";
import { StyledTextArea } from "./Style";

type FormikTextAreaProps = {
  id: string;
  name: string;
  label?: string;
  descriptionText?: string;
  showError?: boolean;
  infoText?: string;
} & TextFieldProps;

const FormikTextarea: FC<FormikTextAreaProps> = ({
  id,
  name,
  label,
  descriptionText,
  infoText,
  showError = true,
  ...rest
}) => {
  const [field, { error, touched }, { setTouched }] = useField(name);

  return (
    <StyledTextArea iserror={showError && !!error && !!touched ? 1 : 0}>
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
                alt={"info"}
                src={getAssetUrl("redesign/round_question.svg")}
              />
            </HtmlTooltip>
          )}
        </Box>
      )}
      <TextField
        {...field}
        id={id}
        name={name}
        onBlur={() => setTouched(true)}
        autoComplete={"off"}
        size={"small"}
        error={!!error && !!touched}
        InputLabelProps={{ shrink: true }}
        helperText={
          showError && !!error && !!touched
            ? `*${error}`
            : descriptionText || ""
        }
        multiline
        rows={5}
        variant="outlined"
        label={""}
        {...rest}
      />
    </StyledTextArea>
  );
};

export default FormikTextarea;
