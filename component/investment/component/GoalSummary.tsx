import { FC } from "react";
import { useTranslation } from "react-i18next";
import { GoalSummaryType } from "../type";
import { Description1 } from "../../commoncomponent/Style";
import { GoalCardContainer } from "../style";
import { HeadingText } from "../../commoncomponent/Text";
import Box from "@mui/material/Box";
import { formatAmountWithGap } from "../../../helpers/currencyHelper";

type GoalSummaryProps = {
  summary: GoalSummaryType;
};
const GoalSummary: FC<GoalSummaryProps> = ({ summary }) => {
  const { t } = useTranslation("investmentdetailedResult");
  return (
    <GoalCardContainer>
      <HeadingText textsize="24px">{t("goalSummary")}</HeadingText>
      <Box mt={"30px"}>
        <Description1 textcolor="#534F59" align="right">
          Horizon: <span style={{ fontWeight: 700 }}>{summary.horizon}</span>
        </Description1>
        <Description1 textcolor="#534F59" align="right">
          Start capital:{" "}
          <span style={{ fontWeight: 700 }}>
            {formatAmountWithGap(summary.startCapital)}
          </span>
        </Description1>
        <Description1 textcolor="#534F59" align="right">
          Target mount:{" "}
          <span style={{ fontWeight: 700 }}>
            {formatAmountWithGap(summary.targetAmount)}
          </span>
        </Description1>
        <Description1 textcolor="#534F59" align="right">
          Monthly deposits:{" "}
          <span style={{ fontWeight: 700 }}>
            {formatAmountWithGap(summary.monthlyDeposits)}
          </span>
        </Description1>
      </Box>
    </GoalCardContainer>
  );
};

export default GoalSummary;
