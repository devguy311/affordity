import { FC } from "react";
import { formatAmountWithGap } from "../../../../../../helpers/currencyHelper";
import { DetailedGraphType } from "../../../../type";
import { calculateHeight, getMaximumHeight } from "../../../../util";
import { DescriptionText2 } from "../../../../../commoncomponent/Text";
import { useAppSelector } from "../../../../../../redux/hooks";
import { selectUser } from "../../../../../../redux/user";
import GraphBlock from "../../../../../commoncomponent/component/GraphBlock";

type LeftGraphContainerProps = {
  detailedGraphData: DetailedGraphType;
};

const LeftGraphContainer: FC<LeftGraphContainerProps> = ({
  detailedGraphData,
}) => {
  const { affordified, user, metrics } = detailedGraphData;
  const { user: userData } = useAppSelector(selectUser);
  const prefferedCurrency = userData?.profileData?.prefferedCurrency || "USD";

  const graphobj = [
    {
      value: user.addExp.maintenance,
      component: (
        <GraphBlock
          height={`${calculateHeight(
            getMaximumHeight(user, affordified),
            164,
            user.addExp.maintenance
          )}px`}
          color="#A5C7C7"
          valueText={`${user.addExp.maintenance
            .toLocaleString()
            .replace(",", " ")}`}
        />
      ),
    },
    {
      value: user.addExp.insurance,
      component: (
        <GraphBlock
          height={`${calculateHeight(
            getMaximumHeight(user, affordified),
            164,
            user.addExp.insurance
          )}px`}
          color="#E5E5E5"
          valueText={`${user.addExp.insurance
            .toLocaleString()
            .replace(",", " ")}`}
        />
      ),
    },
    {
      value: user.purchase.loanPayment,
      component: (
        <GraphBlock
          height={`${calculateHeight(
            getMaximumHeight(user, affordified),
            164,
            user.purchase.loanPayment
          )}px`}
          color="#4B8F8F"
          valueText={`${user.purchase.loanPayment
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
      {user.purchase.price && (
        <DescriptionText2
          align="right"
          mt={"10px"}
          textsize="14px"
          textweight={700}
          textcolor={"#7A7A7A"}
        >
          After{" "}
          <span style={{ fontWeight: 700 }}>
            {formatAmountWithGap(user.purchase.price)} {prefferedCurrency}
          </span>{" "}
        </DescriptionText2>
      )}
    </>
  );
};

export default LeftGraphContainer;
