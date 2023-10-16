import { FC } from "react";
import { useTranslation } from "react-i18next";
import { RiskResultType } from "../type";
import { GoalCardContainer } from "../style";
import { HeadingText } from "../../commoncomponent/Text";
import Box from "@mui/material/Box";
import { Description1 } from "../../commoncomponent/Style";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";

type GoalRiskresultProps = {
  risk: RiskResultType;
};
const GoalRiskresult: FC<GoalRiskresultProps> = ({ risk }) => {
  const { t } = useTranslation("investmentdetailedResult");
  return (
    <GoalCardContainer style={{ padding: 0 }}>
      <Box px={"30px"} py={"27px"}>
        <HeadingText textsize="24px">{t("riskresult")}</HeadingText>
        <Box mt={"30px"}>
          <Description1 textcolor="#534F59" align="right">
            Risk needs:{" "}
            <span style={{ fontWeight: 700 }}>{risk.riskNeeds}</span>
          </Description1>
          <Description1 textcolor="#534F59" align="right">
            Risk tolerance:{" "}
            <span style={{ fontWeight: 700 }}>{risk.riskTolerance}</span>
          </Description1>
          <Description1 textcolor="#534F59" align="right">
            Ability to take risks:{" "}
            <span style={{ fontWeight: 700 }}>{risk.riskAbility}</span>
          </Description1>
        </Box>
      </Box>
      <Box
        bgcolor={
          risk.aligned ? "rgba(212, 248, 230, 0.60)" : "rgba(255, 79, 91, 0.10)"
        }
      >
        <Description1
          textcolor={risk.aligned ? "#45B386" : "#FF4F5B"}
          align="center"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"16px"}
          gap={"10px"}
        >
          <NextImage
            src={
              risk.aligned
                ? getAssetUrl("/redesign/purse_icon_positive.svg")
                : getAssetUrl("/redesign/info_icon_danger.svg")
            }
            alt="info"
            height="24px"
            width={"24px"}
          />
          <span style={{ fontWeight: 700 }}>
            {risk.aligned ? "Risks are aligned" : "Risks are not aligned"}
          </span>
        </Description1>
      </Box>
    </GoalCardContainer>
  );
};

export default GoalRiskresult;
