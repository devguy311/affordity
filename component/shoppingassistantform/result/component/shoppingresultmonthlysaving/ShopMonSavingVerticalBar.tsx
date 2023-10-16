import Grid from "@mui/material/Grid";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { max, min } from "lodash";
import { DetailedGraphType } from "../../../type";
import { useAppSelector } from "../../../../../redux/hooks";
import { selectUser } from "../../../../../redux/user";
import { DescriptionText2 } from "../../../../commoncomponent/Text";
import SavingVerticalGraph from "./SavingVerticalGraph";

type MonthlySavingComparisonVerticalProps = {
  detailedGraphData: DetailedGraphType;
};

const MonthlySavingComparisonVertical: FC<
  MonthlySavingComparisonVerticalProps
> = ({ detailedGraphData }) => {
  const { affordified, user, metrics } = detailedGraphData;
  const { t } = useTranslation("shoppingassistantresult");
  const { user: userData } = useAppSelector(selectUser);
  const prefferedCurrency = userData?.profileData?.prefferedCurrency || "USD";

  const verticalData = [
    user.financials.prePurchase.monthlySavings,
    user.financials.postPurchase.monthlySavings,
    affordified.financials.prePurchase.monthlySavings,
    affordified.financials.postPurchase.monthlySavings,
  ];

  return (
    <Grid>
      <Grid container>
        <Grid item xs={6}>
          <SavingVerticalGraph
            graphData={{
              prePurchaseMonthlySaving:
                affordified.financials.prePurchase.monthlySavings,
              postPurchaseMonthlySaving:
                user.financials.postPurchase.monthlySavings,
            }}
            maxBarSize={max(verticalData)!}
            minBarSize={min(verticalData)!}
            currency={prefferedCurrency}
            columnLabel={user.purchase.price}
          />
        </Grid>
        <Grid item xs={6}>
          <SavingVerticalGraph
            graphData={{
              prePurchaseMonthlySaving:
                user.financials.prePurchase.monthlySavings,
              postPurchaseMonthlySaving:
                affordified.financials.postPurchase.monthlySavings,
            }}
            maxBarSize={max(verticalData)!}
            minBarSize={min(verticalData)!}
            currency={prefferedCurrency}
            columnLabel={affordified.purchase.price}
          />
        </Grid>
      </Grid>
      <Grid mt={"30px"} ml={"50px"} display={"flex"} gap={"50px"} container>
        <Grid style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Grid
            height={16}
            width={16}
            bgcolor={"#000000"}
            borderRadius={"5px"}
          />
          <Grid>
            <DescriptionText2 textsize="12px">{t("before")}</DescriptionText2>
          </Grid>
        </Grid>
        <Grid style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Grid
            height={16}
            width={16}
            bgcolor={"#4B8F8F"}
            borderRadius={"5px"}
          />
          <Grid>
            <DescriptionText2 textsize="12px">{t("after")}</DescriptionText2>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MonthlySavingComparisonVertical;
