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
import { DetailedGraphType } from "../../../type";
import { rechartdata } from "../../../util";

type ShoppingResultCurrentMonthlyGraphProps = {
  detailedGraphData: DetailedGraphType;
};

const ShoppingResultCurrentMonthlyGraph: FC<
  ShoppingResultCurrentMonthlyGraphProps
> = ({ detailedGraphData }) => {
  const { affordified, user, metrics } = detailedGraphData;

  return (
    <Grid height={"200px"} width={"100%"}>
      <Grid height={"160px"} width={"100%"}>
        <ResponsiveContainer height={"100%"} width={"100%"}>
          <BarChart
            data={rechartdata(
              user.financials.prePurchase.monthlySavings,
              affordified.financials.prePurchase.monthlySavings
            )}
            barGap={40}
            margin={{
              top: 5,
              bottom: 5,
            }}
          >
            <XAxis
              interval={0}
              tick={false}
              axisLine={false}
              dataKey="number"
            />
            <YAxis
              interval={0}
              tick={false}
              axisLine={false}
              tickLine={false}
            />
            <Bar
              radius={10}
              barSize={44}
              dataKey="monthlySavings"
              fill="#494949"
            >
              <LabelList
                dataKey="monthlySavingsLabel"
                position="bottom"
                style={{ fill: "#494949", fontSize: 10, fontWeight: "bold" }}
              />
            </Bar>
            <Bar
              radius={10}
              barSize={50}
              dataKey="affordifiedMonthlySavings"
              fill="#4B8F8F"
            >
              <LabelList
                dataKey="affordifiedMonthlySavingsLabel"
                position="bottom"
                style={{ fill: "#4B8F8F", fontSize: 10, fontWeight: "bold" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
};

export default ShoppingResultCurrentMonthlyGraph;
