import { createContext } from "react";
import type { BuyListContentType } from "./type";

export const BuyListContext = createContext<BuyListContentType>({
  buyList: [],
  setBuyList: () => {},
  removeFromBuyList: () => {}
});