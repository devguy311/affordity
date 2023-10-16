import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { CarCardContainer } from "../style";
import { useAppSelector } from "../../../redux/hooks";
import { selectUser } from "../../../redux/user";
import { ToastMessage } from "../../../component/commoncomponent/ToastMessage";
import { CapitalType } from "../type";
import CapitalVerticalGraph from "./CapitalVerticalGraph";
import { DescriptionText2 } from "../../commoncomponent/Text";
import NextImage from "../../commoncomponent/component/NextImage";
import { getAssetUrl } from "../../../util/SiteUtil";

type CapitalProps = {
  capitalInfo: CapitalType;
};
const CapitalGraph: FC<CapitalProps> = ({ capitalInfo }) => {
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
              src={getAssetUrl("redesign/capital.svg")}
              alt="Calendar"
              height="24px"
              width="24px"
            />
            Capital
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"12px"}>
          <DescriptionText2
            textcolor="#7A7A7A"
            textsize="12px"
            textweight={400}
          >
            {t("capitalsubTitle")}
          </DescriptionText2>
        </Grid>
        <Grid item xs={12} mt={"30px"}>
          <CapitalVerticalGraph graphData={capitalInfo} />
        </Grid>
        <Grid item xs={12} mt={"15px"}>
          <ToastMessage
            type={capitalInfo.status ? "success" : "error"}
            titleMessage={
              <DescriptionText2
                align={"center"}
                textsize="12px"
                textweight={300}
                textcolor={"black"}
              >
                {capitalInfo.warning}
              </DescriptionText2>
            }
          />
        </Grid>
      </Grid>
    </CarCardContainer>
  );
};

export default CapitalGraph;
