import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { BudgetIncomeType } from "../type";
import { useWindowSize } from "../../../hooks";
import { CardContainer } from "../../commoncomponent/component/style";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { DescriptionText2 } from "../../commoncomponent/Text";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import { BudgetColumn } from "../style";

type IncomeDistributionCardProps = {
  budgetInfo: BudgetIncomeType;
  description: string;
  prefferedCurrency?: string;
};
const IncomeDistributionCard: FC<IncomeDistributionCardProps> = ({
  budgetInfo,
  description,
  prefferedCurrency,
}) => {
  const total = budgetInfo.needs + budgetInfo.savings + budgetInfo.wants;
  const total_usr = budgetInfo.usr_needs + budgetInfo.usr_savings + budgetInfo.usr_wants;
  const width_factor = 150
  const { mobileView } = useWindowSize();
  const { t } = useTranslation("budgetrule");
  return (
    <CardContainer p={"40px"}>
      <Box>
        <DescriptionText2
          display={"flex"}
          gap={"8px"}
          alignItems={"center"}
          textsize="12px"
        >
          <NextImage
            alt="calendar"
            height="24px"
            width="24px"
            src={getAssetUrl("redesign/calendar_color.svg")}
          />
          {t("resultcardTitle")}
        </DescriptionText2>
      </Box>
      <Box mt={"32px"} bgcolor={"rgba(212, 248, 230, 0.6)"} p={"20px"}>
        <Box display={"flex"} justifyContent={"center"}>
          <NextImage
            height="24px"
            alt="bag"
            src={getAssetUrl("redesign/bag.svg")}
            width="24px"
          />
        </Box>
        <DescriptionText2
          mt={"4px"}
          textsize="14px"
          align="center"
          textcolor="#45B386"
        >
          {description}
        </DescriptionText2>
      </Box>
      <Grid container mt={"32px"}>
        <Grid item xs={12}>
          <Box
            flexWrap={"nowrap"}
            gap={"8px"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <BudgetColumn
                bgcolor={"#4B8F8F"}
                // @ts-ignore
                width={`${(budgetInfo.needs / total) * width_factor}%`}
              >
                <DescriptionText2
                  style={{ lineHeight: "14px" }}
                  textsize={"12px"}
                  textweight={700}
                  textcolor="#fff"
                >
                  {!mobileView && `50%`} Needs
                </DescriptionText2>
              </BudgetColumn>
              <DescriptionText2 textsize={"14px"} color={"#534F59"} align="center">
                {budgetInfo.needs} {prefferedCurrency}
              </DescriptionText2>

            </Box>


            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <BudgetColumn
                bgcolor={"#285D74"}
                // @ts-ignore
                width={`${(budgetInfo.usr_needs / total_usr) * width_factor}%`}
              >
                <DescriptionText2
                  style={{ lineHeight: "14px" }}
                  textsize={"12px"}
                  textweight={700}
                  textcolor="#fff"
                >
                  {!mobileView && `${(budgetInfo.usr_needs / total_usr) * 100}%`} Your spendings on needs
                </DescriptionText2>
              </BudgetColumn>
              <DescriptionText2 textsize={"14px"} color={"#534F59"} align="center">
                {budgetInfo.usr_needs} {prefferedCurrency}
              </DescriptionText2>
            </Box>




            <Box display={"flex"} alignItems={"center"} gap={"10px"} mt={"16px"}>
              <BudgetColumn
                bgcolor={"#4B8F8F"}
                width={`${(budgetInfo.wants / total) * width_factor}%`}
              >
                <DescriptionText2
                  style={{ lineHeight: "14px" }}
                  textsize={"12px"}
                  textweight={700}
                  textcolor="#fff"
                >
                  {!mobileView && `30`} Wants
                </DescriptionText2>

              </BudgetColumn>
              <DescriptionText2
                textsize={"14px"}
                align="center"
                color={"#534F59"}
              >
                {budgetInfo.wants} {prefferedCurrency}
              </DescriptionText2>
            </Box>

            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <BudgetColumn
                bgcolor={"#285D74"}
                // @ts-ignore
                width={`${(budgetInfo.usr_wants / total_usr) * width_factor}%`}
              >
                <DescriptionText2
                  style={{ lineHeight: "14px" }}
                  textsize={"12px"}
                  textweight={700}
                  textcolor="#fff"
                >
                  {!mobileView && `${(budgetInfo.usr_wants / total_usr) * 100}%`} Your spendings on wants
                </DescriptionText2>
              </BudgetColumn>
              <DescriptionText2 textsize={"14px"} color={"#534F59"} align="center">
                {budgetInfo.usr_wants} {prefferedCurrency}
              </DescriptionText2>
            </Box>

            <Box display={"flex"} alignItems={"center"} gap={"10px"} mt={"16px"}>
              <BudgetColumn
                bgcolor={"#4B8F8F"}
                width={`${(budgetInfo.savings / total) * width_factor}%`}
              >
                <DescriptionText2
                  style={{ lineHeight: "14px" }}
                  textsize={"12px"}
                  textweight={700}
                  textcolor="#fff"
                >
                  {!mobileView && `${(budgetInfo.savings / total) * 100}%`} savings
                </DescriptionText2>

              </BudgetColumn>
              <DescriptionText2
                textsize={"14px"}
                align="center"
                color={"#534F59"}
              >
                {budgetInfo.savings} {prefferedCurrency}
              </DescriptionText2>
            </Box>

            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <BudgetColumn
                bgcolor={"#285D74"}
                // @ts-ignore
                width={`${(budgetInfo.usr_savings / total_usr) * width_factor}%`}
              >
                <DescriptionText2
                  style={{ lineHeight: "14px" }}
                  textsize={"12px"}
                  textweight={700}
                  textcolor="#fff"
                >
                  {!mobileView && `${(budgetInfo.usr_savings / total_usr) * 100}%`} Your monthly savings
                </DescriptionText2>
              </BudgetColumn>
              <DescriptionText2 textsize={"14px"} color={"#534F59"} align="center">
                {budgetInfo.usr_savings} {prefferedCurrency}
              </DescriptionText2>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </CardContainer>
  );
};

export default IncomeDistributionCard;
