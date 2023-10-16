import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { CarCardContainer } from "../style";
import { useAppSelector } from "../../../redux/hooks";
import { selectUser } from "../../../redux/user";
import { MonthlySavingType } from "../type";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";
import { DescriptionText2 } from "../../commoncomponent/Text";
import { ToastMessage } from "../../commoncomponent/ToastMessage";
import MonthlySavingsGraphData from "./MonthlySavingGraphData";
import { useWindowSize } from "../../../hooks";

type MonthlySavingsProps = {
  monthlySavingData: MonthlySavingType;
};
const MonthlySavings: FC<MonthlySavingsProps> = ({ monthlySavingData }) => {
  const { user } = useAppSelector(selectUser);
  const prefferedCurrency = user?.profileData?.prefferedCurrency || "USD";
  const { mobileView } = useWindowSize();
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
              src={getAssetUrl("redesign/wallet.svg")}
              alt="Calendar"
              height="24px"
              width="24px"
            />
            {t("savingsTitle")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"12px"}>
          <DescriptionText2
            textcolor="#7A7A7A"
            textsize="12px"
            textweight={400}
          >
            {t("savingssubTitle")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"15px"}>
          <MonthlySavingsGraphData graphData={monthlySavingData} />
        </Grid>
        <Grid item xs={12} mt={"15px"}>
          <ToastMessage
            type={monthlySavingData.status ? "success" : "error"}
            titleMessage={
              <DescriptionText2
                align={"center"}
                textsize="12px"
                textweight={300}
                textcolor={"black"}
              >
                {monthlySavingData.warning}
              </DescriptionText2>
            }
          />
        </Grid>
      </Grid>
    </CarCardContainer>
  );
};

export default MonthlySavings;
