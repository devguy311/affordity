import { loadStripe } from "@stripe/stripe-js";

// const
import { STRIPE_PUBLISHABLE_KEY } from "../config/stripe";

let stripePromise;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }

  return stripePromise;
};
