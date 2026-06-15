import { ReadListContext } from "./ReadListContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import type { ReactNode } from "react";
import type { bookType } from "../../../types/bookType";

export function ReadListProvider({ children }: {children: ReactNode}) {
  const [readList, setReadList] = useLocalStorage<string[]>('readList', []);

  const removeFromReadList = (book: bookType) => {
    const newReadList: string[] = readList.filter(
      (isbn) => isbn !== book?.isbn
    );
    setReadList(newReadList);
  };

  return (
    <ReadListContext.Provider value={{readList, setReadList, removeFromReadList}}>{children}</ReadListContext.Provider>
  );
}