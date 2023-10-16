import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import SwitcherTab from "./SwitcherTab";
import {
  filterTabOption,
  graphTabOption,
  graphTypeOption,
  transformBarLineLabel,
  transformLineChart,
  transformTreeMapData,
} from "../util";
import TreeMapGraph from "./TreeMap";
import { DashboardResponseType } from "../type";
import FinanceLineChart from "./FinanceLineChart";
import { LineChartContainer } from "../style";

type FinanceGraphProps = {
  graphData: DashboardResponseType;
  selectedTabFilter: string;
  setSelectedTab: (tab: string) => void;
};
const FinanceGraph: FC<FinanceGraphProps> = ({
  graphData,
  selectedTabFilter,
  setSelectedTab,
}) => {
  const [selectedGraphType, setSelectedGraphType] = useState("tree");
  const [selectedInfoType, setSelectedInfoType] = useState("balance");

  const getGraphData = () => {
    if (selectedInfoType === "income") {
      return transformTreeMapData(graphData.income, selectedTabFilter);
    }
    if (selectedInfoType === "balance") {
      return transformTreeMapData(graphData.balance, selectedTabFilter);
    }
    return transformTreeMapData(graphData.spending, selectedTabFilter);
  };

  const getLineGraphData = () => {
    if (selectedInfoType === "income") {
      return transformLineChart(graphData.income, selectedTabFilter);
    }
    if (selectedInfoType === "balance") {
      return transformLineChart(graphData.balance, selectedTabFilter);
    }
    return transformLineChart(graphData.spending, selectedTabFilter);
  };

  const getGraphLabelsGraphData = () => {
    if (selectedInfoType === "income") {
      return transformBarLineLabel(graphData.income);
    }
    if (selectedInfoType === "balance") {
      return transformBarLineLabel(graphData.balance);
    }
    return transformBarLineLabel(graphData.spending);
  };

  const renderGraph = () => {
    if (selectedGraphType === "tree") {
      return (
        <Box mt={"40px"}>
          <TreeMapGraph key={selectedInfoType} graphData={getGraphData()} />
        </Box>
      );
    }
    return (
      <LineChartContainer
        overflow={"auto"}
        mt={"40px"}
        p={["10px", "10px", "35px"]}
      >
        <FinanceLineChart
          labels={getGraphLabelsGraphData()}
          graphData={getLineGraphData()}
        />
      </LineChartContainer>
    );
  };
  const { t } = useTranslation("dashboardResult");
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid
          container
          flexDirection={["row", "row", "row-reverse"]}
          justifyContent={"space-between"}
        >
          <Grid item xs={12} md={6} display={["block", "block", "none"]}>
            <SwitcherTab
              selectedTab={selectedTabFilter}
              setSelectedtab={setSelectedTab}
              options={filterTabOption(t)}
            />
          </Grid>
          <Grid item xs={12} md={2} mt={["25px", "25px", "0px"]}>
            <SwitcherTab
              selectedTab={selectedGraphType}
              setSelectedtab={setSelectedGraphType}
              options={graphTypeOption}
            />
          </Grid>
          <Grid item xs={12} md={6} mt={["20px", "20px", "0px"]}>
            <SwitcherTab
              selectedTab={selectedInfoType}
              setSelectedtab={setSelectedInfoType}
              options={graphTabOption(t)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {renderGraph()}
      </Grid>
    </Grid>
  );
};

export default FinanceGraph;
