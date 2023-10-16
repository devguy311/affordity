import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { HeadingText } from "../../commoncomponent/Text";
import { useWindowSize } from "../../../hooks";
import { BudgetRuleValidationSchema, getBudgetRule } from "../util";
import { useRouter } from "next/router";
import { Formik } from "formik";
import { FormikTextfield } from "../../commoncomponent/form/FormikTextfield";
import { PrimaryContainedButton } from "../../commoncomponent/Button";
import { getAssetUrl } from "../../../util/SiteUtil";
import { useAppSelector } from "../../../redux/hooks";
import { selectUser } from "../../../redux/user";
import { ShoppingAssistantHelpType } from "../../shoppingassistantform/type";
import AssistantHelp from "../../commoncomponent/AssistantHelp";

type BudgetFormProps = {
  helpData: ShoppingAssistantHelpType[];
  hideShoppingHelp?: boolean;
  forExtension?: boolean;
};

const BudgetForm: FC<BudgetFormProps> = ({ helpData, hideShoppingHelp }) => {
  const { mobileView } = useWindowSize();
  const navigate = useRouter();
  const { user } = useAppSelector(selectUser);
  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";
  const { t } = useTranslation("budgetrule");

  return (
    <Grid container justifyContent={"center"}>
      <Grid item maxWidth={["100%", "1144px"]}>
        <Grid container>
          <Grid item xs={12} mb={"40px"}>
            <HeadingText
              style={{ lineHeight: "125%" }}
              textsize={mobileView ? "24px" : "32px"}
            >
              {t("formTitle")}
            </HeadingText>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            order={[2, 2, 1]}
            borderRight={["none", "none", "1px dashed rgba(0, 0, 0, 0.2)"]}
          >
            <Formik
              initialValues={{
                income: "",
                needs: "",
                wants: "",
              }}
              validationSchema={BudgetRuleValidationSchema}
              onSubmit={({
                income,
                needs,
                wants,
              }: {
                income: string;
                needs: string;
                wants: string;
              }) => {
                getBudgetRule(income, needs, wants).then((response) => {
                  navigate.push({
                    pathname: "/budget-rule-result",
                    query: {
                      data: JSON.stringify(response),
                    },
                  });
                });
              }}
            >
              {({ handleSubmit }) => (
                <Grid item xs={12}>
                  <Grid container justifyContent={"center"}>
                    <Grid item xs={12}>
                      <Grid container width={["100%", "100%", "445px"]}>
                        <Grid item xs={12} mt={"10px"}>
                          <FormikTextfield
                            id={"income"}
                            name={"income"}
                            label={t("income")!}
                            textfieldtype="tertiary"
                            fullWidth
                            // placeholder={prefferedCurrency}
                          />
                        </Grid>
                        <Grid item xs={12} mt={"10px"}>
                          <FormikTextfield
                            id={"wants"}
                            name={"wants"}
                            label={t("wants")!}
                            textfieldtype="tertiary"
                            fullWidth
                            // placeholder={prefferedCurrency}
                          />
                        </Grid>
                        <Grid item xs={12} mt={"10px"}>
                          <FormikTextfield
                            id={"needs"}
                            name={"needs"}
                            label={t("needs")!}
                            textfieldtype="tertiary"
                            fullWidth
                            // placeholder={prefferedCurrency}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Box display={"flex"} justifyContent={"left"} mt={"40px"}>
                    <PrimaryContainedButton
                      onClick={() => {
                        handleSubmit();
                      }}
                      style={{ display: "flex", gap: 10 }}
                    >
                      <img src={getAssetUrl("redesign/graphIcon.svg")} />
                      {t("seeResultsButton")}
                    </PrimaryContainedButton>
                  </Box>
                </Grid>
              )}
            </Formik>
          </Grid>
          {!hideShoppingHelp && (
            <Grid item xs={12} md={5} order={[1, 1, 2]}>
              <AssistantHelp title={t("helpTitle")} helpData={helpData} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BudgetForm;
