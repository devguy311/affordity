import Box from "@mui/material/Box";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Area, ComposedChart, LabelList } from "recharts";
import { Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { abbreviateNumber } from "../../../../util/SiteUtil";
import { InvestmentGraphContainer } from "../../style";
import { GraphValuesType } from "../../type";

type InvestmentGraphProps = {
  graphData: GraphValuesType[];
  prefferedCurrency?: string;
};
const InvestmentQuickWayGraph: FC<InvestmentGraphProps> = ({
  graphData,
  prefferedCurrency,
}) => {
  const { t } = useTranslation("investmentview");
  const dataWithRange = graphData.map((d) => ({
    ...d,
    range:
      d.projectedAccountLine1 !== undefined &&
        d.projectedAccountLine2 !== undefined
        ? [d.projectedAccountLine1, d.projectedAccountLine2]
        : [],
  }));

  const CustomizedLabel: FC<any> = (props: any) => {
    const { x, y, stroke, value, index } = props;

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
        {graphData.length - 1 === index ? abbreviateNumber(value) : ""}
      </text>
    );
  };

  return (
    <InvestmentGraphContainer p={["10px", "10px", "34.5px"]}>
      <Box height={"277px"}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={300}
            data={dataWithRange}
            margin={{
              top: 20,
              right: 50,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis tickLine={false} dataKey="name" />
            <YAxis
              tickLine={false}
              tickFormatter={(value) => `${abbreviateNumber(value)}`}
              domain={["dataMin", "dataMax"]}
            />
            <Line>
              <LabelList content={<CustomizedLabel stroke={"#82ca9d"} />} />
            </Line>
            <Line>
              <LabelList content={<CustomizedLabel stroke={"#333"} />} />
            </Line>
            <Line
              dot={false}
              type="monotone"
              dataKey="totalDeposit"
              strokeWidth={4}
              stroke="#207754"
            >
              <LabelList content={<CustomizedLabel stroke={"#207754"} />} />
            </Line>
            <Line
              dot={false}
              type="monotone"
              dataKey="investmentGrowth"
              stroke="#207754"
              strokeWidth={4}
            >
              <LabelList content={<CustomizedLabel stroke={"#207754"} />} />
            </Line>
            <Area
              dataKey="range"
              stroke="#eaf4e8"
              strokeWidth={0}
              fill={"#D4F8E6"}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Box>
    </InvestmentGraphContainer>
  );
};
export default InvestmentQuickWayGraph;
