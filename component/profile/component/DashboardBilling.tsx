import React from "react";
import { useTranslation } from "react-i18next";


// hook
import { selectAuth } from "../../../redux/auth";
import { useAppSelector } from "../../../redux/hooks";

// components
import { HeadingText } from "../../commoncomponent/Text";
import ManagaSubscription from "./ManagaSubscription";
// import ActivateSubsription from "./ActivateSubsription";
import StripePricingTable from "./StripePricingTable";

// styles
import { ProfileCardContainer } from "../style";
import Grid from "@mui/material/Grid";

const DashboardBilling = () => {
  const { user } = useAppSelector(selectAuth);
  const { t } = useTranslation("account");
  const isActive = user?.subscription?.status === "active" || user?.subscription?.status === "trialing";

  return (
    <ProfileCardContainer>
      <HeadingText textsize="32px" mb={4}>
        {t("dashboardTitle")}
      </HeadingText>

      <Grid item xs={12}>
        {!isActive ? <StripePricingTable /> : <ManagaSubscription />}
      </Grid>
    </ProfileCardContainer>
  );
};

export default DashboardBilling;
