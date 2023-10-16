import React, { FC } from "react";
import { AllocationType } from "../../type";
import { getInvestmentQuickWayExpenseMaximumHeight } from "../../util";
import GraphBlock from "../../../commoncomponent/component/GraphBlock";
import { calculateBarHeight } from "../../../../util/SiteUtil";

type InvestmentQuickWayLeftGraphProps = {
  expenseDetail: AllocationType;
};

const InvestmentQuickWayLeftGraph: FC<InvestmentQuickWayLeftGraphProps> = ({
  expenseDetail,
}) => {
  const graphobj = [
    {
      value: expenseDetail.bonds,
      component: (
        <GraphBlock
          reverse
          height={`${calculateBarHeight(
            getInvestmentQuickWayExpenseMaximumHeight(expenseDetail),
            164,
            expenseDetail.bonds
          )}px`}
          color="#4B8F8F80"
          valueText={`${expenseDetail.bonds}%`}
        />
      ),
    },
    {
      value: expenseDetail.cash,
      component: (
        <GraphBlock
          reverse
          height={`${calculateBarHeight(
            getInvestmentQuickWayExpenseMaximumHeight(expenseDetail),
            164,
            expenseDetail.cash
          )}px`}
          color="#4B8F8F33"
          valueText={`${expenseDetail.cash}%`}
        />
      ),
    },
    {
      value: expenseDetail.stocks,
      component: (
        <GraphBlock
          reverse
          height={`${calculateBarHeight(
            getInvestmentQuickWayExpenseMaximumHeight(expenseDetail),
            164,
            expenseDetail.stocks
          )}px`}
          color="#4B8F8F"
          valueText={`${expenseDetail.stocks}%`}
        />
      ),
    },
  ];

  const sortObj = graphobj.sort((a, b) => a.value - b.value);

  return <>{sortObj.map((item) => item.value !== 0 && item.component)}</>;
};

export default InvestmentQuickWayLeftGraph;
