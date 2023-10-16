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
import { SavingComparisonType } from "../../../type";
import { useAppSelector } from "../../../../../redux/hooks";
import { selectUser } from "../../../../../redux/user";
import { SavingVerticalGraphContainer } from "../../../style";
import { monthlySavingComparisonsData } from "../../../util";
import { GraphColumn } from "../../../../commoncomponent/Style";
import { formatAmountWithGap } from "../../../../../helpers/currencyHelper";

type SavingVerticalGraphProps = {
  graphData: SavingComparisonType;
  columnLabel: number;
  currency: string;
  maxBarSize: number;
  minBarSize: number;
};
const SavingVerticalGraph: FC<SavingVerticalGraphProps> = ({
  graphData,
  columnLabel,
  currency,
  maxBarSize,
  minBarSize,
}) => {
  const { user } = useAppSelector(selectUser);
  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";
  return (
    <Grid mt={"34px"}>
      <SavingVerticalGraphContainer>
        <ResponsiveContainer width={250} height={265}>
          <BarChart
            width={500}
            height={265}
            data={monthlySavingComparisonsData(graphData)}
            barGap={14}
            margin={{
              top: 5,
              bottom: 5,
            }}
          >
            <XAxis interval={0} tick={false} axisLine={false} dataKey="name" />
            <YAxis
              interval={1}
              domain={[minBarSize < 0 ? minBarSize : 0, maxBarSize]}
              tick={false}
              axisLine={false}
              tickLine={false}
            />
            <Bar radius={10} barSize={44} dataKey="beforeAmnt" fill="#494949">
              <LabelList
                dataKey="beforeAmntLabel"
                position="top"
                style={{ fill: "#000", color: "#000" }}
              />
            </Bar>
            <Bar radius={10} barSize={44} dataKey="afterAmnt" fill="#4B8F8F">
              <LabelList
                dataKey="afterAmntLabel"
                position="top"
                style={{ fill: "#000" }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </SavingVerticalGraphContainer>
      <Grid
        width={["100%", "50%"]}
        position="relative"
        paddingTop={"12px"}
        mt={"10px"}
        left={["50px", "75px", "50px"]}
        bottom={"0px"}
      >
        <GraphColumn
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
        >
          <span style={{ fontWeight: 700, color: "#333" }}>
            {formatAmountWithGap(columnLabel)} {prefferedCurrency}
          </span>
        </GraphColumn>
      </Grid>
    </Grid>
  );
};

export default SavingVerticalGraph;
