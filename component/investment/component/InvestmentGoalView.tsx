import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CompletedTransactionImpactType, TransactiionGoalType } from "../type";
import Grid from "@mui/material/Grid";
import { getTabGoal } from "../util";
import { TabButton } from "../style";
import { getAssetUrl } from "../../../util/SiteUtil";
import NextImage from "../../commoncomponent/component/NextImage";
import GoalSummary from "./GoalSummary";
import GoalRiskresult from "./GoalRiskresult";
import GoalStrategy from "./GoalStrategy";
import GoalDetailedExplanation from "./GoalDetailedExplanation";
import GoalOption from "./GoalOption";
import GoalPortfolioAllocation from "./GoalPortfolioAllocation";
import GoalEtfExample from "./GoalEtfExample";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { useWindowSize } from "../../../hooks";
import { INVESTMENT_LINK_URL } from "../../../constant/siteConstant";

type InvestmentGoalViewProps = {
  goalInfo: CompletedTransactionImpactType;
};
const InvestmentGoalView: FC<InvestmentGoalViewProps> = ({ goalInfo }) => {
  const [selectedTab, setSelectedTab] = useState("goal1");
  const [selectedGoalInfo, setSelectedGoalInfo] =
    useState<TransactiionGoalType>(goalInfo.goal1);
  const { mobileView } = useWindowSize();

  useEffect(() => {
    if (selectedTab === "goal1") {
      setSelectedGoalInfo(goalInfo.goal1);
    }
    if (selectedTab === "goal2") {
      setSelectedGoalInfo(goalInfo.goal2);
    }
    if (selectedTab === "goal3") {
      setSelectedGoalInfo(goalInfo.goal3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);

  const { t } = useTranslation("investmentdetailedResult");

  const filteredGoals = getTabGoal(t).filter(
    (item, index) => goalInfo[`goal${index + 1}`] !== null
  );


  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid flexWrap={"nowrap"} container columnSpacing={"5px"}>
          {filteredGoals.map((item) => (
            <Grid item key={item.value}>
              <TabButton
                onClick={() => setSelectedTab(item.value)}
                style={{ display: "flex", alignItems: "center", gap: 5 }}
                isactive={item.value === selectedTab ? 1 : 0}
              >
                <NextImage
                  src={getAssetUrl("/redesign/graphIcon_black.svg")}
                  alt="graph"
                  height={mobileView ? "18px" : "24px"}
                  width={mobileView ? "18px" : "24px"}
                />
                {item.label}
              </TabButton>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12} mt={"30px"}>
        <Grid container spacing={["20px"]} alignItems={"stretch"}>
          <Grid item xs={12} md={4}>
            <GoalSummary summary={selectedGoalInfo.goalSummary} />
          </Grid>
          <Grid item xs={12} md={4}>
            <GoalRiskresult risk={selectedGoalInfo.riskResult} />
          </Grid>
          <Grid item xs={12} md={4}>
            <GoalStrategy strategy={selectedGoalInfo.strategy} />
          </Grid>
          <Grid item xs={12} md={4}>
            <GoalDetailedExplanation
              explanation={selectedGoalInfo.detailedExplanation}
            />
          </Grid>
          <Grid item md={8} xs={12}>
            <GoalOption options={selectedGoalInfo.options} />
          </Grid>
          <Grid item xs={12} md={4}>
            <GoalPortfolioAllocation
              allocation={selectedGoalInfo.portfolioAllocation}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <GoalEtfExample etfExample={selectedGoalInfo.etfExamples} />
          </Grid>
          <Grid item xs={12} mt={"56px"}>
            <DescriptionText2
              style={{ lineHeight: "135%" }}
              textcolor="#4B8F8F"
              textsize="20px"
            >
              {t("bottomText")}{" "}
              <span
                onClick={() => window.open(INVESTMENT_LINK_URL, "_blank")}
                style={{ cursor: "pointer", fontWeight: 700 }}
              >
                {t("readmore")}
              </span>
            </DescriptionText2>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InvestmentGoalView;
