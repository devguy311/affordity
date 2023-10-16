import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup, { RadioGroupProps } from "@mui/material/RadioGroup";
import { useField } from "formik";
import { FC } from "react";
import { StyledRadioForm } from "./Style";
import { RadioOptionType } from "./Type";
import { LabelText2 } from "../Style";
import { Box } from "@mui/material";
import StyledTooltip, { HtmlTooltip } from "../component/StyledTooltip";
import NextImage from "../component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import { DescriptionText2 } from "../Text";

type FormikRadioGroupProps = {
  name: string;
  options: RadioOptionType[];
  label?: string;
  setOptionSelect?: (value: string) => void;
  tooltipText?: string;
  showError?: boolean;
} & RadioGroupProps;

const FormikRadioGroup: FC<FormikRadioGroupProps> = ({
  name,
  options,
  label,
  tooltipText,
  showError,
  ...rest
}) => {
  // eslint-disable-next-line no-unused-vars
  const [_, { value, error }, { setValue }] = useField(name);

  return (
    <Box width={"100%"}>
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
      <StyledRadioForm fullWidth>
        <RadioGroup
          value={value}
          onChange={(_, value) => setValue(value)}
          {...rest}
        >
          {options.map((item) => (
            <FormControlLabel
              key={item.value}
              value={item.value}
              control={<Radio size="small" />}
              label={item.label}
            />
          ))}
        </RadioGroup>
        {showError && (
          <FormHelperText sx={{ color: "red" }}>{error}</FormHelperText>
        )}
      </StyledRadioForm>
    </Box>
  );
};

export default FormikRadioGroup;

export const SimpleRadioGroup: FC<FormikRadioGroupProps> = ({
  name,
  options,
  label,
  setOptionSelect,
  ...rest
}) => {
  return (
    <StyledRadioForm>
      {label && <FormLabel>{label}</FormLabel>}
      <RadioGroup
        value={rest.value}
        onChange={(_, value) => setOptionSelect && setOptionSelect(value)}
        {...rest}
      >
        {options.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio size="small" />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </StyledRadioForm>
  );
};
