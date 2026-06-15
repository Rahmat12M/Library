import { useContext, useRef, useState } from "react";
import style from "./BuyList.module.css";
import { BuyListContext } from "../context/buyListContext/BuyListContext";

function BuyList() {
  const { buyList, setBuyList, removeFromBuyList } = useContext(BuyListContext);
  const [inpValue, setInpValue] = useState("");
  const inpRef = useRef<HTMLInputElement>(null);

  const addToBuyList = () => {
    if (!inpValue.trim()) return;

    const newBuyList: string[] = [...buyList, inpValue];
    setBuyList(newBuyList);
    setInpValue("");
    inpRef.current?.focus();
  };

  return (
    <>
      <div className={style.buyList}>
        <h2>Books to Read</h2>

        <p>These are the bookson my shopping list:</p>
        {buyList.length > 0 && (
          <>
            <ul>
              {buyList.map((book) => (
                <li key={book}>
                  {book}{" "}
                  <button type="button" onClick={() => removeFromBuyList(book)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        <p>
          <input
            ref={inpRef}
            type="text"
            value={inpValue}
            onChange={(e) => setInpValue(e.target.value)}
            onFocus={() => setInpValue("")}
          />
          <button type="button" onClick={addToBuyList}>
            Add
          </button>
        </p>
      </div>
    </>
  );
}

export default BuyList;
