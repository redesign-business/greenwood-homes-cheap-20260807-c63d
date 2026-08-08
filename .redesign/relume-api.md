## components/ui/button.tsx

```tsx
import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-background-tertiary bg-background-tertiary text-scheme-btn-text",
        alternate: "border border-white bg-white text-neutral-darkest",
        secondary: "border border-scheme-border text-scheme-text",
        "secondary-alt": "border border-white text-white",
        link: "gap-2 text-scheme-text",
        "link-alt": "gap-2 text-white",
        ghost: "hover:bg-neutral-darkest hover:text-white",
        none: "",
      },
      size: { default: "px-6 py-3", sm: "px-5 py-2", link: "p-0", icon: "size-10", none: "" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    title?: string;
    href?: string;
    url?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

export function Button({ className, variant, size, asChild = false, title, href, url, type, onClick, iconLeft, iconRight, children, ...props }: ButtonProps) {
```

## components/relume/Navbar15.tsx

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { KeyboardArrowDown, KeyboardArrowUp } from "relume-icons";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  button: ButtonProps;
};

export type Navbar15Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar15 = (props: Navbar15Props) => {
```

## components/relume/Header1.tsx

```tsx
import { Button, type ButtonProps } from "@/components/ui/button";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header1 = (props: Header1Props) => {
```

## components/relume/Logo2.tsx

```tsx
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  logos: ImageProps[];
};

export type Logo2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Logo2 = (props: Logo2Props) => {
```

## components/relume/Logo6.tsx

```tsx
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  logos: ImageProps[];
};

export type Logo6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Logo6 = (props: Logo6Props) => {
```

## components/relume/Portfolio6.tsx

```tsx
import { Badge } from "@/components/ui/badge";
import { Button, type ButtonProps } from "@/components/ui/button";
import { ChevronRight } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type Tag = {
  label: string;
  url: string;
};

type ProjectProps = {
  title: string;
  description: string;
  image: ImageProps;
  url: string;
  button: ButtonProps;
  tags: Tag[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  projects: ProjectProps[];
  button: ButtonProps;
};

export type Portfolio6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Portfolio6 = (props: Portfolio6Props) => {
```

## components/relume/Testimonial43.tsx

```tsx
"use client";

import { useState, useEffect } from "react";
import React from "react";
import clsx from "clsx";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronRight } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  logo: ImageProps;
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial43Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial43 = (props: Testimonial43Props) => {
```

## components/relume/Team13.tsx

```tsx
import { Button, type ButtonProps } from "@/components/ui/button";
import { DribbbleLogo, LinkedinLogo, XLogo } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type Footer = {
  heading: string;
  description: string;
  button: ButtonProps;
};

type SocialLink = {
  href: string;
  icon: React.ReactNode;
};

type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
  socialLinks: SocialLink[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  teamMembers: TeamMember[];
  footer: Footer;
};

export type Team13Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Team13 = (props: Team13Props) => {
```

## components/relume/Pricing27.tsx

```tsx
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
```

## components/relume/Footer3.tsx

```tsx
import { FacebookLogo, InstagramLogo, LinkedinLogo, XLogo, YoutubeLogo } from "relume-icons";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type ColumnLinks = {
  links: Links[];
};

type Address = {
  label: string;
  value: string;
};

type Contact = {
  label: string;
  phone: string;
  email: string;
};

type Props = {
  logo: ImageProps;
  address: Address;
  contact: Contact;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText?: string;
  footerLinks: Links[];
};

export type Footer3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer3 = (props: Footer3Props) => {
```
