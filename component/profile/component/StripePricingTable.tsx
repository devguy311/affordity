import React from "react";
import { useSelector } from "react-redux";

// hook
import { selectAuth } from "../../../redux/auth";
import { useAppSelector } from "../../../redux/hooks";
import { selectLanguage } from "../../../redux/language";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export default function StripePricingTable() {
  const { user } = useAppSelector(selectAuth);
  const { lang } = useSelector(selectLanguage);

  const pricingId =
    lang === "en"
      ? process.env.NEXT_PUBLIC_STRIPE_PRICING_TABLE_EN
      : process.env.NEXT_PUBLIC_STRIPE_PRICING_TABLE_FR;

  return (
    <div>
      {user && (
        <stripe-pricing-table
          pricing-table-id={pricingId}
          publishable-key={
            process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
          }
          client-reference-id={user.uid}
        ></stripe-pricing-table>
      )}
    </div>
  );
}
