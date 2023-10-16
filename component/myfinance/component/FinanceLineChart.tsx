import React, { FC, FunctionComponent } from "react";
import { FinanceLineChartType } from "../type";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getBarColor } from "../util";
import { useWindowSize } from "../../../hooks";
import { Grid } from "@mui/material";
import { Heading2 } from "../../commoncomponent/CommonStyle";

type FinanceLineChartProps = {
  graphData: FinanceLineChartType[];
  labels: string[];
};

const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={15}
        textAnchor="end"
        fill="#666"
        transform="rotate(-45)"
      >
        {payload.value}
      </text>
    </g>
  );
};

const FinanceLineChart: FC<FinanceLineChartProps> = ({ graphData, labels }) => {
  const { mobileView } = useWindowSize();
  if (graphData.length === 0) {
    return (
      <Grid
        height={"300px"}
        container
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading2 textsize="14px">No data found</Heading2>
      </Grid>
    );
  }
  return (
    <ResponsiveContainer width={mobileView ? "150%" : "100%"} height={mobileView ? "80%" : 400}>
      <BarChart
        data={graphData}
        barGap={0}
        barCategoryGap={mobileView ? 0 : 10}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 50,
        }}
      >
        <XAxis dataKey="name" tick={<CustomizedAxisTick />} interval={"equidistantPreserveStart"} />
        <YAxis />
        <Tooltip offset={mobileView ? 1 : 30} cursor={{ fill: 'transparent' }} wrapperStyle={{ fontFamily: "Inter", fontSize: mobileView ? 12 : 14, backgroundColor: '#ccc' }} />
        {labels.map((item, index) => (
          <Bar
            key={item}
            dataKey={item}
            maxBarSize={16}
            radius={0}
            stackId="a"
            fill={getBarColor(index)}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FinanceLineChart;
