import React, { FC } from "react";
import { ResponsiveContainer, Treemap } from "recharts";
import { getTransactionLogo } from "../logo";
import { GraphLabelText } from "../style";
import Box from "@mui/material/Box";
import { TreeMapDataType } from "../type";
import { useWindowSize } from "../../../hooks";
import { Grid } from "@mui/material";
import { Heading2 } from "../../commoncomponent/CommonStyle";

const CustomizedContent = (props: any) => {
  const { x, y, width, height, percentage, root, size, name } = props;
  return (
    <g>
      <foreignObject x={x} y={y} width={width} height={height}>
        <Box
          height={height}
          width={width}
          bgcolor={root.bgColor}
          border={"1px white solid"}
        >
          <Box
            display={"flex"}
            height={"100%"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            {getTransactionLogo(root.type)}
            <GraphLabelText style={{ marginTop: 10, textAlign: "center" }}>
              {name} ({percentage?.toFixed(0)}%)
              <br />
              <span style={{ fontWeight: 400, marginTop: 8 }}>€{size}</span>
            </GraphLabelText>
          </Box>
        </Box>
      </foreignObject>
    </g>
  );
};

type TreeMapGraphProps = {
  graphData: TreeMapDataType[];
};
const TreeMapGraph: FC<TreeMapGraphProps> = ({ graphData }) => {
  const { mobileView } = useWindowSize();
  if (graphData.length === 0) {
    return (
      <Grid
        height={"300px"}
        container
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading2 textsize="14px">No data</Heading2>
      </Grid>
    );
  }
  return (
    <ResponsiveContainer width={mobileView ? "100%" : "100%"} height={mobileView ? "100%" : 500}>
      <Treemap
        data={graphData}

        dataKey="size"
        aspectRatio={4 / 3}
        stroke="#fff"
        content={<CustomizedContent />}
      />
    </ResponsiveContainer>
  );
};

export default TreeMapGraph;
