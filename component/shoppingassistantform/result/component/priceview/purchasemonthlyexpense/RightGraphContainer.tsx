import React from "react";
import { FC } from "react";
import { DetailedGraphType } from "../../../../type";
import { useAppSelector } from "../../../../../../redux/hooks";
import { selectUser } from "../../../../../../redux/user";
import { calculateHeight, getMaximumHeight } from "../../../../util";
import { DescriptionText2 } from "../../../../../commoncomponent/Text";
import { formatAmountWithGap } from "../../../../../../helpers/currencyHelper";
import GraphBlock from "../../../../../commoncomponent/component/GraphBlock";

type RightGraphContainerProps = {
  detailedGraphData: DetailedGraphType;
};

const RightGraphContainer: FC<RightGraphContainerProps> = ({
  detailedGraphData,
}) => {
  const { affordified, user, metrics } = detailedGraphData;
  const { user: userData } = useAppSelector(selectUser);
  const prefferedCurrency = userData?.profileData?.prefferedCurrency || "USD";

  const graphobj = [
    {
      value: affordified.addExp.insurance,
      component: (
        <GraphBlock
          height={`${calculateHeight(
            getMaximumHeight(user, affordified),
            164,
            affordified.addExp.insurance
          )}px`}
          reverse
          color="#E5E5E5"
          valueText={`${affordified.addExp.insurance
            .toLocaleString()
            .replace(",", " ")}`}
        />
      ),
    },
    {
      value: affordified.addExp.maintenance,
      component: (
        <GraphBlock
          height={`${calculateHeight(
            getMaximumHeight(user, affordified),
            164,
            affordified.addExp.maintenance
          )}px`}
          reverse
          color="#A5C7C7"
          valueText={`${affordified.addExp.maintenance
            .toLocaleString()
            .replace(",", " ")}`}
        />
      ),
    },
    {
      value: affordified.purchase.loanPayment,
      component: (
        <GraphBlock
          height={`${calculateHeight(
            getMaximumHeight(user, affordified),
            164,
            affordified.purchase.loanPayment
          )}px`}
          reverse
          color="#4B8F8F"
          valueText={`${affordified.purchase.loanPayment
            .toLocaleString()
            .replace(",", " ")}`}
        />
      ),
    },
  ];

  const sortObj = graphobj.sort((a, b) => a.value - b.value);

  return (
    <>
      {sortObj.map((item) => item.value !== 0 && item.component)}

      <DescriptionText2 mt={"10px"} textsize="14px" textweight={700} textcolor={"#7A7A7A"}>
        After{" "}
        <span style={{ fontWeight: 700 }}>
          {formatAmountWithGap(affordified.purchase.price)} {prefferedCurrency}
        </span>{" "}
      </DescriptionText2>
    </>
  );
};

export default RightGraphContainer;
