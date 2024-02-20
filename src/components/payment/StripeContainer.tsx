import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

interface StripeContainerProps {
  children: React.ReactNode;
}

const stripeKey = process.env.REACT_APP_STRIPE_KEY;

if (!stripeKey) {
  throw new Error(
    "Stripe key is missing. Please set REACT_APP_STRIPE_KEY in your environment variables."
  );
}

const stripePromise = loadStripe(stripeKey);

function StripeContainer({ children }: StripeContainerProps) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}

export default StripeContainer;
