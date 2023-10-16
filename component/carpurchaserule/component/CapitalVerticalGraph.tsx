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
import { CapitalType } from "../type";
import { capitalData } from "../util";
import { CarGraphContainer } from "../style";
import { DescriptionText2 } from "../../commoncomponent/Text";
// import { DescriptionText } from "../../../component/commoncomponent/CommonStyle";

type CapitalVerticalGraphProps = {
  graphData: CapitalType;
};
const CapitalVerticalGraph: FC<CapitalVerticalGraphProps> = ({ graphData }) => {
  const { t } = useTranslation("carruleresult");
  return (
    <Grid>
      <CarGraphContainer display={"flex"} justifyContent={"center"}>
        <ResponsiveContainer width={250} height={232}>
          <BarChart
            width={500}
            height={232}
            data={capitalData(graphData)}
            barGap={40}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis tick={false} axisLine={false} dataKey="name" />
            <YAxis tick={false} axisLine={false} tickLine={false} />
            <Bar radius={10} barSize={44} dataKey="beforeAmnt" fill="#4B8F8F33">
              <LabelList
                dataKey="beforeAmntLabel"
                position="top"
                style={{ fill: "#7A7A7A", fontSize: 10, fontWeight: 700 }}
              />
            </Bar>
            <Bar radius={10} barSize={44} dataKey="afterAmnt" fill="#4B8F8F">
              <LabelList
                dataKey="afterAmntLabel"
                position="top"
                style={{ fill: "#7A7A7A", fontSize: 10, fontWeight: 700 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CarGraphContainer>
      <Grid
        container
        position={"relative"}
        bottom={"20px"}
        columnSpacing={["0px", "0px", "20px"]}
        justifyContent={"center"}
      >
        <Grid item xs={3}>
          <DescriptionText2
            textcolor="#7A7A7A"
            align="center"
            textsize="12px"
            textweight={700}
          >
            {t("beforePurchase")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={3}>
          <DescriptionText2
            textcolor="#7A7A7A"
            align="center"
            textsize="12px"
            textweight={700}
          >
            {t("afterPurchase")}
          </DescriptionText2>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CapitalVerticalGraph;
