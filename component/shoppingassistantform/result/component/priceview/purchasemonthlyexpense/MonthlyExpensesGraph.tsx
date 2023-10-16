import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { FC } from "react";
import { DetailedGraphType } from "../../../../type";
import LeftGraphContainer from "./LeftGraphContainer";
import RightGraphContainer from "./RightGraphContainer";
import { DescriptionText2 } from "../../../../../commoncomponent/Text";
import { GraphOuter } from "../../../../style";

type MonthlyExpensesGraphProps = {
  detailedGraphData: DetailedGraphType;
};
const MonthlyExpensesGraph: FC<MonthlyExpensesGraphProps> = ({
  detailedGraphData,
}) => {
  return (
    <Grid>
      <GraphOuter justifyContent={"center"}>
        <Grid>
          <LeftGraphContainer detailedGraphData={detailedGraphData} />
        </Grid>
        <Grid>
          <RightGraphContainer detailedGraphData={detailedGraphData} />
        </Grid>
      </GraphOuter>
      <Grid container mt={"19px"} spacing={"20px"}>
        <Grid item xs={4}>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Box
              height={16}
              width={16}
              bgcolor={"#4B8F8F"}
              borderRadius={"5px"}
            />
            <Box>
              <DescriptionText2
                textcolor="#7A7A7A"
                textweight={600}
                textsize={"12px"}
              >
                Loan Payments
              </DescriptionText2>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Box
              height={16}
              width={16}
              bgcolor={"#A5C7C7"}
              borderRadius={"5px"}
            />
            <Box>
              <DescriptionText2
                textcolor="#7A7A7A"
                textweight={600}
                textsize={"12px"}
              >
                Maintenance costs
              </DescriptionText2>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Box
              height={16}
              width={16}
              bgcolor={"#E5E5E5"}
              borderRadius={"5px"}
            />
            <Box>
              <DescriptionText2
                textcolor="#7A7A7A"
                textweight={600}
                textsize={"12px"}
              >
                Insurance costs
              </DescriptionText2>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MonthlyExpensesGraph;
