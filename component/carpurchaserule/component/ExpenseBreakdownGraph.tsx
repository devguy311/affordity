import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ExpensesBreakdownType } from "../type";
import ExpenseLeftGraph from "./ExpenseLeftGraph";
import { GraphOuter } from "../style";
import { DescriptionText2 } from "../../commoncomponent/Text";
import ExpenseRightGraph from "./ExpenseRightGraph";

type ExpenseBreakdownGraphProps = {
  expenseDetail: ExpensesBreakdownType;
};
const ExpenseBreakdownGraph: FC<ExpenseBreakdownGraphProps> = ({
  expenseDetail,
}) => {
  const { t } = useTranslation("carruleresult");
  return (
    <Grid>
      <GraphOuter justifyContent={"center"}>
        <Grid>
          <ExpenseLeftGraph expenseDetail={expenseDetail} />
        </Grid>
        <Grid>
          <ExpenseRightGraph expenseDetail={expenseDetail} />
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
                textweight={300}
                textsize={"10px"}
                textcolor="#7A7A7A"
              >
                {t("regularExpense")}
              </DescriptionText2>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <Box
              height={16}
              width={16}
              bgcolor={"#4B8F8F80"}
              borderRadius={"5px"}
            />
            <Box>
              <DescriptionText2
                textweight={300}
                textsize={"10px"}
                textcolor="#7A7A7A"
              >
                {t("loaninterestPayment")}
              </DescriptionText2>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <Box
              height={16}
              width={16}
              bgcolor={"#4B8F8F33"}
              borderRadius={"5px"}
            />
            <Box>
              <DescriptionText2
                textweight={300}
                textsize={"10px"}
                textcolor="#7A7A7A"
              >
                {t("insuranceGas")}
              </DescriptionText2>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Grid>
  );
};

export default ExpenseBreakdownGraph;
