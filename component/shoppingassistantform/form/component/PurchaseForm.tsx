import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";
import { useFormikContext } from "formik";
import { useTranslation } from "react-i18next";
import FormikDatePicker from "../../../commoncomponent/form/FormikDatePicker";
import { FormikTextfield } from "../../../commoncomponent/form/FormikTextfield";

import { FinancialGoalType } from "../../type";
import { useAppSelector } from "../../../../redux/hooks";
import { selectUser } from "../../../../redux/user";
import { getAssetUrl } from "../../../../util/SiteUtil";
import { Description1 } from "../../../commoncomponent/Style";

const PruchaseForm = () => {
  const { values } = useFormikContext();
  const { user } = useAppSelector(selectUser);
  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";

  const data = values as FinancialGoalType;

  const { t } = useTranslation("shoppingassistant");
  return (
    <Grid container pt={"56px"} justifyContent={"center"}>

      <Grid item xs={12}>
        <Description1 style={{ fontWeight: 700, textAlign: "left" }}>
          {t("purchaseInfo")}
        </Description1>
      </Grid>
      <Grid item xs={12}>
        <Grid container width={["100%", "100%", "445px"]}>
          <Grid item xs={12} mt={"20px"}>
            <Box>
              <FormikTextfield
                id={"price"}
                name={"price"}
                label={t("purchasePrice")!}
                textfieldtype="tertiary"
                fullWidth
                placeholder={prefferedCurrency}
              />
            </Box>
          </Grid>
          <Grid item xs={12} mt={"20px"}>
            <Box>
              <FormikDatePicker
                id={"purchaseDate"}
                name={"purchaseDate"}
                label={t("purchaseDate")!}
                variant={"outlined"}

                fullWidth
                placeholderText={t("purchaseDateDescription")!}
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
          </Grid>
          <Grid item xs={12} mt={"20px"}>
            <Box>
              <FormikTextfield
                id={"maintenance"}
                name={"maintenance"}
                label={t("purchaseMaintenance")!}
                infoText={t("maintenanceDescription")!}
                fullWidth
                textfieldtype="tertiary"
                placeholder={prefferedCurrency}
              />
            </Box>
          </Grid>
          <Grid item xs={12} mt={"20px"}>
            <Box mt={"10px"}>
              <FormikTextfield
                id={"insurance"}
                name={"insurance"}
                label={t("purchaseInsurance")!}
                infoText={t("insuranceDescription")!}
                fullWidth
                placeholder={prefferedCurrency}
                textfieldtype="tertiary"
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PruchaseForm;
