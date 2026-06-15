import { createContext } from "react";
import type { ReadListContentType } from "./type";

export const ReadListContext = createContext<ReadListContentType>({
  readList: [],
  setReadList: () => {},
  removeFromReadList: () => {}
});