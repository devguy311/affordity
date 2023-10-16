import type { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";

// const
import { STRIPE_SECRET_KEY, PORTAL_RETURN_URL } from "../../config/stripe";

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { customerId } = req.body;

    try {
      const { url } = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: PORTAL_RETURN_URL,
      });

      if (url) {
        res.json({ url });
      } else {
        res
          .status(404)
          .json({ statusCode: 404, message: "Portal is not define" });
      }
    } catch (error: any) {
      res.status(error.statusCode || 500).json({
        statusCode: error.statusCode || 500,
        message: error?.raw?.message ?? error.message,
      });
    }
  } else {
    res.status(405).json({ statusCode: 405, message: "Method Not Allowed" });
  }

  res.end();
}
