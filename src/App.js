import React, { useState } from "react";
import Cart from "../src/components/Cart/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCardIsShown] = useState(false);
  const showCartHandler = () => {
    setCardIsShown(true);
  };
  const hideCartHandler = () => {
    setCardIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onclose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
