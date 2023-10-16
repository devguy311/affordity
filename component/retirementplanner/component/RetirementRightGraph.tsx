import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { AllocationType } from "../type";
import { getRetirementMaximumHeight } from "../util";
import GraphBlock from "../../commoncomponent/component/GraphBlock";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { calculateBarHeight } from "../../../util/SiteUtil";

type RetirementRightGraphProps = {
  expenseDetail: AllocationType;
};

const RetirementRightGraph: FC<RetirementRightGraphProps> = ({
  expenseDetail,
}) => {
  const graphobj = [
    {
      value: expenseDetail.after.bonds,
      component: (
        <GraphBlock
          reverse
          height={`${calculateBarHeight(
            getRetirementMaximumHeight(
              expenseDetail.before,
              expenseDetail.after
            ),
            164,
            expenseDetail.after.bonds
          )}px`}
          color="#4B8F8F80"
          valueText={`${expenseDetail.after.bonds}%`}
        />
      ),
    },
    {
      value: expenseDetail.after.cash,
      component: (
        <GraphBlock
          reverse
          height={`${calculateBarHeight(
            getRetirementMaximumHeight(
              expenseDetail.before,
              expenseDetail.after
            ),
            164,
            expenseDetail.after.cash
          )}px`}
          color="#4B8F8F33"
          valueText={`${expenseDetail.after.cash}%`}
        />
      ),
    },
    {
      value: expenseDetail.after.stocks,
      component: (
        <GraphBlock
          reverse
          height={`${calculateBarHeight(
            getRetirementMaximumHeight(
              expenseDetail.before,
              expenseDetail.after
            ),
            164,
            expenseDetail.after.stocks
          )}px`}
          color="#4B8F8F"
          valueText={`${expenseDetail.after.stocks}%`}
        />
      ),
    },
  ];

  const sortObj = graphobj.sort((a, b) => a.value - b.value);
  const { t } = useTranslation("retirementplanner");

  return (
    <>
      {sortObj.map((item) => item.value !== 0 && item.component)}
      <DescriptionText2 display={"flex"} textAlign={"left"} textcolor="#7A7A7A" textsize="12px" textweight={700} mt={"10px"}>
        {t("after")}
      </DescriptionText2>
    </>
  );
};

export default RetirementRightGraph;
