import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { ExpensesBreakdownType } from "../type";
import { getExpenseMaximumHeight } from "../util";
import GraphBlock from "../../commoncomponent/component/GraphBlock";
import { calculateBarHeight } from "../../../util/SiteUtil";
import { DescriptionText2 } from "../../commoncomponent/Text";

type ExpenseRightGraphProps = {
  expenseDetail: ExpensesBreakdownType;
};

const ExpenseRightGraph: FC<ExpenseRightGraphProps> = ({ expenseDetail }) => {
  const graphobj = [
    {
      value: expenseDetail.afterPurchase.loanAmount,
      component: (
        <GraphBlock
          reverse
          height={`${calculateBarHeight(
            getExpenseMaximumHeight(
              expenseDetail.beforePurchase,
              expenseDetail.afterPurchase
            ),
            164,
            expenseDetail.afterPurchase.loanAmount
          )}px`}
          color="#4B8F8F80"
          valueText={`${expenseDetail.afterPurchase.loanAmount}`}
        />
      ),
    },
    {
      value: expenseDetail.afterPurchase.insuranceGas,
      component: (
        <GraphBlock
          reverse
          height={`${calculateBarHeight(
            getExpenseMaximumHeight(
              expenseDetail.beforePurchase,
              expenseDetail.afterPurchase
            ),
            164,
            expenseDetail.afterPurchase.insuranceGas
          )}px`}
          color="#4B8F8F33"
          valueText={`${expenseDetail.afterPurchase.insuranceGas}`}
        />
      ),
    },
    {
      value: expenseDetail.afterPurchase.regularExpenses,
      component: (
        <GraphBlock
          reverse
          height={`${calculateBarHeight(
            getExpenseMaximumHeight(
              expenseDetail.beforePurchase,
              expenseDetail.afterPurchase
            ),
            164,
            expenseDetail.afterPurchase.regularExpenses
          )}px`}
          color="#4B8F8F"
          valueText={`${expenseDetail.afterPurchase.regularExpenses}`}
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
        {t("afterPurchase")}
      </DescriptionText2>
    </>
  );
};

export default ExpenseRightGraph;
