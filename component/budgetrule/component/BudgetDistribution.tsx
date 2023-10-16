import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { budgetFormHelpData } from "../util";
import { BudgetIncomeType } from "../type";
import IncomeDistributionCard from "./IncomeDistributionCard";
import AssistantHelp from "../../commoncomponent/AssistantHelp";

type BudgetDistributionProps = {
  budgetResult?: BudgetIncomeType;
  prefferedCurrency: string;
};
const BudgetDistribution: FC<BudgetDistributionProps> = ({
  budgetResult,
  prefferedCurrency,
}) => {
  const { t } = useTranslation("budgetrule");
  return (
    <Grid container>
      <Grid item xs={12} mt={"40px"}>
        <Grid container>
          <Grid
            item
            xs={12}
            order={[2, 2, 1]}
            md={7}
            pr={["0px", "0px", "115px"]}
            borderRight={["none", "none", "1px dashed rgba(0, 0, 0, 0.2)"]}
          >
            <IncomeDistributionCard
              budgetInfo={{
                needs: budgetResult?.needs as number,
                savings: budgetResult?.savings as number,
                wants: budgetResult?.wants as number,
                usr_needs: budgetResult?.usr_needs as number,
                usr_savings: budgetResult?.usr_savings as number,
                usr_wants: budgetResult?.usr_wants as number,
              }}
              description={t("resultDescription")}
              prefferedCurrency={prefferedCurrency}
            />
          </Grid>
          <Grid
            display={["none", "none", "block"]}
            item
            xs={12}
            md={5}
            order={[1, 1, 2]}
          >
            <AssistantHelp
              title={t("titleHelp")}
              helpData={budgetFormHelpData(t)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BudgetDistribution;
