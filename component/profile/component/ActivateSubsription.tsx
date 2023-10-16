import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

// hook
import { selectAuth, toggleSignupModal } from "../../../redux/auth";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { updateUser } from "../../../redux/user";

// mui
import { Grid, Alert, Box } from "@mui/material";

// components
import PricingCard from "./PricingCard";

// utils
import { postData } from "../../../util/common-function";
import { getStripe } from "../../../util/stripe-client";

// const
import { BASIC_PRICE_ID, STANDARD_PRICE_ID } from "../../../config/stripe";

const ActivateSubsription = () => {
  const { user } = useAppSelector(selectAuth);

  const { t } = useTranslation("dashboardOverview");

  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async (priceId: string) => {
    setIsLoading(true);
    try {
      let customerId: string;

      toast.loading("Setting up checkout", {
        position: "bottom-right",
      });

      if (user.customerId) {
        customerId = user.customerId;
      } else {
        const customer = await postData({
          url: "/api/create-customer",
          data: { email: user.email, name: user.displayName },
        });

        customerId = customer.id;

        const userData = {
          ...user,
          customerId,
        };

        await dispatch(updateUser(userData));
      }

      const { sessionId } = await postData({
        url: "/api/create-checkout-session",
        data: { priceId, customerId },
      });

      toast.dismiss();

      toast.loading("Redirecting...", {
        position: "bottom-right",
      });

      const stripe = await getStripe();
      stripe.redirectToCheckout({ sessionId });
    } catch (error: any) {
      toast.dismiss();

      setError(error.message);

      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    dispatch(toggleSignupModal());
  };

  return (
    <>
      {error && (
        <Box mb={2}>
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        </Box>
      )}

      <Grid container spacing={1} >
        {/* <Grid item xs={12} md={6}>
          <PricingCard
            priceId={BASIC_PRICE_ID}
            plan={t("basicTitle")}
            price={t("price1")}
            description={t("basicSubtitle")}
            features={[t("StandardDesc1"), t("StandardDesc2"), t("basicDesc3")]}
            isLoading={isLoading}
            handleCheckout={handleClick}
          />
        </Grid> */}
        <Grid item xs={12} md={12}>
          <PricingCard
            isDark
            priceId={STANDARD_PRICE_ID}
            plan={t("StandardTitle")}
            price={t("price2")}
            description={t("StandardSubtitle")}
            features={[
              t("StandardDesc1"),
              t("StandardDesc2"),
              t("StandardDesc3"),
            ]}
            isLoading={isLoading}
            handleCheckout={handleClick}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ActivateSubsription;
