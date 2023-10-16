import type { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";

// const
import { STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET } from "../../config/stripe";

import { updateUserSubscriptionStatus } from "../../helpers/databaseHelper";

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

// const { updateSubscriptionStatus } = require("../../src/network/user");

const relevantEvents = new Set([
  "checkout.session.completed",
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
]);

const buffer = (req) =>
  new Promise((resolve, reject) => {
    const chunks: any = [];

    req.on("data", (chunk: any) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      resolve(Buffer.concat(chunks));
    });

    req.on("error", reject);
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let event;

  try {
    const body: any = await buffer(req);
    const webhookSecret = STRIPE_WEBHOOK_SECRET;
    const sig: any = req.headers["stripe-signature"];

    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    return res
      .status(400)
      .json({ statusCode: 400, message: `Webhook Error: ${err.message}` });
  }

  if (relevantEvents.has(event?.type)) {
    try {
      switch (event.type) {
        case "customer.subscription.created":
        case "customer.subscription.updated":
        case "customer.subscription.deleted": {
          const subscription = event.data.object;
          await updateUserSubscriptionStatus(subscription);
          break;
        }

        case "checkout.session.completed": {
          const checkoutSession = event.data.object;
          if (checkoutSession.mode === "subscription") {
            await updateUserSubscriptionStatus(checkoutSession);
          }
          break;
        }

        default:
          throw new Error("Unhandled relevant event!");
      }
    } catch (error: any) {
      return res.status(400).json({
        statusCode: 400,
        message: `Webhook handler failed. View logs ${error.message}`,
      });
    }
  }

  res.json({ received: true });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
