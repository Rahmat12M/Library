import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ReadListProvider } from "./context/readListContext/ReadListProvider";
import { BuyListProvider } from "./context/buyListContext/BuyListProvider";
import { AuthProvider } from "./context/authContext/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <ReadListProvider>
          <BuyListProvider>
            <RouterProvider router={router} />
          </BuyListProvider>
        </ReadListProvider>
      </AuthProvider>
    </>
  );
}

export default App;
