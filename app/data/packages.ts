export type PackageCategory = "package" | "amc" | "membership";

export type VehicleType = "Hatchback" | "Sedan" | "SUV" | "Luxury";

export interface PackageItem {
  slug: string;
  category: PackageCategory;
  title: string;
  subtitle?: string;

  duration?: string;

  petrolActualPrice?: number;
  petrolOfferPrice?: number;

  dieselActualPrice?: number;
  dieselOfferPrice?: number;

  actualPrice?: number;
  offerPrice?: number;

  vehicleTypes?: VehicleType[];

  shortDesc: string;
  description: string;

  includes: string[];
}

/* ================================
   FINAL OFFICIAL CLIENT DATA
================================ */

export const packages: PackageItem[] = [
  // ================= PACKAGES =================

  {
    slug: "basic-package",
    category: "package",
    title: "Basic Package",
    subtitle: "Essential Car Care",
    petrolActualPrice: 6000,
    petrolOfferPrice: 3999,
    dieselOfferPrice: 5499,
    vehicleTypes: ["Hatchback", "Sedan", "SUV", "Luxury"],
    shortDesc:
      "Routine maintenance package to keep your petrol, CNG or diesel car healthy and efficient.",
    description:
      "Give your car the essential care it deserves with our Basic Service Package. Designed for routine maintenance and preventive care to keep your vehicle performing at its best.",
    includes: [
      "PMS Check-up (Periodic Maintenance Service)",
      "Engine Oil & Oil Filter Replacement",
      "AC Filter & Air Filter Cleaning",
      "Coolant, Brake Oil, Windshield Washer Top-Up",
      "Throttle Body & Injector Cleaning",
      "Car Scanning",
      "Clutch Operation & Underbody Inspection",
      "Suspension & Brake Check & Spark Plug Check",
      "Electrical Check-Up",
      "AC Check-up",
      "Engine Tuning",
      "Exterior Wash & Vacuum Cleaning",
      "And Many More...",
    ],
  },

  {
    slug: "premium-package",
    category: "package",
    title: "Premium Package",
    subtitle: "Advanced Performance Care",
    petrolActualPrice: 9000,
    petrolOfferPrice: 5999,
    vehicleTypes: ["Hatchback", "Sedan", "SUV", "Luxury"],
    shortDesc:
      "Comprehensive service package delivering advanced maintenance, safety checks and premium car care.",
    description:
      "Experience unmatched performance with our Premium Service Package — designed for petrol & CNG cars that demand top-level care and protection.",
    includes: [
      "PMS Check-up (Periodic Maintenance Service)",
      "Engine Oil & Oil Filter Replacement",
      "AC Filter & Air Filter Replacement",
      "Coolant, Brake Oil, Windshield Replacement",
      "Wheel Alignment, Balancing & Tyre Rotation",
      "Car Scanning",
      "Throttle Body & Injector Cleaning",
      "Clutch Operation & Underbody Inspection",
      "Suspension & Brake Check & Spark Plug Check",
      "Electrical Check-Up",
      "AC Check-up",
      "Engine Tuning",
      "Exterior Wash & Vacuum Cleaning",
      "And Many More...",
    ],
  },

  {
    slug: "ceramic-coating-offer",
    category: "package",
    title: "Ceramic Coating Offer",
    subtitle: "Limited Time Premium Protection",
    actualPrice: 16500,
    offerPrice: 9999,
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

  // ================= AMC =================

  {
    slug: "gold-amc",
    category: "amc",
    title: "Gold AMC",
    duration: "1 Year",
    actualPrice: 5999,
    offerPrice: 1999,
    shortDesc: "Essential annual care plan for worry-free ownership.",
    description:
      "Gold AMC provides cost-effective annual coverage with two complete service cycles ensuring smooth performance.",
    includes: [
      "2 PMS Services",
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
    actualPrice: 7999,
    offerPrice: 2999,
    shortDesc: "Extended protection with enhanced service benefits.",
    description:
      "Platinum AMC includes three full service cycles and brake disc cutting for superior maintenance.",
    includes: [
      "3 PMS Services",
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
    actualPrice: 11999,
    offerPrice: 4999,
    shortDesc: "Ultimate long-term protection plan.",
    description:
      "Diamond AMC offers four service cycles with brake disc cutting and headlight restoration.",
    includes: [
      "4 PMS Services",
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

  // ================= MEMBERSHIP =================

  {
    slug: "elite-care",
    category: "membership",
    title: "Elite Care Membership",
    duration: "3 Years",
    actualPrice: 2999,
    offerPrice: 499,
    shortDesc: "Affordable long-term membership with complimentary benefits.",
    description:
      "Elite Care Membership gives yearly complimentary services and exclusive savings across services and detailing.",
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
    actualPrice: 4999,
    offerPrice: 999,
    shortDesc: "Premium membership with AMC discounts and extra savings.",
    description:
      "Advance Care Membership offers higher complimentary value, AMC discounts and premium ownership perks.",
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
];
