import React, { FC } from "react";
import { CarCardContainer } from "../../carpurchaserule/style";
import { Grid } from "@mui/material";
import { DescriptionText2 } from "../../commoncomponent/Text";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import { AllocationType } from "../type";
import RetirementBreakdownGraph from "./RetirementBreakdownGraph";

type RetirementPortfolioAllocationProps = {
  expenseDetail: AllocationType;
  title: string;
  descripiton: string;
};
const RetirementPortfolioAllocation: FC<RetirementPortfolioAllocationProps> = ({
  expenseDetail,
  title,
  descripiton,
}) => {
  return (
    <CarCardContainer style={{ padding: "30px 30px" }}>
      <Grid container>
        <Grid item xs={12}>
          <DescriptionText2
            display={"flex"}
            alignItems={"center"}
            textcolor="#534F59"
            textsize="12px"
            textTransform={"uppercase"}
            textweight={700}
            gap={"10px"}
            align={"left"}

          >
            <NextImage
              src={getAssetUrl("redesign/Expense.svg")}
              alt="Calendar"
              height="24px"
              width="24px"
            />
            {title}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"15px"}>
          <DescriptionText2
            textcolor="#7A7A7A"
            textsize="12px"
            textweight={400}
          >
            {descripiton}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"10px"}>
          <RetirementBreakdownGraph expenseDetail={expenseDetail} />
        </Grid>
      </Grid>
    </CarCardContainer>
  );
};

export default RetirementPortfolioAllocation;
