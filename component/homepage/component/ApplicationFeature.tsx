import Grid from "@mui/material/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { getApplicationFeature } from "../util";
import { useWindowSize } from "../../../hooks";
import PresentCard from "./PresentationCard";
import FeatureHeader from "./FeatureHeader";
import Box from "@mui/material/Box";


const ApplicationFeature = () => {
  const { t } = useTranslation("homepage");
  return (
    <Box>
      <Grid
        container
        flexWrap={["nowrap", "nowrap"]}
        display="inline-flex"
        overflow={["auto", "auto", "inherit"]}
        alignItems={"flex-start"}
        alignSelf={"stretch"}
        gap={["20px", "40px", "0px"]}
      >

        {
          getApplicationFeature(t).map((item) => (
            <Grid mt={"50px"} key={item.id} item xs={10} md={4}>
              <PresentCard info={item} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default ApplicationFeature;