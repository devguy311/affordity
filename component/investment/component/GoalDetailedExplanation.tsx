import { FC } from "react";
import { useTranslation } from "react-i18next";
import { GoalCardContainer } from "../style";
import { HeadingText } from "../../commoncomponent/Text";
import Box from "@mui/material/Box";
import { Description1 } from "../../commoncomponent/Style";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

type GoalDetailedExplanationProps = {
  explanation: string[][];
};
const GoalDetailedExplanation: FC<GoalDetailedExplanationProps> = ({
  explanation,
}) => {
  const { t } = useTranslation("investmentdetailedResult");
  return (
    <GoalCardContainer>
      <HeadingText textsize="24px">{t("detailedexplanationCardTitle")}</HeadingText>
      <Box mt={"30px"}>
        {explanation.map((item, index) =>
          item.map((desc) => (
            <Description1
              ml={index === 0 ? "0px" : "5px"}
              key={desc}
              textcolor="#534F59"
              display={"flex"}
              alignItems="center"
            >
              {index !== 0 && (
                <FiberManualRecordIcon
                  style={{ fontSize: 8, marginRight: 5 }}
                />
              )}{" "}
              {desc}
            </Description1>
          ))
        )}
      </Box>
    </GoalCardContainer>
  );
};

export default GoalDetailedExplanation;
