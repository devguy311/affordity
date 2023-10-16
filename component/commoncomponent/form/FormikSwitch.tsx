import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import { SwitchProps } from "@mui/material/Switch/Switch";
import { useField } from "formik";
import { FC } from "react";
import { Android12Switch, StyledSwitch } from "./Style";

type FormikSwitchProps = {
  id: string;
  name: string;
} & SwitchProps;

const FormikSwitch: FC<FormikSwitchProps> = ({ id, name }) => {
  const [_, { value }, { setValue }] = useField(name);

  return (
    <StyledSwitch isactive={value ? 1 : 0} id={id}>
      <FormControlLabel
        control={<Android12Switch checked={value} />}
        label=""
        onClick={(event) => {
          setValue(!value);
          event.stopPropagation();
        }}
      />
    </StyledSwitch>
  );
};

export default FormikSwitch;
