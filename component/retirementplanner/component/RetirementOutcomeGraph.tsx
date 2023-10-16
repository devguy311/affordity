import Box from "@mui/material/Box";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { FC, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { LabelList } from "recharts";
import { abbreviateNumber } from "../../../util/SiteUtil";
import { GraphCard, GraphContainer } from "../style";
import { GraphDataType } from "../type";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { useWindowSize } from "../../../hooks";

type RetirementOutcomeGraphProps = {
  graphData: GraphDataType[];
  prefferedCurrency?: string;
};
const RetirementOutcomeGraph: FC<RetirementOutcomeGraphProps> = ({
  graphData,
  prefferedCurrency,
}) => {
  const { mobileView } = useWindowSize();
  const CustomizedLabel: FunctionComponent<any> = (props: any) => {
    const { x, y, stroke, value, index } = props;

    return (
      <text
        x={x}
        y={y}
        dy={-4}
        fill={stroke}
        fontWeight={700}
        fontSize={14}
        textAnchor="start"
      >
        {graphData.length - 1 === index ? abbreviateNumber(value) : ""}
      </text>
    );
  };
  const { t } = useTranslation("retirementplanner");

  return (
    <GraphCard py={"52px"} px={"10px"}>
      <GraphContainer
        width={"100%"}
        position={"relative"}
        right={["0", "0", "7%"]}
        height={"174px"}
      >
        <ResponsiveContainer width={mobileView ? "140%" : "100%"} height="100%">
          <LineChart
            data={graphData}
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis
              tickLine={false}
              dataKey="name"
              padding={{ left: 30, right: 30 }}
            />
            <YAxis stroke={"#333"} tickLine={false} tick={false} />
            <Line
              dot={false}
              type="monotone"
              dataKey="conservativeData"
              stroke="#2B8363"
              strokeWidth={4}
            >
              <LabelList content={<CustomizedLabel stroke={"#2B8363"} />} />
            </Line>
            <Line
              dot={false}
              type="monotone"
              dataKey="aggressiveData"
              stroke="#45B386"
              strokeWidth={4}
            >
              <LabelList content={<CustomizedLabel stroke={"#45B386"} />} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </GraphContainer>
      <Box mt={"10px"} gap={"25px"} display={"flex"} justifyContent={"center"}>
        <Box display={"flex"} gap={"5px"} alignItems={"center"}>
          <Box
            borderRadius={"4px"}
            height={"20px"}
            width={"20px"}
            bgcolor={"#45B386"}
          />
          <DescriptionText2
            textcolor="#5C5963"
            textsize="12px"
            textweight={700}
          >
            {t("aggressive")}
          </DescriptionText2>
        </Box>
        <Box display={"flex"} gap={"5px"} alignItems={"center"}>
          <Box
            borderRadius={"4px"}
            height={"20px"}
            width={"20px"}
            bgcolor={"#2B8363"}
          />
          <DescriptionText2
            textcolor="#5C5963"
            textsize="12px"
            textweight={700}
          >
            {t("conservative")}
          </DescriptionText2>
        </Box>
      </Box>
    </GraphCard>
  );
};

export default RetirementOutcomeGraph;
