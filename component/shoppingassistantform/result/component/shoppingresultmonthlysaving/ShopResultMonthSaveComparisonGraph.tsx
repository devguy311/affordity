import Grid from "@mui/material/Grid";
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { monthlySavingData } from "../../../util";
import { DetailedGraphType } from "../../../type";
import { useAppSelector } from "../../../../../redux/hooks";
import { selectUser } from "../../../../../redux/user";
import {
  SavingGraphContainer,
  YAxisMonthlySavingsContainer,
} from "../../../style";
import { GraphColumn } from "../../../../commoncomponent/Style";

type ShopResultMonthSaveComparisonGraphProps = {
  detailedGraphData: DetailedGraphType;
};

const ShopResultMonthSaveComparisonGraph: FC<
  ShopResultMonthSaveComparisonGraphProps
> = ({ detailedGraphData }) => {
  const { user, metrics } = detailedGraphData;
  const { t } = useTranslation("shoppingassistantresult");
  const { user: userData } = useAppSelector(selectUser);
  const prefferedCurrency = userData?.profileData?.prefferedCurrency || "USD";

  return (
    <Grid>
      <Grid container alignItems={"center"}>
        <Grid item xs={4}>
          <YAxisMonthlySavingsContainer
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            height={137}
          >
            <GraphColumn>
              {t("savingsBeforePurchase")} - {prefferedCurrency}
            </GraphColumn>
            <GraphColumn>
              {t("savingsAfterPurchase")} - {prefferedCurrency}
            </GraphColumn>
          </YAxisMonthlySavingsContainer>
        </Grid>
        <SavingGraphContainer item xs={8}>
          <ResponsiveContainer width={"100%"} height={200}>
            <BarChart
              data={monthlySavingData(
                user.financials.prePurchase.monthlySavings,
                user.financials.postPurchase.monthlySavings,
                prefferedCurrency
              )}
              barGap={30}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
              layout="vertical"
            >
              <XAxis
                tick={false}
                axisLine={false}
                type="number"
                interval={0}
                tickLine={false}
                padding={{ left: 0, right: 0 }}
              />
              <YAxis
                type="category"
                interval={0}
                dataKey="currency"
                axisLine={false}
                tickLine={false}
              />
              <Bar
                dataKey="currentMonthlySavings"
                fill="#F2F2F2"
                radius={10}
                barSize={44}
              >
                <LabelList
                  dataKey="currentMonthlySavingsLabel"
                  position="center"
                  style={{
                    fill: "#494949",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: 18,
                  }}
                  formatter={(value) => `${value}`}
                />
              </Bar>
              <Bar
                dataKey="monthlySavingAfterPurchase"
                fill="#4B8F8F1A"
                radius={10}
                barSize={44}
              >
                <LabelList
                  dataKey="monthlySavingAfterPurchaseLabel"
                  position="center"
                  style={{
                    fill: "#4B8F8F",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: 18,
                  }}
                  formatter={(value) => `${value}`}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </SavingGraphContainer>
      </Grid>
    </Grid>
  );
};

export default ShopResultMonthSaveComparisonGraph;
