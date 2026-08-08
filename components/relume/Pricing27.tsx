import clsx from "clsx";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "relume-icons";

type Billing = "monthly" | "yearly";

type Feature = {
  text: string;
  items: React.ReactNode[];
};

type FeatureCategory = {
  title?: string;
  features: Feature[];
};

type PricingPlan = {
  planName: string;
  price: string;
  discount?: string;
  description: string;
  button: ButtonProps;
};

type Tab = {
  value: Billing;
  tabName: string;
  pricingPlans: PricingPlan[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  defaultValue: Billing;
  tabs: Tab[];
  featureCategories: FeatureCategory[];
  buttons: ButtonProps[];
};

export type Pricing27Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Pricing27 = (props: Pricing27Props) => {
  const { tagline, heading, description, defaultValue, tabs, featureCategories, buttons } = {
    ...Pricing27Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h1>
          <p className="text-medium">{description}</p>
        </div>
        <div className="w-full">
          <Tabs defaultValue={defaultValue}>
            <TabsList className="mx-auto mb-12 w-fit items-center justify-center rounded-button border border-transparent bg-scheme-foreground p-1 md:mb-20">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.value}
                  className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:bg-transparent"
                >
                  {tab.tabName}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab, index) => (
              <TabsContent key={index} value={tab.value}>
                <div className="grid grid-cols-3 gap-x-4 bg-scheme-background md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
                  <div className="hidden md:block" />
                  {tab.pricingPlans.map((pricingPlan, index) => (
                    <PricingPlan {...pricingPlan} key={index} billing={tab.value} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          <FeaturesSection featureCategories={featureCategories} />
          <div className="mt-8 grid grid-cols-3 gap-x-4 bg-scheme-background md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
            <div className="hidden md:block" />
            {buttons.map((button, index) => (
              <Button
                key={index}
                {...button}
                className="w-full px-3 py-1 whitespace-normal sm:px-4 sm:py-3"
              >
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingPlan = ({
  planName,
  price,
  discount,
  description,
  button,
  billing,
}: PricingPlan & { billing: Billing }) => {
  return (
    <div className="flex h-full flex-col justify-between text-center">
      <div>
        <h2 className="text-h6 font-bold">{planName}</h2>
        <div className="my-3 md:my-4">
          <h1 className="text-h1 font-bold">
            {price}
            <h5 className="text-h5">{billing === "monthly" ? "/mo" : "/yr"}</h5>
          </h1>
          {billing === "yearly" && <p className="font-semibold">{discount}</p>}
        </div>
        <p>{description}</p>
      </div>
      <div className="mt-6 md:mt-8">
        <Button {...button} className="w-full">
          {button.title}
        </Button>
      </div>
    </div>
  );
};

const FeaturesSection = ({ featureCategories }: { featureCategories: FeatureCategory[] }) => {
  return (
    <div>
      {featureCategories.map((featureCategory, index) => (
        <div key={index}>
          {featureCategory.title && (
            <h3 className="mt-8 py-5 text-h6 font-bold">{featureCategory.title}</h3>
          )}
          {featureCategory.features.map((feature, index) => (
            <div
              key={index}
              className={clsx("grid grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr]", {
                "bg-scheme-foreground": index % 2 === 0,
              })}
            >
              <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                {feature.text}
              </p>
              {feature.items.map((item, index) => (
                <p
                  key={index}
                  className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Pricing27Defaults: Props = {
  tagline: "Tagline",
  heading: "Pricing plan",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  defaultValue: "monthly",
  tabs: [
    {
      value: "monthly",
      tabName: "Monthly",
      pricingPlans: [
        {
          planName: "Basic",
          price: "$19",
          description: "Lorem ipsum dolor sit amet",
          button: {
            title: "Get started",
          },
        },
        {
          planName: "Business",
          price: "$29",
          description: "Lorem ipsum dolor sit amet",
          button: {
            title: "Get started",
          },
        },
        {
          planName: "Enterprise",
          price: "$49",
          description: "Lorem ipsum dolor sit amet",
          button: {
            title: "Get started",
          },
        },
      ],
    },
    {
      value: "yearly",
      tabName: "Yearly",
      pricingPlans: [
        {
          planName: "Basic",
          price: "$180",
          discount: "Save 20%",
          description: "Lorem ipsum dolor sit amet",
          button: {
            title: "Get started",
          },
        },
        {
          planName: "Business",
          price: "$280",
          discount: "Save 20%",
          description: "Lorem ipsum dolor sit amet",
          button: {
            title: "Get started",
          },
        },
        {
          planName: "Enterprise",
          price: "$480",
          discount: "Save 20%",
          description: "Lorem ipsum dolor sit amet",
          button: {
            title: "Get started",
          },
        },
      ],
    },
  ],
  featureCategories: [
    {
      title: "Feature Category",
      features: [
        {
          text: "Feature text goes here",
          items: ["10", "25", "Unlimited"],
        },
        {
          text: "Feature text goes here",
          items: [
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: [
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: [
            "",
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: ["", "", <Check className="size-6 text-scheme-text" />],
        },
      ],
    },

    {
      title: "Feature Category",
      features: [
        {
          text: "Feature text goes here",
          items: ["10", "25", "Unlimited"],
        },
        {
          text: "Feature text goes here",
          items: [
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: [
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: [
            "",
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: ["", "", <Check className="size-6 text-scheme-text" />],
        },
      ],
    },

    {
      title: "Feature Category",
      features: [
        {
          text: "Feature text goes here",
          items: ["10", "25", "Unlimited"],
        },
        {
          text: "Feature text goes here",
          items: [
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: [
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: [
            "",
            <Check className="size-6 text-scheme-text" />,
            <Check className="size-6 text-scheme-text" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: ["", "", <Check className="size-6 text-scheme-text" />],
        },
      ],
    },
  ],
  buttons: [
    {
      title: "Get started",
    },
    {
      title: "Get started",
    },
    {
      title: "Get started",
    },
  ],
};
