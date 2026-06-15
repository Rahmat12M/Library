export type BuyListContentType = {
  buyList: string[];
  setBuyList: React.Dispatch<React.SetStateAction<string[]>>,
  removeFromBuyList: (title: string) => void
}