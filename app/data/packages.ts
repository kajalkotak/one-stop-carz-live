//

export type PackageCategory = "package" | "amc" | "membership";

export type VehicleType = "Hatchback" | "Sedan" | "SUV" | "Luxury";

export interface PackageItem {
  slug: string;
  category: PackageCategory;
  title: string;
  subtitle?: string;
  duration?: string;

  petrolPrice?: number;
  dieselPrice?: number;
  fixedPrice?: number;

  vehicleTypes?: VehicleType[];

  shortDesc: string;
  description: string;

  includes: string[];
}

/* ================================
   OFFICIAL DATA FROM ZIP FILE
================================ */

export const packages: PackageItem[] = [
  // ---------------- PACKAGES ----------------
  {
    slug: "basic-package",
    category: "package",
    title: "Basic Package",
    subtitle: "Complete preventive maintenance",
    petrolPrice: 3999,
    dieselPrice: 5499,
    vehicleTypes: ["Hatchback", "Sedan", "SUV"],
    shortDesc: "Essential maintenance package for smooth daily driving.",
    description:
      "Includes PMS service, engine oil replacement, oil & air filter cleaning, AC check-up, scanning, suspension check and complimentary wash.",
    includes: [
      "Preventive Maintenance Service (PMS)",
      "Engine Oil Replacement",
      "Oil Filter Cleaning",
      "Air Filter Cleaning",
      "AC Check-up",
      "Scanning",
      "Suspension Check",
      "Complimentary Car Wash",
    ],
  },

  {
    slug: "premium-package",
    category: "package",
    title: "Premium Package",
    subtitle: "Advanced servicing & inspection",
    petrolPrice: 5999,
    vehicleTypes: ["Hatchback", "Sedan", "SUV", "Luxury"],
    shortDesc: "Advanced servicing with alignment and tyre rotation.",
    description:
      "Premium maintenance package including wheel alignment & balancing, tyre rotation, AC diagnostics and complete mechanical inspection.",
    includes: [
      "Preventive Maintenance Service",
      "Wheel Alignment",
      "Wheel Balancing",
      "Tyre Rotation",
      "AC Diagnostics",
      "Complete Inspection",
    ],
  },

  // ---------------- AMC ----------------
  {
    slug: "gold-amc",
    category: "amc",
    title: "Gold AMC",
    duration: "1 Year",
    fixedPrice: 1999,
    shortDesc: "Affordable annual maintenance coverage.",
    description:
      "Gold AMC includes 2 PMS services, wheel alignment and AC check-ups during the validity period.",
    includes: ["2 PMS Services", "2 Wheel Alignments", "2 AC Check-ups"],
  },

  {
    slug: "platinum-amc",
    category: "amc",
    title: "Platinum AMC",
    duration: "1.5 Years",
    fixedPrice: 2999,
    shortDesc: "Extended AMC with brake disc cutting.",
    description:
      "Platinum AMC offers 3 PMS services, brake disc cutting and priority servicing benefits.",
    includes: ["3 PMS Services", "Brake Disc Cutting", "Priority Service"],
  },

  {
    slug: "diamond-amc",
    category: "amc",
    title: "Diamond AMC",
    duration: "2 Years",
    fixedPrice: 4999,
    shortDesc: "Premium AMC with headlight restoration.",
    description:
      "Diamond AMC provides 4 PMS services, headlight restoration and express servicing lanes.",
    includes: ["4 PMS Services", "Headlight Restoration", "Express Servicing"],
  },

  // ---------------- MEMBERSHIP ----------------
  {
    slug: "elite-care",
    category: "membership",
    title: "Elite Care",
    duration: "3 Years",
    fixedPrice: 499,
    shortDesc: "Basic long-term membership benefits.",
    description:
      "Elite Care membership gives complimentary annual services and discount benefits.",
    includes: [
      "Complimentary Service Every Year",
      "10% Discount on Services",
      "Priority Support",
    ],
  },

  {
    slug: "advance-care",
    category: "membership",
    title: "Advance Care",
    duration: "4 Years",
    fixedPrice: 999,
    shortDesc: "Premium membership with AMC discounts.",
    description:
      "Advance Care offers more complimentary benefits and 20% off on AMC plans.",
    includes: [
      "Complimentary Services",
      "20% Discount on AMC",
      "Priority Booking",
    ],
  },

  //  new ceramic coating package

  {
    slug: "ceramic-coating-offer",
    category: "package",
    title: "Ceramic Coating Offer",
    subtitle: "Limited Time Premium Protection",
    fixedPrice: 9999,
    shortDesc:
      "Premium ceramic coating for any make & model with Elite Care membership and protection combo absolutely free.",
    description:
      "One Stop Carz Vadodara brings a limited-time Ceramic Coating offer at just ₹9,999 + GST for any car size or model. Includes a FREE 3 Year Elite Care Membership worth ₹6000 and a Complete Protection Combo (Glass, Headlight & Engine coating) worth ₹3500.",
    includes: [
      "Premium Ceramic Coating",
      "3 Year Elite Care Membership (FREE)",
      "Glass Coating (FREE)",
      "Headlight Coating (FREE)",
      "Engine Coating (FREE)",
      "Mirror Finish Gloss",
      "UV Protection",
      "Hydrophobic Water Repellency",
    ],
  },
];
