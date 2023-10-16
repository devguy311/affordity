import React, { FC } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { CumulatedGraphType } from "../type";
import { AreaGraphContainer } from "../style";

type CumulatedAreaGraphProps = {
  cumulatedGraph: CumulatedGraphType[];
};
const CumulatedAreaGraph: FC<CumulatedAreaGraphProps> = ({
  cumulatedGraph,
}) => {
  return (
    <AreaGraphContainer height={"100%"}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={cumulatedGraph}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis tickLine={false} dataKey={"name"} />
          <YAxis
            tickFormatter={(value) => `$${value}`}
            tickLine={false}
            domain={[0, 300]}
          />
          <CartesianGrid stroke={"#E7E7E7"} vertical={false} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#289117"
            fill="#EAF4E8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </AreaGraphContainer>
  );
};

export default CumulatedAreaGraph;
