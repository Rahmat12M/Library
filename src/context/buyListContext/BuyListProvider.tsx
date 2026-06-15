import { type ReactNode } from "react";
import { BuyListContext } from "./BuyListContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export function BuyListProvider({ children }: { children: ReactNode }) {
  const [buyList, setBuyList] = useLocalStorage<string[]>("buyList", []);

  const removeFromBuyList = (book: string) => {
    const newBuyList: string[] = buyList.filter((title) => title !== book);
    setBuyList(newBuyList);
  };

  return (
    <BuyListContext.Provider value={{ buyList, setBuyList, removeFromBuyList }}>
      {children}
    </BuyListContext.Provider>
  );
}
