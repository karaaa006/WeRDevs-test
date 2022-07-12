import { UAH_EUR, UAH_PLN, UAH_USD } from "../utils/consts";
import { UahEurTab } from "./UahEurTab";
import { UahPlnTab } from "./UahPlnTab";
import { UahUsdTab } from "./UahUsdTab";

export const routes = [
  { path: UAH_USD, Component: UahUsdTab },
  { path: UAH_EUR, Component: UahEurTab },
  { path: UAH_PLN, Component: UahPlnTab },
];
