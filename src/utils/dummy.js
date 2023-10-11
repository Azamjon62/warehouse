import { home, tables, creditcard, config } from "../assets/images";
export const links = [
  {
    title: "Dashboard",
    icon: home,
  },
  {
    title: "Product",
    icon: tables,
    dropdown: [
      {
        title: "Products",
      },
      {
        title: "Add products",
      },
    ],
  },
  {
    title: "Billing",
    icon: creditcard,
  },
  {
    title: "RTL",
    icon: config,
  },
];
