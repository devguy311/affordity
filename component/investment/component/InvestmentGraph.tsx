import Box from "@mui/material/Box";
import { FC } from "react";
import { LabelList, LineChart } from "recharts";
import { Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { InvestmentGraphContainer } from "../style";
import { CompletedTransactionImpactType } from "../type";
import { getInvestmentGraphLineColor, trnasformGraphDetail } from "../util";

type InvestmentGraphProps = {
  graphData: CompletedTransactionImpactType;
  prefferedCurrency?: string;
};
const InvestmentGraph: FC<InvestmentGraphProps> = ({ graphData }) => {
  const tansformGraphData = trnasformGraphDetail(graphData);

  const CustomizedLabel: FC<any> = (props: any) => {
    const { x, y, stroke, index, name, data } = props;
    return (
      <text
        x={x}
        y={y}
        dy={-4}
        fill={stroke}
        fontWeight={700}
        fontSize={10}
        textAnchor="start"
      >
        {data.length - 1 === index && name}
      </text>
    );
  };

  return (
    <InvestmentGraphContainer p={["10px", "10px", "34.5px"]}>
      <Box height={"277px"}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            margin={{
              top: 20,
              right: 50,
              left: 20,
              bottom: 5,
            }}
            width={500}
            height={300}
          >
            <XAxis
              dataKey="category"
              type="category"
              allowDuplicatedCategory={false}
            />
            <YAxis dataKey="value" />
            {tansformGraphData.map((s) => (
              <Line
                dot={false}
                type="monotone"
                stroke={getInvestmentGraphLineColor(s.name)}
                strokeWidth={4}
                isAnimationActive={false}
                dataKey="value"
                data={s.data}
                name={s.name}
                key={s.name}
              >
                <LabelList
                  content={
                    <CustomizedLabel
                      data={s.data}
                      name={s.name}
                      stroke={getInvestmentGraphLineColor(s.name)}
                    />
                  }
                />
              </Line>
            ))}
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </InvestmentGraphContainer>
  );
};

export default InvestmentGraph;
