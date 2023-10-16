import { FC } from "react";
import { useTranslation } from "react-i18next";
import { PortfolioAllocationType } from "../type";
import { getInvestmentExpenseMaximumHeight } from "../util";
import GraphBlock from "../../commoncomponent/component/GraphBlock";
import { calculateBarHeight } from "../../../util/SiteUtil";
import { DescriptionText2 } from "../../commoncomponent/Text";

type InvestmentLeftGraphProps = {
  expenseDetail: PortfolioAllocationType;
};

const InvestmentLeftGraph: FC<InvestmentLeftGraphProps> = ({
  expenseDetail,
}) => {
  const graphobj = [
    {
      value: expenseDetail.option1.bonds,
      component: (
        <GraphBlock
          height={`${calculateBarHeight(
            getInvestmentExpenseMaximumHeight(
              expenseDetail.option1,
              expenseDetail.option2
            ),
            164,
            expenseDetail.option1.bonds
          )}px`}
          color="#4B8F8F80"
          valueText={`${expenseDetail.option1.bonds}%`}
        />
      ),
    },
    {
      value: expenseDetail.option1.cash,
      component: (
        <GraphBlock
          height={`${calculateBarHeight(
            getInvestmentExpenseMaximumHeight(
              expenseDetail.option1,
              expenseDetail.option2
            ),
            164,
            expenseDetail.option1.cash
          )}px`}
          color="#4B8F8F33"
          valueText={`${expenseDetail.option1.cash}%`}
        />
      ),
    },
    {
      value: expenseDetail.option1.stock,
      component: (
        <GraphBlock
          height={`${calculateBarHeight(
            getInvestmentExpenseMaximumHeight(
              expenseDetail.option1,
              expenseDetail.option2
            ),
            164,
            expenseDetail.option1.stock
          )}px`}
          color="#4B8F8F"
          valueText={`${expenseDetail.option1.stock}%`}
        />
      ),
    },
  ];

  const sortObj = graphobj.sort((a, b) => a.value - b.value);
  const { t } = useTranslation("investmentdetailedResult");

  return (
    <>
      {sortObj.map((item) => item.value !== 0 && item.component)}
      <DescriptionText2
        mt={"9px"}
        textcolor="#7A7A7A"
        textsize="12px"
        textweight={700}
      >
        {t("option1low")}
      </DescriptionText2>
    </>
  );
};

export default InvestmentLeftGraph;
