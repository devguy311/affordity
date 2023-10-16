import { FC } from "react";
import { useTranslation } from "react-i18next";
import { GoalCardContainer } from "../style";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { HeadingText } from "../../commoncomponent/Text";
import { OptionType } from "../type";
import { Description1 } from "../../commoncomponent/Style";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

type GoalOptionProps = {
  options: OptionType;
};
const GoalOption: FC<GoalOptionProps> = ({ options }) => {
  const { t } = useTranslation("investmentdetailedResult");
  return (
    <GoalCardContainer>
      <Grid container columnSpacing={"20px"}>
        {options?.option1 && (
          <Grid item xs={12} md={6}>
            <HeadingText textsize="24px">
              {options?.option2 ? t("option1") : t("strdetailed")}
            </HeadingText>
            <Box mt={"30px"}>
              {options?.option1?.map((item, index) => (
                <Description1
                  ml={index === 0 ? "0px" : "5px"}
                  key={index}
                  textcolor="#534F59"
                  display={"flex"}
                  alignItems="center"
                  align="left"
                >
                  {index !== 0 && (
                    <FiberManualRecordIcon
                      style={{ fontSize: 8, marginRight: 5 }}
                    />
                  )}{" "}
                  {item}
                </Description1>
              ))}
            </Box>
          </Grid>
        )}
        {options?.option2 && (
          <Grid item xs={12} md={6} mt={["20px", "0px"]}>
            <HeadingText textsize="24px">{t("option2")}</HeadingText>
            <Box mt={["5px", "5px", "30px"]}>
              {options?.option2?.map((item, index) => (
                <Description1
                  ml={index === 0 ? "0px" : "5px"}
                  key={index}
                  textcolor="#534F59"
                  display={"flex"}
                  alignItems="center"
                  align="left"
                >
                  {index !== 0 && (
                    <FiberManualRecordIcon
                      style={{ fontSize: 8, marginRight: 5 }}
                    />
                  )}{" "}
                  {item}
                </Description1>
              ))}
            </Box>
          </Grid>
        )}
      </Grid>
    </GoalCardContainer>
  );
};

export default GoalOption;
