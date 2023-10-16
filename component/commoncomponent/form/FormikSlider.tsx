import Slider, { SliderProps } from "@mui/material/Slider";
import { useField } from "formik";
import { FC } from "react";
import { StyledSlider } from "./Style";
import { LabelText2 } from "../Style";

type FormikSliderProps = {
  name: string;
  labelText?: string;
  label?: string;
  hideLabel?:boolean;
} & SliderProps;

const FormikSlider: FC<FormikSliderProps> = ({ name, labelText,label,hideLabel, ...rest }) => {
  const [_, { value }, { setValue }] = useField(name);

  const handleChange = (_: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <StyledSlider>
      {label && (
        <LabelText2 style={{ textAlign: "left" }} mb={"10px"}>
          {label}
        </LabelText2>
      )}

      <Slider
        value={value}
        valueLabelDisplay={hideLabel ? "off" : "on"}
        onChange={handleChange}
        valueLabelFormat={(value) => (
          <span className={"slider"}>
            {value} {labelText}
          </span>
        )}
        {...rest}
      />
    </StyledSlider>
  );
};

export default FormikSlider;
