import type { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";

// const
import { STRIPE_SECRET_KEY } from "../../config/stripe";

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { subscriptionId } = req.body;

    const subscription = await stripe.subscriptions.cancel(subscriptionId);

    res.json(subscription);
  } catch (error: any) {
    res.status(error.statusCode || 500).json({
      statusCode: error.statusCode || 500,
      message: error?.raw?.message ?? error.message,
    });
  }
}
