import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { FormikTextfield } from "../../../commoncomponent/form/FormikTextfield";
import { useAppSelector } from "../../../../redux/hooks";
import { selectUser } from "../../../../redux/user";
import { Description1 } from "../../../commoncomponent/Style";
import Divider from "@mui/material/Divider";
import { useWindowSize } from "../../../../hooks";

const MySituationForm = ({ forExtension }: { forExtension?: boolean }) => {
  const { t } = useTranslation("shoppingassistant");
  const { user } = useAppSelector(selectUser);
  const { mobileView } = useWindowSize();
  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";

  return (
    <Grid
      container
      style={{ paddingTop: forExtension ? 0 : "auto" }}
      justifyContent={"center"}
    >
      {!forExtension && !mobileView && (
        <Grid item my={"45px"} display={["block", "block", "none"]} xs={11}>
          <Divider />
        </Grid>
      )}
      <Grid item xs={12}>
        <Description1 style={{ fontWeight: 700, textAlign: "left" }}>
          {t("mySituation")}
        </Description1>
      </Grid>
      <Grid item xs={12}>
        <Grid container width={["100%", "100%", "445px"]}>
          <Grid item xs={12} mt={"20px"}>
            <FormikTextfield
              id={"monthlySalary"}
              name={"monthlySalary"}
              label={t("monthlySalary") || "Monthly Salary"}
              textfieldtype="tertiary"
              fullWidth
              placeholder={prefferedCurrency}
            />
          </Grid>
          <Grid item xs={12} mt={"20px"}>
            <FormikTextfield
              id={"monthlySavings"}
              name={"monthlySavings"}
              label={t("monthlySavings")!}
              textfieldtype="tertiary"
              fullWidth
              placeholder={prefferedCurrency}
            />
          </Grid>
          <Grid item xs={12} mt={"20px"}>
            <FormikTextfield
              id={"currentCapital"}
              name={"currentCapital"}
              infoText={t("capitalDescription")!}
              textfieldtype="tertiary"
              label={t("capital") || "Current Capital"}
              fullWidth
              placeholder={prefferedCurrency}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MySituationForm;
