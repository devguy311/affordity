import type { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";

// const
import {
  STRIPE_SECRET_KEY,
  CHECKOUT_SUCCESS_URL,
  CHECKOUT_CANCEL_URL,
} from "../../config/stripe";

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { priceId, customerId } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "required",
      customer: customerId,
      customer_update: {
        address: "auto",
      },
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      allow_promotion_codes: true,
      subscription_data: {
        trial_from_plan: true,
      },
      success_url: CHECKOUT_SUCCESS_URL,
      cancel_url: CHECKOUT_CANCEL_URL,
    });

    if (session) {
      res.json({ sessionId: session.id });
    } else {
      res
        .status(404)
        .json({ statusCode: 404, message: "Session is not define" });
    }
  } catch (error: any) {
    res.status(error.statusCode || 500).json({
      statusCode: error.statusCode || 500,
      message: error?.raw?.message ?? error.message,
    });
  }

  res.end();
}
