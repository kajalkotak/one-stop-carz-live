//

export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  ctaLabel?: string;
}

export const services: ServiceItem[] = [
  {
    slug: "mechanical-service",
    title: "Mechanical Service",
    shortDesc: "Complete mechanical inspection & repairs.",
    description:
      "Professional mechanical servicing including engine diagnostics, brake service, suspension checks, battery inspection and preventive maintenance.",
    ctaLabel: "Book Service",
  },
  {
    slug: "body-denting-painting",
    title: "Body Denting & Painting",
    shortDesc: "Restore your car’s original look.",
    description:
      "Expert dent removal and painting using advanced tools and paint booths to give your vehicle a factory finish.",
    ctaLabel: "Book Service",
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    shortDesc: "Long-lasting paint protection & shine.",
    description:
      "Premium ceramic coating to protect your vehicle from UV rays, scratches, dirt and oxidation with mirror-like gloss.",
    ctaLabel: "View Offers",
  },
  {
    slug: "insurance-claim",
    title: "Cashless Insurance Claim",
    shortDesc: "Hassle-free accident repairs.",
    description:
      "We work with leading insurance companies to provide quick cashless claim settlement and repair services.",
    ctaLabel: "Contact Us",
  },
  {
    slug: "detailing",
    title: "Car Detailing",
    shortDesc: "Deep cleaning inside & outside.",
    description:
      "Interior vacuuming, polishing, dashboard care, upholstery shampooing and exterior detailing for a fresh look.",
    ctaLabel: "Book Service",
  },
  // {
  //   slug: "wheel-alignment",
  //   title: "Wheel Alignment & Balancing",
  //   shortDesc: "Smooth drive & tyre protection.",
  //   description:
  //     "Computerized wheel alignment and balancing for better control, mileage and tyre life.",
  //   ctaLabel: "Book Service",
  // },
  // {
  //   slug: "ac-service",
  //   title: "AC Service",
  //   shortDesc: "Cooling system diagnostics & repair.",
  //   description:
  //     "AC gas refill, leak detection, cooling coil cleaning and full air-conditioning inspection.",
  //   ctaLabel: "Book Service",
  // },
  {
    slug: "pickup-drop",
    title: "Pickup & Drop",
    shortDesc: "Convenient doorstep service.",
    description:
      "We pick up your car from your home or office and deliver it back after servicing for maximum convenience.",
    ctaLabel: "Book Service",
  },
];
