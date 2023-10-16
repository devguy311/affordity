import { useField } from "formik";
import React, { FC } from "react";
import { DescriptionText2 } from "../Text";
import { SelectOptionsType } from "./Type";
import { StyledSecondarySelectForm } from "./Style";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectProps } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { LabelText2 } from "../Style";
import StyledTooltip, { HtmlTooltip } from "../component/StyledTooltip";
import NextImage from "../component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";

type Props = {
  name: string;
  options: SelectOptionsType[];
  fieldType?: "primary" | "secondary";
  label?: string;
  tooltipText?: string;
} & SelectProps;

const FormikSelect: FC<Props> = ({
  name,
  options,
  fieldType,
  label,
  tooltipText,
  ...rest
}) => {
  // eslint-disable-next-line no-empty-pattern
  const [field, {}, { setTouched }] = useField(name);

  if (fieldType === "primary") {
    return (
      <Box>
        {label && (
          <Box display={"flex"} justifyContent={"space-between"}>
            <LabelText2
              style={{ textAlign: "left", fontWeight: 400 }}
              mb={"10px"}
            >
              {label}
            </LabelText2>
            {tooltipText && (
              <HtmlTooltip
                placement="left-start"
                title={<StyledTooltip description={tooltipText} />}
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
        <StyledSecondarySelectForm fullWidth>
          <Select
            {...field}
            onBlur={() => setTouched(true)}
            renderValue={(value) => (
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  position: "relative",
                  zIndex: 10,
                  marginLeft: "10px",
                }}
              >
                <DescriptionText2
                  align={"left"}
                  textsize={"16px"}
                  textcolor={"#A8A8A8"}
                >
                  {value}
                </DescriptionText2>
              </Box>
            )}
            {...rest}
          >
            {options.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </StyledSecondarySelectForm>
      </Box>
    );
  }
  return (
    <Select size="small" {...field} onBlur={() => setTouched(true)} {...rest}>
      {options.map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default FormikSelect;
