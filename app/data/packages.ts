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
  shortDesc: "Essential care package for worry-free car maintenance.",
  description:
    "Gold AMC is designed for cost-effective annual car care with two complete service cycles ensuring smooth performance throughout the year.",
  includes: [
    "2 PMS (Periodic Maintenance Services)",
    "2 Wheel Alignments",
    "2 Wheel Balancings",
    "2 Tyre Rotations",
    "2 AC Check-ups",
    "2 Electrical Check-ups",
    "2 Brake Check-ups",
    "2 Wiper Washer Fluid Top-ups",
    "2 Oil Filter Replacements",
  ],
},

{
  slug: "platinum-amc",
  category: "amc",
  title: "Platinum AMC",
  duration: "1.5 Years",
  fixedPrice: 2999,
  shortDesc: "Enhanced protection with extended service coverage.",
  description:
    "Platinum AMC provides extended 1.5-year coverage with three full service cycles, added brake disc cutting and superior maintenance benefits.",
  includes: [
    "3 PMS (Periodic Maintenance Services)",
    "3 Wheel Alignments",
    "3 Wheel Balancings",
    "3 Tyre Rotations",
    "3 AC Check-ups",
    "3 Electrical Check-ups",
    "3 Brake Check-ups",
    "3 Wiper Washer Fluid Top-ups",
    "3 Oil Filter Replacements",
    "1 Brake Disc Cutting",
  ],
},

{
  slug: "diamond-amc",
  category: "amc",
  title: "Diamond AMC",
  duration: "2 Years",
  fixedPrice: 4999,
  shortDesc: "Ultimate long-term care with maximum benefits.",
  description:
    "Diamond AMC is a premium two-year protection plan offering four full service cycles, headlight restoration and brake disc cutting for ultimate peace of mind.",
  includes: [
    "4 PMS (Periodic Maintenance Services)",
    "4 Wheel Alignments",
    "4 Wheel Balancings",
    "4 Tyre Rotations",
    "4 AC Check-ups",
    "4 Electrical Check-ups",
    "4 Brake Check-ups",
    "4 Wiper Washer Fluid Top-ups",
    "4 Oil Filter Replacements",
    "2 Brake Disc Cutting",
    "2 Headlight Restoration",
  ],
},

  // ---------------- MEMBERSHIP ----------------

{
  slug: "elite-care",
  category: "membership",
  title: "Elite Care Membership",
  duration: "3 Years",
  fixedPrice: 499,
  shortDesc:
    "Premium long-term membership with complimentary services and exclusive discounts.",
  description:
    "Elite Care Membership gives you 3 years of worry-free car ownership with complimentary yearly services and special savings on mechanical, detailing and AMC plans.",
  includes: [
    "General Check-up every year",
    "AC Filter & Air Filter Cleaning",
    "Brake Oil & Coolant Top-up",
    "Denting & Painting Estimation",
    "Insurance Guideline",
    "Windshield Washer Replacement",
    "10% Discount on Every Service",
    "Exclusive Discounts on Ceramic / Teflon / Body Polish",
    "Track Service History",
    "Access Latest Offers",
    "Manage Car Data",
    "Discount on Labour Charges",
  ],
},

{
  slug: "advance-care",
  category: "membership",
  title: "Advance Care Membership",
  duration: "4 Years",
  fixedPrice: 999,
  shortDesc:
    "Ultimate long-term membership with higher complimentary value and AMC discounts.",
  description:
    "Advance Care Membership offers 4 years of premium protection with complimentary yearly services, 20% off on AMC purchase and ongoing savings on car care.",
  includes: [
    "General Check-up every year",
    "AC Filter & Air Filter Cleaning",
    "Brake Oil & Coolant Top-up",
    "Denting & Painting Estimation",
    "Insurance Guideline",
    "Windshield Washer Replacement",
    "Car Scanning",
    "10% Discount on Every Service",
    "20% OFF on AMC Purchase",
    "Exclusive Discounts on Ceramic / Teflon / Body Polish",
    "Track Service History",
    "Access Latest Offers",
    "Manage Car Data",
    "Discount on Labour Charges",
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
