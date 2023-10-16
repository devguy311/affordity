import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { CarCardContainer } from "../style";
import { CumulatedGraphType } from "../type";
import { DescriptionText2 } from "../../commoncomponent/Text";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import CumulatedAreaGraph from "./CarCumulatedAreaGraph";
import { useWindowSize } from "../../../hooks";

type CumulatedPaymentGraphProps = {
  cumulatedGraph: CumulatedGraphType[];
};
const CumulatedPaymentGraph: FC<CumulatedPaymentGraphProps> = ({
  cumulatedGraph,
}) => {
  const { mobileView } = useWindowSize();
  const { t } = useTranslation("carruleresult");
  return (
    <CarCardContainer style={{ borderRadius: 24 }} p={"40px"}>
      <Grid container>
        <Grid item xs={12} mt={"25px"}>
          <DescriptionText2
            textTransform={"uppercase"}
            textsize={mobileView ? "12px" : "16px"}
            textweight={700}
            display={"flex"}
            gap={"10px"}
            alignItems={"center"}
            align="left"
          >
            <NextImage
              src={getAssetUrl("redesign/calendar_icon.svg")}
              alt="Calendar"
              height="24px"
              width="24px"
            />
            {t("graphTitle")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"69px"} height={"323px"}>
          <CumulatedAreaGraph cumulatedGraph={cumulatedGraph} />
        </Grid>
      </Grid>
    </CarCardContainer>
  );
};

export default CumulatedPaymentGraph;
