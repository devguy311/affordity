import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { CarCardContainer } from "../style";
import { useAppSelector } from "../../../redux/hooks";
import { selectUser } from "../../../redux/user";
import { ExpensesBreakdownType } from "../type";
import { DescriptionText2 } from "../../commoncomponent/Text";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import ExpenseBreakdownGraph from "./ExpenseBreakdownGraph";

type CarExpenseBreadownProps = {
  expenseDetail: ExpensesBreakdownType;
};
const CarExpenseBreadown: FC<CarExpenseBreadownProps> = ({ expenseDetail }) => {
  const { user } = useAppSelector(selectUser);
  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";
  const { t } = useTranslation("carruleresult");
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
            Expense Breakdown
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"15px"}>
          <DescriptionText2
            textcolor="#7A7A7A"
            textsize="12px"
            textweight={400}
          >
            {t("savingssubTitle")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"10px"}>
          <ExpenseBreakdownGraph expenseDetail={expenseDetail} />
        </Grid>
      </Grid>
    </CarCardContainer>
  );
};

export default CarExpenseBreadown;
