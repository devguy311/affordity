import Grid from "@mui/material/Grid";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { monthlySavingData } from "../util";
import { MonthlySavingType } from "../type";
import { CarGraphContainer } from "../style";
import { DescriptionText2 } from "../../commoncomponent/Text";

type MonthlySavingsGraphDataProps = {
  graphData: MonthlySavingType;
};
const MonthlySavingsGraphData: FC<MonthlySavingsGraphDataProps> = ({
  graphData,
}) => {
  const { t } = useTranslation("carruleresult");
  return (
    <Grid>
      <CarGraphContainer display={"flex"} justifyContent={"center"}>
        <ResponsiveContainer width={250} height={232}>
          <BarChart
            width={500}
            height={232}
            data={monthlySavingData(graphData)}
            barGap={40}
            margin={{
              top: 10,
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

export default MonthlySavingsGraphData;
