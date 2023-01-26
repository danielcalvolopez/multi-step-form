import ArcadeLogo from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/icon-arcade.svg";
import AdvancedLogo from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/icon-advanced.svg";
import ProLogo from "/Users/daniel/Desktop/CODE/multi-step-form/src/assets/images/icon-pro.svg";

export const plans = [
  {
    name: "Arcade",
    pricePerMonth: 9,
    pricePerYear: 90,
    logo: ArcadeLogo,
  },
  {
    name: "Advanced",
    pricePerMonth: 12,
    pricePerYear: 120,
    logo: AdvancedLogo,
  },
  {
    name: "Pro",
    pricePerMonth: 15,
    pricePerYear: 150,
    logo: ProLogo,
  },
];

export const planOptions = {
  arcade: {
    name: "Arcade",
    price: {
      month: 9,
      year: 90,
    },
    pricePerMonth: 9,
    pricePerYear: 90,
    logo: ArcadeLogo,
  },
  advanced: {
    name: "Advanced",
    pricePerMonth: 12,
    pricePerYear: 120,
    logo: AdvancedLogo,
  },
  pro: {
    name: "Pro",
    pricePerMonth: 15,
    pricePerYear: 150,
    logo: ProLogo,
  },
};

export const tariff = {
  monthly: "mo",
  yearly: "yr",
};
