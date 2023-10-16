import React, { FC, useState, useEffect } from "react";
import { ProfileCardContainer } from "../style";
import { HeadingText } from "../../commoncomponent/Text";
import { Formik } from "formik";
import { generalSettingsInitialData, generalValidationSchema } from "../util";
import { GeneralDetailType } from "../type";
import Grid from "@mui/material/Grid";
import { FormikTextfield } from "../../commoncomponent/form/FormikTextfield";
import FormikSelect from "../../commoncomponent/form/FormikSelect";
import {
  countryOptions,
  currencyOption,
  genderOptions,
} from "../../../constant/siteOptions";
import FormikRadioGroup from "../../commoncomponent/form/FormikRadioGroup";
import { useTranslation } from "react-i18next";
import { PrimaryContainedButton } from "../../commoncomponent/Button";
import { IUserState } from "../../../redux/user";
import Alert from "@mui/material/Alert";

type GeneralDetailsProps = {
  handleUpdateGeneralSettings: (value: GeneralDetailType) => void;
  user: IUserState;
  alertMessage: {
    severity: string;
    message: string;
  } | null;
};
const GeneralDetails: FC<GeneralDetailsProps> = ({
  handleUpdateGeneralSettings,
  user,
  alertMessage,
}) => {
  const { t } = useTranslation("account");

  const [initialData, setInitialData] = useState<any>({
    salary: "",
    savings: "",
    capital: "",
    country: "",
    age: "",
    gender: "",
    prefferedCurrency: "",
  });

  useEffect(() => {
    if (user) {
      setInitialData({
        capital: user?.profileData?.capital || "",
        savings: user?.profileData?.savings || "",
        salary: user?.profileData?.salary || "",
        country: user?.profileData?.country || "",
        age: user?.profileData?.age || "",
        gender: user?.profileData?.gender || "",
        prefferedCurrency: user?.profileData?.prefferedCurrency || "",
      });
    }
  }, [user]);

  return (
    <ProfileCardContainer>
      <HeadingText textsize="32px" mb={"40px"}>
        {t("generalTitle")}
      </HeadingText>

      {alertMessage && (
        <Alert
          severity={alertMessage.severity as any}
          variant="filled"
          sx={{
            mb: 2,
          }}
        >
          {alertMessage.message}
        </Alert>
      )}

      <Formik
        initialValues={initialData}
        onSubmit={handleUpdateGeneralSettings}
        enableReinitialize={true}
        validationSchema={generalValidationSchema}
      >
        {({ handleSubmit }) => (
          <Grid container rowSpacing={"24px"}>
            <Grid item xs={12}>
              <FormikSelect
                options={currencyOption}
                label={t("currency")!}
                fullWidth
                fieldType="primary"
                name={"prefferedCurrency"}
                id={"prefferedCurrency"}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormikTextfield
                textfieldtype="tertiary"
                label={t("salary")!}
                fullWidth
                name={"salary"}
                id={"salary"}
              />
            </Grid>
            <Grid item xs={12}>
              <FormikTextfield
                textfieldtype="tertiary"
                label={t("savings")!}
                fullWidth
                name={"savings"}
                id={"savings"}
              />
            </Grid>
            <Grid item xs={12}>
              <FormikTextfield
                textfieldtype="tertiary"
                label={t("capital")!}
                fullWidth
                name={"capital"}
                id={"capital"}
              />
            </Grid> */}
            <Grid item xs={12}>
              <FormikSelect
                options={countryOptions}
                label={t("country")!}
                fullWidth
                fieldType="primary"
                name={"country"}
                id={"country"}
              />
            </Grid>
            <Grid item xs={12}>
              <FormikTextfield
                textfieldtype="tertiary"
                label={t("age")!}
                fullWidth
                name={"age"}
                id={"age"}
              />
            </Grid>
            <Grid item xs={12}>
              <FormikRadioGroup
                label={t("gender")!}
                name={"gender"}
                row
                id={"gender"}
                options={genderOptions(t)}
              />
            </Grid>
            <Grid item xs={12}>
              <PrimaryContainedButton onClick={() => handleSubmit()} fullWidth>
                {t("save")}
              </PrimaryContainedButton>
            </Grid>
          </Grid>
        )}
      </Formik>
    </ProfileCardContainer>
  );
};

export default GeneralDetails;
