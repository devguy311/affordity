import React, { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import FormikSlider from "../../../commoncomponent/form/FormikSlider";
import { FormikTextfield } from "../../../commoncomponent/form/FormikTextfield";
import { FinancialGoalType } from "../../type";
import { useAppSelector } from "../../../../redux/hooks";
import { selectUser } from "../../../../redux/user";
import { Description1 } from "../../../commoncomponent/Style";

type LoanTermProps = {
  formValues: FinancialGoalType;
};
const LoanTerm: FC<LoanTermProps> = ({ formValues }) => {
  const { t } = useTranslation("shoppingassistant");
  const { user } = useAppSelector(selectUser);
  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";

  return (
    <>
      <Grid item xs={12} mt={"25px"}>
        <Box>
          <FormikTextfield
            id={"loanAmount"}
            name={"loanAmount"}
            label={t("loanAmount")!}
            fullWidth
            textfieldtype="tertiary"
            placeholder={prefferedCurrency}
          />
        </Box>
      </Grid>
      <Grid mt={"30px"} item xs={12}>
        <Box
          gap={"10px"}
          justifyContent={"space-between"}
          display={"flex"}
          alignItems={"center"}
        >
          <Box width={"90%"}>
            <FormikSlider
              label={t("loanTerm")!}
              name="loanTerm"
              labelText={t("years")!}
              min={1}
              hideLabel
              max={20}
            />
          </Box>
          <Box width={"20%"} pt={"20px"} pl={"10px"}>
            <Description1 textsize="12px">
              {formValues.loanTerm} {t("years")}
            </Description1>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} mt={"25px"}>
        {/* <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <LabelText2>{"         "}</LabelText2>
          <FormikSwitch
            id={"isLoanInterestInValue"}
            name={"isLoanInterestInValue"}
          />
        </Box> */}
        <Box>
          <FormikTextfield
            id={"loanInterestRate"}
            name={"loanInterestRate"}
            infoText={
              "Enter your APR (Annual Percentage Rate) including interest and fees. An approximation works also."!
            }
            textfieldtype={"tertiary"}
            label={t("loanInterest")!}
            fullWidth
            placeholder={"%"}
          // placeholder={
          //   formValues.isLoanInterestInValue ? prefferedCurrency : "%"
          // }
          />
        </Box>
      </Grid>
    </>
  );
};

export default LoanTerm;
