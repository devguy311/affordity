import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import FormikSlider from "../../../commoncomponent/form/FormikSlider";
import { FormikTextfield } from "../../../commoncomponent/form/FormikTextfield";
import { FinancialGoalType } from "../../type";
import { useAppSelector } from "../../../../redux/hooks";
import { selectUser } from "../../../../redux/user";
import { Description1 } from "../../../commoncomponent/Style";

type LeasingTermsProps = {
  formValues: FinancialGoalType;
};

const LeasingTerms: FC<LeasingTermsProps> = ({ formValues }) => {
  const { t } = useTranslation("shoppingassistant");
  const { user } = useAppSelector(selectUser);
  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";
  return (
    <>
      {/* <Grid item xs={12} mt={"20px"}>
        <Description1 textsize="14px">
          {t("lensingLengthTitle")}
        </Description1>
        <Box mt={"17px"}>
          <FormikDatePicker
            id={"leasingLength"}
            variant={"outlined"}
            name={"leasingLength"}
            fullWidth
            size="small"
            label={""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    src={getAssetUrl("redesign/calendaricon.svg")}
                    alt={"calendar"}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Grid> */}

      <Grid mt={"30px"} item xs={12}>
        <Box
          gap={"10px"}
          justifyContent={"space-between"}
          display={"flex"}
          alignItems={"center"}
        >
          <Box width={"90%"}>
            <FormikSlider
              label={"Leasing term"}
              name={"leasingLength"}
              labelText="year"
              min={1}
              hideLabel
              max={20}
            />
          </Box>
          <Box width={"20%"} pt={"20px"} pl={"10px"}>
            <Description1 textsize="12px">
              {formValues.leasingLength} {t("years")}
            </Description1>
          </Box>
        </Box>
      </Grid>


      <Grid item xs={12} mt={"20px"}>
        <Box mt={"17px"}>
          <FormikTextfield
            id={"monthlyPayment"}
            name={"monthlyPayment"}
            label={t("leasingPaymentsTitle")!}
            fullWidth
            textfieldtype="tertiary"
            placeholder={prefferedCurrency}
          />
        </Box>
      </Grid>
      <Grid item xs={12} mt={"25px"}>
        <Box mt={"17px"}>
          <FormikTextfield
            id={"downPayment"}
            name={"downPayment"}
            label={t("leasingDownpaymentTitle")!}
            fullWidth
            textfieldtype="tertiary"
            placeholder={prefferedCurrency}
          />
        </Box>
      </Grid>
    </>
  );
};

export default LeasingTerms;
