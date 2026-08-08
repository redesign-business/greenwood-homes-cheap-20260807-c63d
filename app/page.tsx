import { Navbar15 } from "@/components/relume/Navbar15";
import { Header1 } from "@/components/relume/Header1";
import { Logo2 } from "@/components/relume/Logo2";
import { Logo6 } from "@/components/relume/Logo6";
import { Portfolio6 } from "@/components/relume/Portfolio6";
import { Testimonial43 } from "@/components/relume/Testimonial43";
import { Team13 } from "@/components/relume/Team13";
import { Pricing27 } from "@/components/relume/Pricing27";
import { Footer3 } from "@/components/relume/Footer3";

const cta = {
  title: "Start Your Custom Home",
  url: "https://greenwood-homes.com/contact/",
  href: "https://greenwood-homes.com/contact/",
};

export default function Home() {
  return (
    <>
      <Navbar15
        logo={{
          src: "/images/gwhweblogo1020-4faa02ba82.png",
          alt: "Greenwood Homes",
        }}
        navLinks={[
          { title: "Portfolio", url: "https://greenwood-homes.com/portfolio/" },
          { title: "Team", url: "https://greenwood-homes.com/team/" },
          {
            title: "Testimonials",
            url: "https://greenwood-homes.com/testimonials/",
          },
          { title: "About", url: "https://greenwood-homes.com/about/" },
          { title: "Contact", url: "https://greenwood-homes.com/contact/" },
        ]}
        button={cta}
      />

      <Header1
        heading="Award-Winning Custom Home Builder"
        description="Greenwood Homes is a licensed general contractor building over 50 custom homes since 1998 across Nevada, California, Hawaii, Idaho, and Utah."
        buttons={[cta]}
        image={{
          src: "/images/tahoe-hero-sliver-b71d04a91e.jpg",
          alt: "Lake Tahoe",
        }}
      />

      <Logo2
        heading="Over 50 custom homes built since 1998 as a licensed general contractor across five states, with divisions in Nevada, California, Hawaii, Idaho, and Utah."
        logos={[
          {
            src: "/images/59-c3478cdc8a.jpg",
            alt: "Greenwood Homes quality construction",
          },
        ]}
      />

      <Logo6
        heading="Eight Tahoe Quarterly Mountain Home Awards, including 2025, 2023, and 2021 Craftsmanship recognition, plus a Mountain Legacy Home Award and Interior Design Award."
        logos={[
          {
            src: "/images/ltcrop-c4a89fa01f.jpg",
            alt: "Lake Tahoe",
          },
        ]}
      />

      <Portfolio6
        tagline="Portfolio"
        heading="Homes We Build"
        description="Projects delivered on time and under budget across Lake Tahoe, Truckee, Carson Valley, Idaho, and Hawaii, with clients returning for repeat builds."
        projects={[
          {
            title: "Clear Creek Fairway",
            description:
              "A mountain modern home in Carson Valley, approximately 5,600 S.F.",
            image: {
              src: "/images/clear-creek-mountain-modern-home-greenwood-homes-tahoe-truckee-017-4b0479315f.jpg",
              alt: "Clear Creek mountain modern home by Greenwood Homes Tahoe/Truckee",
            },
            url: "https://greenwood-homes.com/portfolio/clear-creek-mountain-modern/",
            button: {
              title: "View project",
              url: "https://greenwood-homes.com/portfolio/clear-creek-mountain-modern/",
              href: "https://greenwood-homes.com/portfolio/clear-creek-mountain-modern/",
            },
            tags: [],
          },
        ]}
        button={cta}
      />

      <Testimonial43
        heading="Client Testimonials"
        description="Greenwood rescued a Glenbrook project roughly 50% complete after the original builder went bankrupt, and the client called the team exceptional — the best of five homes built across Texas, Lake Tahoe, and Hawaii."
        testimonials={[
          {
            quote:
              "Greenwood is the builder of choice for high-end homes in Kukuiula.",
            avatar: {
              src: "/images/kevin-hanna_4x4_2025-04_2-47053f6700.jpg",
              alt: "Kevin Hanna",
            },
            name: "Kukuiula Client",
            position: "Kauai, Hawaii",
            companyName: "Hale Pakika, Kukuiula • Kauai",
            button: cta,
            logo: {
              src: "/images/gwhweblogo1020-4faa02ba82.png",
              alt: "Greenwood Homes logo",
            },
          },
        ]}
      />

      <Team13
        tagline="Team"
        heading="Experienced Leadership & Field Experts"
        description="Each of our team members brings 20 to 50 years of home-building experience, led by President and CEO Kevin Hanna and rooted in quality craftsmanship, customer service, and honest upfront client relationships."
        teamMembers={[
          {
            image: {
              src: "/images/kathie500-ad0988eb72.jpg",
              alt: "Kathie Goldberg",
            },
            name: "Kathie Goldberg",
            jobTitle: "Office / Management",
            description:
              "Part of Greenwood Homes' office and management team supporting clients through their custom home build.",
            socialLinks: [],
          },
        ]}
        footer={{
          heading: "Explore Our Full Team",
          description:
            "Meet the leadership and field experts behind Greenwood Homes.",
          button: cta,
        }}
      />

      <Pricing27
        tagline="Services"
        heading="Custom Home Building & Construction Services"
        description="Pre-construction planning covers estimating, feasibility review, value engineering, MEP review, constructability review, risk assessment, and scheduling — backed by an ironclad warranty and ongoing open communication."
        defaultValue="monthly"
        tabs={[
          {
            value: "monthly",
            tabName: "Custom Homes",
            pricingPlans: [
              {
                planName: "Bespoke Custom Home",
                price: "",
                description:
                  "A licensed general contractor building custom homes across Lake Tahoe, Nevada, California, Hawaii, Idaho, and Utah.",
                button: cta,
              },
            ],
          },
        ]}
        featureCategories={[
          {
            title: "Construction Services",
            features: [
              {
                text: "Custom home building, remodel, renovation, tenant improvements, additions, energy-efficient upgrades, construction management, sustainability, and post-construction support.",
                items: [
                  "Custom home building",
                  "Remodel and renovation",
                  "Tenant improvements",
                  "Additions",
                  "Energy-efficient upgrades",
                  "Construction management",
                  "Sustainability",
                  "Post-construction support",
                ],
              },
            ],
          },
          {
            title: "Pre-Construction Planning",
            features: [
              {
                text: "Estimating, feasibility review, value engineering, MEP review, constructability review, risk assessment, and scheduling.",
                items: [
                  "Estimating",
                  "Feasibility review",
                  "Value engineering",
                  "MEP review",
                  "Constructability review",
                  "Risk assessment",
                  "Scheduling",
                ],
              },
            ],
          },
        ]}
        buttons={[cta]}
      />

      <Footer3
        logo={{
          src: "/images/linda-tokunaga_4x4_2025-d89b0ecf32.jpg",
          alt: "Greenwood Homes",
        }}
        address={{
          label: "Offices",
          value: "Incline Village, Nevada • Coeur d'Alene, Idaho • Kauai, Hawaii",
        }}
        contact={{
          label: "Contact",
          phone: "+1 775-831-0188",
          email: "",
        }}
        columnLinks={[
          {
            links: [
              {
                title: "Portfolio",
                url: "https://greenwood-homes.com/portfolio/",
              },
              { title: "Team", url: "https://greenwood-homes.com/team/" },
              {
                title: "Testimonials",
                url: "https://greenwood-homes.com/testimonials/",
              },
              { title: "About", url: "https://greenwood-homes.com/about/" },
              { title: "Blog", url: "https://greenwood-homes.com/blog/" },
              { title: "Contact", url: "https://greenwood-homes.com/contact/" },
            ],
          },
        ]}
        socialMediaLinks={[]}
        footerText="Licensed general contractor in California, Nevada, Hawaii, Idaho, and Utah."
        footerLinks={[]}
      />
    </>
  );
}
