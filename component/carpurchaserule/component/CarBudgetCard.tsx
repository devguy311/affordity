import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import { CarCardContainer } from "../style";
import { useAppSelector } from "../../../redux/hooks";
import { selectUser } from "../../../redux/user";
import { DescriptionText2 } from "../../commoncomponent/Text";

type BudgetCardProps = {
  descriptionText?: string;
  cardTitle: string;
  amount: number;
};
const BudgetCard: FC<BudgetCardProps> = ({
  cardTitle,
  descriptionText,
  amount,
}) => {
  const { user } = useAppSelector(selectUser);
  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";
  return (
    <CarCardContainer p={"40px"}>
      <Grid container>
        {descriptionText && (
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} sm={7}>
                <DescriptionText2 textcolor="#5C5963" align="left">
                  {descriptionText}
                </DescriptionText2>
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid item xs={12} mt={"20px"}>
          <Grid container justifyContent={"flex-end"}>
            <Grid item xs={12} sm={12}>
              <DescriptionText2
                textcolor="#4B8F8F"
                textsize="32px"
                textweight={700}
                align="right"
                justifyContent={"end"}
                display={"flex"}
                flexWrap={"nowrap"}
                gap={"10px"}
              >
                {prefferedCurrency} {amount}
              </DescriptionText2>
              <DescriptionText2
                textcolor="#5C5963"
                textsize="14px"
                display={"flex"}
                justifyContent={"end"}
                textweight={700}
              >
                {cardTitle}
              </DescriptionText2>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CarCardContainer>
  );
};

export default BudgetCard;
