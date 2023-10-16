import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import React, { FC } from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { useField } from "formik";
import { Description1 } from "../Style";
import { StyledCheckboxContainer } from "./Style";

type FormikCheckboxProps = {
  name: string;
  label: JSX.Element | string;
} & CheckboxProps;
const FormikCheckbox: FC<FormikCheckboxProps> = ({ name, label }) => {
  const [field] = useField(name);

  return (
    <StyledCheckboxContainer
      display={"flex"}
      gap={"5px"}
      alignItems={"flex-start"}
    >
      <Checkbox
        icon={
          <RadioButtonUncheckedIcon color="disabled" style={{ fontSize: 24 }} />
        }
        checkedIcon={
          <RadioButtonCheckedIcon style={{ fontSize: 24, color: "#000" }} />
        }
        {...field}
      />
      <Description1 style={{ fontWeight: 400 }} textsize="10px">
        {label}
      </Description1>
    </StyledCheckboxContainer>
  );
};

export default FormikCheckbox;
