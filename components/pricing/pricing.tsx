import { Section } from "components/section";
import React from "react";
import dynamic from 'next/dynamic';

export const Pricing: React.FC<PricingProps> = (props) => {
  const { children, plans, title, description, ...rest } = props;

  const Standard = dynamic(
    () => import('@typebot.io/react').then((mod) => mod.Standard),
    { ssr: false }
  );

  return (
    <Section id="pricing" pos="relative" {...rest}>
      <Standard
        typebot="my-typebot-hflncd4"
        style={{ width: "100%", height: "600px" }}
      />
    </Section>
  );
};