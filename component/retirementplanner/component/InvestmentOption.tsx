/* eslint-disable no-unused-vars */
import Grid from "@mui/material/Grid";
import { useField } from "formik";
import { FC } from "react";
import { FormikTextfield } from "../../../component/commoncomponent/form/FormikTextfield";
import { InvestmentOptionType } from "../type";
import { StyledOption } from "../style";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { useWindowSize } from "../../../hooks";

type InvestementOptionProps = {
  question: string;
  options: InvestmentOptionType[];
  name: string;
  customeFieldName: string;
  prefferedCurrency?: string;
};

const InvestmentOption: FC<InvestementOptionProps> = ({
  question,
  options,
  name,
  customeFieldName,
  prefferedCurrency,
}) => {
  const [_, { value }, { setValue }] = useField(name);
  const customField = useField(customeFieldName);
  const { mobileView } = useWindowSize();

  return (
    <Grid container>
      <Grid item xs={12}>
        <DescriptionText2 textweight={600}>{question}</DescriptionText2>
      </Grid>
      <Grid mt={"18px"} item xs={12}>
        <Grid container gap={"10px"}>
          {options.map((item) => (
            <StyledOption
              style={{ width: mobileView ? 144 : undefined }}
              onClick={() => {
                setValue(item.value);
                customField[2].setValue("");
              }}
              key={item.value}
              isactive={customField[1].value ? 0 : item.value === value ? 1 : 0}
            >
              {item.label} {prefferedCurrency}
            </StyledOption>
          ))}
          <div>
            <StyledOption
              style={{ width: mobileView ? "calc(100% + 92px)" : "191px" }}
              isactive={0}
            >
              <FormikTextfield
                showError={false}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                placeholder={"Custom amount"}
                name={customeFieldName}
                id={customeFieldName}
                type="number"
              />
            </StyledOption>
            <span style={{ color: "#E45152", fontSize: 10 }}>
              {customField[1].error}
            </span>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InvestmentOption;
