import { Section } from "components/section";
import React from "react";
import { Standard } from '@typebot.io/nextjs';

interface PricingProps {
  children?: React.ReactNode;
  plans?: any;
  title?: string;
  description?: string;
  [key: string]: any;
}

export const Pricing: React.FC<PricingProps> = (props) => {
  const { children, plans, title, description, ...rest } = props;

  return (
    <Section id="pricing" pos="relative" {...rest}>
      <Standard
        typebot="my-typebot-hflncd4"
        style={{ width: "100%", height: "700px" }}
      />
    </Section>
  );
};
