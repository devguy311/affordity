import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { ExpensesBreakdownType } from "../type";
import { getExpenseMaximumHeight } from "../util";
import GraphBlock from "../../commoncomponent/component/GraphBlock";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { calculateBarHeight } from "../../../util/SiteUtil";

type ExpenseLeftGraphProps = {
  expenseDetail: ExpensesBreakdownType;
};

const ExpenseLeftGraph: FC<ExpenseLeftGraphProps> = ({ expenseDetail }) => {
  const graphobj = [
    {
      value: expenseDetail.beforePurchase.loanAmount,
      component: (
        <GraphBlock
          height={`${calculateBarHeight(
            getExpenseMaximumHeight(
              expenseDetail.beforePurchase,
              expenseDetail.afterPurchase
            ),
            164,
            expenseDetail.beforePurchase.loanAmount
          )}px`}
          color="#4B8F8F80"
          valueText={`${expenseDetail.beforePurchase.loanAmount}`}
        />
      ),
    },
    {
      value: expenseDetail.beforePurchase.insuranceGas,
      component: (
        <GraphBlock
          height={`${calculateBarHeight(
            getExpenseMaximumHeight(
              expenseDetail.beforePurchase,
              expenseDetail.afterPurchase
            ),
            164,
            expenseDetail.beforePurchase.insuranceGas
          )}px`}
          color="#4B8F8F33"
          valueText={`${expenseDetail.beforePurchase.insuranceGas}`}
        />
      ),
    },
    {
      value: expenseDetail.beforePurchase.regularExpenses,
      component: (
        <GraphBlock
          height={`${calculateBarHeight(
            getExpenseMaximumHeight(
              expenseDetail.beforePurchase,
              expenseDetail.afterPurchase
            ),
            164,
            expenseDetail.beforePurchase.regularExpenses
          )}px`}
          color="#4B8F8F"
          valueText={`${expenseDetail.beforePurchase.regularExpenses}`}
        />
      ),
    },
  ];

  const sortObj = graphobj.sort((a, b) => a.value - b.value);
  const { t } = useTranslation("carruleresult");

  return (
    <>
      {sortObj.map((item) => item.value !== 0 && item.component)}
      <DescriptionText2 textcolor="#7A7A7A" textsize="12px" textweight={700}>
        {t("beforePurchase")}
      </DescriptionText2>
    </>
  );
};

export default ExpenseLeftGraph;
