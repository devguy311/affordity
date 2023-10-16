import Grid from "@mui/material/Grid";
import { useFormikContext } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import FormikRadioGroup from "../../../commoncomponent/form/FormikRadioGroup";
import { financingOption } from "../../../../constant/siteOptions";
import { FinancialGoalType } from "../../type";
import LeasingTerms from "./LeasingTerms";
import { Description1 } from "../../../commoncomponent/Style";
import LoanTerm from "./LoanTerm";
import Divider from "@mui/material/Divider";

const FinancingForm = () => {
  const { t } = useTranslation("shoppingassistant");

  const { values } = useFormikContext();

  const data = values as FinancialGoalType;

  const renderView = () => {
    if (data.financingAdviceType === "loan") {
      return <LoanTerm formValues={data} />;
    }
    if (data.financingAdviceType === "leasingTerms") {
      return <LeasingTerms formValues={data} />;
    }

    return <></>;
  };
  return (
    <Grid container pt={"56px"} justifyContent={"center"}>

      <Grid item xs={12}>
        <Description1 style={{ fontWeight: 700, textAlign: "left" }}>
          {t("financingTitle")}
        </Description1>
      </Grid>
      <Grid item xs={12}>
        <Grid container width={["100%", "100%", "445px"]}>
          <Grid item xs={12} mt={"20px"}>
            <FormikRadioGroup
              label={t("financingDescription")!}
              name={"financingAdviceType"}
              options={financingOption(t)}
              row
            />
          </Grid>
          {renderView()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FinancingForm;
