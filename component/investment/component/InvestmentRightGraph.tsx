import { FC } from "react";
import { useTranslation } from "react-i18next";
import { PortfolioAllocationType } from "../type";
import { getInvestmentExpenseMaximumHeight } from "../util";
import GraphBlock from "../../commoncomponent/component/GraphBlock";
import { calculateBarHeight } from "../../../util/SiteUtil";
import { DescriptionText2 } from "../../commoncomponent/Text";

type InvestmentRightGraphProps = {
  expenseDetail: PortfolioAllocationType;
};

const InvestmentRightGraph: FC<InvestmentRightGraphProps> = ({
  expenseDetail,
}) => {
  const graphobj = [
    {
      value: expenseDetail.option2.bonds,
      component: (
        <GraphBlock
          reverse
          height={`${calculateBarHeight(
            getInvestmentExpenseMaximumHeight(
              expenseDetail.option1,
              expenseDetail.option2
            ),
            164,
            expenseDetail.option2.bonds
          )}px`}
          color="#4B8F8F80"
          valueText={`${expenseDetail.option2.bonds}%`}
        />
      ),
    },
    {
      value: expenseDetail.option2.cash,
      component: (
        <GraphBlock
          reverse
          height={`${calculateBarHeight(
            getInvestmentExpenseMaximumHeight(
              expenseDetail.option1,
              expenseDetail.option2
            ),
            164,
            expenseDetail.option2.cash
          )}px`}
          color="#4B8F8F33"
          valueText={`${expenseDetail.option2.cash}%`}
        />
      ),
    },
    {
      value: expenseDetail.option2.stock,
      component: (
        <GraphBlock
          reverse
          height={`${calculateBarHeight(
            getInvestmentExpenseMaximumHeight(
              expenseDetail.option1,
              expenseDetail.option2
            ),
            164,
            expenseDetail.option2.stock
          )}px`}
          color="#4B8F8F"
          valueText={`${expenseDetail.option2.stock}%`}
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
        {t("option2high")}
      </DescriptionText2>
    </>
  );
};

export default InvestmentRightGraph;
