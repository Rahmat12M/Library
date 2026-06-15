import type { bookType } from "../../../types/bookType";

export type ReadListContentType = {
  readList: string[];
  setReadList: React.Dispatch<React.SetStateAction<string[]>>,
  removeFromReadList: (book: bookType) => void
}