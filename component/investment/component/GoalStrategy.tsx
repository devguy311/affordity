import { FC } from "react";
import { useTranslation } from "react-i18next";
import { GoalCardContainer } from "../style";
import { HeadingText } from "../../commoncomponent/Text";
import { StrategyType } from "../type";
import Box from "@mui/material/Box";
import { Description1 } from "../../commoncomponent/Style";
import { t } from "i18next";

type GoalStrategyProps = {
  strategy?: StrategyType;
};
const GoalStrategy: FC<GoalStrategyProps> = ({ strategy }) => {
  const { t } = useTranslation("investmentdetailedResult");
  return (
    <GoalCardContainer>
      <HeadingText textsize="24px">{t("strategy")}</HeadingText>
      {strategy ? (
        <Box mt={"30px"}>
          {strategy.option1 && (
            <Box>
              <Description1 align="left">
                <span style={{ fontWeight: 700 }}>{t("option1")}:</span>
              </Description1>
              <Description1 textcolor="#534F59" align="left">
                {strategy.option1}
              </Description1>
            </Box>
          )}
          {strategy.option2 && (
            <Box width={"100%"} display={"flex"} justifyContent={"end"}>
              <Box width={"60%"}>
                <Description1 align="right">
                  <span style={{ fontWeight: 700 }}>{t("option2")}:</span>
                </Description1>
                <Description1 textcolor="#534F59" align="right">
                  {strategy.option2}
                </Description1>
              </Box>
            </Box>
          )}
        </Box>
      ) : (
        <Description1 mt={"37px"} textcolor="#534F59" align="right">
          {t("strategyComfort")}
        </Description1>
      )}
    </GoalCardContainer>
  );
};

export default GoalStrategy;
