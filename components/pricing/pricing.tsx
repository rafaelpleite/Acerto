import { Section } from "components/section";
import React from "react";
import dynamic from 'next/dynamic';

// Define the PricingProps interface
interface PricingProps {
  children?: React.ReactNode;
  plans?: any; // Replace 'any' with a specific type if available
  title?: string;
  description?: string;
  [key: string]: any;
}

// Define the props for the Standard component
interface StandardProps {
  typebot: string;
  style?: React.CSSProperties;
}

export const Pricing: React.FC<PricingProps> = (props) => {
  const { children, plans, title, description, ...rest } = props;

  // Specify the type of the dynamically imported component
  const Standard = dynamic<React.FC<StandardProps>>(
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
