import { FC } from "react";
import { useField } from "formik";
import { Heading1 } from "../CommonStyle";
import {
  SecondaryStyledTextField,
  StyledTextField,
  TertiaryStyledTextField,
} from "./Style";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { LabelText2 } from "../Style";
import Box from "@mui/material/Box";
import Image from "next/image";
import { getAssetUrl } from "../../../util/SiteUtil";
import StyledTooltip, { HtmlTooltip } from "../component/StyledTooltip";

type FormikTextfieldProps = {
  id: string;
  name: string;
  label?: string;
  descriptionText?: string;
  showError?: boolean;
  textfieldtype?: "primary" | "secondary" | "tertiary";
  infoText?: string;
} & TextFieldProps;

export const FormikTextfield: FC<FormikTextfieldProps> = ({
  label,
  name,
  id,
  descriptionText,
  showError = true,
  textfieldtype,
  infoText,
  ...rest
}) => {
  const [field, { error, touched }, { setTouched }] = useField(name);

  if (textfieldtype === "tertiary") {
    return (
      <TertiaryStyledTextField
        iserror={showError && !!error && !!touched ? 1 : 0}
      >
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
                <Box position={"relative"} height={"20px"} width={"20px"}>
                  <Image
                    alt={"info"}
                    src={getAssetUrl("redesign/round_question.svg")}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
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
          variant="outlined"
          label={label}
          {...rest}
        />
      </TertiaryStyledTextField>
    );
  }
  if (textfieldtype === "secondary") {
    return (
      <SecondaryStyledTextField>
        <Heading1
          style={{ lineHeight: "30px" }}
          textweight={600}
          textsize={"22px"}
        >
          {label}
        </Heading1>
        <TextField
          {...field}
          id={id}
          name={name}
          onBlur={() => setTouched(true)}
          autoComplete={"off"}
          size={"small"}
          error={!!error && !!touched}
          helperText={
            showError && !!error && !!touched ? error : descriptionText || ""
          }
          variant="outlined"
          label={label}
          {...rest}
        />
      </SecondaryStyledTextField>
    );
  }
  return (
    <StyledTextField iserror={showError && !!error && !!touched ? 1 : 0}>
      <TextField
        {...field}
        id={id}
        name={name}
        onBlur={() => setTouched(true)}
        autoComplete={"off"}
        size={"small"}
        error={!!error && !!touched}
        helperText={
          showError && !!error && !!touched ? error : descriptionText || ""
        }
        variant="standard"
        label={label}
        {...rest}
      />
    </StyledTextField>
  );
};
