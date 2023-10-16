import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { AppsFeatures } from "./util";
import InfoCard from "../commoncomponent/component/InfoCard";

const InvestmentFeature = () => {
  const { t } = useTranslation("dashboardOverview");
  return (
    <Grid
      mt={"85px"}
      justifyContent={"center"}
      container
      columnSpacing={["0px", "0px", "72px"]}
    >
      {AppsFeatures(t).map((item) => (
        <Grid
          item
          mt={["42.5px", "42.5px", "0px"]}
          xs={12}
          md={4}
          key={item.id}
        >
          <InfoCard cardInfo={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default InvestmentFeature;
