import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Components/header/Navbar";
import CartSidebar from "./Components/header/CartSidebar";
import AppRoutes from "./AppRoutes";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar openCart={() => setCartOpen(true)} />

      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
