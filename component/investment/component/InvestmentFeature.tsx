import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../hooks";
import { AppsFeatures } from "../../commoncomponent/Utils";
import InfoCard from "../../commoncomponent/component/InfoCard";

const InvestmentFeature = () => {
  const { mobileView } = useWindowSize();
  const { t } = useTranslation("common");
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
