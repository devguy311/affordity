import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { AllocationType } from "../type";
import { getRetirementMaximumHeight } from "../util";
import GraphBlock from "../../commoncomponent/component/GraphBlock";
import { calculateBarHeight } from "../../../util/SiteUtil";
import { DescriptionText2 } from "../../commoncomponent/Text";

type RetirementLeftGraphProps = {
  expenseDetail: AllocationType;
};

const RetirementLeftGraph: FC<RetirementLeftGraphProps> = ({
  expenseDetail,
}) => {
  const graphobj = [
    {
      value: expenseDetail.after.bonds,
      component: (
        <GraphBlock
          height={`${calculateBarHeight(
            getRetirementMaximumHeight(
              expenseDetail.before,
              expenseDetail.after
            ),
            164,
            expenseDetail.before.bonds
          )}px`}
          color="#4B8F8F80"
          valueText={`${expenseDetail.before.bonds}%`}
        />
      ),
    },
    {
      value: expenseDetail.before.cash,
      component: (
        <GraphBlock
          height={`${calculateBarHeight(
            getRetirementMaximumHeight(
              expenseDetail.before,
              expenseDetail.after
            ),
            164,
            expenseDetail.before.cash
          )}px`}
          color="#4B8F8F33"
          valueText={`${expenseDetail.before.cash}%`}
        />
      ),
    },
    {
      value: expenseDetail.before.stocks,
      component: (
        <GraphBlock
          height={`${calculateBarHeight(
            getRetirementMaximumHeight(
              expenseDetail.before,
              expenseDetail.after
            ),
            164,
            expenseDetail.before.stocks
          )}px`}
          color="#4B8F8F"
          valueText={`${expenseDetail.before.stocks}%`}
        />
      ),
    },
  ];

  const sortObj = graphobj.sort((a, b) => a.value - b.value);
  const { t } = useTranslation("retirementplanner");

  return (
    <>
      {sortObj.map((item) => item.value !== 0 && item.component)}
      <DescriptionText2
        display={"flex"}
        justifyContent={"end"}
        textAlign={"right"}
        textcolor="#7A7A7A"
        textsize="12px"
        textweight={700}
        mt={"10px"}
      >
        {t("before")}
      </DescriptionText2>
    </>
  );
};

export default RetirementLeftGraph;
